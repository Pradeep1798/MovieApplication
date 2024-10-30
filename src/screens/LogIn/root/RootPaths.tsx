import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './RootScreens';
import {RootStackScreens} from './RootStack';
import LandingScreen from '../LandingPage';
import SignUpScreen from '../SignUpScreen';
import LogInScreen from '../LogInScreen';

const RootPaths = () => {
  const Stack = createNativeStackNavigator<RootStackScreens>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.LANDING}
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.SIGNUP}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.LOGIN}
        component={LogInScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootPaths;
