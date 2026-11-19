import type { ContactMessage } from './ContactMessage';

export type DeliveryOutcome = 'delivered' | 'handed-off';

export interface ContactChannel {
  send(message: ContactMessage): Promise<DeliveryOutcome>;
}
