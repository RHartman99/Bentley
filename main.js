require("dotenv").config();
const Command = require("discord.js-commando");
const path = require("path");
const token = process.env.TOKEN;
const client = new Command.Client({
  owner: process.env.OWNER_ID
});

client.registry
  .registerGroups([
    ["help", "Helpful commands"],
    ["mod", "Moderation commands"],
    ["other", "Miscellaneous commands"],
  ])
  .registerDefaults()
  .registerCommandsIn(path.join(__dirname, "commands"));

client.login(token);
client.on("ready", () => {
  console.info(`Logged in as ${client.user.tag}`);
  client.user.setPresence({
    status: "online",
    game: { name: "with consciousness" }
  });
});