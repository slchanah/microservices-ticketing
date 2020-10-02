import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@microsrv-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
