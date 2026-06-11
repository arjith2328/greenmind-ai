import React from 'react';
import { cn } from '../../lib/utils';

export interface SliderInputProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  valueSuffix?: string;
  colorVariant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const colorStyles = {
  primary: {
    text: 'text-greenmind-primary',
    accent: 'accent-greenmind-primary',
    ring: 'focus-visible:ring-greenmind-primary',
  },
  secondary: {
    text: 'text-greenmind-secondary',
    accent: 'accent-greenmind-secondary',
    ring: 'focus-visible:ring-greenmind-secondary',
  },
  accent: {
    text: 'text-greenmind-accent',
    accent: 'accent-greenmind-accent',
    ring: 'focus-visible:ring-greenmind-accent',
  },
};

export const SliderInput: React.FC<SliderInputProps> = ({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  valueSuffix = '',
  colorVariant = 'primary',
  className,
}) => {
  const styles = colorStyles[colorVariant];

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex justify-between items-center">
        <label className="font-medium text-gray-300">{label}</label>
        <span className={cn("font-bold", styles.text)}>
          {value}{valueSuffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className={cn(
          "w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15]",
          styles.accent,
          styles.ring
        )}
      />
    </div>
  );
};
