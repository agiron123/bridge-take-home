Note to Reviewer: 

When reviewing the code in this repository, it is recommended that you review the following stack of PRs:

1. List View Implementation:
https://github.com/agiron123/bridge-take-home/pull/2

2. Detail View Implenmentation:
https://github.com/agiron123/bridge-take-home/pull/3

3. Searching Functionality.
https://github.com/agiron123/bridge-take-home/pull/1

Each PR above builds upon the one before and should be easy to follow along.

I tried to go for a balasnce of speed and getting some nicer UI styling.
I also decided to use Next, which isn't my usual React framework. I had a couple hiccups initially getting used to things, but
found that the docs were quite smooth. 

If you've got any more questions, you can reach me here:
agiron123@gmail.com


--------------


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
