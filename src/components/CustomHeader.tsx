import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {compstyle} from './styles';

interface ViewProps {
  title?: string;
  style?: any;
  BackPressed?: (title: string) => void;
}

function CustomHeader({
  title = 'Text',
  style = compstyle.headerTxt,
  BackPressed = () => {},
}: ViewProps) {
  function onPress() {
    BackPressed(title);
  }
  return (
    <View style={compstyle.headerTop}>
      <TouchableOpacity onPress={onPress} style={compstyle.headerLeftImg}>
        <View style={compstyle.headerLeftImg}>
          <Image
            source={require('assets/ic_arrow_back.png')}
            style={compstyle.headerleftimg}
          />
        </View>
      </TouchableOpacity>
      <Text style={style}>{title}</Text>
    </View>
  );
}

export default CustomHeader;
