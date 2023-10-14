import React from 'react';
import { cn } from '@/lib/utils/utils';

type Props = {
  title: string;
  description: string;
  linkLabel?: string;
  linkHref?: string;
  color?: 'primary' | 'white';
};

export default function SectionHeader(props: Props) {
  const {
    title,
    description,
    linkLabel,
    linkHref = '#',
    color = 'primary',
  } = props;

  return (
    <div
      className={cn(
        color === 'primary'
          ? 'text-primary-800 border-primary-800'
          : 'text-white',
        'grid grid-cols-1 md:grid-cols-5 gap-y-4 pb-20 pt-10 max-w-5xl md:space-x-10 border-t items-start'
      )}
    >
      <h2 className="text-2xl md:text-5xl font-bold col-span-2">{title}</h2>

      <p
        className={cn(
          color === 'primary' ? 'text-gray-500' : 'text-white',
          'col-span-2 md:leading-loose'
        )}
      >
        {description}
      </p>
    </div>
  );
}
