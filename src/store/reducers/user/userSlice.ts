import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  city: string;
  popap: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  city: 'Moscow',
  popap: false,
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getCity(state) {
      state.isLoading = true;
      state.popap = true;
    },
    getCitySucces(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.popap = false;
      state.error = '';
      state.city = action.payload;
    },
    getCityError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    clickExit(state) {
      state.isLoading = false;
      state.popap = false;
    },
  },
});

export default userSlice.reducer;
