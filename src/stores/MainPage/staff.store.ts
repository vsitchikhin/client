import {defineStore} from 'pinia';

export const staffStore = defineStore({
  id: 'staff',

  state: () =>({
    staff: [
      {
        id: 5,
        name: 'Вячеслав',
        surname: 'Фгронин',
        price: 1000,
        job_title: 'Тренер водного поло',
        image_url: '/src/assets/images/staff/staff1.jpeg',
      },
      {
        id: 6,
        name: 'Ирина',
        surname: 'Жвацекнивич',
        price: 1500,
        job_title: 'Детский тренер',
        image_url: '/src/assets/images/staff/staff2.jpeg',
      },
      {
        id: 7,
        name: 'Игнат',
        surname: 'Карбонаров',
        price: 6540,
        job_title: 'Тренер по аэробике',
        image_url: '/src/assets/images/staff/staff3.jpeg',
      },
      {
        id: 8,
        name: 'Карина',
        surname: 'Ульгантрова',
        price: 3200,
        job_title: 'Тренер по плаванию',
        image_url: '/src/assets/images/staff/staff4.jpeg',
      }
    ]
  })
})