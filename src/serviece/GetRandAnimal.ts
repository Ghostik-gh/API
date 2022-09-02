import axios from 'types-axios';

export const randAnimalData = axios.get(
  'https://zoo-animal-api.herokuapp.com/animals/rand'
);
