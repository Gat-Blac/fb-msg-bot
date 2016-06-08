# fb-msg-bot
=========

[![npm package](https://nodei.co/npm/fb-msg-bot.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/fb-msg-bot/)

Librería que permite usar de manera mas facil la api de Facebook para crear bots de Messenger.
Permite las siguientes funcionalidades:
Enviar Mensaje de texto (sendTextMessage)
Enviar Mensaje Complejo (sendGenericMessage)
Obtener Perfil del usuario (getProfile)

## Instalación

  npm install fb-msg-bot --save

## Uso
### Enviar Mensaje de texto
Permite enviar un mensaje de texto por el bot de facebook pasando el id del usuario.
```javascript
var FacebookMsgBot = require('fb-msg-bot');
var facebookMsgBot = new FacebookMsgBot('YOUR_TOKEN');
facebookMsgBot.sendTextMessage('id_user', 'Hola Test', function(error,response){
  'use strict';
  if(error){
    console.log(error);
  }else{
    console.log(response);
  }
});
```
### Enviar Mensaje de texto generico.
```javascript
var FacebookMsgBot = require('fb-msg-bot');
var facebookMsgBot = new FacebookMsgBot('YOUR_TOKEN');
facebookMsgBot.sendGenericMessage('id_user', {'text':'Hola'}, function(error,response){
  'use strict';
  if(error){
    console.log(error);
  }else{
    console.log(response);
  }
});
```
### Obtener Perfil.
```javascript
var FacebookMsgBot = require('fb-msg-bot');
var facebookMsgBot = new FacebookMsgBot('YOUR_TOKEN');
facebookMsgBot.getProfile('id_user', function(error,response){
  'use strict';
  if(error){
    console.log(error);
  }else{
    console.log(response);
  }
});
```

# References

- [Webpage API](http://www.gat-blac.com)

## Release History

* 1.0.0 Initial release
