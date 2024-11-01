import {NavigationProp} from '@react-navigation/native';

export type RootStackScreens = {
  LandingPage: any;
  LoginPage: any;
  SignUpPage: any;
};

export type StackNavigation = NavigationProp<RootStackScreens>;
