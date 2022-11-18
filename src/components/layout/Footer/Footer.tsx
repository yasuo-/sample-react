import React from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PATH } from '@/routes/path';

/**
 * Footer
 */
export const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const copyRightName = '....inc';
  const copayRightYear = new Date().getFullYear();

  const linkStyle = 'text-xs font-light tracking-tighter text-white/35 hover:text-white/100';
  return (
    <footer className="mx-auto mt-60 w-full bg-mine-shaft-800">
      <div className="flex justify-center justify-items-center py-2.5">
        <div>
          <Link to={PATH.TERMS} className={linkStyle}>
            {t('footer.terms')}
          </Link>
        </div>
        <div className="mx-2.5">
          <Link to={PATH.PRIVACY} className={linkStyle}>
            {t('footer.privacy')}
          </Link>
        </div>
        <div>
          <Link to={PATH.CONTACT} className={linkStyle}>
            {t('footer.contact')}
          </Link>
        </div>
      </div>
      <div className="flex justify-center justify-items-center pb-2.5">
        <span className="text-xs font-light tracking-tighter text-white/35">
          &copy;{copyRightName} {copayRightYear}
        </span>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
