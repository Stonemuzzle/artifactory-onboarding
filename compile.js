const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('index.pug');

pug.renderFile('index.pug')