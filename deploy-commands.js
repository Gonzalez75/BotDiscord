const { REST, ROUTES, Routes } = require("discord.js");

const ROUTES = 32;

const dotenv = require("dotenv");
const { error } = require("node:console");
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

const commands = [];

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
  try {
    console.log(`Resetando ${commands.length} comandos...`);

    const data = await rest.put(
      Routes.applicationCommands(CLIENT_ID, GUILD_ID),
      { body: commands }
    );
    console.log("Comandos registrados com sucesso!");
  } catch {
    console.error(error);
  }
})();
