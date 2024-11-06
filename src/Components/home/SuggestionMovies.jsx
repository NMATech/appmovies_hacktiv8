import BtnCategory from "./shared/BtnCategory";
import CardMovie from "./shared/CardMovie";
import SuggestionHead from "./shared/SuggestionHead";

const SuggestionMovies = () => {
  return (
    <>
      <div className="flex items-center">
        <SuggestionHead />
        <div className="flex gap-3">
          <BtnCategory>Movies</BtnCategory>
          <BtnCategory>TV Series</BtnCategory>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center gap-3">
        <CardMovie>Harry Potter</CardMovie>
        <CardMovie>Harry Potter 2</CardMovie>
      </div>
    </>
  );
};

export default SuggestionMovies;
