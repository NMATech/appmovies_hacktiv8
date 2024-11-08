import { useSelector } from "react-redux";
import Notif from "../Components/Favorite/Notif";
import MoviesNDrama from "../Components/home/MoviesNDrama";

const Home = () => {
  const isNotifVisible = useSelector((state) => state.notif);
  const notifCheck = useSelector((state) => state.notifCheck);

  return (
    <>
      <MoviesNDrama />

      {isNotifVisible && notifCheck === "add" ? <Notif /> : null}
    </>
  );
};

export default Home;
