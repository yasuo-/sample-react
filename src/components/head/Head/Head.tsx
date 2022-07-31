import React from 'react';

import { Helmet } from 'react-helmet-async';

import { SITE_TITLE } from '@/config/constants';

type HeadProps = {
  title?: string;
  description?: string;
};
/**
 * Head
 * @param title [optional] - defaults to SITE_TITLE
 * @param description [optional] - description
 * @constructor
 */
export const Head: React.FC<HeadProps> = ({ title = '', description = '' }) => {
  return (
    <Helmet title={title ? `${title} | ${SITE_TITLE}` : undefined} defaultTitle={SITE_TITLE}>
      <meta name="description" content={description} />
    </Helmet>
  );
};
