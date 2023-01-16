import {defineStore} from 'pinia';

export const catalogStore = defineStore({
  id: 'catalog',

  state: () => ({
    services: [
      {
        id: 1,
        name: 'Детское занятие',
        description: 'Наверное, нет на свете ребенка, который не любит игры в воде. И детсадовский возраст – самое подходящее время ненавязчиво направить эти игры в полезное русло и обучить ребенка плаванию. Огромная радость и неоценимая польза для физического развития – вот что подразумевают под собой регулярные детские занятия в бассейне. Разносторонне развитый человек должен уметь плавать. Лучше всего полезные навыки закладываются в детстве. Плавание хорошо именно тем, что польза от него достигается через детскую радость и веселый досуг на воде, занятия в бассейне приносят малышам целый шквал положительных эмоций!',
        price: 2500,
        date: '2023-01-25',
        image_url: '/src/assets/images/records/record1.jpeg',
        staff_name: 'Ирина',
        staff_surname: 'Жвацекнивич',
        staff_job_title: 'Детский тренер',
        },
      {
        id: 2,
        name: 'Водное поло',
        description: 'Водное поло было изобретено в середине 19 века Уильямом Уилсоном. Суть игры заключается в том, что команда должна забросить мяч в ворота команды-противника и защитить собственные ворота. Изначально не было определенного свода правил. Они появились лишь в 1876 году. А в 1900 году этот вид спорта вошел в программу Олимпийских игр. Кстати, в СССР водное поло было включено в программу ГТО (Готов к труду и обороне).',
        price: 3600,
        date: '2023-01-31',
        image_url: '/src/assets/images/records/record2.jpeg',
        staff_name: 'Вячеслав',
        staff_surname: 'Агронин',
        staff_job_title: 'Тренер водного поло',
        },
      {
        id: 3,
        name: 'Плавание',
        description: 'Во время плавания в бассейне или на открытой воде задействуется много мышц, при этом реально продолжительное время поддерживать нагрузку с невысокой интенсивностью. А именно так запускается процесс расхода жира в качестве энергии. В бассейне можно долго поддерживать пульс в аэробной зоне, при этом утомляемость наступает гораздо позже, чем при такой же, скажем, беговой тренировке.',
        price: 1300,
        date: '2023-02-03',
        image_url: '/src/assets/images/records/record3.jpeg',
        staff_name: 'Карина',
        staff_surname: 'Ульгантрова',
        staff_job_title: 'Тренер по плаванию',
        },
      {
        id: 4,
        name: 'Аэробика',
        description: 'Упражнения в воде – один из способов улучшить состояние своего тела, расслабиться и повысить настроение. Иногда люди отказываются от таких занятий лишь потому, что не умеют плавать. Это неправильно. Для отдельных видов водного спорта этот навык необязателен. Аквааэробика – один из них',
        price: 5000,
        date: '2023-01-20',
        image_url: '/src/assets/images/records/record4.jpeg',
        staff_name: 'Игнат',
        staff_surname: 'Карбонаров',
        staff_job_title: 'Тренер по аэробике',
        },
      ],
  }),

  actions: {
    SET_SERVICES_PAYLOAD(payload) {
      console.log(payload);
    }
  }
})
