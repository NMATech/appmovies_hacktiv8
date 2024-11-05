import logo from "../../assets/logo/Logo Navbar.png";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-main-bg_secondary flex">
      <section>
        <img src={logo} alt="" />
      </section>
      <section>
        <h1>Menu</h1>
      </section>
      <section>
        <input type="search" />
      </section>
    </nav>
  );
};

export default Navbar;
