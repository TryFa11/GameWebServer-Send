const http = require("http");
const fs = require("fs"), rl = require("readline");
const {MessageEmbed,WebhookClient} = require('discord.js');
const port = 80;
const webhooksend = new WebhookClient({
    url: "YOUR WEBHOOK"
});
const server = http.createServer((req, res) => {
    if (req.url==='/api/send') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("");
        req.on("data", function(chunk) {
            const unpack = JSON.parse(chunk);
           if (unpack.name==='BLACKLIST WORD 1', 'BLACKLIST WORD 2') {
                return;
            } else if (unpack.id==='BLACKLIST WORD 1', 'BLACKLIST WORD 2') {
                return; 
            } else {
                webhooksend.send({
                "content": "",
                "tts": false,
                "embeds": [
                    {
                    "type": "rich",
                    "title": `Game logged`,
                    "url": `https://www.roblox.com/games/${unpack.id}`,
                    "description": "",
                    "color": 0xf5f9f9,
                    "fields": [
                        {
                        "name": `|Game-Name`,
                        "value": unpack.name,
                        "inline": true
                        },
                        {
                        "name": `Total-Players`,
                        "value": `Figure this out yourself`,
                        "inline": true
                        },
                        {
                        "name": `Total-Visits|`,
                        "value": `Figure this out yourself`,
                        "inline": true
                        }
                    ],
                    }
                ]
            });
             }
        })
    }
})
server.listen(port, () => {
  console.log(`http up`);
})