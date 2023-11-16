
const JobDetails = () => {
  return (
    <div>Jobs Details Page</div>
  );
};
export default JobDetails;


// import { movies } from '../../data'; 


// import { jobsDetailsData, JobDetailsType } from './constant';

// const JobDetails = ({ job }: { job: JobDetailsType | undefined }) => {
//   if (!job) {
//     return <div>No job found</div>;
//   }

//   return (
//     <div key={job.id}>
//       <h2>{job.title}</h2>
//       <p>{job.description}</p>
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const paths = jobsDetailsData.map((job) => ({
//     params: { jobId: `${job.id}` },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }: { params: { jobId: string } }) {
//   const jobId = parseInt(params.jobId, 10);
//   const job = jobsDetailsData.find((job) => job.id === jobId);

//   if (!job) {
//     console.log(`Job ID ${jobId} not found`);
//   }

//   return { props: { job } };
// }

// export default JobDetails;

