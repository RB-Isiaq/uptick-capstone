import { jobDetails } from './constant';
import JobDetails from './jobDetails';

const JobsDetailsPage = () => {
  return (
    <>
      <JobDetails details={jobDetails} />
    </>
  );
};

export default JobsDetailsPage;
