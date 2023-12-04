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

export interface JobApplicantDetails {
  applicantId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  address: string;
  resumeUrl: string;
  applicationDate: string;
  currentCompany: string | null;
  linkedinUrl: string | null;
  githubUrl: string | null;
  twitterUrl: string | null;
  portfolioUrl: string | null;
  otherUrl: string | null;
  additionalInfo: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  jobId: string;
}

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
