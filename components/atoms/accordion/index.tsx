"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils/utils";
import { IconPlus } from "@tabler/icons-react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-row items-center flex-1 border-y w-full data-[state=open]:text-primary-800 transition-all [&[data-state=closed]>.left-border]:animate-radix-left-border-slide-up [&[data-state=open]>.left-border]:animate-radix-left-border-slide-down [&[data-state=closed]>.left-border]:h-0 [&[data-state=open]>.left-border]:h-full",
        className,
      )}
      {...props}
    >
      <div className="left-border self-start bg-primary-800 w-1.5" />
      <div className="px-4">
        <IconPlus />
      </div>
      <h3 className="font-semibold border-l text-xl pl-4 m-4">{children}</h3>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden transition-all data-[state=open]:animate-radix-slide-down data-[state=closed]:animate-radix-slide-up",
      className,
    )}
    {...props}
  >
    <div className="p-8">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
