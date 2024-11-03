import {
  MovieDetailsData,
  MovieDetailsRequest,
  MovieDetailsResponse,
} from 'models/Home';
import {IHomeService} from './IHomeService';
import {ResponseStatus} from 'utils/Constants';
import AxiosInstance from 'services/axios';

export default class HomeService implements IHomeService {
  async getMovieDetails(
    data: MovieDetailsRequest,
  ): Promise<MovieDetailsResponse> {
    try {
      const response: MovieDetailsData = await AxiosInstance.get(
        `/movie/${data.movie_id}`,
        {
          params: {language: data.language},
        },
      );

      return {
        data: response,
        message: 'Data Fetched Successfully',
        status: ResponseStatus.SUCCESS,
      };
    } catch (error) {
      console.error('getMovieDetails error:', error);
      return {
        data: null,
        message: 'Data Fetch Failed',
        status: ResponseStatus.FAILED,
      };
    }
  }
}
