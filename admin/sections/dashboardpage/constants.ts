import { JOB_APP, KUDA_ICON, PROG_APP, STARTUP_APP } from '@/public';

export const applicants = [
  {
    id: 1,
    icon: PROG_APP,
    title: 'No of Program Applicants',
    number: 200,
    textC: 'text-[#471B80]',
    bgC: 'bg-[#E8D7FF]',
    accepted: ['Accepted', 100],
    rejected: ['Rejected', 100],
    pending: ['Pending', 100],
  },
  {
    id: 2,
    icon: JOB_APP,
    title: 'No of Job Applicants',
    number: 200,
    bgC: 'bg-[#DCF1E3]',
    textC: 'text-[#285C3A]',
    accepted: ['Accepted', 100],
    rejected: ['Rejected', 100],
    pending: ['Pending', 100],
  },
  {
    id: 3,
    icon: STARTUP_APP,
    title: 'No of Startups',
    number: 0,
    bgC: 'bg-[#DAE5FF]',
    textC: 'text-[#243E80]',
    accepted: ['Accepted', 100],
    rejected: ['Rejected', 100],
    pending: ['Pending', 100],
  },
];

export const applicantsHeader = [
  'Name of Applicants',
  'Application',
  'Applied date',
  'Status',
  'View',
];

export const applicantRows = [
  {
    name: 'Chris',
    application: 'Job',
    date: '6/11/2023',
    status: 'Pending',
    view: 'details',
  },
  {
    name: 'John',
    application: 'Programs',
    date: '6/11/2023',
    status: 'Pending',
    view: 'details',
  },
  {
    name: 'Martha',
    application: 'Job',
    date: '6/11/2023',
    status: 'Pending',
    view: 'details',
  },
];

export const jobRows = [
  {
    icon: KUDA_ICON,
    name: 'Kuda',
    application: 'UI/Ux Design',
    number: '100',
    view: 'details',
  },
  {
    icon: KUDA_ICON,
    name: 'Spark',
    application: 'Software Eng.',
    number: '200',
    view: 'details',
  },
  {
    icon: KUDA_ICON,
    name: 'Google',
    application: 'Data Analyst',
    number: '300',
    view: 'details',
  },
];
