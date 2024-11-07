import logoFoot from "../../assets/logo/Logo Footer.png";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center gap-5 bg-main-bg_primary text-white p-5">
      <img src={logoFoot} alt="" />
      <p>Copyright © AppMovies. All Rights Reserved</p>

      <div className="flex gap-5">
        <a href="">
          <p>Term & Policy</p>
        </a>
        <a href="">
          <p>DMCA</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
