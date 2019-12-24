import App from './App';

App.loadAssets()
  .then(() => {
    const app = new App();
    app.setup();
    app.run();
  });
