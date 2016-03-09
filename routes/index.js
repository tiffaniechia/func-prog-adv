var express = require('express');
var router = express.Router();
var request = require('request');

var app = express();

function logger(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}

router.get('/the-burly-bearded-bartender',function (req, res,next) {
    var newurl = 'https://api.mlab.com/api/1/databases/functional-prog-adventure/collections/adventures?q={%22title%22:%20%22The%20Burly%20Bearded%20Bartender%22}&apiKey=_t6ifED-gRfhDc3c2IEtK3_nZ5tQ2K2F';
    var q, parsedStory;
    request(newurl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            q = JSON.parse(body);
            q = q[0];
            res.render('index', {title: q.title, story: q.story, link_to_code: q.code_adventure_url, link_to_answer: q.code_oracle_url });
        }
    });
});


module.exports = router;

