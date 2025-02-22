import { Package, Receipt, Rocket } from "../../../assets/svg";

const order_details = [
  {
    id: 1,
    title: "Total Orders",
    count: 154,
    bg:'#EAF6FE',
    svg: <Rocket />,
  },
  {
    id: 2,
    title: "Pending Orders",
    count: 5,
    bg:'#FFF3EB',
    svg: <Receipt />,
  },
  { id: 3, title: "Completed Orders", count: 149,bg:'#EAF7E9', svg: <Package /> },
];

export default order_details;
