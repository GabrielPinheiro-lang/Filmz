export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path?: string;
    vote_average: number;
  }

import { HTMLAttributes } from "react";
import { Movie } from '../types';

export interface IMovieCardProps extends HTMLAttributes<HTMLDivElement> {
    movie: Movie;
    inWishlist?: boolean
    handleAddMovieOnWishlist?: (movie: Movie) => void;

}