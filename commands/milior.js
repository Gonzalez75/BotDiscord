const Discord = require('discord.js');
const client = new Discord.Client();
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  if (message.content === '!play') {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
      return message.reply('Você precisa estar em um canal de voz para usar este comando!');
    }


    const player = createAudioPlayer();

    const resource = createAudioResource('path/to/audio.mp3');


    player.play(resource);


    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });
    connection.subscribe(player);

    message.reply('Tocando áudio!');
  }
});

client.login('TOKEN');
