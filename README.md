# neutrinos

Neutrinos is a tool for prototyping and visualizing beautiful graphs and concept maps.

For dev information and deploying, please visit the [wiki](https://github.com/dinganthony/neutrinos/wiki).

## Setup 

First thing: fork the repo.

After you've forked and cloned, make sure you have Node.js and `npm` downloaded:
```
node -v
npm -v
```
If not, you can find them online.

After, navigate into the `neutrinos` directory and install dependencies:
```
cd neutrinos
npm install
```
which will install the required dependencies in the `/node_modules` folder. *DO NOT COMMIT THIS*: it should be in the `.gitignore`.

To create a dev instance, run 
```
npm start
```
which will start the dev server and open a basic react app at `localhost:3000/` in your browser. You can exit the server normally with `Ctrl + C`.

To create a prod build, run
```
npm run build
```