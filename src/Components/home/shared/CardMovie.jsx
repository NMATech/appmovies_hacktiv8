const CardMovie = ({ children, image, title }) => {
  return (
    <div className="relative flex">
      <div className="w-[150px] bg-[#eee]">
        <img src={image} alt={`Image ${title}`} className="bg-cover" />
      </div>
      <div className="absolute inset-0 w-full bg-[#333]/40 flex justify-center items-center top-[9em]">
        <h1 className="text-center font-semibold">{children}</h1>
      </div>
    </div>
  );
};

export default CardMovie;
