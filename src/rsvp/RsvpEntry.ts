import Player from "../models/Player";
import Logger from "../utils/Logger";

class RsvpEntry {
    private players: Map<number, Player> = new Map();
    private logger: Logger = new Logger();

    constructor() {}

    addOrUpdatePlayer(player: Player) {
        this.players.set(player.id, player);
        this.logger.log(`Updated ${player.name} status: ${player.status}`);
    }

    getConfirmedAttendees() : string[] {
        const confirmedAttendees : string[] = [];

        for (const player of this.players.values()) {
            if (player.status === "Yes") {
                confirmedAttendees.push(player.name);
            }
        }
        return confirmedAttendees;
    }

    getCount() : { total: number, confirmed: number, declined: number } {
        const players = Array.from(this.players.values());
        const total = players.length;
        const confirmed = (players.filter((player) => player.status === 'Yes')).length;
        const declined = (players.filter((player) => player.status === 'No')).length;
        return { total, confirmed, declined };
    }
}

export default RsvpEntry;