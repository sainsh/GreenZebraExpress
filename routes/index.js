var express = require('express');
var router = express.Router();
var Mailchimp = require('mailchimp-api-v3');
var mailchimp = new Mailchimp('1e967d7216a9b36ab5e29f6359d10ed0-us5');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.pug', { title: 'GREEN ZEBRA' });
});

router.post('/', function(req,res, next){
  console.log(JSON.stringify(req.body))
    mailchimp.post('/lists/3bb1070e53/members',{
      email_address:req.body.email, status:'subscribed'
    }).then(function(result) {
      console.log(result);
    })
})
module.exports = router;
