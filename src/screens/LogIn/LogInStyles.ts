import {globalColor} from 'public/globalcolor';
import {StyleSheet} from 'react-native';

export const logInStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  overlay: {
    width: '100%',
    paddingVertical: 20,
    paddingBottom: 50,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  loginButton: {
    backgroundColor: globalColor.primaryButton,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  signupButton: {
    borderColor: globalColor.primaryButton,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  loginText: {
    color: globalColor.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: globalColor.primaryButton,
    fontSize: 18,
    fontWeight: 'bold',
  },
  Logincontainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  LoginTitle: {
    fontSize: 24,
    color: globalColor.white,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  signupTextLink: {
    color: globalColor.white,
    fontSize: 14,
    marginTop: 20,
  },
  signupLink: {
    color: globalColor.labelColor,
    fontWeight: 'bold',
  },
  languageButton: {
    padding: 10,
    backgroundColor: globalColor.primaryButton,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
  },
  languageButtonText: {
    color: globalColor.white,
    fontSize: 16,
    textAlign: 'center',
  },
});
