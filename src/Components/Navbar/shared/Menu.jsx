import { FaRegHeart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import MenuMobile from "./MenuMobile";
import { useState } from "react";
import CardMenuMobile from "./CardMenuMobile";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    {
      logo: <IoHomeOutline className="text-[30px]" />,
      title: "Home",
      link: "#",
    },
    {
      logo: <FaRegHeart className="text-[30px]" />,
      title: "Favorites",
      link: "#",
    },
  ];

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <section className="hidden md:flex justify-center items-center gap-5">
        {menus.map((menu, index) => {
          return (
            <a
              href={menu.link}
              key={index}
              className="w-max flex flex-col justify-center items-center text-white hover:text-rose-500"
            >
              {menu.logo}
              <h1 className="text-white text-[20px] font-thin">{menu.title}</h1>
            </a>
          );
        })}
      </section>

      {/* Menu tablet dan mobile */}
      <MenuMobile isOpen={isOpen} handleMenu={handleMenu} />

      {isOpen && <CardMenuMobile menus={menus} />}
    </>
  );
};

export default Menu;
