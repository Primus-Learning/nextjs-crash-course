import { Card, Image, Text, Button, Rating, Stack } from "@mantine/core";
import Link from "next/link";

export function MovieSummaryCard({ id, name, image, rating, variant }) {
  const roundedRating = rating / 2 / 10;

  return (
    <Card withBorder radius="md" p="md">
      <Card.Section>
        <Image src={image} alt={name} height={250} withPlaceholder />
      </Card.Section>

      <Card.Section mt="md" p={"md"}>
        <Stack>
          <Text size="lg" weight={500} truncate>
            {name}
          </Text>
          <Rating value={roundedRating} fractions={5} readOnly />
        </Stack>
      </Card.Section>

      {variant === "opening" ? null : (
        <Link href={`/movies/${id}`}>
          <Button radius="md" style={{ flex: 1 }}>
            More details
          </Button>
        </Link>
      )}
    </Card>
  );
}

export default MovieSummaryCard;

