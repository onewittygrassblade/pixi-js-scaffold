# PixiJS Scaffold

This repo is intended as boilerplate code for PixiJS apps. Fairly opinionated as this is the approach I have been taking so far. Running the code as is will only render an empty stage, 910x512 px in size, centered on a dark grey background.

## Use

Clone the repo:
```
git clone https://github.com/onewittygrassblade/pixi-js-scaffold.git
```
or
```
git clone git@github.com:onewittygrassblade/isogame.git
```

Install the Node packages (use either `npm` or `yarn` in the following commands):
```
npm install
```

Run in development mode:
```
npm run dev
```
and open `http://localhost:8080/` in a browser.

Build bundled javascript for production (output `bundle.js` will be generated in `dist` folder):
```
npm run build
```

Run ESLint on `src` directory:
```
npm run lint
```

# Structure

All the javascript source code lives in the `src` directory. The entrypoint is `src/index.js`, which basically loads the assets and instantiates and runs the app. The app itself (`src/App.js`) inherits from `PIXI.Application` and has three main parts:
* A static function, `loadAssets`, which uses PixiJS's loader to load the assets and returns a promise.
* The `setup` function, which sets up core elements like the view and event listeners. This is also where the initial state of the app will be rendered by appending children to the stage, e.g. by instantiating a world or pushing the first state of a state stack.
* The `run` function, which uses PixiJS's ticker and does basically two things: process input (events) and update the game (e.g. a world or a state stack).

Also in the `src` folder:
* A helper, `centerCanvas`, useful to keep the view centered in the window.
* Constants, including aliases for PixiJS's classes (very likely to need additions in real projects).

The source code is transpiled with Babel and bundled with Webpack. For local development, Webpack Dev Server is used.

All the necessary elements for distribution live in the `dist` folder. The app's view is appended to the minimal `dist/index.html`. Assets such as images, sounds and fonts should also live in this folder.

# Common elements not (currently) in this scaffold

The goal for now is to keep this template simple. The elements below are commonly used in games.

* State stack and common states (title, game, game over, pause).
* GUI manager.
* Music manager.
* Pub-sub system.
