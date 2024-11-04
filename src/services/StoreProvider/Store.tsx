import React, {createContext, useContext, useState} from 'react';
import {View} from 'react-native';

type UserContextType = {
  usernameId: string;
  emailId: string;
  language: string;
  isDarkTheme: boolean;
  toggleTheme: () => void;
  setUsernameId: (username: string) => void;
  setEmailId: (email: string) => void;
  setLanguage: (language: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const StoreProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [usernameId, setUsernameId] = useState<string>('');
  const [emailId, setEmailId] = useState<string>('');
  const [language, setLanguage] = useState<string>('en');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const theme = {
    background: isDarkTheme ? '#000' : '#FFF',
  };

  return (
    <UserContext.Provider
      value={{
        usernameId,
        emailId,
        language,
        isDarkTheme,
        toggleTheme,
        setUsernameId,
        setEmailId,
        setLanguage,
      }}>
      <View style={{flex: 1, backgroundColor: theme.background}}>
        {children}
      </View>
    </UserContext.Provider>
  );
};

export const userDetails = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('userDetails must be used within a UserProvider');
  }
  return context;
};
