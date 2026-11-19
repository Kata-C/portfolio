import type { ContactChannel, DeliveryOutcome } from './ContactChannel';
import type { ContactMessage } from './ContactMessage';

export class EndpointChannel implements ContactChannel {
  private readonly endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async send(message: ContactMessage): Promise<DeliveryOutcome> {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        idioma: message.locale,
        tipo: message.projectType,
        nombre: message.name,
        email: message.email,
        mensaje: message.message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Contact endpoint responded with ${response.status}`);
    }

    return 'delivered';
  }
}
