import { Box, Text } from '@mantine/core';
import { Ability, PokemonType, Stat } from './types';
import { Move } from './types';

// TODO: Refactor these to make more generic and reusable.
export const MovesList = ({ moves }: { moves: Move[] }) => {
    return (
        <Box>
            {moves.map((move: Move, index: number) => (
                <Text key={`move-${index}`} ml="md">{move.move.name}</Text>
            ))}
        </Box>
    );
};


const getStatName = (stat: Stat) => {
    switch (stat.stat.name) {
        case 'hp':
            return 'HP';
        case 'attack':
            return 'Attack';
        case 'defense':
            return 'Defense';
        case 'special-attack':
            return 'Special Attack';
        case 'special-defense':
            return 'Special Defense';
        case 'speed':
            return 'Speed';
        default:
            return stat.stat.name;
    }
}

export const StatsList = ({ stats }: { stats: Stat[] }) => {
    return (
        <Box>
            {stats.map((stat: Stat, index: number) => (
                <Text key={`stat-${index}`}><strong>{getStatName(stat)}:</strong> {stat.base_stat}</Text>
            ))}
        </Box>
    );
};

export const TypesList = ({ types }: { types: PokemonType[] }) => {
    return (
        <Box>
            {types.map((type: PokemonType, index: number) => (
                <Text key={`type-${index}`} ml="md">{type.type.name}</Text>
            ))}
        </Box>
    );
};

export const AbilitiesList = ({ abilities }: { abilities: Ability[] }) => {
    return (
        <Box>
            {abilities.map((ability: Ability, index: number) => (
                <Text key={`ability-${index}`} ml="md">{ability.ability.name}</Text>
            ))}
        </Box>
    );
};