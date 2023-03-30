// round off rating
export const formatRating = (rating) => {
  return rating / 10 / 2;
};

// format release date
export const formatReleaseDate = (releaseDate) => {
  const date = new Date(releaseDate);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};

// fetcher function for useSWR
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

