# create-react-app-modified
create-react-app that is modified to my preferred build tools to act as a boilerplate for future projects.

## Included functionality
npm start: spins up a webpack dev server that watches and transpiles on file changes
npm test: runs tape tests on all *.test.js files in /tests/ (recursive)
npm run build: builds production version of the app using create-react-app script

### React-redux
Basic store functionality is provided in redux-root/store.config.js

### React-router
Basic routing is set up. Base routes can be modified in router.config.js

### Stylus
Stylus support has been added using stylus-chokidar. **Make sure to import the filename.css NOT the filename.styl, as create-react-app
scripts still use the *.css files to build. I simply just have the stylus watch and transpile to css before create-react-app processes.

### TAPE testing
I ripped out Jest and replaced it with TAPE. TAPE is much more lightweight and I prefer to test business logic rather than UI elements. We
can add some react unit testing dependencies if we need to down the line.

### normalize.css
styles are normalized for better cross-browser support
