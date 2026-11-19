import { ContactFormController } from './ContactFormController';
import { createContactChannel } from './createContactChannel';

export const mountContactForm = (root: HTMLElement): void => {
  const form = root.querySelector<HTMLFormElement>('[data-contact-form]');
  const { endpoint, recipient, subject = '' } = root.dataset;

  if (!form || !recipient) {
    return;
  }

  const channel = createContactChannel({ endpoint, recipient, subject });
  new ContactFormController(root, form, channel).mount();
};
