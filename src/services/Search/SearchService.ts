import {SearchMovieRequest, SearchMovieResponse} from 'models/Search';
import {ISearchService} from './ISearchService';
import {ResponseStatus} from 'utils/Constants';
import {NowPlayingResults} from 'models/Master';
import AxiosInstance from 'services/axios';

export default class SearchService implements ISearchService {
  async getSearchMovie(data: SearchMovieRequest): Promise<SearchMovieResponse> {
    try {
      const response: NowPlayingResults = await AxiosInstance.get(
        '/search/movie',
        {
          params: data,
        },
      );

      return {
        data: response,
        message: 'Data Fetched Successfully',
        status: ResponseStatus.SUCCESS,
      };
    } catch (error) {
      console.log('getSearchMovie error', error);

      return {
        data: null,
        message: 'Data Fetched Failed',
        status: ResponseStatus.FAILED,
      };
    }
  }
}
