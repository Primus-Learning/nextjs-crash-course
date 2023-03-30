import useSWR from "swr";
import { fetcher } from "../utils";

export const useWatchlist = () => {
  const { data, error } = useSWR("/api/watchlist", fetcher);
  const isLoading = !data && !error;

  return {
    watchlist: data,
    isLoading,
    error,
  };
};

