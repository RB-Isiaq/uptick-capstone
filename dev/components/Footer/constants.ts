import { FB, IG, IN, LOCATION, MAIL, PHONE, X } from '@/public';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const desc =
  'Stay in the loop with the latest industry insights, success stories, and program updates. Subscribe to our newsletter today!';

export const copyright = 'Copyright © 2023 Uptick Talent All Rights Researved';

export const privacy = '| Privacy Policy | Terms of Service';

export const Subscribe = 'SUBSCRIBE';

type Link = {
  id: number;
  label: string;
  path: string;
  icon?: StaticImport | string;
};

interface FooterLinks {
  id: number;
  title: string;
  links: Link[];
}

export const footerLinks: FooterLinks[] = [
  {
    id: 1,
    title: 'Useful Links',
    links: [
      {
        id: 1,
        label: 'Home',
        path: '/',
      },
      {
        id: 2,
        label: 'About Us',
        path: '/about',
      },
      {
        id: 3,
        label: 'Jobs',
        path: '/jobs',
      },
      {
        id: 4,
        label: 'Blogs',
        path: '/blogs',
      },
      {
        id: 5,
        label: 'Support',
        path: '/contact',
      },
    ],
  },
  {
    id: 2,
    title: 'Our Progams',
    links: [
      {
        id: 1,
        label: 'Uptick Talent Beginners',
        path: '/programs/beginners',
      },
      {
        id: 2,
        label: 'Uptick Talent Tech',
        path: '/programs/tech',
      },
      {
        id: 3,
        label: 'Uptick Talent Business',
        path: '/programs/business',
      },
      {
        id: 4,
        label: 'Uptick Talent Map',
        path: '/programs/map',
      },
    ],
  },
  {
    id: 3,
    title: 'Contact Us',
    links: [
      {
        id: 1,
        icon: PHONE,
        label: '+234 9037424764',
        path: 'tel:+2349037424764',
      },
      {
        id: 2,
        icon: MAIL,
        label: 'hey@upticktalent.africa',
        path: 'mailto:hey@upticktalent.africa',
      },
      {
        id: 3,
        icon: LOCATION,
        label: '7A, Hara-Hyel House, Dogon Karfe, Jos, Plateau State, Nigeria',
        path: '/contact#location',
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
