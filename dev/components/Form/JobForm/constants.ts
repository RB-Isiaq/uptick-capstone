export const detailsInput = [
  {
    id: 1,
    label: 'Resume/CV',
    type: 'file',
    required: true,
    name: 'resume',
  },
  {
    id: 2,
    label: 'First Name',
    type: 'text',
    required: true,
    name: 'firstName',
  },
  {
    id: 3,
    label: 'Last Name',
    type: 'text',
    required: true,
    name: 'lastName',
  },
  {
    id: 4,
    label: 'Email',
    type: 'email',
    required: true,
    name: 'email',
  },
  {
    id: 5,
    label: 'Phone',
    type: 'tel',
    required: true,
    name: 'phone',
  },
  {
    id: 6,
    label: 'Current company',
    type: 'text',
    required: false,
    name: 'currentCompany',
  },
];

export const links = [
  {
    id: 1,
    label: 'LinkedIn URL',
    type: 'url',
    required: true,
    name: 'linkedinUrl',
  },
  {
    id: 2,
    label: 'Twitter URL',
    type: 'url',
    required: false,
    name: 'twitterUrl',
  },
  {
    id: 3,
    label: 'GitHub URL',
    type: 'url',
    required: false,
    name: 'githubUrl',
  },
  {
    id: 4,
    label: 'Portfolio URL',
    type: 'url',
    required: false,
    name: 'portfolioUrl',
  },
  {
    id: 5,
    label: 'Other website',
    type: 'url',
    required: false,
    name: 'otherUrl',
  },
];

export const btn = {
  label: 'Submit Application',
  type: 'submit',
};
