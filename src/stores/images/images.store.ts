import {defineStore} from 'pinia';

export const imagesStore = defineStore({
  id: 'images',

  state: () => ({
    images: [
      {
        id: 1,
        url: '/src/assets/images/mainPage/main1.jpeg'
      },
      {
        id: 2,
        url: '/src/assets/images/mainPage/main2.jpeg'
      },
      {
        id: 3,
        url: '/src/assets/images/mainPage/main3.jpeg'
      },
      {
        id: 4,
        url: '/src/assets/images/mainPage/main4.jpeg'
      },
      {
        id: 5,
        url: '/src/assets/images/mainPage/main5.jpeg'
      },
    ],
  })
})