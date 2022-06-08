# Dynamic Sprites Experiment

Hackday experiment to try dynamically altering 2D game sprites on a HTML canvas.

Created by [Shaun A. Noordin](https://shaunanoordin.com).

## Experiment Lessons - Sprite Art

Canvas CSS scaling:
- If the `<canvas>`'s CSS width/height is scaled larger than its HTML
  width/height, use `canvas { image-rendering: pixelated }` to maintain the
  sharp edges of sprite art.

## How to Use

Start the web app by accessing `index.html` from your web browser. (Compatible with Chrome 102 and Firefox 101.)

## Development Notes

- This is a web app built on HTML5, JavaScript, and [Sass](https://sass-lang.com/)/CSS.
- Developing the web app requires [Node](https://nodejs.org/) and NPM installed on your machine and a handy command line interface. (Bash, cmd.exe, etc)

Project anatomy:

- Source JavaScript and Sass files are in the `/src` folder.
- Compiled JS and CSS files are in the `/app` folder.
- Media assets are meant to be placed in the `/assets` folder, but this is optional.
- Entry point is `index.html`.

Starting the project:

1. Install the project dependencies by running `npm install`
2. Run `npm start` to start the server, or `npm run dev` to start the server in dev mode (i.e. source files will be watched and changes compiled dynamically.)
3. Open `http://localhost:3000` on your web browser to view the app.
