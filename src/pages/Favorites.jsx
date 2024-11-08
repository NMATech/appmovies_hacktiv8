import SuggestionHead from "../Components/home/shared/SuggestionHead";
import CardMovieFav from "../Components/Favorite/CardMovieFav";
import { useSelector } from "react-redux";
import NotifDelete from "../Components/Favorite/NotifDelete";

const Favorites = () => {
  const datas = JSON.parse(localStorage.getItem("favorite"));
  const isNotifVisible = useSelector((state) => state.notif);
  const notifCheck = useSelector((state) => state.notifCheck);

  return (
    <>
      <SuggestionHead title={"Favorites"} />
      {datas && datas.length > 0 ? (
        <div className="w-full flex flex-wrap justify-center items-center gap-3 mt-5">
          {datas.map((data, index) => (
            <CardMovieFav
              key={index}
              image={data.Poster}
              title={data.Title}
              dataID={data.imdbID}
            >
              {data.Title}
            </CardMovieFav>
          ))}
        </div>
      ) : (
        <h1 className="text-xl">
          You don't have any favorites movies / series
        </h1>
      )}

      {isNotifVisible && notifCheck === "delete" ? <NotifDelete /> : null}
    </>
  );
};

export default Favorites;
