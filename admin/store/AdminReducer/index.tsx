import { createSlice } from '@reduxjs/toolkit';

export type adminState = {
  userId: string;
  isAdmin: boolean;
  token: string;
};
export interface AdminState {
  admin: adminState;
}

export const initialState = {
  userId: '',
  isAdmin: false,
  token: '',
};

const admin = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    storeAdmin: (state, action) => {
      const { userId, isAdmin, token } = action.payload;
      state.userId = userId;
      state.isAdmin = isAdmin;
      state.token = token;
    },
  },
});

export default admin.reducer;
export const { storeAdmin } = admin.actions;
