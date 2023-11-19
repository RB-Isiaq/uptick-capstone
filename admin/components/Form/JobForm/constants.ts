export const detailsInput = [
  {
    id: 1,
    label: 'Resume/CV',
    type: 'url',
    required: false,
    name: 'resume',
  },
  {
    id: 2,
    label: 'Full name',
    type: 'text',
    required: true,
    name: 'fullName',
  },
  {
    id: 3,
    label: 'Email',
    type: 'email',
    required: true,
    name: 'email',
  },
  {
    id: 4,
    label: 'Phone',
    type: 'tel',
    required: true,
    name: 'phone',
  },
  {
    id: 5,
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
    name: 'linkedInUrl',
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
    name: 'otherWebsite',
  },
];

export const btn = {
  label: 'Submit Application',
  type: 'submit',
};
