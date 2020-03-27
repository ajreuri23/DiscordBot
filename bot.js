// ------------------------------------------CONFIGURATION------------------------------------------
const { Client } = require("discord.js");
const { config } = require("dotenv");
const commands = require('./commands.js');

const client = new Client({
  disableEveryone: true
});

config({
  path: __dirname + "./env"
});

// ------------------------------------------CODE------------------------------------------
client.on("ready", () => {
  console.log("Im online!");

  client.user.setPresence({
    status: "Online",
    game: {
      name: "I'm getting developed",
      type: "WATCHING"
    }
  });
});

client.on("message", async message => {
  const prefix = "_";

  // Check if the message is correct
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  commands.checkCommand(cmd, message);
});

client.login("NjkyODE2NzQ1NzI3MDAwNjM3.Xn0D5A.9dzMNDwh1ZHgBeXQ_JjRZAedZ4M");
