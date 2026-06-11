import fs from 'fs';
import path from 'path';

const testDir = path.join(process.cwd(), 'src', '__tests__');
const files = fs.readdirSync(testDir).filter(f => f.endsWith('.test.tsx'));

files.forEach(file => {
  const filePath = path.join(testDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  if (!content.includes('import type { ReactNode } from \'react\';')) {
    content = 'import type { ReactNode } from \'react\';\n' + content;
  }

  if (file === 'Scanner.test.tsx') {
    content = content.replace('waitFor, act', 'act');
  }

  content = content.replace(/({ children }: any)/g, '({ children }: { children: ReactNode })');
  content = content.replace(/({ children, \.\.\.props }: any)/g, '({ children, initial: _i, animate: _a, exit: _e, transition: _t, key: _k, whileInView: _wIV, viewport: _v, whileHover: _wH, ...props }: { children?: ReactNode; [key: string]: unknown })');
  
  content = content.replace(/\.\.\.actual as any/g, '...actual as Record<string, unknown>');

  content = content.replace(/const { initial, animate, exit, transition, key, \.\.\.rest } = props;\n\s+return <\w+ {\.\.\.rest}>{children}<\/\w+>;/g, (match) => {
    const tag = match.match(/<(\w+)/)[1];
    return `return <${tag} {...props}>{children}</${tag}>;`;
  });
  
  fs.writeFileSync(filePath, content);
});

console.log('Fixed test files!');
