import { IoIosSearch } from "react-icons/io";

const SearchNav = () => {
  return (
    <section className="h-max my-auto bg-main-bg_primary border border-black flex items-center p-2">
      <input
        type="text"
        className="bg-transparent focus:outline-none focus:ring-0 focus:border-transparent text-white"
        placeholder="Search..."
      />
      <button className="">
        <IoIosSearch className="text-white text-[25px]" />
      </button>
    </section>
  );
};

export default SearchNav;
