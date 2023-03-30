import { useState } from "react";
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
} from "@mantine/core";
import Logo from "./Logo";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Header({ user }) {
  const { data: session } = useSession();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div>
      <Container bg="gray" fluid>
        <Container py={20}>
          <Group position="apart">
            <Logo />

            <Link
              href="/search"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Text>Search</Text>
            </Link>

            <Menu
              width={260}
              position="bottom-end"
              transition="pop-top-right"
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
            >
              <Menu.Target>
                <UnstyledButton>
                  <Group spacing={7}>
                    <Avatar
                      src={session?.user.image}
                      alt={session?.user.name}
                      radius="xl"
                      size={20}
                    />
                    <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                      {session?.user.name}
                    </Text>
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Link
                  href="/watchlist"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Menu.Item>Watchlist</Menu.Item>
                </Link>
                <Menu.Divider />

                <Menu.Label>Account Actions</Menu.Label>
                <Menu.Item
                  color="red"
                  onClick={() => signOut({ redirect: false })}
                >
                  Log out
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Container>
      </Container>
    </div>
  );
}

