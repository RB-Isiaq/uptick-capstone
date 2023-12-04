import JobsDetailsPage from '@/sections/jobspage/jobsDetails';

const JobId = ({ params }: { params: { jobId: string } }) => {
  const { jobId } = params;
  return (
    <main>
      <JobsDetailsPage id={jobId} />
    </main>
  );
};

export default JobId;
