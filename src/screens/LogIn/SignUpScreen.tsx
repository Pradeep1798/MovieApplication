import CustomTextInput from 'components/CustomTextInput';
import {InputRules} from 'components/IInputRules';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import CustomButton from 'components/CustomButton';
import {logInStyles} from './LogInStyles';
import {SCREENS} from 'screens/root/RootScreens';
import {navigate} from 'screens/root/NavigationService';
import {alertService} from 'services/ServiceExports';
import {userDetails} from 'services/StoreProvider/Store';
import CustomSafeArea from 'components/CustomSafearea';

const SignUpScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const {setUsernameId} = userDetails();

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
    let isValid: boolean = true;
    if (!email) {
      isValid = false;
      alertService.ShowSingleActionAlert('Please Enter the Email');
    } else if (!password) {
      isValid = false;
      alertService.ShowSingleActionAlert('Please Enter the Passord');
    }
    if (isValid) {
      setUsernameId(userName);
      navigate(SCREENS.LOGIN);
      resetform();
    } else {
      console.log('Field Errors', isValid);
    }
  }

  function resetform() {
    setEmail('');
    setPassword('');
    setUserName('');
    setHidePassword(false);
  }

  return (
    <CustomSafeArea>
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
          InputRules={
            (new InputRules().InputRulesData.keyboardType = 'default')
          }
          Value={userName}
          Title={t('LOGIN.USERNAME')}
          placeholder={t('LOGIN.USERPLACE')}
          onChangeText={onChangeText}
          LeftImg={require('assets/UserName.png')}
        />
        <CustomTextInput
          InputRules={
            (new InputRules().InputRulesData.keyboardType = 'default')
          }
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

        <CustomButton Title={t('LOGIN.SIGNUP')} ButtonPress={handleLogin} />
        <TouchableOpacity onPress={handleLogin}>
          <Text style={logInStyles.signupTextLink}>
            {t('LOGIN.SIGNUPPROMPT')}{' '}
            <Text style={logInStyles.signupLink}>{t('LOGIN.LOGIN')}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </CustomSafeArea>
  );
};

export default SignUpScreen;
