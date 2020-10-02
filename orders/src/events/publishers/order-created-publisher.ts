import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@microsrv-tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
