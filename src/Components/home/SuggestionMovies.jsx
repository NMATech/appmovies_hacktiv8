import BtnCategory from "./shared/BtnCategory";
import CardMovie from "./shared/CardMovie";
import SuggestionHead from "./shared/SuggestionHead";

const SuggestionMovies = ({ genre1, genre2, datas, handle, choiceActive }) => {
  return (
    <>
      <div className="flex items-center">
        <SuggestionHead title={"Suggestion"} />
        <div className="flex gap-3">
          <BtnCategory choiceActive={choiceActive} handle={handle[0]}>
            {genre1}
          </BtnCategory>
          <BtnCategory choiceActive={choiceActive} handle={handle[1]}>
            {genre2}
          </BtnCategory>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center gap-3 mt-5">
        {datas.map((data, index) => {
          return (
            <CardMovie
              key={index}
              data={data}
              image={data.Poster}
              title={data.Title}
            >
              {data.Title}
            </CardMovie>
          );
        })}
      </div>
    </>
  );
};

export default SuggestionMovies;
