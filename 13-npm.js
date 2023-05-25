// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.jso - manifest file (stores important info about our project/package)
// manual approach (create package.json in the route, create properties etc.)
// npm init (step-by-step, press enter to skip)
// npm init -y (everything default)

// npm install - to install all dependencies

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello World!");
