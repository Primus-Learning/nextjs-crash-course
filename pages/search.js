import MovieCarousel from "@/components/MovieCarousel";
import SearchInput from "@/components/SearchInput";
import SkeletonLoader from "@/components/SkeletonLoader";
import { Center, Space, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);

  //   onChange
  const handleInputChange = (event) => {
    setSearchInput(event.currentTarget.value);
  };

  //   form handler
  const searchFormHandler = async (input) => {
    setIsLoading(true);
    setSearchResults(null);

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await res.json();
      setSearchResults(data?.data?.search?.movies);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Stack h={500} py={40}>
        <Title order={2} align="center">
          Search for a movie
        </Title>

        {/* Search input field */}
        <SearchInput
          value={searchInput}
          onChange={handleInputChange}
          isLoading={isLoading}
          searchInputHandler={() => searchFormHandler(searchInput)}
        />

        {/* Search results */}
        <Space h="lg" />

        {isLoading && <SkeletonLoader />}
        {searchResults?.length > 0 && <MovieCarousel movies={searchResults} />}
        {searchResults?.length === 0 && (
          <Center>
            <Text>nothing found</Text>
          </Center>
        )}
      </Stack>
    </>
  );
}

export default Search;

