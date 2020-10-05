const args = require('minimist')(process.argv.slice(2));

module.exports = {
  input: args.i || args.input,
  output: args.o || args.output,
  action: args.a || args.action,
  shift: args.s || args.shift
};
