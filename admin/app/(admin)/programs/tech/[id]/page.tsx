import ProgramApplicants from '@/components/ProgramApplicants';
import { programId } from '@/sections/programspage/tech/constants';

export const metadata = {
  title: 'Admin | Talent Tech',
  description: 'Nurturing the Future of Tech and Business in Africa.',
};

const ProgramPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  switch (id) {
    case programId.SE_TECH:
      return (
        <main>
          <ProgramApplicants title="Software Engineering" id={id} />
        </main>
      );
    case programId.DESIGN_TECH:
      return (
        <main>
          <ProgramApplicants title="Design" id={id} />
        </main>
      );
    case programId.MGMT_TECH:
      return (
        <main>
          <ProgramApplicants title="Product Management" id={id} />
        </main>
      );
    case programId.AI_TECH:
      return (
        <main>
          <ProgramApplicants title="AI and Data" id={id} />
        </main>
      );

    default:
      return (
        <main>
          <ProgramApplicants
            title="Software Engineering"
            id={programId.SE_TECH}
          />
        </main>
      );
  }
};

export default ProgramPage;
