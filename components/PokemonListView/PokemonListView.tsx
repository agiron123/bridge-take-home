'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IconSearch, IconX } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import {
  Box,
  Button,
  Divider,
  Flex,
  LoadingOverlay,
  NativeSelect,
  Pagination,
  TextInput,
} from '@mantine/core';
import { getAllPokemon, getPokemonByType, getPokemonList } from '@/route-handlers/pokemon';
import { PokemonListItem } from './PokemonListItem';

const PAGE_SIZE = 10;

type SearchField = 'name' | 'type';

export const PokemonListView = () => {
  const [inputText, setInputText] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // By default, search by name
  const [searchField, setSearchField] = useState<SearchField>('name');
  const [page, setPage] = useState<number>(1);

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['pokemon-list', page],
    queryFn: () => getPokemonList(page, PAGE_SIZE),
    enabled: searchQuery.length === 0,
  });

  // Searching is a little tricky, as we'll need to fetch all of the pokemon and then filter them.
  // We're going to just make a call to the API to get all of the pokemon and then filter them.
  // But in prod, we'd want to avoid overfetching and call for just enough data.
  const {
    isPending: isSearching,
    data: searchResults,
    isError: isSearchError,
    error: searchError,
  } = useQuery({
    queryKey: ['pokemon-name', searchQuery, searchField],
    queryFn: () => getAllPokemon(),
    enabled: searchQuery.length > 0 && searchField === 'name',
  });

  const {
    isPending: isSearchingByType,
    data: searchResultsByType,
    isError: isSearchErrorByType,
    error: searchErrorByType,
  } = useQuery({
    queryKey: ['pokemon-type', searchQuery, searchField],
    queryFn: () => getPokemonByType(searchQuery),
    enabled: searchQuery.length > 0 && searchField === 'type',
  });

  if (isError || isSearchError || isSearchErrorByType) {
    console.error(error || searchError || searchErrorByType);
    return (
      <div>
        Error fetching pokemon list:{' '}
        {error?.message || searchError?.message || searchErrorByType?.message}
      </div>
    );
  }

  const handleSearch = () => {
    if (inputText.length > 0) {
      setSearchQuery(inputText);
    }
  };

  let filteredPokemon = data;
  let filteredResults = [];
  if (searchResults && searchQuery.length > 0 && searchField === 'name') {
    filteredResults = searchResults.results.filter((pokemon: { name: string; url: string }) => {
      return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    filteredPokemon = {
      results: filteredResults,
      count: filteredResults.length,
      next: null,
      previous: null,
    };
  } else if (searchResultsByType && searchQuery.length > 0 && searchField === 'type') {
    filteredResults = searchResultsByType.pokemon.map(
      (pokemon: { pokemon: { name: string; url: string } }) => pokemon.pokemon
    );
    filteredPokemon = {
      results: filteredResults,
      count: filteredResults.length,
      next: null,
      previous: null,
    };
  }

  return (
    <Box m="128px">
      <LoadingOverlay visible={isPending || isSearching || isSearchingByType} />
      <NativeSelect
        name="search-field"
        label="Search by:"
        mb="md"
        value={searchField}
        onChange={(event) => setSearchField(event.currentTarget.value as SearchField)}
        data={['name', 'type']}
      />
      <Flex justify="space-between" gap="sm">
        <TextInput
          placeholder={searchField === 'name' ? 'Search Pokemon...' : 'Search Type...'}
          radius="md"
          size="md"
          w="85%"
          value={inputText}
          disabled={isPending}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
          leftSection={<IconSearch />}
          rightSection={
            <IconX
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setInputText('');
                setSearchQuery('');
                setSearchField('name');
                setPage(1);
              }}
            />
          }
        />
        <Button size="md" onClick={handleSearch} style={{ minWidth: '100px', padding: '0' }}>
          Search
        </Button>
      </Flex>

      <Divider my="md" />

      <Box>
        {filteredPokemon?.results.map((pokemon: { name: string; url: string }, index: number) => {
          let itemIndex = (page - 1) * PAGE_SIZE + index + 1;
          const splitUrl = pokemon.url.split('/');
          itemIndex = parseInt(splitUrl[splitUrl.length - 2], 10);

          return (
            <Link
              key={pokemon.name}
              href={`/pokemon/${itemIndex}`}
              style={{ color: 'black', cursor: 'pointer' }}
              prefetch
            >
              <PokemonListItem id={itemIndex} name={pokemon.name} />
              <Divider my="sm" />
            </Link>
          );
        })}
      </Box>

      <Flex justify="center" mt="md">
        <Pagination
          total={Math.ceil(filteredPokemon?.count / PAGE_SIZE)}
          value={page}
          onChange={setPage}
        />
      </Flex>
    </Box>
  );
};
