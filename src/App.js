import {
  loader,
  resources,
  Application,
} from './const/aliases';

import centerCanvas from './helpers/centerCanvas';

import {
  RENDERER_WIDTH,
  RENDERER_HEIGHT,
} from './const/app';

export default class App extends Application {
  constructor() {
    super({ width: RENDERER_WIDTH, height: RENDERER_HEIGHT, backgroundColor: 0xababab });
  }

  boot() {
    // Set view
    document.getElementById('root').appendChild(this.view);

    centerCanvas(this.view);
    window.addEventListener('resize', () => {
      centerCanvas(this.view);
    });

    // Load assets
    loader
      // .add('images/assets.json')
      .on('progress', () => {})
      .on('error', () => {})
      .load(this.handleLoadComplete.bind(this));
  }

  handleLoadComplete() {
    // Create event collectors
    this.events = [];
    // this.view.addEventListener(
    //   'mousedown', // keydown, keyup
    //   (e) => this.events.push(e),
    //   false
    // );

    // Set game loop
    // PIXI.Ticker uses a ratio that is 1 if FPS = 60, 2 if FPS = 2, etc.
    this.ticker.add((fpsRatio) => {
      this.processInput();
      // something.update((fpsRatio * 1000) / 60); // time per frame = 1000 / 60 ms // something could be the state stack or the world
    });

    // scene
    // const { textures } = resources['images/assets.json'];
    // this.stage.addChild(...); // or instantiate world or push first state to state stack;
  }

  processInput() {
    while (this.events.length) {
      // something.handleEvent(this.events[0]); // something could be the state stack or the world
      this.events.shift();
    }
  }
}
