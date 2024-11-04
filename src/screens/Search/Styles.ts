import {globalColor} from 'public/globalcolor';
import {StyleSheet} from 'react-native';

export const SearchStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    color: globalColor.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 10,
    width: '90%',
  },
  input: {
    flex: 1,
    color: globalColor.white,
    padding: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },

  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: 20,
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

  year: {
    color: globalColor.white,
    fontSize: 14,
  },
});
