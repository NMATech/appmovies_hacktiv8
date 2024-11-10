import { useParams } from "react-router-dom";
import SuggestionHead from "../Components/home/shared/SuggestionHead";
import { useDispatch, useSelector } from "react-redux";
import CardMovie from "../Components/home/shared/CardMovie";
import { useEffect } from "react";
import { setMovies } from "../store/slices/movieSlice";
import { setError } from "../store/slices/movieSlice";

const ResultSearch = () => {
  const { query } = useParams();
  const { movies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const totalResult = movies.length;

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&s=${query}`
      );

      const data = await response.json();

      console.log(data);

      if (data.Response === "True") {
        dispatch(setMovies(data.Search));
        dispatch(setError(null));
        console.log(data);
      } else {
        dispatch(setError(data.Error));
      }
    } catch (error) {
      dispatch(setError("Something went wrong!"));
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <SuggestionHead title="Result Search" />
      <h1 className="text-xl ms-3">Your keyword: {query}</h1>
      <h1 className="text-xl ms-3 mt-1">Total Results: {totalResult}</h1>

      <div className="w-full flex flex-wrap justify-center items-center gap-3 mt-5">
        {movies.map((data, index) => {
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

export default ResultSearch;
