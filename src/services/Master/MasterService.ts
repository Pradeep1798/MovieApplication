import {
  NowPlayingData,
  NowPlayingRequestDetails,
  NowPlayingResponseDetails,
  NowPlayingResults,
  UpcomingRequestDetails,
} from 'models/Master';
import {IMasterService} from './IMasterService';
import AxiosInstance from 'services/axios';
import {ResponseStatus} from 'utils/Constants';

export default class MasterService implements IMasterService {
  async getNowPlaying(
    data: NowPlayingRequestDetails,
  ): Promise<NowPlayingResponseDetails> {
    try {
      const response: NowPlayingResults = await AxiosInstance.get(
        '/movie/now_playing',
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
      console.log('getNowPlaying error', error);
      return {
        data: null,
        message: 'Data Fetched Failed',
        status: ResponseStatus.FAILED,
      };
    }
  }

  async getUpcoming(
    data: UpcomingRequestDetails,
  ): Promise<NowPlayingResponseDetails> {
    try {
      const response: NowPlayingResults = await AxiosInstance.get(
        '/movie/upcoming',
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
      console.error('getUpcoming error:', error);
      return {
        data: null,
        message: 'Data Fetch Failed',
        status: ResponseStatus.FAILED,
      };
    }
  }
  async getTopRated(
    data: UpcomingRequestDetails,
  ): Promise<NowPlayingResponseDetails> {
    try {
      const response: NowPlayingResults = await AxiosInstance.get(
        '/movie/top_rated',
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
      console.error('getUpcoming error:', error);
      return {
        data: null,
        message: 'Data Fetch Failed',
        status: ResponseStatus.FAILED,
      };
    }
  }
}
