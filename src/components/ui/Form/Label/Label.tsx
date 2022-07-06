import React from 'react';

import { Label as RadixLabel } from '@radix-ui/react-label';

import clsx from 'clsx';

import styles from './label.module.css';

import type { LabelProps as RadixLabelProps } from '@radix-ui/react-label';

interface LabelProps extends RadixLabelProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white' | 'black';
  children: React.ReactNode;
}

/**
 * Label
 * @param AlertProps
 * @returns <Label>label text</Label>
 */
export const Label: React.FC<LabelProps> = ({
  htmlFor,
  size = 'md',
  color = 'black',
  children,
}) => {
  const sizeClass = styles[size];
  const colorClass = styles[color];
  return (
    <RadixLabel
      className={clsx(styles.label, sizeClass, colorClass)}
      htmlFor={htmlFor}
      asChild={true}
    >
      <label>{children}</label>
    </RadixLabel>
  );
};

Label.displayName = 'Label';
