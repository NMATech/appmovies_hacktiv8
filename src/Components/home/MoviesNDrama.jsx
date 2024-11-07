import { useState } from "react";
import SuggestionMovies from "./SuggestionMovies";
import dataMovieSuggestion from "../../service/dataMovie";
import dataSeriesSuggestion from "../../service/dataSeries";

const MoviesNDrama = () => {
  const [choiceActive, setChoiceActive] = useState("Movies");

  const setChoiceMovie = () => {
    setChoiceActive("Movies");
  };

  const setChoiceSeries = () => {
    setChoiceActive("TV Series");
  };

  const func = [setChoiceMovie, setChoiceSeries];

  return (
    <SuggestionMovies
      genre1={"Movies"}
      genre2={"TV Series"}
      datas={
        choiceActive === "Movies" ? dataMovieSuggestion : dataSeriesSuggestion
      }
      handle={func}
      choiceActive={choiceActive}
    />
  );
};

export default MoviesNDrama;
