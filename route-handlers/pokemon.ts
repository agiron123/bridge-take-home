export async function getPokemonList(page: number, pageSize: number) {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${(page - 1) * pageSize}`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch pokemon list');
    }

    const data = await res.json();
    console.log('data', data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
