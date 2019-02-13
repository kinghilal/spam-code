const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("538114262573252628")
setInterval(function() {
channel.send(`test test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test test
`);
}, 1)
})

client.login(process.env.BOT_TOKEN);
