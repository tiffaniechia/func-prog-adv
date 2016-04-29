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

router.get('/everything-disney-said-was-a-lie',function (req, res,next) {
    var newurl = 'https://api.mlab.com/api/1/databases/functional-prog-adventure/collections/adventures?q={%22title%22:%20%22Everything%20Disney%20Said%20Was%20A%20Lie%22}&apiKey=_t6ifED-gRfhDc3c2IEtK3_nZ5tQ2K2F';
    var q, parsedStory;
    request(newurl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            q = JSON.parse(body);
            q = q[0];
            res.render('index', {title: q.title, story: q.story, link_to_code: q.code_adventure_url, link_to_answer: q.code_oracle_url });
        }
    });
});

router.get('/how-does-a-sphinx-have-a-boob-job',function (req, res,next) {
    var newurl = 'https://api.mlab.com/api/1/databases/functional-prog-adventure/collections/adventures?q={%22title%22:%20%22How%20Does%20A%20Sphinx%20Have%20A%20Boob%20Job%22}&apiKey=_t6ifED-gRfhDc3c2IEtK3_nZ5tQ2K2F';
    var q, parsedStory;
    request(newurl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            q = JSON.parse(body);
            q = q[0];
            res.render('index', {title: q.title, story: q.story, link_to_code: q.code_adventure_url, link_to_answer: q.code_oracle_url });
        }
    });
});

router.get('/curryate-kid',function (req, res,next) {
    var newurl = 'https://api.mlab.com/api/1/databases/functional-prog-adventure/collections/adventures?q={%22title%22:%20%22Curryate%20kid%22}&apiKey=_t6ifED-gRfhDc3c2IEtK3_nZ5tQ2K2F';
    var q, parsedStory;
    request(newurl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            q = JSON.parse(body);
            q = q[0];
            res.render('index', {title: q.title, story: q.story, link_to_code: q.code_adventure_url, link_to_answer: q.code_oracle_url });
        }
    });
});


router.get('/heroin-bricks-and-rainbow-coloured-meth',function (req, res,next) {
    var newurl = 'https://api.mlab.com/api/1/databases/functional-prog-adventure/collections/adventures?q={%22title%22:%20%22Heroin%20Bricks%20and%20Rainbow%20Coloured%20Meth%22}&apiKey=_t6ifED-gRfhDc3c2IEtK3_nZ5tQ2K2F';
    var q, parsedStory;
    request(newurl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            q = JSON.parse(body);
            q = q[0];
            res.render('index', {title: q.title, story: q.story, link_to_code: q.code_adventure_url, link_to_answer: q.code_oracle_url });
        }
    });
});

router.get('/you-cannot-cry-td-away',function (req, res,next) {
    var newurl = 'https://api.mlab.com/api/1/databases/functional-prog-adventure/collections/adventures?q={%22title%22:%20%22You%20Cannot%20Cry%20TD%20Away%22}&apiKey=_t6ifED-gRfhDc3c2IEtK3_nZ5tQ2K2F';
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

