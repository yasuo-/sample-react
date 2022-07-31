import React from 'react';

import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { Head } from './Head';

import { SITE_TITLE } from '@/config/constants';

const title = 'Hello World';
const titleSuffix = SITE_TITLE;
const description = 'This is a description';

describe('Head Components', () => {
  it('should add proper page title and meta description', async () => {
    render(
      <HelmetProvider>
        <Head title={title} description={description} />
      </HelmetProvider>
    );
    await waitFor(() => expect(document.title).toEqual(`${title} | ${titleSuffix}`));

    const metaDescription = document.querySelector("meta[name='description']");

    expect(metaDescription?.getAttribute('content')).toEqual(description);
  });
});
