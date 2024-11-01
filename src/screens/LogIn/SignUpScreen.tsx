import CustomTextInput from 'components/CustomTextInput';
import {InputRules} from 'components/IInputRules';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import CustomButton from 'components/CustomButton';
import {logInStyles} from './LogInStyles';
import {SCREENS} from 'screens/root/RootScreens';
import {navigate} from 'screens/root/NavigationService';

const SignUpScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [UserName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const {t} = useTranslation();

  function onChangeText(type: string, text: string) {
    console.log(type, text);
    if (type === t('LOGIN.USERNAME')) {
      setUserName(text);
    } else if (type === t('LOGIN.EMAIL')) {
      setEmail(text);
    } else if (type === t('LOGIN.PASSWORD')) {
      setPassword(text);
    }
  }

  const showpassword = () => {
    setHidePassword(!hidePassword);
  };

  function handleLogin() {
    navigate(SCREENS.LOGIN);
  }

  return (
    <View style={logInStyles.Logincontainer}>
      <Text style={logInStyles.LoginTitle}>{t('LOGIN.SIGNUP')}</Text>

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
        Value={email}
        Title={t('LOGIN.USERNAME')}
        placeholder={t('LOGIN.USERPLACE')}
        onChangeText={onChangeText}
        LeftImg={require('assets/UserName.png')}
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
      <TouchableOpacity onPress={handleLogin}>
        <Text style={logInStyles.signupTextLink}>
          {t('LOGIN.SIGNUPPROMPT')}{' '}
          <Text style={logInStyles.signupLink}>{t('LOGIN.LOGIN')}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
