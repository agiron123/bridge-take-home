'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Divider, Flex, Group, LoadingOverlay, Pagination, Text, TextInput, Button } from '@mantine/core';
import { getPokemonList } from '@/route-handlers/pokemon';
import { PokemonListItem } from './PokemonListItem';
import Link from 'next/link';

const PAGE_SIZE = 10;

export const PokemonListView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['pokemon', page],
    queryFn: () => getPokemonList(page, PAGE_SIZE),
  });

  if (isError) {
    console.error(error);
    return <div>Error fetching pokemon list: {error.message}</div>;
  }

  const handleSearch = () => {
    console.log(searchQuery);
  };

  return (
    <Box m="128px">
      <LoadingOverlay visible={isPending} />
      <Flex justify="space-between" gap="sm">
        <TextInput
          placeholder="Search Pokemon..."
          radius="md"
          size="md"
          w="85%"
          value={searchQuery}
          disabled={isPending}
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
        />
        <Button size="md" onClick={handleSearch}>
          Search
        </Button>
      </Flex>

      <Divider my="md" />

      <Box>
        {data?.results.map((pokemon: { name: string; url: string }, index: number) => {
          const id = (page - 1) * PAGE_SIZE + index + 1;
          return (
            <Link
              key={pokemon.name}
              href={`/pokemon/${id}`}
              style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }}
              prefetch={true}
            >
              <PokemonListItem id={id} name={pokemon.name} />
              <Divider my="sm" />
            </Link>
          );
        })}
      </Box>

      <Flex justify="center" mt="md">
        <Pagination total={Math.ceil(data?.count / PAGE_SIZE)} value={page} onChange={setPage} />
      </Flex>
    </Box>
  );
};