import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@microsrv-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
