import React from 'react';

import { Loader as AwsLoader, type LoaderProps as AwsLoaderProps } from '@aws-amplify/ui-react';

type LoaderProps = AwsLoaderProps;

export const Loader: React.FC<LoaderProps> = ({ size = 'large', isDeterminate, percentage }) => (
  <AwsLoader size={size} percentage={percentage} isDeterminate={isDeterminate} />
);

Loader.displayName = 'Loader';
