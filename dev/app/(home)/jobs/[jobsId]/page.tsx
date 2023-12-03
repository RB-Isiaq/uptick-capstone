import JobsDetailsPage from '@/sections/jobspage/jobsDetails';

const JobsID = ({ params }: { params: { jobsId: string } }) => {
  const { jobsId } = params;
  console.log(jobsId);
  return (
    <main>
      <JobsDetailsPage id={jobsId} />
    </main>
  );
};

export default JobsID;
