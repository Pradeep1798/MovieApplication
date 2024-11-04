import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Image} from 'react-native';
import axios from 'axios';
import {NowPlayingData} from 'models/Master';
import {IMAGE_BASE_URL, ResponseStatus} from 'utils/Constants';
import {searchService} from 'services/ServiceExports';
import {SearchMovieRequest} from 'models/Search';
import CustomSafeArea from 'components/CustomSafearea';
import {SearchStyles} from './Styles';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<NowPlayingData[]>([]);

  async function fetchMovies(query: string) {
    const data: SearchMovieRequest = {
      query,
      include_adult: false,
      language: 'en-US',
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
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      fetchMovies(query);
    } else {
      setResults([]);
    }
  };

  return (
    <CustomSafeArea>
      <View style={SearchStyles.container}>
        <Text style={SearchStyles.title}>Search</Text>
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
          <View key={item.id} style={SearchStyles.favoriteItem}>
            <Image
              source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
              style={SearchStyles.poster}
            />
            <View style={SearchStyles.details}>
              <Text style={SearchStyles.title}>{item.title}</Text>
              <Text style={SearchStyles.year}>{item.release_date}</Text>
            </View>
          </View>
        ))}
      </View>
    </CustomSafeArea>
  );
};

export default SearchPage;
