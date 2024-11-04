import CustomSafeArea from 'components/CustomSafearea';
import {MovieDetailsData} from 'models/Home';
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {localStorage} from 'services/ServiceExports';
import {IMAGE_BASE_URL} from 'utils/Constants';
import {FavStyles} from './Styles';
import {SCREENS} from 'screens/root/RootScreens';
import {useTranslation} from 'react-i18next';
import {navigate} from 'screens/root/NavigationService';
import {useFocusEffect} from '@react-navigation/native';

const Favoritespage = () => {
  const [favorites, setFavorites] = useState<MovieDetailsData[]>([]);
  const [loading, setLoading] = useState(true);
  const {t} = useTranslation();

  useFocusEffect(
    useCallback(() => {
      getFavorites();
    }, []),
  );

  const getFavorites = async () => {
    setLoading(true);
    try {
      const favorites = await localStorage?.GetData('favorites');
      const favMovie = favorites ? JSON.parse(favorites) : undefined;
      console.log(favMovie);

      setFavorites(favMovie);
    } catch (error) {
      console.error('Error retrieving favorites:', error);
    }
    setLoading(false);
  };

  const handleMoviePress = (movie: number) => {
    navigate(SCREENS.DETAILS, {movie});
  };

  return (
    <CustomSafeArea ShowHideLoading={loading}>
      <View style={FavStyles.container}>
        <Text style={FavStyles.Pagetitle}>{t('TAB.FAVOURITES')}</Text>
      </View>
      <ScrollView>
        {favorites?.length > 0 ? (
          <>
            {favorites.map(item =>
              item ? (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleMoviePress(item.id)}>
                  <View key={item.id} style={FavStyles.favoriteItem}>
                    <Image
                      source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
                      style={FavStyles.poster}
                    />
                    <View style={FavStyles.details}>
                      <Text style={FavStyles.title}>{item.title}</Text>
                      <Text style={FavStyles.year}>{item.release_date}</Text>
                    </View>
                    <Image
                      source={require('assets/Info_Icon.png')}
                      style={{marginRight: 12}}
                    />
                  </View>
                </TouchableOpacity>
              ) : null,
            )}
          </>
        ) : (
          <Text style={FavStyles.title}>{t('HOME.NORECORDS')}</Text>
        )}
      </ScrollView>
    </CustomSafeArea>
  );
};

export default Favoritespage;
