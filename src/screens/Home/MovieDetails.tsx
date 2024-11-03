import CustomButton from 'components/CustomButton';
import CustomSafeArea from 'components/CustomSafearea';
import {genreData, MovieDetailsData, MovieDetailsRequest} from 'models/Home';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {alertService, homeService, localStorage} from 'services/ServiceExports';
import {
  IMAGE_BASE_URL,
  IMAGE_POSTER_URL,
  ResponseStatus,
} from 'utils/Constants';

const MovieDetails = ({route}: any) => {
  const [movieData, setMovieData] = useState<MovieDetailsData>();
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const {movie} = route.params;

  useEffect(() => {
    getMovieDetails();
  }, []);

  async function getMovieDetails() {
    setLoading(true);
    const data: MovieDetailsRequest = {
      movie_id: movie,
      language: 'en-US',
    };
    const MovieDetails = await homeService.getMovieDetails(data);
    console.log('MovieDetails', MovieDetails);
    if (
      MovieDetails.status === ResponseStatus.SUCCESS &&
      MovieDetails.data !== null
    ) {
      setMovieData(MovieDetails.data);
    }
    setLoading(false);
  }

  const genres = movieData?.genres
    ?.map((genre: genreData) => genre.name)
    .join(', ');

  const addToFavorites = async () => {
    try {
      const favorites = await localStorage?.GetData('favorites');
      const favoritesList = favorites ? JSON.parse(favorites) : [];

      const isAlreadyFavorite = favoritesList.some(
        (item: MovieDetailsData) => item.id === movieData?.id,
      );
      if (isAlreadyFavorite) {
        alertService?.ShowSingleActionAlert(
          'Already in Favorites This movie is already in your favorites.',
        );
        return;
      }

      favoritesList.push(movieData);
      await localStorage?.SaveData('favorites', JSON.stringify(favoritesList));
      setIsFavorite(true);
      alertService?.ShowSingleActionAlert(
        'Added to Favorites. This movie has been added to your favorites.',
      );
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  return (
    <CustomSafeArea
      ShowHideLoading={loading}
      ShowHideHeader={true}
      headerTitle="Details">
      <ScrollView>
        <Image
          source={{
            uri: `${IMAGE_POSTER_URL}${movieData?.backdrop_path}`,
          }}
          style={styles.backdrop}
          resizeMode="cover"
        />

        <View style={styles.posterContainer}>
          <Image
            source={{uri: `${IMAGE_BASE_URL}${movieData?.poster_path}`}}
            style={styles.poster}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{movieData?.title}</Text>
            <Text style={styles.releaseDate}>
              Release Date: {movieData?.release_date}
            </Text>
            <Text style={styles.runtime}>
              Runtime: {movieData?.runtime} minutes
            </Text>
            <Text style={styles.genre}>Genres: {genres}</Text>
            <Text style={styles.rating}>
              ⭐ {movieData?.vote_average} / 10 ({movieData?.vote_count} votes)
            </Text>
          </View>
        </View>

        <View style={styles.overviewContainer}>
          <Text style={styles.overviewTitle}>Overview</Text>
          <Text style={styles.overviewText}>{movieData?.overview}</Text>
        </View>
        <CustomButton
          Title={isFavorite ? 'In Favorites' : 'Add to Favorites'}
          ButtonPress={addToFavorites}
        />
      </ScrollView>
    </CustomSafeArea>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
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
  title: {
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
