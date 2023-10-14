import React from 'react';
import Paragraph from '@/components/atoms/paragraph';

interface Props {
  paragraphs: React.ReactNode[];
  size?: 'md' | 'lg' | 'xs';
}

export default function Paragraphs(props: Props) {
  const { paragraphs, size } = props;

  return (
    <div className="space-y-4">
      {paragraphs.map((item, key) => (
        <Paragraph size={size} key={key}>
          {item}
        </Paragraph>
      ))}
    </div>
  );
}
