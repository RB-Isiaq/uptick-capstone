import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  thumbnail: '',
  title: '',
  story: '',
  author: '',
};

const blog = createSlice({
  name: 'blog',
  initialState,
  reducers: {
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
export const { setAuthor, setStory, setThumbnail, setTitle } = blog.actions;
