import CustomTextInput from 'components/CustomTextInput';
import {InputRules} from 'components/IInputRules';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import CustomButton from 'components/CustomButton';
import {logInStyles} from './LogInStyles';
import {navigate} from 'screens/root/NavigationService';
import {SCREENS} from 'screens/root/RootScreens';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const {t} = useTranslation();

  function onChangeText(type: string, text: string) {
    console.log(type, text);

    if (type === t('LOGIN.EMAIL')) {
      setEmail(text);
    } else if (type === t('LOGIN.PASSWORD')) {
      setPassword(text);
    }
  }

  const showpassword = () => {
    setHidePassword(!hidePassword);
  };

  function handleSignUp() {
    navigate(SCREENS.SIGNUP);
  }

  return (
    <View style={logInStyles.Logincontainer}>
      <Text style={logInStyles.LoginTitle}>{t('LOGIN.LOGIN')}</Text>

      <CustomTextInput
        InputRules={
          (new InputRules().InputRulesData.keyboardType = 'email-address')
        }
        Value={email}
        Title={t('LOGIN.EMAIL')}
        placeholder={t('LOGIN.USERPLACE')}
        onChangeText={onChangeText}
        LeftImg={require('assets/Email.png')}
      />
      <CustomTextInput
        InputRules={(new InputRules().InputRulesData.keyboardType = 'default')}
        placeholder={t('LOGIN.PASSPLACE')}
        Value={password}
        Title={t('LOGIN.PASSWORD')}
        secureTextentry={hidePassword}
        iconpress={showpassword}
        onChangeText={onChangeText}
        LeftImg={require('assets/Lock.png')}
        RightImg={
          hidePassword
            ? require('assets/Passwordhide.png')
            : require('assets/Passwordunhide.png')
        }
      />

      <CustomButton Title={t('LOGIN.LOGIN')} />
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={logInStyles.signupTextLink}>
          {t('LOGIN.LOGINPROMPT')}{' '}
          <Text style={logInStyles.signupLink}> {t('LOGIN.SIGNUP')}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
