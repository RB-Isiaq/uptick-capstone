import JobsDetailsPage from '@/sections/jobspage/jobsDetails';
export const metadata = {
  title: 'Job | Uptick',
  description: 'Nurturing the Future of Tech and Business in Africa.',
};

const JobId = ({ params }: { params: { jobId: string } }) => {
  const { jobId } = params;
  return (
    <main>
      <JobsDetailsPage id={jobId} />
    </main>
  );
};

export default JobId;
