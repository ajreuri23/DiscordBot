const axios = require("axios");
const {getReuqest, postRequest} = require('./api.js');
const commands = [
  "**_avatar**: It shows you your ugly ass picture on Discord",
  "**_kanye**: It gives a random quote of the king itself, Kanye West",
  "**_fact**: It makes you smarter you stupid ass bitch",
  "**_quote**: It gives you a random quote of one of this server member",
  "**_addquote**: You can add a quote everytime someone says something stupid **Dont forget to write who said that quote**"
]

const checkCommand = async (command, message, messageFormatted) => {
  switch (command) {
    case "help": {
      let message = "";

      for(let singleCommand in commands) {
        message += singleCommand;
        message += "\n";
      }
    }
    case "avatar": {
      sendMessage(message.author.displayAvatarURL())
      break;
    }
    case "kanye": {
      let result = await getReuqest("https://api.kanye.rest");
      result = result.quote; 
      sendMessage("Kanye says: " + result);

      break;
    }
    case "fact": {
      let result = await getReuqest("https://uselessfacts.jsph.pl/random.json?language=en");
      result = result.text;
      sendMessage(result);

      break;
    }
    case "quote": {
      let result = await getReuqest("http://127.0.0.1:9000");
      result = result.quote;
      sendMessage(result);

      break;
    }
    case "addquote": {
      const quote = {
        quote: messageFormatted
      };

      if (messageFormatted.length > 0) {
        if(postRequest("http://127.0.0.1:9000", quote)) {
          sendMessage("Added that quote you motherfucker son of a bitch");
        } else {
          sendMessage("I'm sorry my nigga, but i can't add that quote for some reason, ask that Shachar guy or whatever his name is");
        }
        
      } else {
        sendMessage("Can't add an empty quote m'nigga, you tryna fool me?")
      }

      break;
    }
    default: {
      sendMessage("Dude wtf did you just write");

      break;
    }
  }
};

const sendMessage = (message) => {
  message.channel.send(message).catch(err => {
    console.log("There was an error in sending a message");
  });
}

module.exports = { checkCommand };
