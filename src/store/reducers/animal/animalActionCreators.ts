import axios from 'types-axios';
import { AppDispatch } from '../..';
import { IAnimal } from '../../../types/RandAnimalTypes';
import { animalSlice } from './animalSlice';

export const animalFetch = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(animalSlice.actions.getAnimal());
    const response = await axios.get<IAnimal>(
      'https://zoo-animal-api.herokuapp.com/animals/rand'
    );

    dispatch(animalSlice.actions.getAnimalSucces(response.data));
  } catch (e) {
    dispatch(
      animalSlice.actions.getAnimalError('Ошибка при запросе на сервер')
    );
  }
};
