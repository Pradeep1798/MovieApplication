export type NowPlayingRequestDetails = {
  include_adult: boolean;
  include_video: boolean;
  language: string;
  page: number;
  sort_by: string;
  with_release_type: string;
  release_date: {
    gte: string;
    lte: string;
  };
};

export type NowPlayingData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type NowPlayingResults = {
  page: number;
  results: NowPlayingData[];
  total_pages: number;
  total_results: number;
};

export type NowPlayingResponseDetails = {
  data: NowPlayingResults | null;
  status: number;
  message: string;
};

export type UpcomingRequestDetails = {
  include_adult: boolean;
  include_video: boolean;
  language: string;
  page: number;
  sort_by: string;
  with_release_type: string;
  'release_date.gte'?: string;
  'release_date.lte'?: string;
  'vote_count.gte'?: number;
};
