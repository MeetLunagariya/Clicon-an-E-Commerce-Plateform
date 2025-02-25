import { Avatar } from "../../assets/img";
import Title from "../../product_page/Title";

const Account_Setting = () => {
  return (
    <section className="border border-gray-200 rounded-sm">
      <section className="py-2 px-6 uppercase ">
        <Title title={"Account Setting"} key={"Account Setting"} />
      </section>
      <section className="flex gap-4 border-t border-gray-200 py-2 px-6">
        <div className="max-w-[176px] max-h-[176px]">
          <img src={Avatar} alt="" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <span>Name</span>
          <span>Name</span>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <span>Name</span>
          <span>Name</span>
        </div>
      </section>
    </section>
  );
};

export default Account_Setting;
