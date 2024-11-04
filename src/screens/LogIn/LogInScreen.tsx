import CustomTextInput from 'components/CustomTextInput';
import {InputRules} from 'components/IInputRules';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import CustomButton from 'components/CustomButton';
import {logInStyles} from './LogInStyles';
import {navigate, replace} from 'screens/root/NavigationService';
import {SCREENS} from 'screens/root/RootScreens';
import {userDetails} from 'services/StoreProvider/Store';
import CustomSafeArea from 'components/CustomSafearea';
import {alertService} from 'services/ServiceExports';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const {setEmailId, setLanguage} = userDetails();
  const {t, i18n} = useTranslation();

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
  function handleTab() {
    let isValid: boolean = true;
    if (!email) {
      isValid = false;
      alertService.ShowSingleActionAlert('Please Enter the Email');
    } else if (!password) {
      isValid = false;
      alertService.ShowSingleActionAlert('Please Enter the Passord');
    }
    if (isValid) {
      setEmailId(email);
      replace(SCREENS.TABS);
      resetform();
    } else {
      console.log('Field Errors', isValid);
    }
  }
  function resetform() {
    setEmail('');
    setPassword('');
    setHidePassword(false);
    setSelectedLanguage('en');
  }

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };
  return (
    <CustomSafeArea>
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

        <CustomButton Title={t('LOGIN.LOGIN')} ButtonPress={handleTab} />
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={logInStyles.signupTextLink}>
            {t('LOGIN.LOGINPROMPT')}{' '}
            <Text style={logInStyles.signupLink}> {t('LOGIN.SIGNUP')}</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            changeLanguage(selectedLanguage === 'en' ? 'ja' : 'en')
          }
          style={logInStyles.languageButton}>
          <Text style={logInStyles.languageButtonText}>
            {selectedLanguage === 'en'
              ? 'Switch to Japanese'
              : 'Switch to English'}
          </Text>
        </TouchableOpacity>
      </View>
    </CustomSafeArea>
  );
};

export default LoginScreen;
