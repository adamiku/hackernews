# Hackernews minimal redesign

Simple React frontend application for Hackernews application. The official Hackernew API is used [link](https://github.com/HackerNews/API])

## React + TypeScript + Vite + Jest

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Architecture, design points

-   Mobile first, responsive layout approach with Shadcn and TailwindCSS
-   For data fetching, caching, retry logic, etc. I chose [RTK](https://tanstack.com/query/latest)
-   URL as single source of truth:
    -   Specific query can be bookmarked
    -   It is shareable
    -   It persists the query, after refresh, no additional state management or localstorage is needed
-   Feature-driven folder structure ([Screaming Architecture](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html))
-   Deployed to Github Pages
-   Used githooks with husky to automate processes like linting, testing, conventional commit forcing

## Improvements for the product

-   THE most important Light / Dark mode :)
-   implement proper navigation for other pages like comments/past/ask
-   implement authentication
-   add search functionality
-   social media sharing

## Improvements for the codebase

-   identify and cover the core functionalities with E2E tests (happy paths)
-   increase testing coverage and check coverage after each commit, write integration tests
-   create storybook for UI component and mix it with unit tests [link](https://storybook.js.org/docs/react/writing-tests/stories-in-unit-tests)
-   use Suspense and lazy load for heavy components
-   create a Contribute.md to highlight how someone can contribute to the project
-   add client side logging like [Sentry](https://sentry.io/welcome/)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
