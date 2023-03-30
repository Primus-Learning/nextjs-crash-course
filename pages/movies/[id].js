import { prisma } from "@/lib/prisma";
import { getMovieByID } from "@/lib/requests/movieRequests";
import { formatRating, formatReleaseDate } from "@/lib/utils";
import {
  Avatar,
  Badge,
  Button,
  Group,
  Image,
  Rating,
  ScrollArea,
  SimpleGrid,
  Spoiler,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconArrowLeft,
  IconBookmark,
  IconCheck,
  IconInfoCircle,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { mutate } from "swr";
import { authOptions } from "../api/auth/[...nextauth]";

function MovieDetail({ movieDetailData, emsVersionId, bookmarked }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);
  const [isLoading, setIsLoading] = useState(false);

  const [isOpen, setOpen] = useState(false);
  const {
    genres,
    posterImage,
    name,
    releaseDate,
    tomatoRating,
    cast,
    synopsis,
    trailer,
    directedBy,
  } = movieDetailData;

  const rating = formatRating(tomatoRating.tomatometer);
  const formattedReleaseDate = formatReleaseDate(releaseDate);

  // add movie to watchlist
  const addToWatchlist = async () => {
    setIsLoading(true);

    notifications.show({
      id: "watchlist",
      loading: true,
      title: "Adding to watchlist",
      message: `${name} will be added to your watchlist`,
      autoClose: false,
      withCloseButton: false,
    });

    try {
      const res = await fetch("/api/watchlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          movieId: emsVersionId,
          name,
          rating: tomatoRating.tomatometer,
          poster: posterImage.url,
          userId: session.user.id,
        }),
      });

      const data = await res.json();

      if (data.status === "success") {
        notifications.update({
          id: "watchlist",
          color: "teal",
          title: "Added to Watchlist",
          message: `${name} has been added to your watchlist`,
          icon: <IconCheck size="1rem" />,
          autoClose: 3000,
        });
        mutate("/api/watchlist");
        setIsBookmarked(true);
      } else if (data.status === "existing") {
        notifications.update({
          id: "watchlist",
          color: "yellow",
          title: "Movie Already Exists",
          message: `${name} already exists in your watchlist`,
          icon: <IconInfoCircle size="2rem" />,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  // remove from watchlist
  const removeFromWatchlist = async (movieId) => {
    setIsLoading(true);

    notifications.show({
      id: "remove-watchlist",
      loading: true,
      title: "Removing from Watchlist",
      message: `${name} will be removed from your watchlist`,
      autoClose: false,
      withCloseButton: false,
    });

    try {
      const res = await fetch(`/api/watchlist/${emsVersionId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.status === "success") {
        notifications.update({
          id: "remove-watchlist",
          color: "teal",
          title: "Removed from Watchlist",
          message: `${name} has been removed from your watchlist`,
          icon: <IconCheck size="1rem" />,
          autoClose: 3000,
        });
        mutate("/api/watchlist");
        setIsBookmarked(false);
      } else if (data.status === "error") {
        notifications.update({
          id: "remove-watchlist",
          color: "red",
          title: "Error",
          message: `${data.message}`,
          icon: <IconInfoCircle size="2rem" />,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.log(error.message);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Button leftIcon={<IconArrowLeft />} onClick={() => router.back()}>
        Go back
      </Button>
      <SimpleGrid cols={2} mt="xl" verticalSpacing="xl">
        <Image
          width="100%"
          height="50%"
          src={posterImage?.url}
          alt={`movie poster image of ${name}`}
          withPlaceholder
        />

        {/* second column */}
        <Stack justify="flex-start" spacing="lg" h={300} ml="xl">
          <Title order={2} size="h1">
            {name}
          </Title>

          <Text>Directed by {directedBy}</Text>
          <Text>Released {formattedReleaseDate}</Text>
          {/* <Space /> */}
          <Group>
            {genres.map((movieGenre) => (
              <Badge radius="sm">{movieGenre.name}</Badge>
            ))}
          </Group>
          <Stack>
            <Group>
              <Tooltip.Group openDelay={200} closeDelay={100}>
                <Avatar.Group spacing="sm">
                  {cast.map((actor) => (
                    <Tooltip label={actor?.name} color="blue" withArrow>
                      <Avatar src={actor?.headShotImage?.url} radius="xl" />
                    </Tooltip>
                  ))}
                </Avatar.Group>
              </Tooltip.Group>
            </Group>
            <Group>
              <Rating value={rating} fractions={5} readOnly />
              <Text>{`(${rating})`}</Text>
            </Group>

            <Group>
              <Button
                variant="gradient"
                gradient={{ from: "teal", to: "blue", deg: 60 }}
                leftIcon={<IconPlayerPlay />}
                onClick={() => setOpen(true)}
              >
                Watch Trailer
              </Button>
              {/* Render button based on existing bookmark */}
              {isBookmarked ? (
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  leftIcon={<IconBookmark />}
                  onClick={() => removeFromWatchlist()}
                  loading={isLoading}
                  disabled={isLoading}
                >
                  Remove from Watchlist
                </Button>
              ) : (
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  leftIcon={<IconBookmark />}
                  onClick={() => addToWatchlist()}
                  loading={isLoading}
                  disabled={isLoading || isBookmarked === null}
                >
                  Add to Watchlist
                </Button>
              )}
            </Group>

            <Group>
              <Title order={3} size="h2">
                Summary
              </Title>
              <ScrollArea h={300}>
                <Spoiler maxHeight={200} showLabel="Read More" hideLabel="Hide">
                  {synopsis}
                </Spoiler>
              </ScrollArea>
            </Group>
          </Stack>
        </Stack>
        <ModalVideo
          channel="custom"
          url={trailer.url}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
        />
      </SimpleGrid>
    </>
  );
}

export async function getServerSideProps({ query, req, res }) {
  const emsVersionId = query.id;
  const rawData = await getMovieByID(emsVersionId);
  const movieDetailData = rawData?.data?.movie;
  const { user } = await getServerSession(req, res, authOptions);
  const userId = user?.id;
  const bookmark = await prisma.watchlist.findUnique({
    where: { userId_movieId: { movieId: emsVersionId, userId } },
  });
  const bookmarked = !!bookmark;

  return {
    props: {
      movieDetailData,
      emsVersionId,
      bookmarked,
    },
  };
}

export default MovieDetail;

