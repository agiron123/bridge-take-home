'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Box, Divider, Flex, LoadingOverlay, Pagination, Text, TextInput } from '@mantine/core';
import { getPokemonList } from '@/route-handlers/pokemon';
import { PokemonListItem } from './PokemonListItem';

const PAGE_SIZE = 10;

export const PokemonListView = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['pokemon', page, searchQuery],
    queryFn: () => getPokemonList(page, PAGE_SIZE),
  });

  if (isError) {
    console.error(error);
    return <div>Error fetching pokemon list: {error.message}</div>;
  }

  return (
    <Box m="128px">
      <LoadingOverlay visible={isPending} />
      <TextInput
        placeholder="Search Pokemon..."
        radius="md"
        size="md"
        value={searchQuery}
        disabled={isPending}
        onChange={(event) => {
          const timeoutId = setTimeout(() => {
            setSearchQuery(event.target.value);
          }, 300);
          return () => clearTimeout(timeoutId);
        }}
      />

      <Box>
        {data?.results.map((pokemon: { name: string; url: string }, index: number) => (
          <Box
            key={pokemon.name}
            onClick={() => router.push(`/pokemon/${page * PAGE_SIZE + index}`)}
          >
            <PokemonListItem id={page * PAGE_SIZE + index} name={pokemon.name} />
            <Divider my="sm" />
          </Box>
        ))}
      </Box>

      <Pagination total={Math.ceil(data?.count / PAGE_SIZE)} value={page} onChange={setPage} />
    </Box>
  );
};
