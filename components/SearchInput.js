import { ActionIcon, TextInput } from "@mantine/core";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import React from "react";

function SearchInput({ value, onChange, isLoading, searchInputHandler }) {
  return (
    <TextInput
      value={value}
      onChange={onChange}
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="xl"
      size="md"
      disabled={isLoading}
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color="blue"
          variant="filled"
          onClick={() => searchInputHandler(value)}
          loading={isLoading}
        >
          <IconArrowRight size="1.1rem" stroke={1.5} />
        </ActionIcon>
      }
      placeholder="Search movies"
      rightSectionWidth={42}
    />
  );
}

export default SearchInput;

