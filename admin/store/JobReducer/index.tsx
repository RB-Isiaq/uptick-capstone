import { createSlice } from '@reduxjs/toolkit';

export type jobState = {
  step: number;
  thumbnail: string;
  title: string;
  company: string;
  deadline: string;
  description: string;
  type: string;
  category: string;
  location: string;
};

export interface JobState {
  jobApplication: jobState;
}

const initialState = {
  step: 1,
  thumbnail: '',
  title: '',
  company: '',
  deadline: '',
  description: '',
  type: '',
  category: '',
  location: '',
};

const jobApplication = createSlice({
  name: 'jobApplication',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setDeadline: (state, action) => {
      state.deadline = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setThumbnail: (state, action) => {
      state.thumbnail = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export default jobApplication.reducer;
export const {
  setStep,
  setThumbnail,
  setTitle,
  setCompany,
  setDeadline,
  setDescription,
  setType,
  setCategory,
  setLocation,
} = jobApplication.actions;
