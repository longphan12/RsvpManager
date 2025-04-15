import RsvpEntry from "../rsvp/RsvpEntry";
import Player from "../models/Player";

describe('RsvpEntryTest', () => {
    let rsvpEntry: RsvpEntry;
    let player1: Player;
    let player2: Player;
    let player3: Player;

    beforeEach(() => {
        rsvpEntry = new RsvpEntry();
        player1 =  {id: 1, name: "Player 1", status: "Yes"}
        player2 = {id: 2, name: "Player 2", status: "No"}
        player3 = {id: 3, name: "Player 3", status: "Maybe"}
    });

    describe('addOrUpdatePlayer', () => {
        it('should add player correctly', () => {
            rsvpEntry.addOrUpdatePlayer(player1);
            expect(rsvpEntry.getConfirmedAttendees()).toEqual(["Player 1"]);
            expect(rsvpEntry.getCount()).toEqual({ total: 1, confirmed: 1, declined: 0});
        });

        it('should update player 1 status correctly', () => {
            player1.status = "No";
            rsvpEntry.addOrUpdatePlayer(player2);
            rsvpEntry.addOrUpdatePlayer(player1);
            expect(rsvpEntry.getConfirmedAttendees()).toEqual([]);
            expect(rsvpEntry.getCount()).toEqual({ total: 2, confirmed: 0, declined: 2});
        });

    
    });

    describe('getConfirmedAttendees', () => {
        it('should return only players with Yes status', () => {
            rsvpEntry.addOrUpdatePlayer(player1);
            rsvpEntry.addOrUpdatePlayer(player2);
            rsvpEntry.addOrUpdatePlayer(player3);

            const confirmed = rsvpEntry.getConfirmedAttendees();
            expect(confirmed).toContain('Player 1');
            expect(confirmed).not.toContain('Player 2');
            expect(confirmed).not.toContain('Player 3');
            expect(confirmed.length).toEqual(1);
        });

        it('should return empty array when no players are confirmed', () => {
            rsvpEntry.addOrUpdatePlayer(player2);
            expect(rsvpEntry.getConfirmedAttendees()).toEqual([]);
        });
    });

    describe('getCount', () => {
        it('should return correct counts for all statuses', () => {
            rsvpEntry.addOrUpdatePlayer(player1);
            rsvpEntry.addOrUpdatePlayer(player2);
            rsvpEntry.addOrUpdatePlayer(player3);

            const counts = rsvpEntry.getCount();
            expect(counts.total).toEqual(3);
            expect(counts.confirmed).toEqual(1);
            expect(counts.declined).toEqual(1);
        });
    });
});