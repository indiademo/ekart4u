import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import userrouting from '../app/user/user-routing'

module.exports = function(app) {
    var app = express();
    app.use(cors()); 
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use('/',userrouting)
    return app;
}
