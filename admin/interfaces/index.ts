export type ProgramApplicant = {
  programApplicantId: string;
  firstName: string;
  email: string;
  lastName: string;
  phone: string;
  cityState: string;
  yearsOfExperience: string;
  stack: string;
  careerGoals: string;
  githubLink: string | null;
  portfolioLink: string | null;
  commitment: string;
  howDidYouHearAboutUs: string;
  status: string;
  frontendTechStack: string | null;
  backendTechStack: string | null;
  mobileTechStack: string | null;
  otherFieldStack: string | null;
  createdAt: string;
  updatedAt: string;
  programId: string;
};

export type TechProgram = {
  name: string;
  description: string;
  type: string;
  curriculumOutline: string[];
  objectives: string;
  benefits: string;
  prerequisites: string;
  duration: string;
  applicationFormLink: string;
  enrollmentInformation: string;
  startDate: string;
  endDate: string;
  status: string;
};