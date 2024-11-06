const CardMenuMobile = ({ menus }) => {
  return (
    <section className="absolute w-[80%] mx-auto flex flex-col gap-5 bg-main-bg_primary text-white top-[5em] p-3">
      {menus.map((menu, index) => {
        return (
          <a
            href={menu.link}
            key={index}
            className=" p-1 rounded-xl hover:bg-main-primary"
          >
            <h1 className="text-xl text-main-primary hover:text-white font-semibold">
              {menu.title}
            </h1>
          </a>
        );
      })}
    </section>
  );
};

export default CardMenuMobile;