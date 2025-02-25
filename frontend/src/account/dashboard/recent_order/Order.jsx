import { RightArrow } from "../../../assets/svg";

const Order = ({ item }) => {
  return (
    <div key={item.id} className="grid grid-cols-7 py-3 ">
      <p className="text-gray-900">{item.id}</p>
      <p
        className={`uppercase ${
          item.status === "cancelled"
            ? "text-[#EE5858]"
            : item.status === "completed"
            ? "text-green-500"
            : "text-[#FA8232]"
        } text-sm font-medium`}
      >
        {item.status}
      </p>
      <p className="col-span-2 text-gray-600">{item.date}</p>
      <p className="col-span-2 text-gray-700">
        ${item.total} ({item.total_items} Products)
      </p>
      <button className="text-[#2DA5F3] flex gap-1 items-center">
        <span>View Details</span>
        <span>
          <RightArrow />
        </span>
      </button>
    </div>
  );
};

export default Order;
