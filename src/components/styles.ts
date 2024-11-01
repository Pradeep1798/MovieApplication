import {globalColor} from 'public/globalcolor';
import {StyleSheet} from 'react-native';

export const compstyle = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    width: '100%',
  },
  leftImg: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  rightImg: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    color: globalColor.white,
    fontSize: 16,
  },
  label: {
    color: globalColor.white,
    fontSize: 14,
    marginBottom: 5,
  },
  Button: {
    backgroundColor: globalColor.primaryButton,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  ButtonText: {
    color: globalColor.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
