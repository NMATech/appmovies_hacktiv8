import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addFavorites } from "../../../store/slices/favSlices";

const CardMovie = ({ children, image, title, data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const onHovered = () => {
    setIsHovered(true);
  };

  const onHoverOut = () => {
    setIsHovered(false);
  };

  const handleAddFav = (data) => {
    dispatch(addFavorites(data));
  };

  return (
    <div
      onMouseEnter={onHovered}
      onMouseLeave={onHoverOut}
      className="relative flex"
    >
      <div className="w-[150px] bg-[#eee]">
        <img src={image} alt={`Image ${title}`} className="bg-cover" />
      </div>
      <div className="absolute inset-0 w-full bg-[#333]/40 flex justify-center items-center top-[9em]">
        <h1 className="text-center font-semibold">{children}</h1>
      </div>

      {isHovered && (
        <div className="absolute w-full inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <button
            onClick={() => {
              handleAddFav(data);
            }}
            className="text-rose-500 hover:text-red-500"
          >
            <FaRegHeart className="text-[30px] " />
          </button>
          <h1>Add favorite</h1>
        </div>
      )}
    </div>
  );
};

export default CardMovie;
