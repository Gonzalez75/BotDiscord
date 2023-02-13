const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("siuuu")
    .setDescription("Faz o Robozão comemorar"),

  async execute(interaction) {
    await interaction.reply("Siuuu!!!");
  },
};
