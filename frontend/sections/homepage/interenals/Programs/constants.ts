import { BEGINNERS, BUSINESS, MAP, TECH } from '@/public';


export const HeadText = "Our Programs"
export const programs = [
  {
    id: 1,
    title: 'Uptick Talent Beginners',
    subTitle: 'Programs for Secondary Schools',
    text: 'Ignite young minds with our technology and business training designed for secondary school students. Empower the leaders of tomorrow!',
    image: BEGINNERS,
    ctaButtons: [
      {
        id: 1,
        text: 'Learn More',
        link: '#why',
      },
      {
        id: 2,
        text: 'Apply Now',
        link: '#about',
      },
    ],
  },
  {
    id: 2,
    title: 'Uptick Talent Tech',
    subTitle: 'Technology Programs',
    text: 'Embark on a journey through technology with our engineering, data, design and other non-technical programs. Elevate your skills and career.',
    image: TECH,
    ctaButtons: [
      {
        id: 1,
        text: 'Learn More',
        link: '#why',
      },
      {
        id: 2,
        text: 'Apply Now',
        link: '#about',
      },
    ],
  },
  {
    id: 3,
    title: 'Uptick Talent Business',
    subTitle: 'Startup Incubation Programs',
    text: 'Join our thriving startup ecosystem, receive mentorship, and transform your innovative ideas into successful businesses.',
    image: BUSINESS,
    ctaButtons: [
      {
        id: 1,
        text: 'Learn More',
        link: '#why',
      },
      {
        id: 2,
        text: 'Apply Now',
        link: '#about',
      },
    ],
  },
  {
    id: 4,
    title: 'Uptick Talent Map',
    subTitle: 'Hiring Top Talent',
    text: 'Find exceptional technical & non-technical tech talent for your company or partner with us to discover the right fit.',
    image: MAP,
    ctaButtons: [
      {
        id: 1,
        text: 'Learn More',
        link: '#why',
      },
      {
        id: 2,
        text: 'Apply Now',
        link: '#about',
      },
    ],
  },
];
