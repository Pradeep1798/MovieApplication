export type MovieDetailsRequest = {
  movie_id: number;
  language: string;
};

export type MovieDetailsResponse = {
  data: MovieDetailsData | null;
  status: number;
  message: string;
};

export type MovieDetailsData = {
  adult: boolean;
  backdrop_path: string;
  genres: genreData[];
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type genreData = {
  id: number;
  name: string;
};
