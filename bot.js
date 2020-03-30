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

  client.user.setActivity('Im getting developed', {type:0});
});

client.on("message", async message => {
  const prefix = "_";

  // Check if the message is correct
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  const messageFormatted = message.content.split(' ').slice(1).join(' ');
  await commands.checkCommand(cmd, message,messageFormatted);
});

client.login("NjkyODE2NzQ1NzI3MDAwNjM3.Xn7CpA.lc6vHsXfqJEhAHDOUNZ3kjdx-tI");
