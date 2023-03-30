import { Carousel } from "@mantine/carousel";
import MovieSummaryCard from "./MovieSummaryCard";

function MovieCarousel({ movies }) {
  return (
    <Carousel slideSize="33.333333%" slideGap="lg" loop align="start">
      {movies?.map((movie) => (
        <Carousel.Slide key={movie?.emsVersionId || movie?.movieId}>
          <MovieSummaryCard
            key={movie?.emsVersionId || movie?.movieId}
            id={movie?.emsVersionId || movie?.movieId}
            rating={movie?.tomatoRating?.tomatometer || movie?.rating}
            name={movie?.name}
            image={movie?.posterImage?.url || movie?.poster}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default MovieCarousel;

