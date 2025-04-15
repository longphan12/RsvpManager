import RsvpEntry from "./rsvp/RsvpEntry";

const service = new RsvpEntry();

service.addOrUpdatePlayer({ id: 1, name: "Long", status: "Yes" });
service.addOrUpdatePlayer({ id: 2, name: "Chris", status: "Maybe" });
service.addOrUpdatePlayer({ id: 3, name: "Jane", status: "No" });
service.addOrUpdatePlayer({ id: 4, name: "Wenney", status: "Yes" });
service.addOrUpdatePlayer({ id: 5, name: "Ruby", status: "Maybe" });
service.addOrUpdatePlayer({ id: 6, name: "Tom", status: "No" });

console.log("Confirmed Attendees:", service.getConfirmedAttendees());
console.log("Counts:", service.getCount());