import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Animated,
  TextStyle,
} from 'react-native';
import {compstyle} from './styles';
import {globalColor} from 'public/globalcolor';

interface ViewProps {
  Value?: string;
  Title?: string;
  Key?: string;
  Error?: boolean;
  InputRules: any;
  onChangeText?: (Value: string, text: string, index?: number) => void;
  placeholder?: string;
  iconpress?(): void;
  secureTextentry?: boolean;
  icon?: any;
  mandatory?: boolean;
  RightImg?: any;
  LeftImg?: any;
}

const CustomTextField = ({
  Value = '',
  Title = '',
  Key = '',
  Error = false,
  RightImg = null,
  InputRules,
  onChangeText = () => {},
  placeholder,
  iconpress = () => {},
  secureTextentry,
  LeftImg,
}: ViewProps) => {
  const [focus, setFocus] = useState(false);
  const [labelPosition] = useState(new Animated.Value(Value ? 1 : 0));

  useEffect(() => {
    Animated.timing(labelPosition, {
      toValue: focus || Value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focus, Value]);

  const labelStyle: Animated.WithAnimatedObject<TextStyle> = {
    position: 'absolute' as const,
    left: LeftImg ? 40 : 10,
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [12, -8],
    }),
    color: globalColor.labelColor,
  };

  return (
    <View
      style={[
        compstyle.inputContainer,
        {borderColor: focus ? globalColor.labelColor : globalColor.white},
      ]}>
      {LeftImg && <Image source={LeftImg} style={compstyle.leftImg} />}
      <Animated.Text style={labelStyle}>{Title}</Animated.Text>
      <TextInput
        style={compstyle.input}
        placeholder={focus ? placeholder : ''}
        placeholderTextColor={globalColor.labelColor}
        value={Value}
        onChangeText={text => onChangeText(Title, text || '')}
        secureTextEntry={secureTextentry}
        keyboardType={InputRules?.keyboardType}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {RightImg && (
        <TouchableOpacity onPress={iconpress}>
          <Image source={RightImg} style={compstyle.rightImg} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextField;
