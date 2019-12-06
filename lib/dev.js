'use strict';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var cimex = function cimex(message) {

  {
    var _ref = new Error(),
        stack = _ref.stack;

    var _stack$split$filter$s = stack.split(' ').filter(function (e) {
      return !['', 'at'].includes(e);
    }).slice(3),
        _stack$split$filter$s2 = _slicedToArray(_stack$split$filter$s, 2),
        functionName = _stack$split$filter$s2[0],
        filePathString = _stack$split$filter$s2[1];

    var _filePathString$repla = filePathString.replace('\n', '').replace(')', '').replace('(', '').split(':'),
        _filePathString$repla2 = _slicedToArray(_filePathString$repla, 2),
        filePath = _filePathString$repla2[0],
        line = _filePathString$repla2[1];

    console.log('-------- C I M E X --------');
    console.log("PATH     : ".concat(filePath));
    console.log("LINE     : ".concat(line));
    console.log("FUNCTION : ".concat(functionName));
    console.log("MESSAGE  : ".concat(message));
    console.log('---------------------------');
  }
};

module.exports = cimex;
