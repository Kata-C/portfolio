const followPointer = (event: PointerEvent): void => {
  const surface = event.currentTarget;

  if (!(surface instanceof HTMLElement)) {
    return;
  }

  const bounds = surface.getBoundingClientRect();
  surface.style.setProperty('--mx', `${event.clientX - bounds.left}px`);
  surface.style.setProperty('--my', `${event.clientY - bounds.top}px`);
};

export const trackSpotlight = (surface: HTMLElement): void => {
  surface.addEventListener('pointermove', followPointer);
};
