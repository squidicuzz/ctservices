"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var nodemailer_1 = require("nodemailer");
// smtp mailer
var transporter = nodemailer_1["default"].createTransport({
    host: "" + process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    requireTLS: true,
    auth: {
        user: "" + process.env.SMTP_USERNAME,
        pass: "" + process.env.SMTP_PASSWORD
    }
});
var agents = [];
var cleanAgents = function () {
    var toRemove = [];
    for (var _i = 0, agents_1 = agents; _i < agents_1.length; _i++) {
        var agent = agents_1[_i];
        if (Date.now() > agent.stamp + 1000 * 60 * 10) {
            var index = agents.indexOf(agent, 0);
            toRemove.push(index);
        }
    }
    for (var _a = 0, toRemove_1 = toRemove; _a < toRemove_1.length; _a++) {
        var rem = toRemove_1[_a];
        agents.splice(rem, 1);
    }
};
var agentPassSpamCheck = function (req, res) {
    // clean agents
    cleanAgents();
    // get agent from request headers
    var forwarded = req.headers['x-forwarded-for'];
    var ip = forwarded
        ? forwarded.split(/, /)[0]
        : req.connection.remoteAddress;
    var fAgent = agents.find(function (a) { return a.ip == ip; });
    if (!fAgent) {
        // add new agent
        if (ip != undefined) {
            var accessor = {
                ip: ip,
                req_count: 0,
                stamp: Date.now()
            };
            agents.push(accessor);
        }
    }
    else {
        // decrement counter when valid req
        if (Date.now() > fAgent.stamp + 1000 * 10 && fAgent.req_count > 0) {
            fAgent.req_count -= 3;
        }
        if (Date.now() > fAgent.stamp + 1000 * 20 && fAgent.req_count > 0) {
            fAgent.req_count -= 5;
        }
        if (Date.now() > fAgent.stamp + 1000 * 40 && fAgent.req_count > 0) {
            fAgent.req_count -= 8;
        }
        if (Date.now() > fAgent.stamp + 1000 * 60 && fAgent.req_count > 0) {
            fAgent.req_count -= 13;
        }
        // increment counter if too often
        if (Date.now() - 400 < fAgent.stamp) {
            fAgent.req_count++;
        }
        if (Date.now() - 1000 * 1 < fAgent.stamp) {
            fAgent.req_count++;
        }
        if (Date.now() - 1000 * 3 < fAgent.stamp) {
            fAgent.req_count++;
        }
        if (Date.now() - 1000 * 5 < fAgent.stamp) {
            fAgent.req_count++;
        }
        fAgent.stamp = Date.now();
        // rate error
        if (fAgent.req_count > 3) {
            res.status(200).json({
                statusCode: 218,
                message: 'rate-error'
            });
            return false;
        }
    }
    return true;
};
// =========================
// send email api function
function sendEmail(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var info, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!agentPassSpamCheck(req, res)) {
                        console.log(agents);
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, transporter.sendMail({
                            from: "" + process.env.SMTP_USERNAME,
                            to: "inquiries@cryptech.services",
                            subject: "[CT Services] : " + req.body.subject,
                            // text: `${req.body.message}`, // plain text body
                            html: "<html>\n      <head>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n        <title>Cryptech Services</title>\n        <style>\n    @media only screen and (max-width: 620px) {\n      table.body h1 {\n        font-size: 28px !important;\n        margin-bottom: 10px !important;\n      }\n    \n      table.body p,\n    table.body ul,\n    table.body ol,\n    table.body td,\n    table.body span,\n    table.body a {\n        font-size: 16px !important;\n      }\n    \n      table.body .wrapper,\n    table.body .article {\n        padding: 10px !important;\n      }\n    \n      table.body .content {\n        padding: 0 !important;\n      }\n    \n      table.body .container {\n        padding: 0 !important;\n        width: 100% !important;\n      }\n    \n      table.body .main {\n        border-left-width: 0 !important;\n        border-radius: 0 !important;\n        border-right-width: 0 !important;\n      }\n    \n      table.body .btn table {\n        width: 100% !important;\n      }\n    \n      table.body .btn a {\n        width: 100% !important;\n      }\n    \n      table.body .img-responsive {\n        height: auto !important;\n        max-width: 100% !important;\n        width: auto !important;\n      }\n    }\n    @media all {\n      .ExternalClass {\n        width: 100%;\n      }\n    \n      .ExternalClass,\n    .ExternalClass p,\n    .ExternalClass span,\n    .ExternalClass font,\n    .ExternalClass td,\n    .ExternalClass div {\n        line-height: 100%;\n      }\n    \n      .apple-link a {\n        color: inherit !important;\n        font-family: inherit !important;\n        font-size: inherit !important;\n        font-weight: inherit !important;\n        line-height: inherit !important;\n        text-decoration: none !important;\n      }\n    \n      #MessageViewBody a {\n        color: inherit;\n        text-decoration: none;\n        font-size: inherit;\n        font-family: inherit;\n        font-weight: inherit;\n        line-height: inherit;\n      }\n    \n      .btn-primary table td:hover {\n        background-color: #34495e !important;\n      }\n    \n      .btn-primary a:hover {\n        background-color: #34495e !important;\n        border-color: #34495e !important;\n      }\n    }\n    </style>\n      </head>\n      <body style=\"background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;\">\n        <span class=\"preheader\" style=\"color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;\">Hi, " + req.body.fullname + " sent an email.</span>\n        <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"body\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;\" width=\"100%\" bgcolor=\"#f6f6f6\">\n          <tr>\n            <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top;\" valign=\"top\">&nbsp;</td>\n            <td class=\"container\" style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 75%; padding: 10px; width: 75%; margin: 0 auto;\" width=\"580\" valign=\"top\">\n              <div class=\"content\" style=\"box-sizing: border-box; display: block; margin: 0 auto; max-width: 75%; padding: 10px;\">\n    \n                <table role=\"presentation\" class=\"main\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;\" width=\"100%\">\n    \n                  <tr>\n                    <td class=\"wrapper\" style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;\" valign=\"top\">\n                      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;\" width=\"100%\">\n                        <tr>\n                          <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top;\" valign=\"top\">\n                            <p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;\">Hi there,</p>\n                            <p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;\">You've got a new mail from <b>" + req.body.fullname + "</b>, sender's email is: <b> " + req.body.email + "</b>.</p>\n                            <hr>\n                            <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"btn btn-primary\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%;\" width=\"100%\">\n                          <tbody>\n                            <tr>\n                              <td align=\"left\" style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;\" valign=\"top\">\n                        <p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;\">Message: </p>\n                        <p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;\">" + req.body.message + "</p>\n                      </td>\n                    </tr>\n                  </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n  \n                </table>\n    \n                <div class=\"footer\" style=\"clear: both; margin-top: 10px; text-align: center; width: 100%;\">\n                  <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;\" width=\"100%\">\n                    <tr>\n                      <td class=\"content-block\" style=\"font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;\" valign=\"top\" align=\"center\">\n                        <span class=\"apple-link\" style=\"color: #999999; font-size: 12px; text-align: center;\">Cryptech Services 2023</span>\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n    \n              </div>\n            </td>\n            <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top;\" valign=\"top\">&nbsp;</td>\n          </tr>\n        </table>\n      </body>\n    </html>" // html body
                        })];
                case 2:
                    info = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    // console.log(error);
                    return [2 /*return*/, res.status(error_1.statusCode || 500).json({ error: error_1.message })];
                case 4: return [2 /*return*/, res.status(200).json({ error: undefined })];
            }
        });
    });
}
exports["default"] = sendEmail;
