import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

type Sprites = {
  back_default?: string;
  front_default?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  front_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  back_female?: string;
};

export function getCarouselItems(sprites: Sprites, name: string): React.ReactNode[] {
  if (!sprites) {
    return [];
  }

  const spriteUrls = [
    sprites.back_default,
    sprites.front_default,
    sprites.front_shiny,
    sprites.front_shiny_female,
    sprites.front_female,
    sprites.back_shiny,
    sprites.back_shiny_female,
    sprites.back_female,
  ].filter((sprite) => sprite !== null);

  return spriteUrls.map((sprite) => (
    <Carousel.Slide
      key={sprite}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        width: '200px',
      }}
    >
      <Image w="100%" h="100%" src={sprite} alt={name} />
    </Carousel.Slide>
  ));
}

export default getCarouselItems;
