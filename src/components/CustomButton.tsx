import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {compstyle} from './styles';

type viewProps = {
  Title: string;
  ButtonPress?: () => void;
};

const CustomButton = ({Title, ButtonPress}: viewProps) => {
  return (
    <>
      <TouchableOpacity style={compstyle.Button} onPress={ButtonPress}>
        <Text style={compstyle.ButtonText}>{Title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;
