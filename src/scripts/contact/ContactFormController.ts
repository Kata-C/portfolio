import type { ContactChannel, DeliveryOutcome } from './ContactChannel';
import { readContactMessage } from './ContactMessage';

export class ContactFormController {
  private readonly root: HTMLElement;
  private readonly form: HTMLFormElement;
  private readonly channel: ContactChannel;

  constructor(root: HTMLElement, form: HTMLFormElement, channel: ContactChannel) {
    this.root = root;
    this.form = form;
    this.channel = channel;
  }

  mount(): void {
    this.form.addEventListener('submit', this.handleSubmit);
    this.root
      .querySelectorAll<HTMLButtonElement>('[data-contact-reset]')
      .forEach((button) => button.addEventListener('click', this.handleReset));
  }

  private readonly handleSubmit = async (event: SubmitEvent): Promise<void> => {
    event.preventDefault();
    this.setError(false);
    this.setBusy(true);

    try {
      const outcome = await this.channel.send(readContactMessage(this.form));
      this.showResult(outcome);
    } catch {
      this.setError(true);
    } finally {
      this.setBusy(false);
    }
  };

  private readonly handleReset = (): void => {
    this.form.reset();
    this.results.forEach((result) => {
      result.hidden = true;
    });
    this.form.hidden = false;
  };

  private get results(): HTMLElement[] {
    return Array.from(this.root.querySelectorAll<HTMLElement>('[data-contact-result]'));
  }

  private showResult(outcome: DeliveryOutcome): void {
    const result = this.results.find((candidate) => candidate.dataset.contactResult === outcome);

    if (!result) {
      return;
    }

    this.form.hidden = true;
    result.hidden = false;
    result.focus();
  }

  private setBusy(busy: boolean): void {
    const submit = this.form.querySelector<HTMLButtonElement>('[type="submit"]');

    if (submit) {
      submit.disabled = busy;
    }

    this.form.setAttribute('aria-busy', String(busy));
  }

  private setError(visible: boolean): void {
    const error = this.form.querySelector<HTMLElement>('[data-contact-error]');

    if (error) {
      error.hidden = !visible;
    }
  }
}
