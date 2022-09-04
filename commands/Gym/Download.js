const { Client, Collection, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports.execute = (interaction) => {


    //message.channel.send("Testing message.", { files: ["./new.xlsx"] });
    //  const channel = client.channels.cache.get('973305189178175519');
    interaction.channel.send({ content: 'Hello!', files: ["./new.xlsx"] });
    //   , { files: ["./new.xlsx"] }
    //  return workbook.xlsx.writeFile('new.xlsx');




}