import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from '@microsrv-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
