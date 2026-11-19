export interface HeadlineLine {
  text: string;
  accent?: boolean;
}

export const splitHeadline = (title: string): HeadlineLine[] => {
  const words = title.trim().split(/\s+/);

  if (words.length < 2) {
    return [{ text: `${title}.`, accent: true }];
  }

  const breakpoint = Math.ceil(words.length / 2);
  const lead = words.slice(0, breakpoint).join(' ');
  const accent = words.slice(breakpoint).join(' ');

  return [{ text: lead }, { text: `${accent}.`, accent: true }];
};
