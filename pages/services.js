// Можно позже заменить на реальный API запрос к SmoService с наценкой 50%
const services = [
  {
    id: 1,
    name: {
      ru: "Подписчики Telegram",
      en: "Telegram Subscribers",
      zh: "Telegram 訂閱者",
    },
    price: 15, // с наценкой
    unit: "1000"
  },
  {
    id: 2,
    name: {
      ru: "Просмотры VK",
      en: "VK Views",
      zh: "VK 瀏覽量",
    },
    price: 3,
    unit: "1000"
  },
  {
    id: 3,
    name: {
      ru: "Лайки Instagram",
      en: "Instagram Likes",
      zh: "Instagram 讚",
    },
    price: 10,
    unit: "1000"
  }
];
export default services;