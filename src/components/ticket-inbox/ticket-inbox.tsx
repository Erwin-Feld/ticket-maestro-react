import "./ticket.css";

import ticketSample from "../../mock-data/ticketSample.json";
import { TicketProperties } from "../../interfaces/ticket-properties.interface";

export default function TicketInBox() {
  
  /* all ticketdata cramped into li elements */
  const ticketElement = ticketSample.map((item: TicketProperties) => (
    <li key={item.id.toString()}>{item.text}</li>
  ));

  return <ul>{ticketElement}</ul>;
}


