import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnimal } from '../../../types/RandAnimalTypes';

interface AnimalState {
  animal: IAnimal;
  isLoading: boolean;
  error: string;
}

const initialState: AnimalState = {
  animal: { name: 'Abobus' },
  isLoading: false,
  error: '',
};

export const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    getAnimal(state) {
      state.isLoading = true;
    },
    getAnimalSucces(state, action: PayloadAction<IAnimal>) {
      state.isLoading = false;
      state.error = '';
      state.animal = action.payload;
    },
    getAnimalError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default animalSlice.reducer;
