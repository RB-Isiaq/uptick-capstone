import { EYE } from '@/public';

export const applicantDetails = [
  {
    id: 1,
    label: 'First Name',
    key: 'firstName',
    value: 'First name',
  },
  {
    id: 2,
    label: 'Last Name',
    key: 'lastName',
    value: 'Last name',
  },
  {
    id: 3,
    label: 'Email',
    key: 'email',
    value: 'Email address',
  },
  {
    id: 4,
    label: 'Phone Number',
    key: 'phone',
    value: '+2348010101010',
  },
  {
    id: 5,
    label: 'City, State',
    key: 'cityState',
    value: 'eg.Jos, Plateau',
  },
  {
    id: 6,
    label: 'How many years of programming experience do you have?',
    key: 'yearsOfExperience',
    value: 'Less than a year',
  },
  {
    id: 7,
    label:
      'What stack are you most proficient in or looking to land a job in this fellowship?',
    key: 'stack',
    value: 'Frontend',
  },
  {
    id: 8,
    label: 'If you are a front end engineer, what technology do you use?',
    key: 'frontendTechStack',
    value: 'ReactJs',
  },
  {
    id: 9,
    label: 'If you are a back end engineer, what technology do you use?',
    key: 'backendTechStack',
    value: 'NodeJS',
  },
  {
    id: 10,
    label: 'If you are a mobile engineer, what technology do you use?',
    key: 'mobileTechStack',
    value: 'Flutter (Dart Engineering)',
  },
  {
    id: 11,
    label: 'Other tracks? List your most proficient technologies below?',
    key: 'otherFieldStack',
    value: 'Other tracks',
  },
  {
    id: 12,
    label: 'What are your career goals between the next two years?',
    key: 'careerGoals',
    value: 'What are your career goals',
  },
  {
    id: 13,
    label: 'Link to Github',
    key: 'githubLink',
    value: 'Github Link',
  },
  {
    id: 14,
    label: 'Link to portfolio or one of your completed Projects',
    key: 'portfolioLink',
    value: 'Portfolio Link',
  },
  {
    id: 15,
    label:
      'Are you able to commit at least 40 hours per week to participate fully in the fellowship?',
    key: 'commitment',
    value: 'Yes',
  },
  {
    id: 16,
    label: 'How did you get to know about the fellowship?',
    key: 'howDidYouHearAboutUs',
    value: 'Andela Learning Community',
  },
];

export const formTabs = [
  {
    id: 1,
    label: 'Add Thumbnail',
  },
  {
    id: 2,
    label: 'Add Title',
  },
  {
    id: 3,
    label: 'Preview',
    icon: EYE,
  },
];
