"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const SENDGRID_API_KEY =
//   "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";
// sendgrid.setApiKey(SENDGRID_API_KEY);
_mail["default"].setApiKey(process.env.SENDGRID_API_KEY); // sendgrid.setApiKey(SENDGRID_API_KEY);


function sendEmail(req, res) {
  return regeneratorRuntime.async(function sendEmail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_mail["default"].send({
            to: "inquiries@cryptech.services",
            // Your email where you'll receive emails
            from: "inquiries@cryptech.services",
            // your website email address here
            subject: "[CT Services] : ".concat(req.body.subject),
            //   message: `${req.body.fullname} ${req.body.message} ${req.body.email}`,
            html: "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"utf-8\">\n\n          <title>The HTML5 Herald</title>\n          <meta name=\"description\" content=\"The HTML5 Herald\">\n          <meta name=\"author\" content=\"SitePoint\">\n        <meta http-equiv=\"Content-Type\" content=\"text/html charset=UTF-8\" />\n\n          <link rel=\"stylesheet\" href=\"css/styles.css?v=1.0\">\n\n        </head>\n\n        <body>\n          <div class=\"img-container\" style=\"display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';\">\n                </div>\n                <div class=\"container\" style=\"margin-left: 20px;margin-right: 20px;\">\n                <h3>You've got a new mail from ".concat(req.body.fullname, ", sender's email is: \u2709\uFE0F").concat(req.body.email, " </h3>\n                <div style=\"font-size: 16px;\">\n                <p>Message:</p>\n                <p>").concat(req.body.message, "</p>\n                <br>\n                </div>\n                </div>\n        </body>\n        </html>")
          }));

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(_context.t0.statusCode || 500).json({
            error: _context.t0.message
          }));

        case 8:
          return _context.abrupt("return", res.status(200).json({
            error: ""
          }));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 5]]);
}

var _default = sendEmail;
exports["default"] = _default;