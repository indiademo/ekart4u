'use strict';

var userCtrl = {};

userCtrl.getuser = function (err, result, next) {
    console.log('okkk');
    result.json({
        code: '200',
        message: 'sucess'
    });
};

module.exports = userCtrl;