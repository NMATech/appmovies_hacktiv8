import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  setMovies,
  setShowCard,
  setError,
} from "../../../store/slices/movieSlice";
import { useNavigate } from "react-router-dom";

const SearchNav = () => {
  const [input, setInput] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = async () => {
    try {
      if (!input) {
        dispatch(setMovies([]));
        dispatch(setShowCard(false));
        dispatch(setError(null));
        return;
      }

      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&s=${input}`
      );

      const data = await response.json();

      console.log(data);

      if (data.Response === "True") {
        dispatch(setMovies(data.Search));
        dispatch(setShowCard(true));
        dispatch(setError(null));
      } else {
        dispatch(setError(data.Error));
      }
    } catch (error) {
      dispatch(setError("Something went wrong!"));
    }
  };

  const handleWhenInputNull = () => {
    if (input === "" || input === null) {
      dispatch(setMovies([]));
    }
  };

  const handleRedirectWithQuery = () => {
    navigate(`/search/${input}`);
    setInput("");
  };

  useEffect(() => {
    handleWhenInputNull();
    handleSearch();
  }, [input]);

  return (
    <section className="h-max my-auto bg-main-bg_primary border border-black flex items-center p-2">
      <input
        type="text"
        value={input}
        onChange={(event) => handleOnInput(event)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleRedirectWithQuery();
          }
        }}
        className="bg-transparent focus:outline-none focus:ring-0 focus:border-transparent text-white"
        placeholder="Search..."
      />
      <button onClick={() => handleRedirectWithQuery()} className="">
        <IoIosSearch className="text-white text-[25px]" />
      </button>
    </section>
  );
};

export default SearchNav;
