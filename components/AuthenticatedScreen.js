import { Center, Stack, Container, Text, Group, Button } from "@mantine/core";
import { IconDeviceTv } from "@tabler/icons-react";
import Link from "next/link";

const AuthenticatedScreen = () => {
  return (
    <>
      <Center style={{ height: "100vh" }}>
        <Stack>
          <Container>
            <Text fz="xl" fw="bolder" ta="center">
              Say hello to{" "}
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: "cyan", to: "blue" }}
              >
                ReelRanger
              </Text>{" "}
            </Text>

            <Text ta="center">
              ReelRanger is the ultimate movie management app! With a
              user-friendly interface, easily search for movies, find basic
              information on them, and add them to your watchlist.
            </Text>
          </Container>

          <Group position="center">
            <Link href="/dashboard">
              <Button
                size="md"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                leftIcon={<IconDeviceTv size={20} />}
              >
                Dashboard
              </Button>
            </Link>
          </Group>
        </Stack>
      </Center>
    </>
  );
};

export default AuthenticatedScreen;

