import BlogDetails from '@/sections/blogspage/internals/BlogDetails';

const BlogId = ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;
  return (
    <main>
      <BlogDetails id={blogId} />
    </main>
  );
};

export default BlogId;
