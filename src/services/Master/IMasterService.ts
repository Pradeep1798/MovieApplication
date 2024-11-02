import {
  NowPlayingRequestDetails,
  NowPlayingResponseDetails,
  UpcomingRequestDetails,
} from 'models/Master';

export type IMasterService = {
  getNowPlaying: (
    data: NowPlayingRequestDetails,
  ) => Promise<NowPlayingResponseDetails>;
  getUpcoming: (
    data: UpcomingRequestDetails,
  ) => Promise<NowPlayingResponseDetails>;
  getTopRated: (
    data: UpcomingRequestDetails,
  ) => Promise<NowPlayingResponseDetails>;
};
