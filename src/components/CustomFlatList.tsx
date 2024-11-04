import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {compstyle} from './styles';
import {NowPlayingData} from 'models/Master';
import {IMAGE_BASE_URL} from 'utils/Constants';

type ViewProps = {
  data: NowPlayingData[];
  title: string;
  onMoviePress: (movie: number) => void;
};

function CutomFlatList({title, data, onMoviePress}: ViewProps) {
  const renderMovie = ({item}: {item: NowPlayingData}) => (
    <View style={compstyle.movieContainer}>
      <TouchableOpacity onPress={() => onMoviePress(item.id)}>
        <Image
          source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
          style={compstyle.movieImage}
          resizeMode="cover"
        />
        <Text style={compstyle.movieTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={compstyle.sectionContainer}>
      <Text style={compstyle.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderMovie}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={compstyle.movieList}
      />
    </View>
  );
}

export default CutomFlatList;
