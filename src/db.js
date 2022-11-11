const PRODUCTS = [
  {
    id: 1,
    title: "Диван `Rome`",
    img: "https://www.mebelvdom.ua/static/content/thumbs/420-420/8/a3/nik5kh-9f17d73742e489189d6625d3c4bcba38.jpeg",
    price: 7400,
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/7/ff/xjwl5z-414ac896eda4a85137af22ba9e235ff7.jpeg",
    category: "Дивани",
  },
  {
    id: 2,
    title: "Диван `Olbia`",
    img: "https://www.mebelvdom.ua/static/content/thumbs/420-420/1/db/5ewly3-1c7bdc6c788ff3262ba692e9f1340db1.jpeg",
    price: 9500,
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/7/ff/xjwl5z-414ac896eda4a85137af22ba9e235ff7.jpeg",
    category: "Дивани",
  },

  {
    id: 3,
    title: "Диван `Milan`",
    img: "https://www.mebelvdom.ua/static/content/thumbs/420-420/d/56/bnrsa6-e4901f547526cc21aa992baaf795b56d.jpeg",
    price: 10600,
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/7/ff/xjwl5z-414ac896eda4a85137af22ba9e235ff7.jpeg",
    category: "Дивани",
  },
  {
    id: 4,
    title: "Стол `Art`",
    img: "https://www.mebelvdom.ua/static/content/thumbs/420-420/e/76/xldq5b-3c13909e3e5c412187e7af708cd4076e.jpeg",
    price: 2270,
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/a/db/5kyhom-5794fc3a1291159eb8209d9530825dba.jpeg",
    category: "Столи",
  },
  {
    id: 5,
    title: "Cтол ` Dream`",
    img: "https://www.mebelvdom.ua/static/content/thumbs/420-420/c/3e/jjzazf-fe754ecdac5c8680d196ca2a378e93ec.jpeg",
    price: 3200,
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/a/db/5kyhom-5794fc3a1291159eb8209d9530825dba.jpeg",
    category: "Столи",
  },
  {
    id: 6,
    title: "Cтол `NewArt`",
    img: "https://www.mebelvdom.ua/static/content/thumbs/1100-1100/8/73/whpmgs-563988edab59fcf20176e59f44036738.jpeg",
    price: 5370,
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/a/db/5kyhom-5794fc3a1291159eb8209d9530825dba.jpeg",
    category: "Столи",
  },
  {
    id: 7,
    title: "Крісло ",
    img: "https://www.mebelvdom.ua/static/content/thumbs/420-420/8/9d/ag2d56-90f1a7f0b0663df71a0561a85081b9d8.jpeg",
    price: 4200,
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/b/a9/4bibub-5ca589bbdfc7a4a79ef1d1f3ec99aa9b.jpeg",
    category: "Стільці ",
  },
  {
    id: 8,
    title: "Стілець Ikea",
    img: "https://www.mebelvdom.ua/static/content/thumbs/420-420/6/9b/emhbum-bb4c4b03dcf7d709ef547f05d8a769b6.jpeg",
    price: 2700,
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/b/a9/4bibub-5ca589bbdfc7a4a79ef1d1f3ec99aa9b.jpeg",
    category: "Стільці ",
  },
  {
    id: 9,
    title: "Свічка",
    img: "https://www.mebelvdom.ua/static/content/thumbs/420-420/f/11/o2m2ex-912c61bd2d29460eb4175263608a711f.jpeg",
    price: 120,
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/1/0e/tciwxa-c6acb237c4d74b99f7d5f95f60b5b0e1.jpeg",
    category: "Декор",
  },
  {
    id: 10,
    title: "Тарілка",
    img: "https://www.mebelvdom.ua/static/content/thumbs/420-420/d/db/462vnc-0ad72672ca89de3cd973acf57b28edbd.jpeg",
    price: 350,
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/1/0e/tciwxa-c6acb237c4d74b99f7d5f95f60b5b0e1.jpeg",
    category: "Декор",
  },
  {
    id: 11,
    title: "Ваза",
    img: "https://www.mebelvdom.ua/static/content/thumbs/420-420/7/7b/egnhhd-9c116bc9b7952ab0cb8a213a82cda7b7.jpeg",
    price: 230,
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/1/0e/tciwxa-c6acb237c4d74b99f7d5f95f60b5b0e1.jpeg",
    category: "Декор",
  },
];
const CATEGORIES = [
  {
    category: "Всі",
  },
  {
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/7/ff/xjwl5z-414ac896eda4a85137af22ba9e235ff7.jpeg",
    category: "Дивани",
  },
  {
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/1/0e/tciwxa-c6acb237c4d74b99f7d5f95f60b5b0e1.jpeg",
    category: "Декор",
  },
  {
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/b/a9/4bibub-5ca589bbdfc7a4a79ef1d1f3ec99aa9b.jpeg",
    category: "Стільці ",
  },
  {
    categoryImg:
      "https://www.mebelvdom.ua/static/content/thumbs/340x192/a/db/5kyhom-5794fc3a1291159eb8209d9530825dba.jpeg",
    category: "Столи",
  },
];
const USERS = [
  {
    name: "Elena",
    email: "elena@gmail.com",
    password: "123",
    basket: [1, 3, 7],
    status: false,
  },
];

const db = {
  productsDb: PRODUCTS,
  usersDb: USERS,
  categories: CATEGORIES,
};
export default db;
