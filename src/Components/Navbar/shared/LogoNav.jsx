import logo from "../../../assets/logo/Logo Navbar.png";
import logoMobile from "../../../assets/logo/Logo Footer.png";
import { useEffect, useState } from "react";

const LogoNav = () => {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setBrowserWidth(window.innerWidth); // Function set value browser width

    // add event listener resize to winddow
    window.addEventListener("resize", handleResize);

    // clear event listener when component doesn't used again
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex justify-center items-center">
      <img src={browserWidth < 768 ? logoMobile : logo} alt="logo app movies" />
    </section>
  );
};

export default LogoNav;
