import {NowPlayingResults} from './Master';

export type SearchMovieRequest = {
  query: string;
  include_adult: boolean;
  language: string;
  page: number;
};

export type SearchMovieResponse = {
  data: NowPlayingResults | null;
  status: number;
  message: string;
};
