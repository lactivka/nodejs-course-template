module.exports = {
  NO_ACTION:
    'Fatal: You should specify the action.\n\nUsage: --action ' +
    '<value> or -a <value>\n\nExample: -a encode',
  NO_SHIFT:
    'Fatal: You should specify the shift.\n\nUsage: --shift ' +
    '<value> or -s <value>\n\nExample: -s 5',
  WRONG_SHIFT: 'fatal: The shift should be a number.',
  WRONG_ACTION: 'fatal: The action should be "encode" or "decode"'
};
