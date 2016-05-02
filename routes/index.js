var express = require('express');
var router = express.Router();
var request = require('request');

var app = express();

function logger(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}

router.get('/adventures/:title',function (req, res,next) {
    var title = req.params.title.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase();});
    var parsedTitle  = title.replace(/-/g,"%20");
    var MongoDBUrl = 'https://api.mlab.com/api/1/databases/functional-prog-adventure/collections/adventures?q={%22title%22:%20%22'+ parsedTitle +'%22}&apiKey=_t6ifED-gRfhDc3c2IEtK3_nZ5tQ2K2F';
    var query;
    request(MongoDBUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            query = JSON.parse(body);
            query = query[0];
            res.render('index', {title: query.title, story: query.story, link_to_code: query.code_adventure_url, link_to_answer: query.code_oracle_url });
        }
    });
});


module.exports = router;

