import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from 'screens/root/NavigationService';
import RootPaths from 'screens/root/RootPaths';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootPaths />
    </NavigationContainer>
  );
};

export default App;
