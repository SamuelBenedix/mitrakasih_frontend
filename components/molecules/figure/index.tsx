import Image from 'next/image';
import Link from 'next/link';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import React from 'react';
import { cn } from '@/lib/utils/utils';

interface Props {
  color?: 'black' | 'blue';
  size?: 'sm' | 'md';
  title: string;
  description?: string;
  linkLabel?: string;
  linkHref?: string;
  numberValue?: string;
  image: string;
  className?: string;
}

export default function Figure(props: Props) {
  const {
    color = 'black',
    size = 'md',
    title,
    description,
    linkHref,
    linkLabel,
    numberValue,
    image,
    className,
  } = props;

  return (
    <figure
      className={cn(
        'relative group overflow-hidden',
        size === 'sm' && 'h-[16rem]',
        size === 'md' && 'h-[28rem]',
        className
      )}
    >
      <Image
        src={image}
        alt={title}
        width="600"
        height="600"
        className="object-cover h-full group-hover:scale-125 transition-all duration-1000"
      />
      <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
      <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
        {numberValue && <p className="font-bold text-6xl">{numberValue}</p>}

        <h3 className="font-bold text-2xl mb-12 group-hover:mb-4">{title}</h3>
        <div className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
          {description && <p className="mb-4">{description}</p>}
        </div>
      </figcaption>
    </figure>
  );
}
