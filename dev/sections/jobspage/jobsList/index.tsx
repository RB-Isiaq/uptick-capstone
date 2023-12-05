import AvailableJobs from './internals/Jobs';
import JobsTitle from './internals/JobsTitle';

const JobsListPage = () => {
  return (
    <section>
      <JobsTitle />
      <AvailableJobs />
    </section>
  );
};

export default JobsListPage;
