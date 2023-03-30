import { Center, Stack, Container, Text, Group, Button } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import { signIn } from "next-auth/react";

const UnaunthenticatedScreen = () => {
  return (
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
            </Text>
          </Text>

          <Text ta="center">
            ReelRanger is the ultimate movie management app! With a
            user-friendly interface, easily search for movies, find basic
            information on them, and add them to your watchlist.
          </Text>
        </Container>

        <Group position="center">
          <Button
            size="md"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            leftIcon={<IconBrandGithub size={20} />}
            onClick={() => signIn("github")}
          >
            Get started
          </Button>
        </Group>
      </Stack>
    </Center>
  );
};

export default UnaunthenticatedScreen;

