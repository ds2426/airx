## Features

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/) - more strict
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) - with async and sync use case
- [ESLint]
- [Material-UI]
- [Prettier](https://prettier.io/) - with editor configuration [file](./.vscode/settings.json)
- [Material React Table](https://www.material-react-table.com/)
- JS/TS native fetch get/post/put/delete [helpers](./src/common/request.ts)

## Available Scripts

In the project directory, you can run:

##### yarn dev

##### yarn build

##### yarn preview

##### yarn lint

##### yarn lint:fix

##### yarn prettier

##### yarn prettier:fix

##### yarn format

### Folder Structure

Folder structure should look like this;

```
src/

├── main.tsx
├── router.tsx
├── vite-env.d.ts
├── assets
│   ├── %image%.jpg
│   └── %icon%.svg
├── components
│   └── app
│      ├── index.tsx
│      ├── app.test.tsx
│   └── shared
│       └── %ParticalName%
│           ├── %ParticalName%.tsx
│           ├── %ParticalName%.test.tsx
├── hooks
├── types
├── store
│   ├── slices
│   │   ├── %module-name%.slice.ts
│   │   └── %module-name%.slice.ts
│   ├── hooks.ts
│   └── index.ts
├── utils
│   ├── request.ts
│   └── %util_name%.ts
```

### Styling

The project uses @mui/material sx prop and can also use @emotion css or styled components
using the sx prop is simple and doesnt require any extra setup.

### State Management

Redux toolkit was used for state management in the project. It is divided into redux slices to avoid complexity, ensure maintainability, and divide into domains. Use store (redux) for your global states, states that you will use at many different points, states that you will access and manage remotely.

Go to the `src/store/slices` folder. Open or create the slice file of the module whose state you will manage. If you have created a new slice, you must define it in the `src/store/index.ts` file.

### Linter / Eslint

The project has a strong linter configuration to ensure consistency and maintainability. It generally follows the airbnb and prettier configuration.

### Component Structure

All components in the project are created as functional component. Continuity should be ensured by not using class components unless needed.

### Testing

uses vitest and snapshot testing
