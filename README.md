# React Native Expo Boilerplate

Welcome to the React Native Expo Boilerplate! This project serves as a starting point for building mobile applications using Expo, React Native, and various libraries that enhance functionality. This README file provides guidance on setting up and using this project effectively.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Testing](#testing)
- [Linting and Formatting](#linting-and-formatting)
- [Contributing](#contributing)
- [License](#license)

## Features

- Cross-platform mobile application using Expo.
- State management with Redux.
- Navigation using React Navigation.
- Linting and formatting using ESLint and Prettier.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) (optional but recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (install globally with `npm install -g expo-cli`)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-native-expo-boilerplate.git
   cd react-native-expo-boilerplate
   ```

2. Install the dependencies:
   If you are using Yarn:

```bash
yarn install
```

Or with npm:

```bash
npm install

```

3. Set up Husky hooks:
   npx husky install

4. Create your environment files based on your environment (development, staging, production):
   Copy .env.example to .env.development, .env.staging, and .env.production, and configure them as needed.

Usage
To start the development server, run:

```bash
npm start
```

Scripts
The following scripts are available in this project:

```bash
start: Start the Expo server.
reset-project: Reset the project by running the specified script.
android: Start the Expo server for Android.
ios: Start the Expo server for iOS.
web: Start the Expo server for web.
test: Run tests with Jest.
start:dev: Start the project with the development environment.
start:stage: Start the project with the staging environment.
start:prod: Start the project with the production environment.
lint: Run ESLint on the project files.
format: Format the code using Prettier.
format:check: Check code formatting with Prettier.
```
