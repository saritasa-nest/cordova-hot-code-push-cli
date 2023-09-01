Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.writeFile = writeFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

const _fs = require('fs');

const _fs2 = _interopRequireDefault(_fs);

function writeFile(file, content) {
  return new Promise(function (resolve, reject) {
    var data = JSON.stringify(content, null, 2);
    _fs2['default'].writeFile(file, data, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}