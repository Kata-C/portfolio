import type { ContactChannel } from './ContactChannel';
import { EndpointChannel } from './EndpointChannel';
import { MailtoChannel } from './MailtoChannel';

export interface ContactChannelConfig {
  endpoint?: string;
  recipient: string;
  subject: string;
}

export const createContactChannel = ({ endpoint, recipient, subject }: ContactChannelConfig): ContactChannel =>
  endpoint ? new EndpointChannel(endpoint) : new MailtoChannel(recipient, subject);
