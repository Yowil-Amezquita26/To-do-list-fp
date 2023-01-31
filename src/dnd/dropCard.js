import editTicket from "../services/editTicket";

const dropCard = (card, zone) => {
  if (zone == "not-done") {
    card.tickets.status = "Not Done";
    editTicket(card.tickets, card.tickets._id);
  }
  if (zone == "doing") {
    card.tickets.status = "Doing";
    editTicket(card.tickets, card.tickets._id);
  }
  if (zone == "done") {
    card.tickets.status = "Done";
    editTicket(card.tickets, card.tickets._id);
  }

}; 

export default dropCard;
