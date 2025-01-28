import { useRouter } from 'next/navigation';
import { Flex, Text } from '@mantine/core';

type PokemonListItemProps = {
  id: number;
  name: string;
};

export const PokemonListItem = ({ id, name }: PokemonListItemProps) => {
  const router = useRouter();

  return (
    <Flex gap="xs" mih={50} p="xs" onClick={() => router.push(`/pokemon/${id}`)}>
      <Text>{id}</Text>
      <Text>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
    </Flex>
  );
};

export default PokemonListItem;
