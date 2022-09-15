export interface ISymptom {
  id: string;
  img: string;
  text: string;
}

export const symptomsList: ISymptom[] = [
  {
    id: '1',
    img: 'https://cdn.stopcoronovirus.ru/img/content/symp1.svg',
    text: 'высокая температура тела',
  },
  {
    id: '2',
    img: 'https://cdn.stopcoronovirus.ru/img/content/symp2.svg',
    text: 'кашель (сухой или небольшим количеством мокроты)',
  },
  {
    id: '3',
    img: 'https://cdn.stopcoronovirus.ru/img/content/symp3.svg',
    text: 'одышка',
  },
  {
    id: '9',
    img: 'https://cdn.stopcoronovirus.ru/img/content/symp9.svg',
    text: 'боль в мышцах',
  },
  {
    id: '11',
    img: 'https://cdn.stopcoronovirus.ru/img/content/symp11.svg',
    text: 'утомляемость',
  },
  {
    id: '12',
    img: 'https://cdn.stopcoronovirus.ru/img/content/symp12.svg',
    text: 'нарушение или потеря обоняния',
  },
  {
    id: '13',
    img: 'https://cdn.stopcoronovirus.ru/img/content/symp13.svg',
    text: 'потеря вкуса',
  },
];
