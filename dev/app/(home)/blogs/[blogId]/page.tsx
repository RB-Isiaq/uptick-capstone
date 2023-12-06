import BlogDetails from '@/sections/blogspage/internals/BlogDetails';

export const metadata = {
  title: 'Blog | Uptick',
  description: 'Nurturing the Future of Tech and Business in Africa.',
};

const BlogId = ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;
  return (
    <main>
      <BlogDetails id={blogId} />
    </main>
  );
};

export default BlogId;
