import { FB, IG, IN, X } from '@/public';

export const title = 'Follow Us';

export const desc =
  'Uptick Talent is your gateway to a world of opportunities in technology and business. Start your journey with us today!';

export const copyright =
  'Copyright © 2023 Uptick Talent. Privacy Policy | Terms of Service';
export const footerLinks = [
  {
    id: 1,
    title: 'About',
    links: [
      {
        id: 1,
        label: 'Home',
        path: '/about',
      },
      {
        id: 2,
        label: 'Contact',
        path: '/#contact',
      },
      {
        id: 3,
        label: 'Jobs',
        path: '/about#jobs',
      },
    ],
  },
  {
    id: 2,
    title: 'Progams',
    links: [
      {
        id: 1,
        label: 'Home',
        path: '/programs',
      },
      {
        id: 2,
        label: 'Find Tutor',
        path: '/#contact',
      },
      {
        id: 3,
        label: 'Enterprise',
        path: '/#jobs',
      },
    ],
  },
  {
    id: 1,
    title: 'Contact',
    links: [
      {
        id: 1,
        label: 'upticktalent@gmail.com',
        path: 'mailto:upticktalent@gmail.com',
      },
      {
        id: 2,
        label: '+234900101010',
        path: '/#contact',
      },
    ],
  },
];

export const socialLinks = [
  {
    id: 1,
    label: 'linkedIn',
    icon: IN,
    path: '/',
  },
  {
    id: 2,
    label: 'Instagram',
    icon: IG,
    path: '/',
  },
  {
    id: 3,
    label: 'X',
    icon: X,
    path: '/',
  },
  {
    id: 4,
    label: 'Facebook',
    icon: FB,
    path: '/',
  },
];
