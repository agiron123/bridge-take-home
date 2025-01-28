export type Ability = {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  };
  
export type Move = {
    move: { name: string; url: string };
  };
  
export type PokemonType = {
    slot: number;
    type: { name: string; url: string };
  };
  
export type Stat = {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  };
  
export type PokemonDetails = {
    name: string;
    base_experience: number;
    sprites: { front_default: string };
    height: number;
    weight: number;
    moves: Move[];
    abilities: Ability[];
    types: PokemonType[];
    stats: Stat[];
    criies?: { latest: string; legacy: string };
    forms?: { name: string; url: string }[];
    game_indices?: { game_index: number; version: { name: string; url: string } }[];
  };
  
export type Sprite = {
    back_default?: string;
    front_default?: string;
    front_shiny?: string;
    front_shiny_female?: string;
    front_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    back_female?: string;
  };