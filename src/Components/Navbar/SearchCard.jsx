import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchCard = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);
  const { movies } = useSelector((state) => state.movie);

  console.log(movies);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`absolute bg-main-bg_secondary text-white ${
        isDesktop < 768 ? "w-full" : "min-w-[300px] right-[1em]"
      } max-h-[400px] flex flex-col gap-1 overflow-y-scroll border-t-2 border-main-primary top-[150px] md:top-[100px] lg:top-[70px]`}
    >
      {movies &&
        movies.map((movie, index) => {
          return (
            <div key={index} className="flex items-center gap-3 m-1 p-2 ">
              <div className="bg-[#ddd] h-[70px] w-[60px]">
                <img src={movie.Poster} alt="" className="bg-cover" />
              </div>
              <h1>{movie.Title}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default SearchCard;
