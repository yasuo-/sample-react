import React from 'react';

import { Link } from 'react-router-dom';

import { PATH } from '@/routes/path';

type HeaderProps = {
  siteTitle?: string;
  src?: string;
  logoWidth?: number;
  logoHeight?: number;
};

/**
 * Header
 * @param alt
 * @param src
 * @param logoWidth
 * @param logoHeight
 * @returns Header
 */
export const Header: React.FC<HeaderProps> = ({
  siteTitle = 'logo',
  src = 'https://via.placeholder.com/150',
  logoWidth = 150,
  logoHeight = 50,
}) => {
  return (
    <header className="w-full bg-fuego-500">
      <div className="flex justify-center items-center h-10">
        <h1>
          <Link to={PATH.HOME} className="hover:opacity-75">
            <img src={src} width={logoWidth} height={logoHeight} alt={siteTitle} />
          </Link>
        </h1>
      </div>
    </header>
  );
};

Header.displayName = 'Header';
