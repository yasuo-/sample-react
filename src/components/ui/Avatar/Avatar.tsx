import React from 'react';

import { Avatar as RadixAvatarRoot, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { AvatarProps as RadixAvatarProps } from '@radix-ui/react-avatar';
import clsx from 'clsx';

import styles from './avatar.module.css';

interface AvatarProps extends RadixAvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  backgroundColor?: 'primary' | 'secondary' | 'white';
  fallbackText?: string;
  delayMs?: number;
}

/**
 * Avatar
 * @param AvatarProps
 * @returns <Avatar src={src} />
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  backgroundColor = 'white',
  fallbackText = '',
  delayMs = 600,
}) => {
  const sizeClass = styles[size];
  const backgroundColorClass = styles[backgroundColor];
  return (
    <RadixAvatarRoot className={clsx(styles.avatar, sizeClass)}>
      <AvatarImage src={src} alt={alt} loading="lazy" className={styles.avatarImage} />
      <AvatarFallback
        delayMs={delayMs}
        className={clsx(styles.avatarFallback, styles.avatarFallbackText, backgroundColorClass)}
      >
        {fallbackText}
      </AvatarFallback>
    </RadixAvatarRoot>
  );
};

Avatar.displayName = 'Avatar';
