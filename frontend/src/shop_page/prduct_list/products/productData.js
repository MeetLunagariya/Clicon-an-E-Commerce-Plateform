const products = [
  {
    id: 1,
    category: "mobile",
    badge_id: 1,
    image:'https://iili.io/33f0N5J.png',
    star_value: 5,
    review_count: 789,
    stock_status: true,
    description: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: 70,
  },
  {
    id: 2,
    category: "mobile",
    badge_id: null,
    image: 'https://iili.io/33fEMcF.png',
    star_value: 5,
    review_count: 536,
    stock_status: true,
    description: "Samsung Electronics Samsung Galexy S21 5G",
    price: 2300,
  },
  {
    id: 3,
    category: "tv",
    badge_id: 2,
    image: 'https://iili.io/33fGX07.png',
    star_value: 5,
    review_count: 423,
    stock_status: true,
    description: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: 360,
  },
  {
    id: 4,
    category: "ear",
    badge_id: null,
    image: 'https://iili.io/33fWflS.png',
    star_value: 4,
    review_count: 816,
    stock_status: true,
    description: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    price: 80,
  },
  {
    id: 5,
    category: "drone",
    badge_id: null,
    image: 'https://iili.io/33fhTFV.png',
    star_value: 5,
    review_count: 647,
    stock_status: true,
    description: "Wired Over-Ear Gaming Headphones with USB",
    price: 1500,
  },
  {
    id: 6,
    category: "tv",
    badge_id: 4,
    image: 'https://iili.io/33fjvzg.png',
    star_value: 4,
    review_count: 877,
    stock_status: true,
    description: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
    price: 1600,
    disc_price: 1200,
    disc_percentage: 25,
  },
  {
    id: 7,
    category: "tv",
    badge_id: null,
    image: 'https://iili.io/33f0N5J.png',
    star_value: 5,
    review_count: 877,
    stock_status: true,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: 250,
  },
  {
    id: 8,
    category: "mobile",
    badge_id: 3,
    image: 'https://iili.io/33fOPdQ.png',
    star_value: 5,
    review_count: 583,
    stock_status: true,
    description: "4K UHD LED Smart TV with Chromecast Built-in",
    price: 220,
  },
  {
    id: 9,
    category: "ear",
    badge_id: 2,
    image: 'https://iili.io/33fe03x.png',
    star_value: 4,
    review_count: 360,
    stock_status: false,
    description: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: 360,
  },
  {
    id: 10,
    category: "ear",
    badge_id: null,
    image: 'https://iili.io/33fkXHl.png',
    star_value: 5,
    review_count: 798,
    stock_status: true,
    description: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    price: 80,
  },
  {
    id: 11,
    category: "keyboard",
    badge_id: 1,
    image: 'https://iili.io/33fk4RV.png',
    star_value: 5,
    review_count: 600,
    stock_status: true,
    description: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: 70,
  },
  {
    id: 12,
    category: "printer",
    badge_id: null,
    image: 'https://iili.io/33fvX1a.png',
    star_value: 5,
    review_count: 583,
    stock_status: true,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: 250,
  },
  {
    id: 13,
    category: "camera",
    badge_id: null,
    image: 'https://iili.io/33fvyrb.png',
    star_value: 4,
    review_count: 740,
    stock_status: true,
    description: "Samsung Electronics Samsung Galexy S21 5G",
    price: 2300,
  },
  {
    id: 14,
    category: "camera",
    badge_id: 3,
    image: 'https://iili.io/33f81af.png',
    star_value: 4,
    review_count: 556,
    stock_status: false,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: 220,
  },
  {
    id: 15,
    category: "printer",
    badge_id: null,
    image: 'https://iili.io/33f8PMF.png',
    star_value: 4,
    review_count: 536,
    stock_status: true,
    description: "Wired Over-Ear Gaming Headphones with USB",
    price: 1500,
  },
  {
    id: 16,
    category: "washing_machine",
    badge_id: 4,
    image: 'https://iili.io/33fU0ml.png',
    star_value: 4,
    review_count: 423,
    description: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
    price: 1600,
    stock_status: false,
    disc_price: 1200,
    disc_percentage: 25,
  },
  {
    id: 17,
    category: "tv",
    badge_id: 1,
    image: 'https://iili.io/33fUiYJ.png',
    star_value: 5,
    review_count: 738,
    stock_status: true,
    description: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: 70,
  },
  {
    id: 18,
    category: "mobile",
    badge_id: null,
    image: 'https://iili.io/33fgATQ.png',
    star_value: 5,
    review_count: 536,
    stock_status: true,
    description: "Samsung Electronics Samsung Galexy S21 5G",
    price: 2300,
  },
  {
    id: 19,
    category: "ac",
    badge_id: 2,
    image: 'https://iili.io/33fgN6X.png',
    star_value: 5,
    review_count: 423,
    stock_status: false,
    description: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: 360,
  },
  {
    id: 20,
    category: "headphone",
    badge_id: null,
    image: 'https://iili.io/33fgmwQ.png',
    star_value: 4,
    review_count: 816,
    stock_status: true,
    description: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    price: 80,
  },
  {
    id: 21,
    category: "mobile",
    badge_id: 2,
    image: 'https://iili.io/33frASs.png',
    star_value: 4,
    review_count: 994,
    stock_status: true,
    description: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: 360,
  },
  {
    id: 22,
    category: "laptop",
    badge_id: null,
    image: 'https://iili.io/33frMle.png',
    star_value: 5,
    review_count: 492,
    stock_status: true,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: 250,
  },
  {
    id: 23,
    category: "phone",
    badge_id: 4,
    image: 'https://iili.io/33fr8f1.png',
    star_value: 5,
    review_count: 798,
    description: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    price: 124,
    disc_price: 80,
    stock_status: true,
    disc_percentage: 25,
  },
  {
    id: 24,
    category: "laptop",
    badge_id: 1,
    image: 'https://iili.io/33frsxp.png',
    star_value: 5,
    review_count: 600,
    stock_status: false,
    description: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: 70,
  },
];

const badge_value = {
  1: { val: "hot", color: "#EE5858" },
  2: { val: "Best Deals", color: "#2DA5F3" },
  3: { val: "sale", color: "#2DB224" },
  4: { val: "discount", color: "#EFD33D" },
};

export { products, badge_value };
