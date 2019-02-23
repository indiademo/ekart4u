'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _userRouting = require('../app/user/user-routing');

var _userRouting2 = _interopRequireDefault(_userRouting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    var app = (0, _express2.default)();
    app.use((0, _cors2.default)());
    app.use(_bodyParser2.default.urlencoded({
        extended: true
    }));
    app.use(_bodyParser2.default.json());
    app.use('/', _userRouting2.default);
    return app;
};