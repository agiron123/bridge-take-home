'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Carousel } from '@mantine/carousel';
import {
  Accordion,
  Box,
  Container,
  Flex,
  LoadingOverlay,
  ScrollArea,
  Text,
  Title,
} from '@mantine/core';
import getCarouselItems from '@/components/Carouseltems/getCarouselItems';
import {
  AbilitiesList,
  MovesList,
  StatsList,
  TypesList,
} from '@/components/DetailLists/DetailLists';
import { PokemonDetails, Sprite } from '@/components/DetailLists/types';
import { getPokemonDetails } from '@/route-handlers/pokemon';

export default function Page() {
  const pathname = usePathname();
  const id = pathname.split('/')[2];

  const [data, setData] = useState<PokemonDetails | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        setIsPending(true);
        const data = await getPokemonDetails(id);
        setData(data);
      } catch (error) {
        setIsError(true);
        setError(error);
      } finally {
        setIsPending(false);
      }
    }
    fetchPokemonDetails();
  }, [id]);

  if (isError && error) {
    return <div>Error fetching pokemon details</div>;
  }

  if (isPending && !data) {
    return (
      <Box
        w="100%"
        h="100vh"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <LoadingOverlay visible={isPending} />
      </Box>
    );
  }

  const carouselItems = getCarouselItems(data?.sprites as Sprite, data?.name as string);

  return (
    <Container
      m="auto"
      w="100%"
      h="100vh"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Flex justify="flex-start" w="100%">
        <Link href="/">Home</Link>
      </Flex>
      <Title order={1}>
        {data?.name ? data.name.charAt(0).toUpperCase() + data.name.slice(1) : ''}
      </Title>
      {carouselItems && carouselItems.length > 0 && (
        <Carousel
          withIndicators
          height={200}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
          {carouselItems}
        </Carousel>
      )}

      <Flex direction="column" gap="md">
        <StatsList stats={data?.stats || []} />
        <Text>
          <strong>Height:</strong> {data?.height}
        </Text>
        <Text>
          <strong>Weight:</strong> {data?.weight}
        </Text>
        <Accordion variant="contained" w="250px">
          <Accordion.Item value="types">
            <Accordion.Control>
              <strong>Types</strong>
            </Accordion.Control>
            <Accordion.Panel>
              <ScrollArea h={200} w="100%">
                <TypesList types={data?.types || []} />
              </ScrollArea>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="moves">
            <Accordion.Control>
              <strong>Moves</strong>
            </Accordion.Control>
            <Accordion.Panel>
              <ScrollArea h={200} w="100%">
                <MovesList moves={data?.moves || []} />
              </ScrollArea>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="abilities">
            <Accordion.Control>
              <strong>Abilities</strong>
            </Accordion.Control>
            <Accordion.Panel>
              <ScrollArea h={200} w="100%">
                <AbilitiesList abilities={data?.abilities || []} />
              </ScrollArea>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Flex>
    </Container>
  );
}
