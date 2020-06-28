const babel = require('babel-core');
const plugin = require('../.babelrc.js');
const exampleCode = `
let name = 'zhangsan';
console.log('test1');
console.log('test2');
`
const { code } = babel.transform(exampleCode, plugin );
console.log(code)