import axios from 'types-axios';
import { Animal } from '../types/RandAnimalTypes';

export const randAnimalData = axios.get<Animal>(
  'https://zoo-animal-api.herokuapp.com/animals/rand'
);
