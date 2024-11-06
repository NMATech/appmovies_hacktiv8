import LogoNav from "./shared/LogoNav";
import Menu from "./shared/Menu";
import SearchNav from "./shared/SearchNav";

const Navbar = () => {
  return (
    <>
      {/* Nav Desktop & Ipad */}
      <nav className="bg-main-bg_secondary hidden md:flex justify-between pe-4">
        <section className="flex gap-10">
          <a href="">
            <LogoNav />
          </a>
          <Menu />
        </section>
        <SearchNav />
      </nav>

      {/* Nav Mobile */}
      <nav className="bg-main-bg_secondary flex flex-col md:hidden justify-between items-center gap-5 pt-2 pb-5">
        <section className="flex gap-10 py-1">
          <a href="">
            <LogoNav />
          </a>
          <Menu />
        </section>
        <SearchNav />
      </nav>
    </>
  );
};

export default Navbar;
