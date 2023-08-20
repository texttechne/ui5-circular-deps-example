# UI5 App Demonstrating Issue with Circular Deps

This repo demonstrates the issue of circular dependencies in TypeScript sources.

The example:
- `App.controller.ts` imports file `CircularDeps.ts`
- `CircularDeps.ts` import two dependencies (`circular-deps/A.ts` & `circular-deps/B.ts`)
- both dependencies import each other

## Setup
`npm install`

## Shown Error
When starting the server (`npm run start`) or 

```
Failed to load component for container __container0 - ModuleError: Failed to resolve dependencies of 'org/odata2ts/trippin/App.controller.js'
 -> 'org/odata2ts/trippin/CircularDeps.js'
  -> 'org/odata2ts/trippin/circular-deps/B.js': failed to execute module factory for ''org/odata2ts/trippin/circular-deps/B.js'': ___A is undefined  
 ModuleError: Failed to resolve dependencies of 'org/odata2ts/trippin/App.controller.js'
```