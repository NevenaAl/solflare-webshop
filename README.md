# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

**Important**: To be able to run the app successfully, you need to create a `.env` file in the root folder of the app. The content of this file can be copied from the `.env.example` file.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note**: This is a one-way operation. Once you `eject`, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### `npm run lint`

This command will run the linter and check your code for the following:

- Syntax errors
- Style violations
- Best practices
- React-specific checks

## Project Structure

Here is a brief description of the project structure:

- **`api`** - Contains base clients (such as axios and react-query) setup, and all services, located in the `services` subfolder.
- **`assets`** - Contains all static images and icons needed by the app.
- **`components`** - Contains all modular UI parts of the app.
  - **`ui`** - A subfolder for small, reusable components that can be used in multiple places throughout the app.
  - **`layout`** - A subfolder for layout-related components (usually singleton components).
- **`context`** - Contains all context-related files.
- **`i18n`** - Contains base setup for the i18n library and all locale files, located in the `locales` subfolder.
- **`pages`** - Contains components that are tied to a specific route. They should handle most of the logic and serve as **containers**.
- **`router`** - Contains React Router setup.
- **`styles`** - Contains globally needed styles and **Material UI** theme setup.
  - **`variables`** - Contains SCSS and TypeScript versions of SCSS variables to unify the look and feel of the app.
- **`types`** - Shared application types.
- **`utils`** - Contains helper methods.
