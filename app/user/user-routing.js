'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userCtrl = require('./user-ctrl');

var _userCtrl2 = _interopRequireDefault(_userCtrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/api/getUser', _userCtrl2.default.getuser);

exports.default = router;