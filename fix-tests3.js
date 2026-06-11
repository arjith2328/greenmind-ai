import fs from 'fs';
import path from 'path';

const testDir = path.join(process.cwd(), 'src', '__tests__');
const files = fs.readdirSync(testDir).filter(f => f.endsWith('.test.tsx'));

files.forEach(file => {
  const filePath = path.join(testDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace the parameter destructuring with simple props
  content = content.replace(/\(\{ children, initial: _i, animate: _a, exit: _e, transition: _t, key: _k, whileInView: _wIV, viewport: _v, whileHover: _wH, \.\.\.props \}/g, '({ children, ...props }');

  // Add the delete statements before the return
  content = content.replace(/return <(\w+) \{\.\.\.props\}>\{children\}<\/\w+>;/g, (match, tag) => {
    return `const validProps = { ...props };
        delete validProps.initial;
        delete validProps.animate;
        delete validProps.exit;
        delete validProps.transition;
        delete validProps.key;
        delete validProps.whileInView;
        delete validProps.viewport;
        delete validProps.whileHover;
        return <${tag} {...validProps}>{children}</${tag}>;`;
  });
  
  fs.writeFileSync(filePath, content);
});

console.log('Fixed test files unused vars!');
