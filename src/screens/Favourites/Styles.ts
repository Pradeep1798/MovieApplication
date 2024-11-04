import {globalColor} from 'public/globalcolor';
import {StyleSheet} from 'react-native';

export const FavStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  Pagetitle: {
    color: globalColor.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: 16,
  },
  poster: {
    width: 70,
    height: 100,
    borderRadius: 4,
  },
  details: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  year: {
    color: '#BBBBBB',
    fontSize: 14,
  },
});
