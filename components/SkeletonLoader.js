import { SimpleGrid, Skeleton } from "@mantine/core";

const SkeletonLoader = () => {
  return (
    <SimpleGrid columns={4} spacing="lg">
      <Skeleton height={250} />
      <Skeleton height={250} />
      <Skeleton height={250} />
      <Skeleton height={250} />
    </SimpleGrid>
  );
};

export default SkeletonLoader;

