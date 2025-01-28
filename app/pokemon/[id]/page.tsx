import { Box, Flex, Image, Text } from '@mantine/core';

const data = {
  name: 'Pikachu',
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  height: 4,
  weight: 60,
  abilities: [{ ability: { name: 'Static' } }],
  types: [{ type: { name: 'Electric' } }],
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  console.log('id', id);
  console.log('params', params);

  return (
    <Box>
      <Text>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Text>
      <Image src={data.sprites.front_default} alt={data.name} />
      <Flex direction="column">
        <Text>Height: {data.height}</Text>
        <Text>Weight: {data.weight}</Text>
        <Text>
          Abilities: {data.abilities.map((ability: any) => ability.ability.name).join(', ')}
        </Text>
        <Text>Types: {data.types.map((type: any) => type.type.name).join(', ')}</Text>
      </Flex>
    </Box>
  );
}
