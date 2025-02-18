import Search from "../../common/Search";

const Search_Bar = () => {
  return (
    <div className="flex justify-between">
      <Search classs={"border border-[#E4E7E9] w-[424px] h-[44px] text-sm"} />
      <div className="flex py-auto gap-2.5 xl:gap-[22px]">
        <label
          htmlFor="countries"
          className="text-sm font-semibold my-auto text-[#191C1F] text-center"
        >
          Sort by:
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-[#E4E7E9] text-[#475156] text-sm rounded-sm block w-[180px] p-2.5 border-r-8 border-transparent hover:cursor-pointer outline-none "
        >
          <option selected>Most Popular</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>
  );
};

export default Search_Bar;
