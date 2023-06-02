import React, { ComponentProps } from "react";
import clsx from "clsx";
import Image from "next/image";

function Card(props: ComponentProps<"div">) {
  return (
    <div className={clsx("max-w-xs rounded-md shadow-md", props.className)}>
      {props.children}
    </div>
  );
}

function CardBody(props: ComponentProps<"div">) {
  return <div className={clsx("p-4", props.className)}>{props.children}</div>;
}

interface CardTitleProps extends ComponentProps<"h3"> {
  value: string;
}

function CardTitle(props: CardTitleProps) {
  return (
    <h3 className={clsx("text-lg font-bold", props.className)}>
      {props.value}
    </h3>
  );
}

interface CardDescriptionProps extends ComponentProps<"p"> {
  value: string;
}

function CardDescription(props: CardDescriptionProps) {
  return <p>{props.value}</p>;
}

interface CardImageProps {
  src: string;
  alt: string;
}

function CardImage(props: CardImageProps) {
  return (
    <div className="relative h-48 w-full">
      <Image
        src={props.src}
        alt={props.alt}
        fill
        className="rounded-t-md object-cover"
      />
    </div>
  );
}

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Image = CardImage;

export default Card;
