import { NON_TECH, SE_TECH, UI_TECH } from '@/public';

export const programId = {
  SE_TECH: 'fba3250e-67c5-4325-a352-78577dba3a89',
  DESIGN_TECH: 'b0eca4b1-8907-4459-9a08-86ec79e1f551',
  PRODUCT_TECH: '439d636d-7846-4b5a-b33d-3cca22fec06d',
};
export const programs = [
  {
    id: programId.SE_TECH,
    title: 'Software Engineering',
    profession: 'Become a Top 1% Engineer',
    desc: 'Our immersive, project-based approach, combined with mentorship-led learning, is designed to transform self-taught developers into top-tier engineers. Gain real-world internship experience and unlock your potential. Join our Software Engineering Fellowship and explore four specialized tracks:',
    tracks: [
      {
        id: 1,
        track: 'Frontend',
      },
      {
        id: 2,
        track: 'Backend',
      },
      {
        id: 3,
        track: 'Mobile',
      },
      {
        id: 4,
        track: 'Fullstack',
      },
    ],
    btnText: 'Apply Now',
    type: 'tech',
    image: SE_TECH,
  },
  {
    id: programId.DESIGN_TECH,
    title: 'Design',
    profession: 'Unleash Your Creative Genius',
    desc: 'Explore the art of design through our design program, which cuts across critical concepts such as design thinking, systems thinking, design systems & design engineering, and unlock your creative potential and shape user experiences. Choose from a variety of core tracks, including:',
    tracks: [
      {
        id: 1,
        track: 'UI Design',
      },
      {
        id: 2,
        track: 'UX Design',
      },
      {
        id: 3,
        track: 'Graphics Design',
      },
      {
        id: 4,
        track: 'UX Researcher',
      },
    ],
    btnText: 'Apply Now',
    type: 'tech',
    image: UI_TECH,
  },
  {
    id: programId.PRODUCT_TECH,
    title: 'Non-Technical Programs',
    profession: 'Master the Art of Scaling Technology Products',
    desc: 'Our Non-Technical Fellowship programs are designed for business enthusiasts working to scale technology products, processes and operations. Dive into practical case studies and access weekly mentorship. Curriculum covers:',
    tracks: [
      {
        id: 1,
        track: 'Product Marketing Management',
      },
      {
        id: 2,
        track: 'Operations',
      },
      {
        id: 3,
        track: 'Sales',
      },
      {
        id: 4,
        track: 'Business Development',
      },
      {
        id: 5,
        track: 'Project/Product Management',
      },
    ],
    btnText: 'Apply Now',
    type: 'tech',
    image: NON_TECH,
  },
];

export const join = {
  title: 'Ready to Join Uptick Talent Tech?',
  desc: "If you're ready to embark on an exciting journey of learning, growth, and innovation, Uptick Talent Tech is here to guide you. Apply for your desired program or reach out to us for more information. Your future in technology starts here.",
  btnText: 'Apply Now',
  type: 'tech',
};
