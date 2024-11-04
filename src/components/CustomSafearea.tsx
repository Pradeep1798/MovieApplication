import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from 'screens/root/RootStack';
import {compstyle} from './styles';
import CustomHeader from './CustomHeader';
import {userDetails} from 'services/StoreProvider/Store';
import {globalColor} from 'public/globalcolor';

interface ViewProps {
  ShowHideLoading?: boolean;
  headerTitle?: string;
  ShowHideHeader?: boolean;
  children: any;
}

function CustomSafeArea({
  children,
  ShowHideLoading = false,
  ShowHideHeader = false,
  headerTitle = '',
}: ViewProps) {
  const nav = useNavigation<StackNavigation>();
  const {isDarkTheme} = userDetails();

  function BackPressed() {
    nav.goBack();
  }
  return (
    <>
      <SafeAreaView
        style={[
          compstyle.SafeAreacontainer,
          {
            backgroundColor: isDarkTheme
              ? globalColor.background
              : globalColor.white,
          },
        ]}>
        {ShowHideHeader && (
          <CustomHeader title={headerTitle} BackPressed={BackPressed} />
        )}
        {children}
      </SafeAreaView>
      {ShowHideLoading && (
        <ActivityIndicator style={compstyle.loadingbar} size="large" />
      )}
    </>
  );
}

export default CustomSafeArea;
