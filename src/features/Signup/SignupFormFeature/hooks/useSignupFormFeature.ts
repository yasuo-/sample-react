import { useState } from 'react';

import { SignupFormVale } from '@/pages/Signup/Signup';
import { awsAuthService } from '@/services/aws';

export const useSignupFormFeature = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const onSubmit = async (data: SignupFormVale) => {
    setIsSubmitting(true);
    const body = {
      username: data.email,
      password: data.password,
    };
    try {
      await awsAuthService.signUp(body);
    } catch (e) {
      console.error(e);
      // @ts-ignore
      setError(e.message);
    }
    setIsSubmitting(false);
  };

  return {
    isSubmitting,
    error,
    onSubmit,
  };
};
