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

export { nav_data, description_data, feature_data, shipping_data };
