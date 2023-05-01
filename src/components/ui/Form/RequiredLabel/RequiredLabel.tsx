import { Text } from '@aws-amplify/ui-react';

interface RequiredLabelProps {
  label: string;
  requiredText?: string | null;
}

/**
 * RequiredLabel
 * @param label {string}
 * @param requiredText {string | undefined}
 * @returns {JSX.Element}
 */
export const RequiredLabel = ({ label, requiredText }: RequiredLabelProps) => {
  return (
    <Text className={'block mb-1 text-xs font-light text-black/90'}>
      {label}
      {requiredText && (
        <Text as="span" fontSize="0.8rem" className="text-red-600">
          ※{requiredText}
        </Text>
      )}
    </Text>
  );
};
