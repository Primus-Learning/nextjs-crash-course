import PopularMovies from "@/components/sections/PopularMovies";
import {
  getOpeningMovies,
  getPopularMovies,
} from "@/lib/requests/movieRequests";
import { Space } from "@mantine/core";
import OpeningMovies from "@/components/sections/OpeningMovies";

const Dashboard = ({ openingMoviesData, popularMoviesData }) => {
  return (
    <>
      <PopularMovies popularMovies={popularMoviesData} />
      <Space h="lg" />
      <OpeningMovies openingMovies={openingMoviesData} />
    </>
  );
};

export async function getStaticProps() {
  // Load opening movies
  const openingMoviesData = await getOpeningMovies();

  // Load popular movies
  const popularMoviesData = await getPopularMovies();

  return {
    props: {
      openingMoviesData,
      popularMoviesData,
    },
  };
}

export default Dashboard;

