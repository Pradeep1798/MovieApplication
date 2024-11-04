import {StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 500,
  },
  backdrop: {
    width: '100%',
    height: 200,
  },
  posterContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  MovieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  releaseDate: {
    color: '#BBBBBB',
    fontSize: 14,
    marginTop: 8,
  },
  runtime: {
    color: '#BBBBBB',
    fontSize: 14,
    marginTop: 4,
  },
  genre: {
    color: '#BBBBBB',
    fontSize: 14,
    marginTop: 4,
  },
  rating: {
    color: '#FFD700',
    fontSize: 16,
    marginTop: 8,
    fontWeight: '500',
  },
  overviewContainer: {
    padding: 16,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  overviewText: {
    fontSize: 14,
    color: '#DDDDDD',
    lineHeight: 22,
  },
});
