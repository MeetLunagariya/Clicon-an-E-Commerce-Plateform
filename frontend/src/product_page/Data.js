import {
  cctv,
  controller,
  img_1,
  img_11,
  img_14,
  img_15,
  img_18,
  img_25,
  img_26,
  img_6,
  img_8,
  play_station,
} from "../assets/img";
import {
  CreditCard,
  Handshake,
  Headphones_copy,
  Medal,
  Truck,
} from "../assets/svg";

const nav_data = [
  "Description",
  "Additional information",
  "Specification",
  "Review",
];

const description_data = [
  "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip - the first Apple silicon designed for pros - you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
  "Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.",
];

const feature_data = [
  { icon: Medal, title: "Free 1 Year Warranty" },
  { icon: Truck, title: "Free Shipping & Fasted Delivery" },
  { icon: Handshake, title: "100% Money-back guarantee" },
  { icon: Headphones_copy, title: "24/7 Customer support" },
  { icon: CreditCard, title: "Secure payment method" },
];

const shipping_data = [
  { title: "Courier:", value: "2-4 days, free shipping" },
  { title: "Local Shipping:", value: "up to one week, $19.00" },
  { title: "UPS Ground Shipping:", value: "4-6 days, $29.00" },
  { title: "Unishop Global Export:", value: "3-4 days, $39.00" },
];

const suggested_products = [
  {
    title: "RELATED PRODUCT",
    data: [
      {
        img: img_14,
        title: "Bose Sport Earbuds-Wireless Earphones-Bluetooth In Ear...",
        price: 1500,
      },
      {
        img: img_18,
        title: "Simple Mobile 4G LTE Prepaid Smartphone",
        price: 1500,
      },
      {
        img: img_11,
        title: "4K UHD LED Smart TV with Chromecast Built-in",
        price: 1500,
      },
    ],
  },
  {
    title: "PRODUCT ACCESSORIES",
    data: [
      {
        img: play_station,
        title: "Samsung Electronics Samsung Galexy S21 5G",
        price: 1500,
      },
      {
        img: cctv,
        title: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
        price: 1500,
      },
      {
        img: img_1,
        title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        price: 1500,
      },
    ],
  },
  {
    title: "APPLE PRODUCT",
    data: [
      {
        img: img_8,
        title: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
        price: 1500,
      },
      {
        img: img_15,
        title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...",
        price: 1500,
      },
      {
        img: controller,
        title: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
        price: 1500,
      },
    ],
  },
  {
    title: "FEATURED PRODUCTS",
    data: [
      {
        img: img_6,
        title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
        price: 1500,
      },
      {
        img: img_26,
        title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        price: 1500,
      },
      {
        img: img_25,
        title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        price: 1500,
      },
    ],
  },
];

export {
  nav_data,
  description_data,
  feature_data,
  shipping_data,
  suggested_products,
};
