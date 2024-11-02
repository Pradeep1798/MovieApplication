import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigationProp} from '@react-navigation/native';

export type RootStackScreens = {
  LandingPage: any;
  LoginPage: any;
  SignUpPage: any;
  TabsPage: any;
};

export type RootBottomScreens = {
  Home: any;
  Search: any;
  Favourites: any;
  profile: any;
};

export type StackNavigation = NavigationProp<RootStackScreens>;
export type DrawerNavigation = BottomTabNavigationProp<RootBottomScreens>;
