import { Flex, Heading, View } from '@aws-amplify/ui-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { SignupFormFeature } from '@/features/auth/Signup';
import { PATH } from '@/routes/path';

const SignupIndex = () => {
  const { t } = useTranslation('auth');
  return (
    <Flex direction="column">
      <Heading level={1} className={'text-xl font-semibold text-black/80'}>
        {t('signup.title')}
      </Heading>
      <SignupFormFeature />
      <View as="div" className="mt-5 text-center">
        <Link to={PATH.SIGNIN}>{t('signup.login-link')}</Link>
      </View>
    </Flex>
  );
};

export default SignupIndex;
