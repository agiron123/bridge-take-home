export type PokemonListResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
};

export async function getPokemonList(page: number, pageSize: number) {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${(page - 1) * pageSize}`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch pokemon list');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllPokemon(): Promise<PokemonListResponse> {
  // Quick way to get all of the pokemon so that we can search through them.
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1304`);
    if (!res.ok) {
      throw new Error('Failed to fetch all pokemon');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// TODO: Add type for PokemonDetails.
// This type is quite large, so we'll hold off for a bit to focus on the rest of the assessment :)
export async function getPokemonDetails(id: string) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch pokemon details');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPokemonByType(type: string) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    if (!res.ok) {
      throw new Error('Failed to fetch pokemon type');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
