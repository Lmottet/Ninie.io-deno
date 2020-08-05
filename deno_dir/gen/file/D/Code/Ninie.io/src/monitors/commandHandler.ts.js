import { logger, cache } from "../../deps.ts";
import { config } from "../../config.ts";
import { botCache } from "../../mod.ts";
import { handleError } from "../utils/errors.ts";
export const commandHandler = async (message) => {
    if (message.author.bot)
        return;
    const prefix = parsePrefix(message.guildID);
    if (!message.content.startsWith(prefix))
        return;
    const [commandName, ...parameters] = message.content
        .substring(prefix.length)
        .split(" ");
    const command = parseCommand(commandName);
    if (!command)
        return;
    const guild = message.guildID ? cache.guilds.get(message.guildID) : undefined;
    logCommand(message, guild?.name || "DM", "Ran", commandName);
    const args = (await parseArguments(message, command, parameters));
    if (!args)
        return;
    try {
        const [argument] = command.arguments || [];
        if (!argument || argument.type !== "subcommand") {
            if (!(await commandAllowed(message, command, guild)))
                return;
            await command.execute(message, args);
            return logCommand(message, guild?.name || "DM", "Success", commandName);
        }
        const subcommand = parseSubcommand(command, args[argument.name]);
        if (!subcommand) {
            await command.execute(message, args);
            return logCommand(message, guild?.name || "DM", "Success", commandName);
        }
        if (!(await commandAllowed(message, subcommand, guild)))
            return;
        await subcommand.execute(message, args);
        logCommand(message, guild?.name || "DM", "Success", commandName);
    }
    catch (error) {
        logCommand(message, guild?.name || "DM", "Failed", commandName);
        logger.error(error);
        handleError(message, error);
    }
};
export const parsePrefix = (guildID) => {
    const prefix = guildID ? botCache.guildPrefixes.get(guildID) : config.prefix;
    return prefix || config.prefix;
};
export const parseCommand = (commandName) => {
    const command = botCache.commands.get(commandName);
    if (command)
        return command;
    const alias = botCache.commandAliases.get(commandName);
    if (!alias)
        return;
    return botCache.commands.get(alias);
};
export const logCommand = (message, guildName, type, commandName) => {
    logger.success(`[COMMAND:${commandName} - ${type}] by ${message.author.username}#${message.author.discriminator} in ${guildName}`);
};
async function parseArguments(message, command, parameters) {
    const args = {};
    if (!command.arguments)
        return args;
    let missingRequiredArg = false;
    const params = [...parameters];
    for (const argument of command.arguments) {
        if (!argument.type || argument.type === "string") {
            const [text] = params;
            const valid = argument.literals?.length && text
                ? argument.literals.includes(text.toLowerCase())
                    ? text
                    : undefined
                : undefined;
            if (valid) {
                args[argument.name] = argument.lowercase ? valid.toLowerCase() : valid;
                params.shift();
            }
            else {
                if (argument.defaultValue) {
                    args[argument.name] = argument.defaultValue;
                }
                else if (argument.required) {
                    missingRequiredArg = true;
                    argument.missing?.(message);
                    break;
                }
            }
            continue;
        }
        const resolver = botCache.arguments.get(argument.type || "string");
        if (!resolver)
            continue;
        const result = await resolver.execute(argument, params, message);
        if (result) {
            args[argument.name] = result;
            if (["...string"].includes(argument.type)) {
                break;
            }
            params.shift();
            continue;
        }
        if (argument.defaultValue)
            args[argument.name] = argument.defaultValue;
        else if (argument.required) {
            missingRequiredArg = true;
            argument.missing?.(message);
            break;
        }
    }
    return missingRequiredArg ? false : args;
}
function parseSubcommand(command, name) {
    if (!command.subcommands?.size || !name)
        return;
    const commandName = name.toLowerCase();
    const isCommand = command.subcommands.get(commandName);
    if (isCommand)
        return isCommand;
    const isAlias = botCache.commandAliases.get(`${command.name}-${commandName}`);
    if (isAlias)
        return command.subcommands.get(isAlias);
}
async function commandAllowed(message, command, guild) {
    const inhibitor_results = await Promise.all([...botCache.inhibitors.values()].map((inhibitor) => inhibitor(message, command, guild)));
    if (inhibitor_results.includes(true)) {
        logCommand(message, guild?.name || "DM", "Inhibibted", command.name);
        return false;
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tYW5kSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVcsTUFBTSxFQUFTLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLEtBQUssRUFBRSxPQUFnQixFQUFFLEVBQUU7SUFFdkQsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUc7UUFBRSxPQUFPO0lBRS9CLE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUFFLE9BQU87SUFHaEQsTUFBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLFVBQVUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1NBQ2pELFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ3hCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUdkLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU87SUFFckIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxL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