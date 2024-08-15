'use client';
import {
  motion,
  AnimatePresence,
  Transition,
  Variants,
  Variant,
  MotionConfig,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import React, { createContext, useContext, useState, ReactNode } from 'react';

const AccordionContext = createContext(
  undefined
);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
}

function AccordionProvider({ children, variants }) {
  const [expandedValue, setExpandedValue] = useState(null);

  const toggleItem = (value) => {
    setExpandedValue(expandedValue === value ? null : value);
  };

  return (
    <AccordionContext.Provider value={{ expandedValue, toggleItem, variants }}>
      {children}
    </AccordionContext.Provider>
  );
}

function Accordion({
  children,
  className,
  transition,
  variants,
}) {
  return (
    <MotionConfig transition={transition}>
      <div className={cn('relative', className)} aria-orientation='vertical'>
        <AccordionProvider variants={variants}>{children}</AccordionProvider>
      </div>
    </MotionConfig>
  );
}

function AccordionItem({ value, children, className }) {
  const { expandedValue, toggleItem } = useAccordion();
  const isExpanded = value === expandedValue;

  return (
    <div
      className={cn('overflow-hidden', className)}
      {...(isExpanded ? { 'data-expanded': '' } : {})}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          expanded: isExpanded,
          onToggle: () => toggleItem(value),
        })
      )}
    </div>
  );
}

function AccordionTrigger({
  children,
  className,
  onToggle,
  expanded,
}) {
  return (
    <button
      onClick={onToggle}
      aria-expanded={expanded}
      type='button'
      className={cn('group', className)}
      {...(expanded ? { 'data-expanded': '' } : {})}
    >
      {children}
    </button>
  );
}

function AccordionContent({
  children,
  expanded,
  className,
}) {
  const { variants } = useAccordion();
  const BASE_VARIANTS = {
    expanded: { height: 'auto' },
    collapsed: { height: 0 },
  };

  const combinedVariants = {
    expanded: { ...BASE_VARIANTS.expanded, ...variants?.expanded },
    collapsed: { ...BASE_VARIANTS.collapsed, ...variants?.collapsed },
  };

  return (
    <AnimatePresence>
      {expanded && (
        <motion.div
          initial='collapsed'
          animate='expanded'
          exit='collapsed'
          variants={combinedVariants}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
