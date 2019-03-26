[![Maintainability](https://api.codeclimate.com/v1/badges/bafb0fd8f655ebb8d78a/maintainability)](https://codeclimate.com/github/idempiere-micro-samples/iDempiere-Micro-React-Sample-Simple/maintainability)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dc44434f97a94f098327e5a77eccbe7a)](https://www.codacy.com/app/davidpodhola/iDempiere-Micro-React-Sample-Simple?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=idempiere-micro-samples/iDempiere-Micro-React-Sample-Simple&amp;utm_campaign=Badge_Grade)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The application is intentionally very simple and not polished (even ugly). It is created for [iDempiere](http://www.idempiere.org/) developers to see how [iDempiere micro](https://idempiere-micro.github.io/) can be used and how a simple [React](https://reactjs.org/) client can look like. It is not a production-ready application and does not even need to follow the best-practices of React development as simplicity is the most important factor here. This frontend is compatible with [the standalone iDempiere Micro Java 8 EE microservice](https://github.com/iDempiere-micro/idempiere-micro-liberty-standalone).

## Prerequisities

1. you must have the iDempiere 6.2 database up and running. You can use the [idempiere-docker-pgsql-6.2](https://github.com/iDempiere-micro/idempiere-docker-pgsql-6.1/tree/6.2).
2. you must have [the standalone iDempiere Micro Java 8 EE microservice](https://github.com/iDempiere-micro/idempiere-micro-liberty-standalone) up and running and connected to the iDempiere 6.2 database.
3. the source code in the project expects the microservice to be available at `http://localhost:9080/idempiere-micro-liberty-standalone/`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To explore other iDempiere Micro samples, visit the [iDempiere micro samples collection](https://github.com/idempiere-micro-samples).
