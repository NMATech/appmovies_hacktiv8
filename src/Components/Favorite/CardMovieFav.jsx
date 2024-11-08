import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../store/slices/favSlices";
import { notifDelete } from "../../store/slices/notifCheckSlice";
import { showNotif, hideNotif } from "../../store/slices/notifSlice";

const CardMovieFav = ({ children, image, title, dataID }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const onHovered = () => {
    setIsHovered(true);
  };

  const onHoverOut = () => {
    setIsHovered(false);
  };

  const handleDeleteFav = (data) => {
    dispatch(deleteFavorite(data));
    dispatch(notifDelete());
    dispatch(showNotif());

    setInterval(() => {
      dispatch(hideNotif());
    }, 3000);
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
              handleDeleteFav(dataID);
            }}
            className="text-rose-500 hover:text-red-500"
          >
            <FaRegTrashAlt className="text-[30px] " />
          </button>
          <h1>Delete favorite</h1>
        </div>
      )}
    </div>
  );
};

export default CardMovieFav;
