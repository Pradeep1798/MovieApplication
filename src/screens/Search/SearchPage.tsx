import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {NowPlayingData} from 'models/Master';
import {IMAGE_BASE_URL, Language, ResponseStatus} from 'utils/Constants';
import {searchService} from 'services/ServiceExports';
import {SearchMovieRequest} from 'models/Search';
import CustomSafeArea from 'components/CustomSafearea';
import {SearchStyles} from './Styles';
import {useTranslation} from 'react-i18next';
import {userDetails} from 'services/StoreProvider/Store';
import {SCREENS} from 'screens/root/RootScreens';
import {navigate} from 'screens/root/NavigationService';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<NowPlayingData[]>([]);
  const [loading, setLoading] = useState(true);
  const {t} = useTranslation();
  const {language} = userDetails();

  async function fetchMovies(query: string) {
    setLoading(true);
    const data: SearchMovieRequest = {
      query,
      include_adult: false,
      language: language === 'en' ? Language.ENGLISH : Language.JAPANESE,
      page: 1,
    };
    const searchMovie = await searchService.getSearchMovie(data);
    console.log('searchMovie', JSON.stringify(searchMovie));
    if (
      searchMovie.data !== null &&
      searchMovie.status === ResponseStatus.SUCCESS
    ) {
      setResults(searchMovie.data.results);
    }
    setLoading(false);
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      fetchMovies(query);
    } else {
      setResults([]);
    }
  };

  const handleMoviePress = (movie: number) => {
    navigate(SCREENS.DETAILS, {movie});
  };

  return (
    <CustomSafeArea ShowHideLoading={loading}>
      <ScrollView>
        <View style={SearchStyles.container}>
          <Text style={SearchStyles.title}>{t('TAB.SEARCH')}</Text>
          <View style={SearchStyles.searchContainer}>
            <TextInput
              style={SearchStyles.input}
              placeholder="Search for a title..."
              placeholderTextColor="#666"
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <View style={SearchStyles.searchIcon}>
              <Image source={require('assets/Search_Active.png')} />
            </View>
          </View>
          {results.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleMoviePress(item.id)}
              style={SearchStyles.favoriteItem}>
              {/* <View key={item.id}> */}
              <Image
                source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
                style={SearchStyles.poster}
              />

              <View style={SearchStyles.details}>
                <Text style={SearchStyles.title}>{item.title}</Text>
                <Text style={SearchStyles.year}>{item.release_date}</Text>
              </View>
              {/* </View> */}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default SearchPage;
