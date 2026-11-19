export interface ContactMessage {
  locale: string;
  projectType: string;
  name: string;
  email: string;
  message: string;
}

const readField = (data: FormData, field: string): string => {
  const value = data.get(field);
  return typeof value === 'string' ? value.trim() : '';
};

export const readContactMessage = (form: HTMLFormElement): ContactMessage => {
  const data = new FormData(form);

  return {
    locale: readField(data, 'idioma'),
    projectType: readField(data, 'tipo'),
    name: readField(data, 'nombre'),
    email: readField(data, 'email'),
    message: readField(data, 'mensaje'),
  };
};
