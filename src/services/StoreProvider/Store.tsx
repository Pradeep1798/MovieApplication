import React, {createContext, useContext, useState} from 'react';

type UserContextType = {
  usernameId: string;
  emailId: string;
  language: string;
  setUsername: (username: string) => void;
  setEmailId: (email: string) => void;
  setLanguage: (language: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const StoreProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [usernameId, setUsername] = useState<string>('');
  const [emailId, setEmailId] = useState<string>('');
  const [language, setLanguage] = useState<string>('en');

  return (
    <UserContext.Provider
      value={{
        usernameId,
        emailId,
        language,
        setUsername,
        setEmailId,
        setLanguage,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const userDetails = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
