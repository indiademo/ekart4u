"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _express = require("./config/express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.listen(2000, function () {
    console.log("Server listening to port:", 2000);
});

exports.app = app;