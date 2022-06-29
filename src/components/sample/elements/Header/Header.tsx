import React from 'react';

import { Link } from 'react-router-dom';

import styles from './header.module.css';

import { Logo } from '@/components/sample/atoms';

interface HeaderProps {
  siteTitle: string;
  to?: string;
}

/**
 * Header
 * @param HeaderProps
 * @constructor
 */
export const Header: React.FC<HeaderProps> = ({ siteTitle = '', to = '/' }) => (
  <div className={styles.headerBox}>
    <header className={styles.header}>
      <Link to={to} className={styles.headerLogo}>
        <Logo title={siteTitle} />
      </Link>
    </header>
  </div>
);

Header.displayName = 'Header';
