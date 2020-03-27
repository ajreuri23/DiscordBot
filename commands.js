const axios = require('axios');

const checkCommand = async (command, message) => {
  switch (command) {
    case "avatar": {
      message.channel.send(message.author.displayAvatarURL());
      break;
    }
    case "kanye": {
        let result = await axios.get("https://api.kanye.rest").then((res) => {
            return res.data.quote;
        }).catch(err => {
            console.log("error");
        })
        
        message.channel.send("Kanye says: " + result).catch(err => {
            console.log("error");
        });

        break;
    }
    case "fact": {
        let result = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en").then((res) => {
            return res.data.text;
        }).catch(err => {
            console.log("error");
        })
        
        message.channel.send(result).catch(err => {
            console.log("error");
        });

        break;
    }
    default: {
      message.channel.send("Dude wtf did you just write");
      break;
    }
  }
};

module.exports ={ checkCommand };
