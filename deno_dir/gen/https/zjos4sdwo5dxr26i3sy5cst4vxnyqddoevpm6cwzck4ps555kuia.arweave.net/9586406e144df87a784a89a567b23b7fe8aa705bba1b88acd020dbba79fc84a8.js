let VERSION = "v7";
export const baseEndpoints = {
    BASE_URL: `https://discord.com/api/${VERSION}`,
    CDN_URL: "https://cdn.discordapp.com",
};
export function changeAPIVersion(number = 7) {
    VERSION = `v${number}`;
}
const GUILDS_BASE = (id) => `${baseEndpoints.BASE_URL}/guilds/${id}`;
export const endpoints = {
    GATEWAY_BOT: `${baseEndpoints.BASE_URL}/gateway/bot`,
    CHANNEL: (id) => `${baseEndpoints.BASE_URL}/channels/${id}`,
    CHANNEL_MESSAGE: (id, messageID) => `${baseEndpoints.BASE_URL}/channels/${id}/messages/${messageID}`,
    CHANNEL_MESSAGES: (id) => `${baseEndpoints.BASE_URL}/channels/${id}/messages`,
    CHANNEL_PINS: (id) => `${baseEndpoints.BASE_URL}/channels/${id}/pins`,
    CHANNEL_BULK_DELETE: (id) => `${baseEndpoints.BASE_URL}/channels/${id}/messages/bulk-delete`,
    CHANNEL_INVITES: (id) => `${baseEndpoints.BASE_URL}/channels/${id}/invites`,
    CHANNEL_WEBHOOKS: (id) => `${baseEndpoints.BASE_URL}/channels/${id}/webhooks`,
    CHANNEL_MESSAGE_REACTION_ME: (id, messageID, emoji) => `${baseEndpoints.BASE_URL}/channels/${id}/messages/${messageID}/reactions/${emoji}/@me`,
    CHANNEL_MESSAGE_REACTIONS: (id, messageID) => `${baseEndpoints.BASE_URL}/channels/${id}/messages/${messageID}/reactions`,
    CHANNEL_MESSAGE_REACTION: (id, messageID, emoji) => `${baseEndpoints.BASE_URL}/channels/${id}/messages/${messageID}/reactions/${emoji}`,
    GUILD: (id) => `${GUILDS_BASE(id)}`,
    GUILD_AUDIT_LOGS: (id) => `${GUILDS_BASE(id)}/audit-logs`,
    GUILD_BAN: (id, userID) => `${GUILDS_BASE(id)}/bans/${userID}`,
    GUILD_BANS: (id) => `${GUILDS_BASE(id)}/bans`,
    GUILD_BANNER: (id, icon) => `${baseEndpoints.CDN_URL}/banners/${id}/${icon}`,
    GUILD_CHANNELS: (id) => `${GUILDS_BASE(id)}/channels`,
    GUILD_CHANNEL: (id) => `${baseEndpoints.BASE_URL}/channels/${id}`,
    GUILD_EMBED: (id) => `${GUILDS_BASE(id)}/widget`,
    GUILD_EMOJI: (id, emoji_id) => `${GUILDS_BASE(id)}/emojis/${emoji_id}`,
    GUILD_EMOJIS: (id) => `${GUILDS_BASE(id)}/emojis`,
    GUILD_ICON: (id, icon) => `${baseEndpoints.CDN_URL}/icons/${id}/${icon}`,
    GUILD_INTEGRATION: (id, integrationID) => `${GUILDS_BASE(id)}/integrations/${integrationID}`,
    GUILD_INTEGRATION_SYNC: (id, integrationID) => `${GUILDS_BASE(id)}/integrations/${integrationID}/sync`,
    GUILD_INTEGRATIONS: (id) => `${GUILDS_BASE(id)}/integrations?include_applications=true`,
    GUILD_INVITES: (id) => `${GUILDS_BASE(id)}/invites`,
    GUILD_LEAVE: (id) => `${baseEndpoints.BASE_URL}/users/@me/guilds/${id}`,
    GUILD_MEMBER: (id, memberID) => `${GUILDS_BASE(id)}/members/${memberID}`,
    GUILD_MEMBER_ROLE: (id, memberID, roleID) => `${GUILDS_BASE(id)}/members/${memberID}/roles/${roleID}`,
    GUILD_PRUNE: (id) => `${GUILDS_BASE(id)}/prune`,
    GUILD_REGIONS: (id) => `${GUILDS_BASE(id)}/regions`,
    GUILD_ROLE: (id, roleID) => `${GUILDS_BASE(id)}/roles/${roleID}`,
    GUILD_ROLES: (id) => `${GUILDS_BASE(id)}/roles`,
    GUILD_SPLASH: (id, icon) => `${baseEndpoints.CDN_URL}/splashes/${id}/${icon}`,
    GUILD_VANITY_URL: (id) => `${GUILDS_BASE(id)}/vanity-url`,
    GUILD_WEBHOOKS: (id) => `${GUILDS_BASE(id)}/webhooks`,
    WEBHOOK: (id, token) => `${baseEndpoints.BASE_URL}/webhooks/${id}/${token}`,
    USER_AVATAR: (id, icon) => `${baseEndpoints.CDN_URL}/avatars/${id}/${icon}`,
    USER_DEFAULT_AVATAR: (icon) => `${baseEndpoints.CDN_URL}/embed/avatars${icon}.png`,
    USER_CREATE_DM: `${baseEndpoints.BASE_URL}/users/@me/channels`,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc2NvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBRW5CLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRztJQUUzQixRQUFRLEVBQUUsMkJBQTJCLE9BQU8sRUFBRTtJQUM5QyxPQUFPLEVBQUUsNEJBQTRCO0NBQ3RDLENBQUM7QUFFRixNQUFNLFVBQVUsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDekMsT0FBTyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDekIsQ0FBQztBQUVELE1BQU0sV0FBVyxHQUFHLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxRQUFRLFdBQVcsRUFBRSxFQUFFLENBQUM7QUFFN0UsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHO0lBQ3ZCLFdBQVcsRUFBRSxHQUFHLGFBQWEsQ0FBQyxRQUFRLGNBQWM7SUFHcEQsT0FBTyxFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxRQUFRLGFBQWEsRUFBRSxFQUFFO0lBQ25FLGVBQWUsRUFBRSxDQUFDLEVBQVUsRUFBRSxTQUFpQixFQUFFLEVBQUUsQ0FDakQsR0FBRyxhQUFhLENBQUMsUUFBUSxhQUFhLEVBQUUsYUFBYSxTQUFTLEVBQUU7SUFDbEUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUMvQixHQUFHLGFBQWEsQ0FBQyxRQUFRLGFBQWEsRUFBRSxXQUFXO0lBQ3JELFlBQVksRUFBRSxDQUFDLEVBQVUsRUFBRSxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsUUFBUSxhQUFhLEVBQUUsT0FBTztJQUM3RSxtQkFBbUIsRUFBRSxDQUFDLEVBQVUsRUFBRSxFQUFFLENBQ2xDLEdBQUcsYUFBYSxDQUFDLFFBQVEsYUFBYSxFQUFFLHVCQUF1QjtJQUNqRSxlQUFlLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUM5QixHQUFHLGFBQWEsQ0FBQyxRQUFRLGFBQWEsRUFBRSxVQUFVO0lBQ3BELGdCQUFnQixFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FDL0IsR0FBRyxhQUFhLENBQUMsUUFBUSxhQUFhLEVBQUUsV0FBVztJQUNyRCwyQkFBMkIsRUFBRSxDQUMzQixFQUFVLEVBQ1YsU0FBaUIsRUFDakIsS0FBYSxFQUNiLEVBQUUsQ0FDRixHQUFHLGFBQWEsQ0FBQyxRQUFRLGFBQWEsRUFBRSxhQUFhLFNBQVMsY0FBYyxLQUFLLE1BQU07SUFDekYseUJBQXlCLEVBQUUsQ0FBQyxFQUFVLEVBQUUsU0FBaUIsRUFBRSxFQUFFLENBQzNELEdBQUcsYUFBYSxDQUFDLFFBQVEsYUFBYSxFQUFFLGFBQWEsU0FBUyxZQUFZO0lBQzVFLHdCQUF3QixFQUFFLENBQUMsRUFBVSxFQUFFLFNBQWlCLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FDekUsR0FBRyxhQUFhLENBQUMsUUFBUSxhQUFhLEVBQUUsYUFBYSxTQUFTLGNBQWMsS0FBSyxFQUFFO0lBR3JGLEtBQUssRUFBRSxDQUFDLEVBQVUsRUFBRSxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDM0MsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxhQUFhO0lBQ2pFLFNBQVMsRUFBRSxDQUFDLEVBQVUsRUFBRSxNQUFjLEVBQUUsRUFBRSxDQUN4QyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUMsU0FBUyxNQUFNLEVBQUU7SUFDckMsVUFBVSxFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTztJQUNyRCxZQUFZLEVBQUUsQ0FBQyxFQUFVLEVBQUUsSUFBWSxFQUFFLEVBQUUsQ0FDekMsR0FBRyxhQUFhLENBQUMsT0FBTyxZQUFZLEVBQUUsSUFBSSxJQUFJLEVBQUU7SUFDbEQsY0FBYyxFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVztJQUM3RCxhQUFhLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLFFBQVEsYUFBYSxFQUFFLEVBQUU7SUFDekUsV0FBVyxFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUMsU0FBUztJQUN4RCxXQUFXLEVBQUUsQ0FBQyxFQUFVLEVBQUUsUUFBZ0IsRUFBRSxFQUFFLENBQzVDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLFFBQVEsRUFBRTtJQUN6QyxZQUFZLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxTQUFTO0lBQ3pELFVBQVUsRUFBRSxDQUFDLEVBQVUsRUFBRSxJQUFZLEVBQUUsRUFBRSxDQUN2QyxHQUFHLGFBQWEsQ0FBQyxPQUFPLFVBQVUsRUFBRSxJQUFJLElBQUksRUFBRTtJQUNoRCxpQkFBaUIsRUFBRSxDQUFDLEVBQVUsRUFBRSxhQUFxQixFQUFFLEVBQUUsQ0FDdkQsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDLGlCQUFpQixhQUFhLEVBQUU7SUFDcEQsc0JBQXNCLEVBQUUsQ0FBQyxFQUFVLEVBQUUsYUFBcUIsRUFBRSxFQUFFLENBQzVELEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsYUFBYSxPQUFPO0lBQ3pELGtCQUFrQixFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FDakMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDLHlDQUF5QztJQUM3RCxhQUFhLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVO0lBQzNELFdBQVcsRUFBRSxDQUFDLEVBQVUsRUFBRSxFQUFFLENBQzFCLEdBQUcsYUFBYSxDQUFDLFFBQVEscUJBQXFCLEVBQUUsRUFBRTtJQUNwRCxZQUFZLEVBQUUsQ0FBQyxFQUFVLEVBQUUsUUFBZ0IsRUFBRSxFQUFFLENBQzdDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZLFFBQVEsRUFBRTtJQUMxQyxpQkFBaUIsRUFBRSxDQUFDLEVBQVUsRUFBRSxRQUFnQixFQUFFLE1BQWMsRUFBRSxFQUFFLENBQ2xFLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZLFFBQVEsVUFBVSxNQUFNLEVBQUU7SUFDMUQsV0FBVyxFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUMsUUFBUTtJQUN2RCxhQUFhLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVO0lBQzNELFVBQVUsRUFBRSxDQUFDLEVBQVUsRUFBRSxNQUFjLEVBQUUsRUFBRSxDQUN6QyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVSxNQUFNLEVBQUU7SUFDdEMsV0FBVyxFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUMsUUFBUTtJQUN2RCxZQUFZLEVBQUUsQ0FBQyxFQUFVLEVBQUUsSUFBWSxFQUFFLEVBQUUsQ0FDekMsR0FBRyxhQUFhLENBQUMsT0FBTyxhQUFhLEVBQUUsSUFBSSxJQUFJLEVBQUU7SUFDbkQsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxhQUFhO0lBQ2pFLGNBQWMsRUFBRSxDQUFDLEVBQVUsRUFBRSxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVc7SUFFN0QsT0FBTyxFQUFFLENBQUMsRUFBVSxFQUFFLEtBQWEsRUFBRSxFQUFFLENBQ3JDLEdBQUcsYUFBYSxDQUFDLFFBQVEsYUFBYSxFQUFFLElBQUksS0FBSyxFQUFFO0lBR3JELFdBQVcsRUFBRSxDQUFDLEVBQVUsRUFBRSxJQUFZLEVBQUUsRUFBRSxDQUN4QyxHQUFHLGFBQWEsQ0FBQyxPQUFPLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRTtJQUNsRCxtQkFBbUIsRUFBRSxDQUFDLElBQVksRUFBRSxFQUFFLENBQ3BDLEdBQUcsYUFBYSxDQUFDLE9BQU8saUJBQWlCLElBQUksTUFBTTtJQUNyRCxjQUFjLEVBQUUsR0FBRyxhQUFhLENBQUMsUUFBUSxxQkFBcUI7Q0FDL0QsQ0FBQyJ9