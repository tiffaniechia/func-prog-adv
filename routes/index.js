var express = require('express');
var router = express.Router();
var request = require('request');

var BASE_URL='https://api.mlab.com/api/1/databases/functional-prog-adventure/collections/adventures?';

router.get('/adventures/:title',function (req, res,next) {
    var parsedTitle = req.params.title.replace(/ |-/g,"%20");
    var MongoDBUrl = BASE_URL + 'q={%22title%22:%20%22'+ parsedTitle +'%22}&apiKey=' + process.env.API_KEY;
    var query;
    request(MongoDBUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            query = JSON.parse(body)[0];
            res.render('adventure', {title: query.title, story: query.story, link_to_code: query.code_adventure_url, link_to_answer: query.code_oracle_url });
        }
    });
});

router.get('/',function (req, res,next) {
    var MongoDBUrl = BASE_URL + '?f={%22title%22:1,%22_id%22:0}&apiKey=' + process.env.API_KEY;
    var query;
    request(MongoDBUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            query = JSON.parse(body);
            res.render('home', {list: query});
        }
    });
});

module.exports = router;

