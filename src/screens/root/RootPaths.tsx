import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS, TABSCREENS} from './RootScreens';
import {RootStackScreens} from './RootStack';
import LandingScreen from '../LogIn/LandingPage';
import SignUpScreen from '../LogIn/SignUpScreen';
import LogInScreen from '../LogIn/LogInScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from 'screens/Home/HomePage';
import SearchPage from 'screens/Search/SearchPage';
import FavPage from 'screens/Favourites/FavPage';
import ProfilePage from 'screens/Profile/ProfilePage';
import {Image} from 'react-native';

const RootPaths = () => {
  const Stack = createNativeStackNavigator<RootStackScreens>();

  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconSource;
            if (route.name === TABSCREENS.HOME) {
              iconSource = focused
                ? require('assets/Home_Active.png')
                : require('assets/Home_Active.png');
            } else if (route.name === TABSCREENS.SEARCH) {
              iconSource = focused
                ? require('assets/Search_InActive.png')
                : require('assets/Search_InActive.png');
            } else if (route.name === TABSCREENS.FAVOURITES) {
              iconSource = focused
                ? require('assets/Fav_InActive.png')
                : require('assets/Fav_InActive.png');
            } else if (route.name === 'Settings') {
              iconSource = focused
                ? require('assets/Settings_InActive.png')
                : require('assets/Settings_InActive.png');
            }
            return (
              <Image source={iconSource} style={{width: 24, height: 24}} />
            );
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
          },
        })}>
        <Tab.Screen name={TABSCREENS.HOME} component={HomePage} />
        <Tab.Screen name={TABSCREENS.SEARCH} component={SearchPage} />
        <Tab.Screen name={TABSCREENS.FAVOURITES} component={FavPage} />
        <Tab.Screen name={TABSCREENS.PROFILE} component={ProfilePage} />
      </Tab.Navigator>
    );
  }

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
      <Stack.Screen
        name={SCREENS.TABS}
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootPaths;
