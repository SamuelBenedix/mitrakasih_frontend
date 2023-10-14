import { cn } from '@/lib/utils/utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
  smallText?: boolean;
  className?: string;
}

export default function Quote(props: Props) {
  const { children, smallText, className } = props;

  if (smallText) {
    return (
      <p className={cn('text-primary-800 text-2xl text-justify', className)}>
        {children}
      </p>
    );
  }
  return (
    <p className="text-primary-800 text-3xl py-8 text-justify">{children}</p>
  );
}
