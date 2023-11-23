import { createSlice } from '@reduxjs/toolkit';

export type blogState = {
  step: number;
  thumbnail: string;
  title: string;
  story: string;
  author: string;
};

export interface BlogState {
  blogs: blogState;
}

const initialState = {
  step: 1,
  thumbnail: '',
  title: '',
  story: '',
  author: '',
};

const blog = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    setStory: (state, action) => {
      state.story = action.payload;
    },
    setThumbnail: (state, action) => {
      state.thumbnail = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export default blog.reducer;
export const { setStep, setAuthor, setStory, setThumbnail, setTitle } =
  blog.actions;
