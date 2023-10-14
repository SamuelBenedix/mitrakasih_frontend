import React from 'react';
import { cn } from '@/lib/utils/utils';

interface Props {
  children?: React.ReactNode;
  className?: string;
  size?: 'md' | 'lg' | 'xs';
}

export default function Paragraph(props: Props) {
  const { children, className, size = 'md' } = props;

  return (
    <p
      className={cn(
        'text-gray-800',
        size === 'xs' && 'text-lg',
        size === 'md' && 'text-xl',
        size === 'lg' && 'text-2xl',
        className
      )}
    >
      {children}
    </p>
  );
}
