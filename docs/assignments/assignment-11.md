# Assignment 11 - Modularization

## Part 1 - ECMAScript Modules
Use ECMAScript modules to divide your code into modules.

1. Refactor your `script.js` into 3 modules `script.js`, `modules/chat.js` and `modules/messages.js` (all within 
`frontend/`), such that
    1. `messages.js` contains the `Message` classes, 
    2. `chat.js` contains the `Chat` class
    3. `script.js` contains the bootstrapping
2. Add necessary `import` `export` statements to define the dependencies. (You may also use `export default` if you want 
to.)
3. In `index.html` declare your `script.js` to be a `module`, using the `type="module"` attribute at the 
corresponding script tag. 
4. Check the result in the browser
5. Try to remove the surrounding `addEventListener('load',...)` call and see what happens. Can you explain this?
 

## Part 2 - Bundling
Bundle your modules to create a production version of your code.

1. Use rollup to create a bundle:
    1. Move your `*.js` files into the folder `frontend/src`.
       Move your `*.html` file into the folder `frontend/dist`.
    2. Install the rollup bundler using `npm install rollup`. See https://rollupjs.org and 
    https://docs.npmjs.com/cli/install for further information
    3. Bundle your modules to an ESM bundle `dist/bundles.js` using rollup's command line interface (CLI).  Check your 
    created bundle, if it looks ok.
    Hint 1: The first parameter of `rollup` is your entry point module.  
    Hint 2: You will further need the output (`-o`) and the format (`-f`) option.  
    Hint 3: See https://rollupjs.org/guide/en/#creating-your-first-bundle and 
    https://rollupjs.org/guide/en/#core-functionality and  for more
    4. In `index.html` change the included script to be the `bundle.js` instead of `script.js`. Do you have to keep the 
    `type="module"` attribute or do you have to remove it?
    5. Check in the browser that `index.html` actually works.
    6. Add the rollup command to the scripts section of your `package.json` with the name `"build"`. Test it with 
    `npm run build`.
2. Optionally: To ease up development, you can use the package `npm-run-all` to build your bundle and start you're 
server within one command. Furthermore, you can use rollup's watch option (`-w`) to rebuild the bundle automatically 
upon file changes.
