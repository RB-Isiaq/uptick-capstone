import JobsDetailsPage from '@/sections/jobspage/jobsDetails';

const BlogId = ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;
  return (
    <main>
      <JobsDetailsPage id={blogId} />
    </main>
  );
};

export default BlogId;
