import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from 'screens/LogIn/root/NavigationService';
import RootPaths from 'screens/LogIn/root/RootPaths';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootPaths />
    </NavigationContainer>
  );
};

export default App;
