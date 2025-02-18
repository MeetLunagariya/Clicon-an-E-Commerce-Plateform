import {
  amazon,
  CreditCard,
  CurrencyDollar,
  paypal,
  venmo,
} from "../../assets/img";

export const payment_options = [
  {
    id: 1,
    img: CurrencyDollar,
    title: "Cash on Delivery",
  },
  {
    id: 2,
    img: venmo,
    title: "Venmo",
  },
  {
    id: 3,
    img: paypal,
    title: "Paypal",
  },
  {
    id: 4,
    img: amazon,
    title: "Amazon Pay",
  },
  {
    id: 5,
    img: CreditCard,
    title: "Debit/Credit Card",
  },
];
