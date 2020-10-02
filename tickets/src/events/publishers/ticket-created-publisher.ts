import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@microsrv-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
