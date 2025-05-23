import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigationProp} from '@react-navigation/native';

export type RootStackScreens = {
  LandingPage: any;
  LoginPage: any;
  SignUpPage: any;
  TabsPage: any;
  DetailsPage: any;
};

export type RootBottomScreens = {
  Home: any;
  Search: any;
  Favourites: any;
  Settings: any;
};

export type StackNavigation = NavigationProp<RootStackScreens>;
export type DrawerNavigation = BottomTabNavigationProp<RootBottomScreens>;
