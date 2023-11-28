import { KUDA } from '@/public';

export interface JobDetailsType {
  id: number;
  title: string;
  description: string;
}

export const jobsDetailsData: JobDetailsType[] = [
  {
    id: 1,
    title: 'Job 1',
    description: 'Description for Job 1',
  },
  {
    id: 2,
    title: 'Job 2',
    description: 'Description for Job 2',
  },
  {
    id: 3,
    title: 'Job 3',
    description: 'Description for Job 3',
  },
];

export const jobDetails = {
  title: 'Software Engineer (Backend)',
  thumbnail: KUDA,
  deadline: '18th Nov 2023',
  description: '',
};
