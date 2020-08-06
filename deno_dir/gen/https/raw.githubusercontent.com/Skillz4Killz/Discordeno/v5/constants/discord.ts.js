export const baseEndpoints = {
    BASE_URL: "https://discord.com/api/v7",
    CDN_URL: "https://cdn.discordapp.com",
};
const GUILDS_BASE = (id) => `${baseEndpoints.BASE_URL}/guilds/${id}`;
export const endpoints = {
    GATEWAY_BOT: `${baseEndpoints.BASE_URL}/gateway/bot`,
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
    GUILD_EMBED: (id) => `${GUILDS_BASE(id)}/embed`,
    GUILD_EMOJI: (id, emoji_id) => `${GUILDS_BASE(id)}/emojis/${emoji_id}`,
    GUILD_EMOJIS: (id) => `${GUILDS_BASE(id)}/emojis`,
    GUILD_ICON: (id, icon) => `${baseEndpoints.CDN_URL}/icons/${id}/${icon}`,
    GUILD_INTEGRATION: (id, integrationID) => `${GUILDS_BASE(id)}/integrations/${integrationID}`,
    GUILD_INTEGRATION_SYNC: (id, integrationID) => `${GUILDS_BASE(id)}/integrations/${integrationID}/sync`,
    GUILD_INTEGRATIONS: (id) => `${GUILDS_BASE(id)}/integrations`,
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
    USER_AVATAR: (id, icon) => `${baseEndpoints.CDN_URL}/avatars/${id}/${icon}`,
    USER_DEFAULT_AVATAR: (icon) => `${baseEndpoints.CDN_URL}/embed/avatars${icon}.png`,
    USER_CREATE_DM: `${baseEndpoints.BASE_URL}/users/@me/channels`,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc2NvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHO0lBRTNCLFFBQVEsRUFBRSw0QkFBNEI7SUFDdEMsT0FBTyxFQUFFLDRCQUE0QjtDQUN0QyxDQUFDO0FBRUYsTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLFFBQVEsV0FBVyxFQUFFLEVBQUUsQ0FBQztBQUU3RSxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUc7SUFDdkIsV0FBVyxFQUFFLEdBQUcsYUFBYSxDQUFDLFFBQVEsY0FBYztJQUdwRCxlQUFlLEVBQUUsQ0FBQyxFQUFVLEVBQUUsU0FBaUIsRUFBRSxFQUFFLENBQ2pELEdBQUcsYUFBYSxDQUFDLFFBQVEsYUFBYSxFQUFFLGFBQWEsU0FBUyxFQUFFO0lBQ2xFLGdCQUFnQixFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FDL0IsR0FBRyxhQUFhLENBQUMsUUFBUSxhQUFhLEVBQUUsV0FBVztJQUNyRCxZQUFZLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLFFBQVEsYUFBYSxFQUFFLE9BQU87SUFDN0UsbUJBQW1CLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUNsQyxHQUFHLGFBQWEsQ0FBQyxRQUFRLGFBQWEsRUFBRSx1QkFBdUI7SUFDakUsZUFBZSxFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FDOUIsR0FBRyxhQUFhLENBQUMsUUFBUSxhQUFhLEVBQUUsVUFBVTtJQUNwRCxnQkFBZ0IsRUFBRSxDQUFDLEVBQVUsRUFBRSxFQUFFLENBQy9CLEdBQUcsYUFBYSxDQUFDLFFBQVEsYUFBYSxFQUFFLFdBQVc7SUFDckQsMkJBQTJCLEVBQUUsQ0FDM0IsRUFBVSxFQUNWLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixFQUFFLENBQ0YsR0FB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