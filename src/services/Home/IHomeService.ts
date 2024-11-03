import {MovieDetailsRequest, MovieDetailsResponse} from 'models/Home';

export type IHomeService = {
  getMovieDetails(data: MovieDetailsRequest): Promise<MovieDetailsResponse>;
};
