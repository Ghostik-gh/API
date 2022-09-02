import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { animalFetch } from '../../store/reducers/animal/animalActionCreators';
import styles from './RandomAnimal.module.scss';

export const RandomAnimal = () => {
  const dispatch = useAppDispatch();

  const { animal, error, isLoading } = useAppSelector(
    (state) => state.rootReducer.animalReducer
  );

  useEffect(() => {
    dispatch(animalFetch());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={styles.container}>
        {isLoading && <h1>Идет Загрузка</h1>}
        {error && <h1>{error}</h1>}
        {!error && !isLoading ? (
          <>
            <h1>
              {animal.id}. {animal.name}
            </h1>
            <img src={animal.image_link} alt={animal.latin_name} />
          </>
        ) : null}
        <button onClick={() => dispatch(animalFetch())}>New</button>
      </div>
    </>
  );
};
