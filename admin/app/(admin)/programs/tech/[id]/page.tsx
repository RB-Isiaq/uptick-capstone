import ProgramApplicants from '@/components/ProgramApplicants';
import { seApplicants } from '@/sections/programspage/tech/constants';

const ProgramPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id);

  switch (id) {
    case '1':
      return (
        <main>
          <ProgramApplicants
            title="Software Engineering"
            details={seApplicants}
          />
        </main>
      );
    case '2':
      return (
        <main>
          <ProgramApplicants title="Design" details={seApplicants} />
        </main>
      );
    case '3':
      return (
        <main>
          <ProgramApplicants
            title="Product Management"
            details={seApplicants}
          />
        </main>
      );
    case '4':
      return (
        <main>
          <ProgramApplicants title="AI and Data" details={seApplicants} />
        </main>
      );

    default:
      return (
        <main>
          <ProgramApplicants
            title="Software Engineering"
            details={seApplicants}
          />
        </main>
      );
  }
};

export default ProgramPage;
