import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showAnswerPage: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setShowAnswerPage(state, action) {
      state.showAnswerPage = action.payload;
    },
  },
});

export const { setShowAnswerPage } = navigationSlice.actions;
export default navigationSlice.reducer;
