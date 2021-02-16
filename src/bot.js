require('dotenv').config();

const { Client } = require('discord.js');

const client = new Client();
const PREFIX = "$";

client.on('ready', () => {
    console.log(`${client.user.username} is online`);
})

client.on('message', (message) => {
    console.log(`[${message.author.username}]: ${message.content}`);
    if (message.content.startsWith(PREFIX)) {
        const [cmd, ...args] = message.content
            .substring(PREFIX.length)
            .trim()
            .split(/\s+/);
        console.log(`command: ${cmd}`);
        console.log(`args: ${args}`);
    }
})

client.login(process.env.BOT_TOKEN);