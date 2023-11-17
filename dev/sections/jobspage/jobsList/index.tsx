import AvailableJobs from './internals/Jobs';
import JobsTitle from './internals/JobsTitle';

const JobsListPage = () => {
  return (
    <section className="mt-[-120px] pt-[120px] ">
      <div className="absolute top-0 left-0 w-full bg-[#070C19] h-[80px] md:h-[120px]" />
      <JobsTitle />
      <AvailableJobs />
    </section>
  );
};

export default JobsListPage;
