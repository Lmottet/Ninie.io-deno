import { Permissions, } from "../types/permission.ts";
import { cache } from "./cache.ts";
import { botID } from "../module/client.ts";
export function memberHasPermission(memberID, guild, memberRoleIDs, permissions) {
    if (memberID === guild.ownerID)
        return true;
    const permissionBits = memberRoleIDs.map((id) => guild.roles.get(id)?.permissions_new)
        .reduce((bits, permissions) => {
        bits |= BigInt(permissions);
        return bits;
    }, BigInt(0));
    if (permissionBits & BigInt(Permissions.ADMINISTRATOR))
        return true;
    return permissions.every((permission) => permissionBits & BigInt(Permissions[permission]));
}
export function botHasPermission(guildID, permissions) {
    const guild = cache.guilds.get(guildID);
    if (!guild)
        return false;
    const member = guild.members.get(botID);
    if (!member)
        return false;
    const permissionBits = member.roles
        .map((id) => guild.roles.get(id))
        .reduce((bits, data) => {
        bits |= BigInt(data.permissions_new);
        return bits;
    }, BigInt(0));
    if (permissionBits & BigInt(Permissions.ADMINISTRATOR))
        return true;
    return permissions.every((permission) => permissionBits & BigInt(permission));
}
export function botHasChannelPermissions(channelID, permissions) {
    return hasChannelPermissions(channelID, botID, permissions);
}
export function hasChannelPermissions(channelID, memberID, permissions) {
    const channel = cache.channels.get(channelID);
    if (!channel?.guildID)
        return true;
    const guild = cache.guilds.get(channel.guildID);
    if (!guild)
        return false;
    if (guild.ownerID === memberID)
        return true;
    if (botHasPermission(guild.id, [Permissions.ADMINISTRATOR]))
        return true;
    const member = guild.members.get(memberID);
    if (!member)
        return false;
    const memberOverwrite = channel.permission_overwrites?.find((o) => o.id === memberID);
    const rolesOverwrites = channel.permission_overwrites?.filter((o) => member.roles.includes(o.id));
    const everyoneOverwrite = channel.permission_overwrites?.find((o) => o.id === guild.id);
    const allowedPermissions = new Set();
    if (memberOverwrite) {
        if (permissions.some((perm) => BigInt(memberOverwrite.deny_new) & BigInt(perm))) {
            return false;
        }
        permissions.forEach((perm) => {
            if (allowedPermissions.has(perm))
                return;
            if (BigInt(memberOverwrite.allow_new) & BigInt(perm)) {
                allowedPermissions.add(perm);
            }
        });
    }
    if (rolesOverwrites?.length) {
        if (rolesOverwrites.some((overwrite) => permissions.some((perm) => (BigInt(overwrite.deny_new) & BigInt(perm)) &&
            !rolesOverwrites.some((o) => BigInt(o.allow_new) & BigInt(perm)) &&
            !(memberOverwrite && BigInt(memberOverwrite.allow_new) & BigInt(perm))))) {
            return false;
        }
        permissions.forEach((perm) => {
            if (allowedPermissions.has(perm))
                return;
            rolesOverwrites.forEach((overwrite) => {
                if (BigInt(overwrite.allow_new) & BigInt(perm)) {
                    allowedPermissions.add(perm);
                }
            });
        });
    }
    if (everyoneOverwrite) {
        if (permissions.some((perm) => BigInt(everyoneOverwrite.deny_new) & BigInt(perm) &&
            !allowedPermissions.has(perm))) {
            return false;
        }
        if (permissions.every((perm) => BigInt(everyoneOverwrite.allow_new) & BigInt(perm))) {
            return true;
        }
    }
    return botHasPermission(guild.id, permissions);
}
export function calculatePermissions(permissionBits) {
    return Object.keys(Permissions).filter((perm) => {
        if (typeof perm !== "number")
            return false;
        return permissionBits & BigInt(Permissions[perm]);
    });
}
export function highestRole(guildID, memberID) {
    const guild = cache.guilds.get(guildID);
    if (!guild)
        return;
    const member = guild?.members.get(memberID);
    if (!member)
        return;
    let memberHighestRole;
    for (const roleID of member.roles) {
        const role = guild.roles.get(roleID);
        if (!role)
            continue;
        if (!memberHighestRole || memberHighestRole.position < role.position) {
            memberHighestRole = role;
        }
    }
    return memberHighestRole || guild.roles.get(guild.id);
}
export function higherRolePosition(guildID, roleID, otherRoleID) {
    const guild = cache.guilds.get(guildID);
    if (!guild)
        return;
    const role = guild.roles.get(roleID);
    const otherRole = guild.roles.get(otherRoleID);
    if (!role || !otherRole)
        return;
    return role.position > otherRole.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJtaXNzaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsV0FBVyxHQUNaLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLNUMsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxRQUFnQixFQUNoQixLQUFZLEVBQ1osYUFBdUIsRUFDdkIsV0FBeUI7SUFFekIsSUFBSSxRQUFRLEtBQUssS0FBSyxDQUFDLE9BQU87UUFBRSxPQUFPLElBQUksQ0FBQztJQUU1QyxNQUFNLGNBQWMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FDOUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsZUFBZSxDQUNyQztTQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRTtRQUM1QixJQUFJLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhCLElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFcEUsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FDdEMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDakQsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBZSxFQUFFLFdBQTBCO0lBQzFFLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxN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