import axios from 'types-axios';
import { IAnimal } from '../types/RandAnimalTypes';

export const randAnimalData = axios.get<IAnimal>(
  'https://zoo-animal-api.herokuapp.com/animals/rand'
);
