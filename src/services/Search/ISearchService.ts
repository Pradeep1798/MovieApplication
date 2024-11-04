import {SearchMovieRequest, SearchMovieResponse} from 'models/Search';

export type ISearchService = {
  getSearchMovie(data: SearchMovieRequest): Promise<SearchMovieResponse>;
};
