import { Flex, Heading, View } from '@aws-amplify/ui-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { SignInStartOtpFormFeature } from '@/features/auth/Signin';
import { PATH } from '@/routes/path';

const SignInStartOtp = () => {
  const { t } = useTranslation('auth');
  return (
    <Flex direction="column">
      <Heading level={1} className={'text-xl font-semibold text-black/80'}>
        {t('signin.title')}
      </Heading>
      <SignInStartOtpFormFeature />
      <View as="div" className="mt-5 text-center">
        <Link to={PATH.SIGNUP}>{t('signin.signup-link')}</Link>
      </View>
    </Flex>
  );
};

export default SignInStartOtp;
