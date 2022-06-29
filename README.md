# JS Clean Architecture

[My tech talk](https://github.com/mat3e/talks/tree/master/docs/js-arch), [example slides](https://mat3e.github.io/talks/js-arch/charity.html#/)

## Context

* Focuses on React as this is the most popular solution looking at [weekly npm downloads](https://www.npmjs.com/package/react)
* It was like that almost since 2016, [evidence](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f) :D
* At the same time React doesn't have as many conventions as e.g. Angular (~framework vs. lib)

## Level 1 - Clean Code

### Single file level

* [Uncle Bob](https://stackoverflow.com/questions/1760850/best-practice-ordering-of-public-protected-private-within-the-class-definition/1760877#1760877): most important things on top
* [johnpapa/angular-styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#bindable-members-up-top) with similar hints
* TypeScript to introduce more hints on your APIs

## Level 2 - Clean Architecture

### Organizing files

* [Recommendation from Dan Abramov](https://react-file-structure.surge.sh/) :D
* [_LIFT_ in the previous Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#application-structure-lift-principle)
* [Folders-by-Feature](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#folders-by-feature-structure)
* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

### Files responsibility

* MVC
   * Model - external API & processing
   * View - JSX
   * Controller - `.service.ts`
* Exporting public APIs (available to use outside the directory) with `index.ts` files

## Level 3 - Clean System Architecture

### Introducing own packages

* Introduce `layout` part of the system
   * Treat it as a future design system
* Gradually introduce monorepos and actual external packages (when needed)
* Try to have self-sufficient subdirectories, easy to extract as packages
