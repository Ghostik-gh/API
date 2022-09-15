import React from 'react';
import { SymptomsItem } from './SymptomsItem/SymptomsItem';
import { symptomsList } from './symptomsList';
import styles from './Symptoms.module.scss';

export const Symptoms = () => {
  return (
    <section id="symptoms" className={styles.cv_section}>
      <div>
        <div className={styles.cv_section_doc}>
          <h1 className={styles.cv_section__title}>Симптомы коронавируса</h1>
          <a
            href="https://static-1.rosminzdrav.ru/system/attachments/attaches/000/049/726/original/_A3_koronavirus_for_print.pdf?1584091816"
            target="_blank"
            className="cv-doc-link"
          >
            <div className="cv-doc-link__title">Памятка о коронавирусе</div>
            <div className="cv-doc-link__footer">
              <div className="cv-doc-link__size">PDF • 143Kb</div>
              <div className="cv-doc-link__dl">Скачать</div>
            </div>
          </a>
        </div>

        <h3 id="main-symptoms" className={styles.cv_section_subtitle}>
          Основные симптомы коронавируса
        </h3>
        <div className={styles.cv_grid}>
          {symptomsList.map((sympt) => (
            <SymptomsItem key={sympt.id} {...sympt} />
          ))}
        </div>
        <h3 id="rare-symptoms" className="cv-section__subtitle">
          Редкие симптомы коронавируса
        </h3>
        <div className="cv-grid cv-grid_item5">
          <div className="cv-grid__item">
            <div className="cv-icon-card">
              <img
                src="https://cdn.stopcoronovirus.ru/img/content/symp5.svg"
                alt=""
                className="cv-icon-card__img"
              />
              <div className="cv-icon-card__text">головная боль</div>
            </div>
          </div>
          <div className="cv-grid__item">
            <div className="cv-icon-card">
              <img
                src="https://cdn.stopcoronovirus.ru/img/content/symp10.svg"
                alt=""
                className="cv-icon-card__img"
              />
              <div className="cv-icon-card__text">
                заложенность грудной клетки
              </div>
            </div>
          </div>
          <div className="cv-grid__item">
            <div className="cv-icon-card">
              <img
                src="https://cdn.stopcoronovirus.ru/img/content/symp6.svg"
                alt=""
                className="cv-icon-card__img"
              />
              <div className="cv-icon-card__text">кровохарканье</div>
            </div>
          </div>
          <div className="cv-grid__item">
            <div className="cv-icon-card">
              <img
                src="https://cdn.stopcoronovirus.ru/img/content/symp7.svg"
                alt=""
                className="cv-icon-card__img"
              />
              <div className="cv-icon-card__text">диарея</div>
            </div>
          </div>
          <div className="cv-grid__item">
            <div className="cv-icon-card">
              <img
                src="https://cdn.stopcoronovirus.ru/img/content/symp8.svg"
                alt=""
                className="cv-icon-card__img"
              />
              <div className="cv-icon-card__text">тошнота, рвота</div>
            </div>
          </div>
        </div>
        <div className="cv-section__note">
          По данным Роспотребнадзора, инкубационный период при заражении штаммом
          "омикрон" чаще всего составляет <strong>3-6 дней</strong>. Симптомы
          во&nbsp;многом сходны со&nbsp;многими респираторными заболеваниями,
          часто имитируют обычную простуду, могут походить на&nbsp;грипп.
        </div>
      </div>
    </section>
  );
};
