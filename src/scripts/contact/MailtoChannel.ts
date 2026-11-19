import type { ContactChannel, DeliveryOutcome } from './ContactChannel';
import type { ContactMessage } from './ContactMessage';

export class MailtoChannel implements ContactChannel {
  private readonly recipient: string;
  private readonly subject: string;

  constructor(recipient: string, subject: string) {
    this.recipient = recipient;
    this.subject = subject;
  }

  async send(message: ContactMessage): Promise<DeliveryOutcome> {
    const subject = encodeURIComponent(`${this.subject}: ${message.projectType}`);
    const body = encodeURIComponent(`${message.message}\n\n${message.name}\n${message.email}`);

    window.location.href = `mailto:${this.recipient}?subject=${subject}&body=${body}`;

    return 'handed-off';
  }
}
