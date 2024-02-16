import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], // Ensure that data is initialized as an array
  loading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchData: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchData, fetchDataSuccess } = dataSlice.actions;
export default dataSlice.reducer;
