'use client';

import JobApplicants from '@/components/JobApplicant';
import { useSearchParams } from 'next/navigation';

const JobApplicantsPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const param = useSearchParams();
  const title = param.get('title');
  return (
    <main>
      <JobApplicants title={title || ''} id={id} />
    </main>
  );
};

export default JobApplicantsPage;
