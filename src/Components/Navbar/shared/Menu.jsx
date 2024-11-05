import { FaRegHeart } from "react-icons/fa";

const Menu = () => {
  return (
    <section className="flex justify-center items-center">
      <a
        href=""
        className="w-max flex flex-col justify-center items-center text-white hover:text-rose-500"
      >
        <FaRegHeart className="text-[30px]" />
        <h1 className="text-white text-[20px] font-thin">Menu</h1>
      </a>
    </section>
  );
};

export default Menu;
