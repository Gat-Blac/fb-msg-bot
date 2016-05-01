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
    var messageData = {
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

/**
* Generates message with template.
* @param {String} sender
* @param {String} messageData
*/

FacebookMsgBot.prototype.sendGenericMessage = function(sender, messageData, callback) {
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token:this.token},
    method: 'POST',
    json: {
      recipient: {id:sender},
      message: messageData,
    }
  }, function(error, response, body) {
    if (error) {
      callback(error,null);
    } else if (response.body.error) {
      callback(response.body.error,null);
    } else {
      callback(null,response.body);
    }
  });
}

/**
* Get information of the user.
* @param {String} id
*/
FacebookMsgBot.prototype.getProfile = function(id, isJson, callback) {
    request({
      method: 'GET',
      url: 'https://graph.facebook.com/v2.6/' + id,
      qs: {
        access_token: this.token
      },
      json: isJson
    }, function(error, response, body) {
      if (error) {
        callback(error,null);
      } else if (body.error) {
        callback(response.body.error,null);
      } else {
        callback(null,response.body);
      }
    })
  }

module.exports = FacebookMsgBot;
