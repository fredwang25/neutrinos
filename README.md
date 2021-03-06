# neutrinos

Neutrinos is a tool for prototyping and visualizing graphs and concept maps. The name was inspired by a recent discovery of a beuatiful mathematical formula for relating eigenvectors and eigenvalues through observing neutrino behavior.

For dev information and deploying, please visit the [wiki](https://github.com/dinganthony/neutrinos/wiki).

## Setup 

First thing: fork this repository and then clone onto your computer.

Navigate into the `neutrinos` directory and add `dinganthony`'s repo as upstream:
```
cd neutrinos
git remote add upstream https://github.com/dinganthony/neutrinos.git
```
Please do not push to `dinganthony/neutrinos`, but you can pull to stay in sync of changes (through `git pull upstream master`).

Then, make sure you have Node.js and `npm` downloaded:
```
node -v
npm -v
```
If not, you can find them online.

After, you can install core dependencies:
```
npm install
```
which will install the required dependencies in the `/node_modules` folder. *DO NOT COMMIT THIS*: it should be in the `.gitignore`.

We will be using [D3.js](https://d3js.org) for force chart logic and visualizations. To install D3.js run:
```
npm install d3-force
```

## Development

To create a dev instance, run 
```
npm start
```
which will start the dev server and open a basic react app at `localhost:3000/` in your browser. You can exit the server normally with `Ctrl + C`.

To create a prod build, run
```
npm run build
```
