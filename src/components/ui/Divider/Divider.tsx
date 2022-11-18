import React from 'react';

import { Divider as AmplifyDivider } from '@aws-amplify/ui-react';

import clsx from 'clsx';

import styles from './divider.module.css';

import type { DividerProps as AmplifyDividerProps } from '@aws-amplify/ui-react';

interface DividerProps extends AmplifyDividerProps {
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
    <AmplifyDivider orientation={orientation} className={clsx(orientationClass, colorClass)} />
  );
};

Divider.displayName = 'Divider';
