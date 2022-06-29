import React from 'react';

import { Link } from 'react-router-dom';

import styles from './section.module.css';

interface SectionProps {
  sectionTitle: string;
  to: string;
  linkText?: string;
  children: React.ReactNode;
}

/**
 * Section
 * @param SectionProps
 * @constructor
 */
export const Section: React.FC<SectionProps> = ({
  sectionTitle = '',
  to = '#',
  linkText,
  children,
}) => (
  <section className={styles.sectionBox}>
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <Link to={to} className={styles.headerLogo}>
        {linkText}
      </Link>
    </div>
    {children}
  </section>
);

Section.displayName = 'Section';
