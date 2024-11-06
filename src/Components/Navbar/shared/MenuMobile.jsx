import { IoMenu, IoClose } from "react-icons/io5";

const MenuMobile = ({ handleMenu, isOpen }) => {
  return (
    <>
      <section className="flex md:hidden">
        <button onClick={handleMenu}>
          {isOpen ? (
            <IoClose className="text-white text-[50px]" />
          ) : (
            <IoMenu className="text-white text-[50px]" />
          )}
        </button>
      </section>
    </>
  );
};

export default MenuMobile;
