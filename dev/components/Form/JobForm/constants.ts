export const detailsInput = [
  {
    id: 1,
    label: 'Resume/CV',
    type: 'file',
    required: false,
    name: 'cv',
  },
  {
    id: 2,
    label: 'Full name',
    type: 'text',
    required: true,
    name: 'name',
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
    name: 'company',
  },
  {
    id: 5,
    label: 'Address',
    type: 'text',
    required: false,
    name: 'address',
  },
];

export const links = [
  {
    id: 1,
    label: 'LinkedIn URL',
    type: 'url',
    required: true,
    name: 'linkedIn',
  },
  {
    id: 2,
    label: 'Twitter URL',
    type: 'url',
    required: false,
    name: 'twitter',
  },
  {
    id: 3,
    label: 'GitHub URL',
    type: 'url',
    required: false,
    name: 'github',
  },
  {
    id: 4,
    label: 'Portfolio URL',
    type: 'url',
    required: false,
    name: 'portfolio',
  },
  {
    id: 5,
    label: 'Other website',
    type: 'url',
    required: false,
    name: 'website',
  },
];

export const btn = {
  label: 'Submit Application',
  type: 'submit',
};
