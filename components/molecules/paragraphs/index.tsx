import React from "react";
import Paragraph from "@/components/atoms/paragraph";

interface Props {
  paragraphs: React.ReactNode[];
}

export default function Paragraphs(props: Props) {
  const { paragraphs } = props;

  return (
    <div className="space-y-4">
      {paragraphs.map((item, key) => (
        <Paragraph key={key}>{item}</Paragraph>
      ))}
    </div>
  );
}
