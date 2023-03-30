import { Title, Space } from "@mantine/core";
import { MovieSummaryCard } from "../MovieSummaryCard";
import { Carousel } from "@mantine/carousel";

function OpeningMovies({ openingMovies }) {
  return (
    <>
      <Space h="md" />
      <Title order={2}>Opening Movies / Releases</Title>
      <Space h="md" />
      <Carousel slideSize="33.333333%" slideGap="lg" loop align="start">
        {openingMovies?.map((movie) => (
          <Carousel.Slide key={movie?.emsVersionId || movie?.movieId}>
            <MovieSummaryCard
              key={movie?.emsVersionId || movie?.movieId}
              id={movie?.emsVersionId || movie?.movieId}
              variant="opening"
              name={movie?.name}
              rating={movie?.tomatoRating?.tomatometer || movie?.rating}
              image={movie?.posterImage?.url || movie?.poster}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
}

export default OpeningMovies;

