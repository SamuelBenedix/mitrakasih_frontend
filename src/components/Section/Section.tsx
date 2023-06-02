import clsx from "clsx";
import React, { ComponentProps, ElementType } from "react";

interface SectionTitleProps extends ComponentProps<"h2"> {
  value: string;
}

function Section(props: ComponentProps<"section">) {
  return <section {...props}>{props.children}</section>;
}

function SectionTitle(props: SectionTitleProps) {
  return (
    <h2 {...props} className={clsx("text-4xl font-bold", props.className)}>
      {props.value}
    </h2>
  );
}

Section.Title = SectionTitle;

export default Section;
