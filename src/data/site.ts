export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteProfile {
  name: string;
  email: string;
  available: boolean;
  socials: SocialLink[];
}

export const site: SiteProfile = {
  name: 'Cristal Germain',
  email: 'cristalgermain@gmail.com',
  available: true,
  socials: [
    { label: 'GitHub', href: 'https://github.com/Kata-C' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cristalgermain/' },
  ],
};
