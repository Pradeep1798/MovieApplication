import CustomButton from 'components/CustomButton';
import CustomSafeArea from 'components/CustomSafearea';
import {genreData, MovieDetailsData, MovieDetailsRequest} from 'models/Home';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {alertService, homeService, localStorage} from 'services/ServiceExports';
import {
  IMAGE_BASE_URL,
  IMAGE_POSTER_URL,
  Language,
  ResponseStatus,
} from 'utils/Constants';
import {HomeStyles} from './Styles';
import {useTranslation} from 'react-i18next';
import {userDetails} from 'services/StoreProvider/Store';

const MovieDetails = ({route}: any) => {
  const [movieData, setMovieData] = useState<MovieDetailsData>();
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const {t} = useTranslation();
  const {language} = userDetails();

  const {movie} = route.params;

  useEffect(() => {
    getMovieDetails();
  }, []);

  async function getMovieDetails() {
    setLoading(true);
    const data: MovieDetailsRequest = {
      movie_id: movie,
      language: language === 'en' ? Language.ENGLISH : Language.JAPANESE,
    };
    const MovieDetails = await homeService.getMovieDetails(data);
    console.log('MovieDetails', MovieDetails);
    if (
      MovieDetails.status === ResponseStatus.SUCCESS &&
      MovieDetails.data !== null
    ) {
      try {
        const favorites = await localStorage?.GetData('favorites');
        const favoritesList = favorites ? JSON.parse(favorites) : [];
        console.log('favoritesList', favoritesList);

        const isAlreadyFavorite = favoritesList.some(
          (item: MovieDetailsData) => item?.id === MovieDetails.data?.id,
        );

        console.log('isAlreadyFavorite', isAlreadyFavorite);

        if (isAlreadyFavorite) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      } catch (error) {
        console.log('isAlreadyFavorite Error', error);
      }

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
        (item: MovieDetailsData) => item?.id === movieData?.id,
      );
      if (isAlreadyFavorite) {
        alertService?.ShowSingleActionAlert(
          'Already in Favorites This movie is already in your favorites.',
        );
        return;
      }

      favoritesList.push(movieData);
      localStorage?.SaveData('favorites', JSON.stringify(favoritesList));
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
      headerTitle={movieData?.title}>
      <ScrollView>
        <Image
          source={{
            uri: `${IMAGE_POSTER_URL}${movieData?.backdrop_path}`,
          }}
          style={HomeStyles.backdrop}
          resizeMode="cover"
        />

        <View style={HomeStyles.posterContainer}>
          <Image
            source={{uri: `${IMAGE_BASE_URL}${movieData?.poster_path}`}}
            style={HomeStyles.poster}
          />
          <View style={HomeStyles.infoContainer}>
            <Text style={HomeStyles.MovieTitle}>{movieData?.title}</Text>
            <Text style={HomeStyles.releaseDate}>
              {t('MOVIEDETAILS.DATE')}: {movieData?.release_date}
            </Text>
            <Text style={HomeStyles.runtime}>
              {t('MOVIEDETAILS.RUNTIME')}: {movieData?.runtime}{' '}
              {t('MOVIEDETAILS.MINUTES')}
            </Text>
            <Text style={HomeStyles.genre}>
              {t('MOVIEDETAILS.GENRES')}: {genres}
            </Text>
            <Text style={HomeStyles.rating}>
              ⭐ {movieData?.vote_average} / 10 ({movieData?.vote_count}{' '}
              {t('MOVIEDETAILS.VOTES')})
            </Text>
          </View>
        </View>

        <View style={HomeStyles.overviewContainer}>
          <Text style={HomeStyles.overviewTitle}>
            {t('MOVIEDETAILS.OVERVIEW')}
          </Text>
          <Text style={HomeStyles.overviewText}>{movieData?.overview}</Text>
        </View>
        <View style={{padding: 20}}>
          <CustomButton
            Title={
              isFavorite ? t('MOVIEDETAILS.INFAV') : t('MOVIEDETAILS.ADDFAV')
            }
            ButtonPress={addToFavorites}
          />
        </View>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default MovieDetails;
