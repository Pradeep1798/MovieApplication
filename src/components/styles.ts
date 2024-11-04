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
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: globalColor.MovieTitle,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  movieList: {
    paddingLeft: 10,
  },
  movieContainer: {
    marginRight: 10,
    width: 120,
  },
  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  movieTitle: {
    color: globalColor.MovieTitle,
    textAlign: 'center',
    marginTop: 5,
  },
  SafeAreacontainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
  },
  loadingbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    color: globalColor.defaultloadingcolor,
  },
  headerTop: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 0,
    backgroundColor: globalColor.background,
  },
  headerLeftImg: {
    height: 25,
    width: 55,
    alignSelf: 'flex-start',
  },
  headerTxt: {
    color: globalColor.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginEnd: 55,
  },
  headerleftimg: {
    height: 25,
    width: 25,
    marginLeft: 5,
  },
  errorinfotxt: {
    fontSize: 12,
    color: globalColor.errorcolor,
    fontWeight: 'normal',
    marginTop: 1,
  },
});
