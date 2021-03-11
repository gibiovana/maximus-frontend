# Maximus Application - maximus-frontend

# Introduction
 This is the frontend project from Maximus. The project is using [Material UI Components](https://material-ui.com/pt/components).

# First Steps

## Install Tools

**Code editing**: You can use the [Visual Studio Code to develop](https://code.visualstudio.com/) to develop.


**Code version control**: GIT
- Install GIT and clone the repo for the project in your machine:
- On the command line, in your project folder, execute the following command:

```git clone <URL for project, copy from buttom "Clone or download">```

After finish, you can enter on the folder and see the code.

*Hint: execute `code .` and your Visual Studio Code should be open.*

**Asynchronous JavaScript interpreter**: Install [Node.js](https://nodejs.org/en/)

**Package Management**: Chocolatey
- How to Install on the Windows: 
- Open "Power Shell" as Administrator. 
- Execute the following command:
```
Set-ExecutionPolicy Bypass -Scope Process -Force; `
  iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1')) 
```

After instalation, execute this command at "Power Shell" as Administrator:

```choco install yarn```

**Package manager**: Yarn
- After having the repo locally, run the following scripts:

``` yarn install ```

```yarn start```

They both can take a while but as soon as you're project is running you can count on React live reload.

# Scripts

In the project directory, you can run:

## `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

<br>

## `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<br>

## `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Testing Production Build:

`yarn build`

`npm install -g serve`

`serve -s build`

<br>
