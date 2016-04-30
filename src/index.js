'use strict';
var request = require('request');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

/**
* Class Facebook Msg Bot
* @class FacebookMsgBot
* @constructor
*/
var FacebookMsgBot = function(token){
  this.token = token;
};

util.inherits(FacebookMsgBot, EventEmitter);

/**
* Generates url with api path.
* @return {String} url
* @param {Number} sender
* @param {String} text
*/
FacebookMsgBot.prototype.sendTextMessage = function(sender, text, callback){
    messageData = {
     'text':text
   }
   request({
     'url': 'https://graph.facebook.com/v2.6/me/messages',
     'qs': {access_token:this.token},
     'method': 'POST',
     'json': {
       'recipient': {'id':sender},
       'message': messageData,
     }
   }, function(error, response, body) {
     if (error) {
       callback(error,null);
     } else if (response.body.error) {
       callback(response.body.error,null);
     }else{
       callback(null,response.body);
     }
   });
}
