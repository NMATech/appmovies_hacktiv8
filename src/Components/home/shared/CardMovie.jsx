const CardMovie = ({ children }) => {
  return (
    <div className="relative flex">
      <div className="h-[180px] w-[150px] bg-[#eee]"></div>
      <div className="absolute inset-0 w-full h-[30px] bg-[#333] bg-opacity-80 flex justify-center items-center top-[9em]">
        <h1 className="text-center">{children}</h1>
      </div>
    </div>
  );
};

export default CardMovie;
