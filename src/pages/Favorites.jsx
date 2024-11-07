import { useSelector } from "react-redux";
import CardMovie from "../Components/home/shared/CardMovie";
import SuggestionHead from "../Components/home/shared/SuggestionHead";

const Favorites = () => {
  const datas = JSON.parse(localStorage.getItem("favorite"));

  console.log(datas);

  return (
    <>
      <SuggestionHead title={"Favorites"} />
      {datas && datas.length > 0 ? (
        <div className="w-full flex flex-wrap justify-center items-center gap-3 mt-5">
          {datas.map((data, index) => (
            <CardMovie key={index} image={data.Poster} title={data.Title}>
              {data.Title}
            </CardMovie>
          ))}
        </div>
      ) : (
        <h1 className="text-xl">
          You don't have any favorites movies / series
        </h1>
      )}
    </>
  );
};

export default Favorites;
