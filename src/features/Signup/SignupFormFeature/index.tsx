import { View, TextField, Button } from '@aws-amplify/ui-react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useSignupFormFeature } from './hooks/useSignupFormFeature';

import { RequiredLabel } from '@/components/ui/Form/RequiredLabel';
import { SignupFormVale } from '@/pages/Signup/Signup';

const inputClassName =
  'textinput block w-full p-2.5' +
  'border border-form-mercury-200 bg-form-mercury-200' +
  'text-black/90 text-sm rounded-2lg focus:ring-fuego-500 focus:border-fuego-500';

/**
 * SignupFormFeature
 * @returns {JSX.Element}
 */
export const SignupFormFeature = () => {
  const { t } = useTranslation('auth');
  const { isSubmitting, onSubmit } = useSignupFormFeature();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useFormContext<SignupFormVale>();

  return (
    <form className="signup" id="signup_form" onSubmit={handleSubmit(onSubmit)}>
      <View className="mb-5">
        <TextField
          label={<RequiredLabel label={t('form.email')} requiredText={t('form.required')} />}
          type="email"
          isRequired={true}
          size="small"
          width="100%"
          autoComplete={'email'}
          className={inputClassName}
          testId={'email'}
          {...register('email')}
        />
        {errors.email && <span className="text-red-600">{errors.email.message}</span>}
      </View>

      <View className="mb-5">
        <TextField
          label={<RequiredLabel label={t('form.password')} requiredText={t('form.required')} />}
          type="password"
          isRequired={true}
          size="small"
          width="100%"
          autoComplete={'new-password'}
          className={inputClassName}
          testId={'password'}
          {...register('password')}
        />
        {errors.password && <span className="text-red-600">{errors.password.message}</span>}
      </View>

      <View className="mb-5">
        <TextField
          label={
            <RequiredLabel
              label={t('form.password-confirmation')}
              requiredText={t('form.required')}
            />
          }
          type="password"
          isRequired={true}
          size="small"
          width="100%"
          className={inputClassName}
          testId={'password-confirmation'}
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <span className="text-red-600">{errors.confirmPassword.message}</span>
        )}
      </View>

      <View className="flex flex-col justify-center items-center mt-10">
        <Button
          isFullWidth
          isLoading={isSubmitting}
          size="small"
          loadingText="submitting"
          type={'submit'}
        >
          {t('form.signup-submit')}
        </Button>
      </View>
    </form>
  );
};
