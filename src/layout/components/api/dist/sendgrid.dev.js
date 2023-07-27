"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mail["default"].setApiKey(process.env.SENDGRID_API_KEY);

function sendEmail(req, res) {
  return regeneratorRuntime.async(function sendEmail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.status(200).json({
            error: ""
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

var _default = sendEmail;
exports["default"] = _default;