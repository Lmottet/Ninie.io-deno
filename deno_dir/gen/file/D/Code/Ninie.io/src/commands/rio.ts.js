import { botCache } from "../../mod.ts";
import { Embed } from "../utils/Embed.ts";
import { sendEmbed, sendResponse } from "../utils/helpers.ts";
botCache.commands.set("rio", {
    name: `rio`,
    arguments: [
        {
            name: "character",
            type: "...string",
            missing: function (message) {
                sendResponse(message, `Character name is missing`);
            },
            required: true,
        },
    ],
    execute: (message, args) => {
        let characterDetails = args.character.split("/");
        api(message, characterDetails[0], characterDetails[1]);
    },
});
async function api(message, realm, character) {
    try {
        const response = await fetch(`https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${character}&fields=%20mythic_plus_scores_by_season%3Acurrent%2Cmythic_plus_ranks%2Craid_progression`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        response.json()
            .then((rioData) => {
            sendEmbed(message.channelID, embed(rioData), `<@!${message.author.id}>`);
        });
    }
    catch (err) {
        sendResponse(message, "Echec de la récupération des données sur raider.io. Vérifiez la syntax de votre commande ?");
    }
}
const embed = (rioData) => {
    let scores = rioData.mythic_plus_scores_by_season[0].scores;
    return new Embed()
        .addField("Nom :", rioData.name)
        .addField("Scores sur le serveur pour ta classe: ", `Overall : ${scores.all || 0} r.io
      Heal : ${scores.healer || 0} r.io
      Tank : ${scores.tank || 0} r.io
      DPS : ${scores.dps || 0} r.io`)
        .addField("Progression à Ny'alotha :", "" + rioData.raid_progression["nyalotha-the-waking-city"]?.summary)
        .addField("Rang sur le serveur toutes classes / spécialisations confondues :", "" + rioData.mythic_plus_ranks.overall.realm + " ème").addField("Rang sur le serveur pour ta classe, toutes spécialisations confondues :", "" + rioData.mythic_plus_ranks.class.realm + " ème");
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHOUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO0lBQzNCLElBQUksRUFBRSxLQUFLO0lBQ1gsU0FBUyxFQUFFO1FBQ1Q7WUFDRSxJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPLEVBQUUsVUFBVSxPQUFPO2dCQUN4QixZQUFZLENBQUMsT0FBTyxFQUFFLDJCQUEyQixDQUFDLENBQUM7WUFDckQsQ0FBQztZQUNELFFBQVEsRUFBRSxJQUFJO1NBQ2Y7S0FDRjtJQUNELE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFhLEVBQUUsRUFBRTtRQUNsQyxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsS0FBSyxVQUFVLEdBQUcsQ0FBQyxPQUFnQixFQUFFLEtBQWEsRUFBRSxTQUFpQjtJQUNuRSxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLCtEQUErRCxLQUFLLFNBQVMsU0FBUywwRkFBMEYsQ0FDakwsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsUUFBUSxDQUFDLElBQUksRUFBRTthQUNaLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2hCLFNBQVMsQ0FDUCxPQUFPLENBQUMsU0FBUyxFQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLEVBQ2QsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUMzQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osWUFBWSxDQUNWLE9BQU8sRUFDUCw0RkFBNEYsQ0FDN0YsQ0FBQztLQUNIO0FBQ0gsQ0FBQztBQUtELE1BQU0sS0FBSyxHQUFHLENBQUMsT0FBcUIsRUFBRSxFQUFFO0lBQ3RDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDNUQsT0FBTyxJQUFJLEtBQUssRUFBRTtTQUNmLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQztTQUMvQixRQUFRLENBQ1Asd0NBQXdDLEVBQ3hDLGFBQWEsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO2VBQ25CLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQztlQUNsQixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7Y0FDakIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FDL0I7U0FDQSxRQUFRLENBQ1AsMkJBQTJCLEVBQzNCLEVBQUUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUMsRUFBRSxPQUFPLENBQ25FO1NBQ0EsUUFBUSxDQUNQLG1FQUFtRSxFQUNuRSxFQUFFLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUN0RCxDQUFDLFFBQVEsQ0FDUix5RUFBeUUsRUFDekUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FDcEQsQ0FBQztBQUNOLENBQUMsQ0FBQyJ9