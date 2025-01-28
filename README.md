# Mantine Next.js template

This is a template for [Next.js](https://nextjs.org/) app router + [Mantine](https://mantine.dev/).
If you want to use pages router instead, see [next-pages-template](https://github.com/mantinedev/next-pages-template).

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier


# Project Requirements

## Building a Pokedex

### API Reference
- PokéAPI - We'll be building a Pokedex application using this RESTful API.

### The Task
We want to help the next generation of Pokémon trainers become masters. So we'll be building a Pokedex for them that does the following at minimum:

1. Display a Paginated List of Pokémon that displays the:
   - Name
   - Index (or ID) 
   - Pagination Controls: Show a way to go to next/previous pages or otherwise load more Pokémon

2. Detailed Pokémon View:
   - On click or selection of a Pokémon from the list, show a details screen/modal/page that contains:
   - Name
   - Height + Weight
   - Abilities / Moves
   - Stats
   - Image of the Pokémon
   - Type(s)
   - Weaknesses based on their type
   - Link to any evolutions if applicable

3. Search by Name:
   - Allow searching for a Pokémon by its name (e.g., "pikachu")

4. Filter by Type:
   - Provide a way to filter the list by one or multiple types (e.g., Water, Fire)

### Requirements & Clarifications

#### Timeframe
- The time limit for this take home exercise is 1 day (24 hours)
  - Please commit all work to a github repository
  - The 24 hour time limit will start from when the document has been shared
- Don't aim for pixel-perfect styling over functionality, correctness, and code quality

#### Tech Stack
- TypeScript + React is preferred
- Feel free to use React (or another modern framework) along with any libraries/packages you like (e.g., for state management, routing, UI components)

#### Project Bootstrapping
- You can use tools like Create React App, Next.js, or any scaffold you're comfortable with

#### Architecture & Code
- Show how you structure your code (directories, components, hooks, etc.)
- We're looking for best practices and maintainable code:
  - Type safety with TypeScript
  - Clear separation of concerns (API calls vs. components)
  - Handling of loading/error states
- Optional Enhancement(s):
  - SSR (if using Next.js) or basic code-splitting
  - Storybook
  - End-to-End testing
  - Typed styles
  - Etc
- Testing:
  - Write unit tests for key parts of the application