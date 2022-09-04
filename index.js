const fs = require('fs');





const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');



var config = {
prefix: "//",
}
config.statusMessage = "video games | (" + config.prefix + "help)";

const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES] });

const filter = i => i.customId === 'PRIMARY' || 'SECONDARY' || 'DONE' || 'NEWE' || 'GRAPH' || 'Download';

var Datamode = 0;





client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


const channel  = client.channels.cache.get('973305189178175519');
client.on('interactionCreate', async interaction => {




	console.log("working")


	const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

	collector.on('collect', async i => {
		if (i.customId === 'PRIMARY') {
			await i.update({ content: 'A button was clicked!', components: [] });

			const Gcommand = require('./commands/Gym/previous-workouts.js')




			await Gcommand.execute()
		}

		if (i.customId === 'GRAPH') {
			const { MessageActionRow, MessageButton, MessageEmbed, Client } = require('discord.js');

			await i.update({ content: 'Input Excersise', components: [] });

			Datamode = 2;

		}

		if (i.customId === 'SECONDARY') {
			const { MessageActionRow, MessageButton, MessageEmbed, Client } = require('discord.js');
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('DONE')
						.setLabel('DONE')
						.setStyle("DANGER"),
					new MessageButton()
						.setCustomId('NEWE')
						.setLabel('NEW')
						.setStyle('SUCCESS'),
					new MessageButton()
						.setCustomId('LIST')
						.setLabel('LIST')
						.setStyle('PRIMARY')

				)

			await i.update({ content: 'Enter Data', components: [row] });

			const Gcommand = require('./commands/Gym/NewData.js')


			Datamode = 1;


			await Gcommand.execute()
		}

		if (i.customId === 'DONE') {
			await i.update({ content: 'Data Uploaded', components: [] });


			Datamode = 0

		}

		if (i.customId === 'Download') {
			await i.update({ content: 'A button was clicked!', components: [] });

			const Gcommand = require('./commands/Gym/Download')



			await Gcommand.execute(interaction)
		}

		if (i.customId === 'NEWE') {
			console.log("This is the current custom id: " + i.customId)
			console.log("1")

			i.update({ content: 'Input New Excercise', components: [] });

			console.log("2")
			Datamode = 3
			i.customId = "bob"

		}


		if (i.customId === 'LIST') {
			var Excel = require('exceljs');
			var workbook = new Excel.Workbook();

			const ar = []
			workbook.xlsx.readFile('new.xlsx')
				.then(function () {
					var worksheet = workbook.getWorksheet(1);
					worksheet.eachRow(function (row, rowNumber) {
						//console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values[1]));
						if (row.values[1] === undefined) { }
						else {
							ar.push((row.values[1]))
						}
						console.log(ar)
					});

				//	for (let op = 0; op < ar.length; op++) {


					interaction.followUp(JSON.stringify(ar))
				

							.then(interaction => {
								setTimeout(() => interaction.delete(), 200000 /*time unitl delete in milliseconds*/);
							})
					i.deferUpdate()
					//}
					})
			//return interaction.deferUpdate()
			i.customId = "random"
		
		}

	})


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

	client.on('messageCreate', async (message) => {
			if (message.author.bot) { }
			else {
				mesg = message.content.toUpperCase();
				console.log("this is message straight up " + message.content)
				mesge = message.content
				const msg = mesg.split(" ")
				module.exports = { msg, mesge };
				if (Datamode === 1) {
					Data = message.content[3]

					const Gcommand = require('./AddData.js')

				

					await Gcommand.execute(msg)



					Total = msg.length


				}
				if (Datamode === 2) {
					mesg = message.content.toUpperCase();
					const msg = mesg.split(" ")
					const Gcommand = require('./commands/Gym/Graph.js')
					await Gcommand.execute(msg)


				}




				if (Datamode === 3) {

					mesg = message.content.toUpperCase();
					const msg = mesg.split(" ")
					const Gcommand = require('./commands/Gym/NewE', './commands/Gym/NewData.js')
					await Gcommand.execute(msg, mesge)
	
					const { MessageActionRow, MessageButton, MessageEmbed, Client } = require('discord.js');
					const row = new MessageActionRow()
						.addComponents(
							new MessageButton()
								.setCustomId('DONE')
								.setLabel('DONE')
								.setStyle("DANGER"),
							new MessageButton()
								.setCustomId('NEWE')
								.setLabel('NEW')	
								.setStyle('SUCCESS'),
							new MessageButton()
								.setCustomId('LIST')
								.setLabel('LIST')
							.setStyle('PRIMARY')
						)

			


					console.log("I am Message" + message.content)
					var something = (message.content)
		
					Datamode = 1;

					await Gcommand.execute(something)
					console.log("Am I")


					await message.channel.send({ content: 'Enter Data', ephemeral: false, components: [row] });
						console.log("Repeating")
					//czxi.message.delete()
				}

			}		})
	
client.once('ready', () => {
	console.log('Ready!');
});
		
client.login(token);