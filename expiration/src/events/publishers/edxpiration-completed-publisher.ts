import {
  ExpirationCompletedEvent,
  Publisher,
  Subjects,
} from '@microsrv-tickets/common';

export class ExpirationCompletedPublisher extends Publisher<
  ExpirationCompletedEvent
> {
  subject: Subjects.ExpirationCompleted = Subjects.ExpirationCompleted;
}
