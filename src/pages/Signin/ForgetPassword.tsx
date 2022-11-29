import { Flex, Heading, View } from '@aws-amplify/ui-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { SignInWithPasswordFormFeature } from '@/features/auth/Signin';
import { PATH } from '@/routes/path';

const ForgetPassword = () => {
  const { t } = useTranslation('auth');

  return (
    <Flex direction="column">
      <Heading level={1} className={'text-xl font-semibold text-black/80'}>
        {t('signin.title')}
      </Heading>
      <SignInWithPasswordFormFeature />
      <View as="div" className="mt-5 text-center">
        <Link to={PATH.SIGNUP}>{t('signin.signup-link')}</Link>
      </View>
    </Flex>
  );
};

export default ForgetPassword;
