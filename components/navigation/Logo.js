import { Text } from "@mantine/core";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      style={{
        textDecoration: "none",
        color: "white",
      }}
    >
      <Text
        style={{
          cursor: "pointer",
        }}
        fz="lg"
        fw="bolder"
        fs="italic"
      >
        ReelRanger
      </Text>
    </Link>
  );
};

export default Logo;

