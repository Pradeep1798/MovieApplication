import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from 'screens/root/NavigationService';
import RootPaths from 'screens/root/RootPaths';
import './src/localization/i18n';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootPaths />
    </NavigationContainer>
  );
};

export default App;
