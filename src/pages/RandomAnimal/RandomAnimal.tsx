import React, { useEffect, useState } from 'react';
import { randAnimalData } from '../../serviece/GetRandAnimal';
import { Animal } from '../../types/RandAnimalTypes';
import styles from './RandomAnimal.module.scss';

const defaultAnimal: Animal = {
  name: 'Victoria Crowned Pigeon',
  latin_name: 'Goura victoria',
  animal_type: 'Bird',
  active_time: 'Diurnal',
  length_min: '2.2',
  length_max: '2.4',
  weight_min: '5',
  weight_max: '5.5',
  lifespan: '12',
  habitat: 'Forest and swamp',
  diet: 'Fruits, seeds, insects and snails',
  geo_range: 'Northern New Guinea',
  image_link:
    'https://upload.wikimedia.org/wikipedia/commons/d/d2/Victoria_Crowned_Pigeon_CentralPark_Zoo.jpg',
  id: 182,
};

export const RandomAnimal = () => {
  const [animal, setAnimal] = useState<Animal>(defaultAnimal);

  useEffect(() => {
    randAnimalData.then((res) => setAnimal(res.data));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1>
          {animal.id}. {animal.name}
        </h1>
        <img src={animal.image_link} alt={animal.latin_name} />
      </div>
    </>
  );
};
