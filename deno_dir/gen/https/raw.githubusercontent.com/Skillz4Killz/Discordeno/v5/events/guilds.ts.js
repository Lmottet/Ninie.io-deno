import { cache } from "../utils/cache.ts";
export const handleInternalGuildCreate = (guild) => {
    cache.guilds.set(guild.id, guild);
};
export const handleInternalGuildUpdate = (guild) => {
    cache.guilds.set(guild.id, guild);
};
export const handleInternalGuildDelete = (guild) => {
    cache.guilds.delete(guild.id);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3VpbGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcxQyxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO0lBQ3hELEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtJQUN4RCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7SUFDeEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyJ9