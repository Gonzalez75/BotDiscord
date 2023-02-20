const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("Milior")
    .setDescription("Faz o Robozão falar que é o milior"),

  async execute(interaction) {
    await interaction.reply("Eu sou o Milior!!!");
  },
};
