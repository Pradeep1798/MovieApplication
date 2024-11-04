import CutomFlatList from 'components/CustomFlatList';
import CustomSafeArea from 'components/CustomSafearea';
import {
  NowPlayingData,
  NowPlayingRequestDetails,
  UpcomingRequestDetails,
} from 'models/Master';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView} from 'react-native';
import {masterService} from 'services/ServiceExports';
import {ResponseStatus} from 'utils/Constants';
import {HomeStyles} from './Styles';
import {SCREENS} from 'screens/root/RootScreens';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from 'screens/root/RootStack';

function HomePage() {
  const [playingmovies, setPlayingMovies] = useState<NowPlayingData[]>([]);
  const [upcoming, setUpcoming] = useState<NowPlayingData[]>([]);
  const [topRated, setTopRated] = useState<NowPlayingData[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigation<StackNavigation>();

  useEffect(() => {
    getMasterData();
  }, []);

  async function getMasterData() {
    setLoading(true);
    const nowPlayingRequest: NowPlayingRequestDetails = {
      include_adult: false,
      include_video: false,
      language: 'en-US',
      page: 1,
      sort_by: 'popularity.desc',
      with_release_type: '2|3',
      release_date: {
        gte: '2022-01-01',
        lte: '2022-12-31',
      },
    };
    const nowPlayingData = await masterService.getNowPlaying(nowPlayingRequest);
    console.log(nowPlayingData);
    if (
      nowPlayingData.status === ResponseStatus.SUCCESS &&
      nowPlayingData.data !== null
    ) {
      setPlayingMovies(nowPlayingData.data.results);
    }
    const minDate = '2024-11-01';
    const maxDate = '2024-12-31';

    const upcomingRequest: UpcomingRequestDetails = {
      include_adult: false,
      include_video: false,
      language: 'en-US',
      page: 1,
      sort_by: 'popularity.desc',
      with_release_type: '2|3',
      'release_date.gte': minDate,
      'release_date.lte': maxDate,
    };
    const upcomingMovie = await masterService.getUpcoming(upcomingRequest);
    console.log('upcomingMovie', upcomingMovie);
    if (
      upcomingMovie.status === ResponseStatus.SUCCESS &&
      upcomingMovie.data !== null
    ) {
      setUpcoming(upcomingMovie.data.results);
    }
    const topRatedRequest: UpcomingRequestDetails = {
      include_adult: false,
      include_video: false,
      language: 'en-US',
      page: 1,
      sort_by: 'popularity.desc',
      with_release_type: '2|3',
      'vote_count.gte': 200,
    };
    const topratedMovie = await masterService.getTopRated(topRatedRequest);
    console.log('topratedMovie', topratedMovie);
    if (
      topratedMovie.status === ResponseStatus.SUCCESS &&
      topratedMovie.data !== null
    ) {
      setTopRated(topratedMovie.data.results);
    }

    setLoading(false);
  }

  const handleMoviePress = (movie: number) => {
    navigate.navigate(SCREENS.DETAILS, {movie});
  };

  return (
    <CustomSafeArea ShowHideLoading={loading}>
      <ScrollView>
        <Image
          source={require('assets/MovieBanner.png')}
          style={HomeStyles.headerImage}
        />

        <CutomFlatList
          title="Now Playing"
          data={playingmovies}
          onMoviePress={handleMoviePress}
        />
        <CutomFlatList
          title="Top Rated"
          data={topRated}
          onMoviePress={handleMoviePress}
        />
        <CutomFlatList
          title="Upcoming"
          data={upcoming}
          onMoviePress={handleMoviePress}
        />
      </ScrollView>
    </CustomSafeArea>
  );
}

export default HomePage;
