var express = require('express');
var router = express.Router();
var request = require('request');

var app = express();

function logger(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}

var base_url='https://api.mlab.com/api/1/databases/functional-prog-adventure/collections/adventures?';

router.get('/adventures/:title',function (req, res,next) {
    var parsedTitle = req.params.title.replace(/-/g,"%20");
    var MongoDBUrl = base_url + 'q={%22title%22:%20%22'+ parsedTitle +'%22}&apiKey=' + process.env.API_KEY;
    var query;
    request(MongoDBUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            query = JSON.parse(body);
            query = query[0];
            res.render('adventure', {title: query.title, story: query.story, link_to_code: query.code_adventure_url, link_to_answer: query.code_oracle_url });
        }
    });
});

router.get('/',function (req, res,next) {
    var MongoDBUrl = base_url + '?&f={%22title%22:1}&apiKey=' + process.env.API_KEY;
    var query;
    request(MongoDBUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            query = JSON.parse(body);
            query = query[0];
            res.render('home', list: query);
        }
    });
});

module.exports = router;

