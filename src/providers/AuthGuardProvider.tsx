import React, { createContext, useContext } from 'react';

export interface AuthGuardContextType {
  accessToken: string | null;
  signIn: (accessToken: string) => void;
  signOut: () => void;
}

interface AuthGuardProviderProps {
  children: React.ReactNode;
}

/**
 * AuthGuardContext
 */
const AuthGuardContext = createContext<AuthGuardContextType>({} as AuthGuardContextType);

/**
 * useAuthGuardContext
 */
export const useAuthGuardContext = (): AuthGuardContextType =>
  useContext<AuthGuardContextType>(AuthGuardContext);

/**
 * AuthGuardProvider
 * @param AuthGuardProviderProps {children: React.ReactNode}
 * @constructor
 */
export const AuthGuardProvider: React.FC<AuthGuardProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = React.useState<string | null>(null);
  /**
   * signIn
   * @param accessToken {string} access token
   */
  const signIn = (accessToken: string) => {
    setAccessToken(accessToken);
  };
  /**
   * signOut
   */
  const signOut = () => {
    setAccessToken(null);
  };

  return (
    <AuthGuardContext.Provider value={{ accessToken, signIn, signOut }}>
      {children}
    </AuthGuardContext.Provider>
  );
};
