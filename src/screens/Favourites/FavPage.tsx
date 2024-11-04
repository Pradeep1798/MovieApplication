import CustomSafeArea from 'components/CustomSafearea';
import {MovieDetailsData} from 'models/Home';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {localStorage} from 'services/ServiceExports';
import {IMAGE_BASE_URL} from 'utils/Constants';
import {FavStyles} from './Styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from 'screens/root/RootStack';
import {SCREENS} from 'screens/root/RootScreens';

const Favoritespage = () => {
  const [favorites, setFavorites] = useState<MovieDetailsData[]>([]);
  const navigate = useNavigation<StackNavigation>();

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    try {
      const favorites = await localStorage?.GetData('favorites');
      const favMovie = favorites ? JSON.parse(favorites) : undefined;
      console.log(favMovie);

      setFavorites(favMovie);
    } catch (error) {
      console.error('Error retrieving favorites:', error);
    }
  };

  const handleMoviePress = (movie: number) => {
    navigate.navigate(SCREENS.DETAILS, {movie});
  };

  return (
    <CustomSafeArea>
      <View style={FavStyles.container}>
        <Text style={FavStyles.Pagetitle}>Favourites</Text>
      </View>
      <ScrollView>
        {favorites.length > 0 ? (
          <>
            {favorites.map(item =>
              item ? (
                <TouchableOpacity onPress={() => handleMoviePress(item.id)}>
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
          <Text style={FavStyles.title}>No Records Found</Text>
        )}
      </ScrollView>
    </CustomSafeArea>
  );
};

export default Favoritespage;
