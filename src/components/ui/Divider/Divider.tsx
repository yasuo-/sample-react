import React from 'react';

import * as Separator from '@radix-ui/react-separator';

import clsx from 'clsx';

import styles from './divider.module.css';

import type { SeparatorProps } from '@radix-ui/react-separator';

interface DividerProps extends SeparatorProps {
  color?: 'primary' | 'secondary' | 'white' | 'black';
}

/**
 * Divider
 * @param DividerProps
 * @example
 * ```
 * <Divider orientation={'horizontal'} />
 *
 * <Divider orientation={'vertical'} />
 * ```
 * @returns <Divider />
 */
export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  color = 'black',
}) => {
  const orientationClass = styles[orientation];
  const colorClass = styles[color];
  return (
    <Separator.Root orientation={orientation} className={clsx(orientationClass, colorClass)} />
  );
};

Divider.displayName = 'Divider';
