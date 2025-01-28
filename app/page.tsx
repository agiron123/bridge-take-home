import { Container } from '@mantine/core';
import { PokemonListView } from '@/components/PokemonListView/PokemonListView';

export default function HomePage() {
  return (
    <Container>
      <PokemonListView />
    </Container>
  );
}
