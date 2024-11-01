import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {logInStyles} from './LogInStyles';
import {navigate} from '../root/NavigationService';
import {SCREENS} from '../root/RootScreens';

const LandingScreen = () => {
  function handleLogin() {
    navigate(SCREENS.LOGIN);
  }

  function handleSignUp() {
    navigate(SCREENS.SIGNUP);
  }

  return (
    <ImageBackground
      source={require('assets/Landing.png')}
      style={logInStyles.backgroundImage}>
      <View style={logInStyles.overlay}>
        <TouchableOpacity
          style={logInStyles.loginButton}
          activeOpacity={0.8}
          onPress={handleLogin}>
          <Text style={logInStyles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={logInStyles.signupButton}
          activeOpacity={0.8}
          onPress={handleSignUp}>
          <Text style={logInStyles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LandingScreen;
