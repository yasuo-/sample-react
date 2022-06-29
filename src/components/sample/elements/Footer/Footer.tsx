import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

/**
 * Footer
 */
export const Footer: React.FC = () => {
  const copyRightYear = new Date().getFullYear();
  return (
    <footer className={styles.footerBox}>
      <div className={styles.footerInnerBox}>
        <div className={styles.footerContent}>
          <nav className={styles.footerContentNav}>
            <Link to={'/'} className={styles.footerContentLink}>
              About
            </Link>
            <Link to={'/'} className={styles.footerContentLink}>
              Press
            </Link>
            <Link to={'/'} className={styles.footerContentLink}>
              Blog
            </Link>
          </nav>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        &copy; {copyRightYear}, ...... All rights reserved.
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
