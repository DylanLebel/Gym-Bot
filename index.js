const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');



var config = {
prefix: "//",
}
config.statusMessage = "video games | (" + config.prefix + "help)";

const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES] });

var Datamode = 0;



let customer = ["dumbbell curls","rope pull downs","rope pull ups","converging chest press","leg press","dips","calve raises","chin ups","lat pulldown wide overhand grip","leg extensions"]
fs.writeFile("./Excersises.json", JSON.stringify(customer, null, 4), err => {
	if (err) console.log(err)
});

client.on('messageCreate', async (message) => {
	
	if (Datamode === 1) {
		Data = message.content[3]
		//console.log(Data)
		/**		message.channel.messages.fetch({ limit: 2 })
			.then(messageMappings => {
				let messages = Array.from(messageMappings.values());
				console.log(messages.content)
				let previousMessage = messages[1];
				// do something with previous message
			})
			.catch(error => console.log(error))
			*/
		const Gcommand = require('./AddData.js')

		//const Gcommand = client.Gcommands.get(interaction.commandName);
		 const msg = message.content.split(" ")
		module.exports = { msg };
		console.log("Index msg " + msg)

		await Gcommand.execute(msg)


		//const args = message.content.slice(prefix.length).trim().split(/ +/g);
		//const msg= args.shift().toLowerCase();

		Total = msg.length
		//console.log(Total)


	}

	
})




client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	


	
	
	const filter = i => i.customId === 'PRIMARY' || 'SECONDARY' || 'DONE';

const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

collector.on('collect', async i => {
	if (i.customId === 'PRIMARY') {
		await i.update({ content: 'A button was clicked!', components: [] });
		
		const Gcommand = require('./commands/Gym/previous-workouts.js')

	//const Gcommand = client.Gcommands.get(interaction.commandName);

		
		await Gcommand.execute()
	}
});
	
	
	collector.on('collect', async i => {
		if (i.customId === 'SECONDARY') {
			const { MessageActionRow, MessageButton, MessageEmbed, Client } = require('discord.js');
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('DONE')
						.setLabel('DONE')
						.setStyle("DANGER"),
			)

			await i.update({ content: 'Enter Data', components: [row] });
			Datamode = 1;
			console.log(Datamode)
			const Gcommand = require('./commands/Gym/NewData.js')
	
		// Gcommand = client.Gcommands.get(interaction.commandName);
	
			
			await Gcommand.execute()
		}
	});
	collector.on('collect', async i => {
		if (i.customId === 'DONE') {
			await i.update({ content: 'Data Uploaded', components: [] });

			//const Gcommand = require('./commands/Gym/TEST.js')

			//const Gcommand = client.Gcommands.get(interaction.commandName);


			//await Gcommand.execute()
		}
	});
	collector.on('collect', async i => {
		if (i.customId === 'TEST') {
			await i.update({ content: 'A button was clicked!', components: [] });

			const Gcommand = require('./commands/Gym/TEST.js')

			//const Gcommand = client.Gcommands.get(interaction.commandName);


			await Gcommand.execute()
		}
	});


	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}


	

	

})

client.login(token);
