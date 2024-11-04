import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from 'screens/root/NavigationService';
import RootPaths from 'screens/root/RootPaths';
import './src/localization/i18n';
import {StoreProvider} from 'services/StoreProvider/Store';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StoreProvider>
        <RootPaths />
      </StoreProvider>
    </NavigationContainer>
  );
};

export default App;
