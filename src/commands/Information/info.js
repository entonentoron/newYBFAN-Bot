const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Returns info based on input.')
        .addSubcommand(subcommand => 
            subcommand
                .setName("User")
                .setDescription("Gets information of a member mentioned.")),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
