import ProgramApplicants from '@/components/ProgramApplicants';
import { seApplicants } from '@/sections/programspage/tech/constants';

const jobApplicantsPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id);

  return (
    <main>
      <ProgramApplicants title="Software Engineering" details={seApplicants} />
    </main>
  );
};

export default jobApplicantsPage;
