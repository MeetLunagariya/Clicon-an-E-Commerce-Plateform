import { CaretRight, House } from "../../assets/svg";

const nav_arr = ["Home", "Shop", "ShopGrid", "Electronics Devices"];

const Routes_Nav = () => {
  return (
    <div className="xl:px-[200px] flex gap-[8px] h-[72px] bg-[#F2F4F5]">
      <span className="my-auto">
        <House />
      </span>
      {nav_arr.map((item) => (
        <>
          <span
            className={`${
              nav_arr.indexOf(item) !== nav_arr.length - 1
                ? "text-[#5F6C72]"
                : "text-[#2DA5F3]"
            } my-auto`}
          >
            {item}
          </span>
          {nav_arr.indexOf(item) === nav_arr.length - 1 ? null : (
            <span className="my-auto">
              <CaretRight />
            </span>
          )}
        </>
      ))}
    </div>
  );
};

export default Routes_Nav;
