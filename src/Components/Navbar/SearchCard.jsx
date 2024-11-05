const SearchCard = () => {
  return (
    <div className="absolute bg-main-bg_secondary text-white w-full lg:min-w-[300px] border-t-2 border-main-primary lg:right-[1em] top-[150px] md:top-[100px] lg:top-[70px]">
      <div className="flex items-center gap-3 m-1 p-2 border-b border-[#eee]">
        <div className="bg-[#ddd] h-[70px] w-[60px]"></div>
        <h1>Harry Potter</h1>
      </div>
      <div className="flex items-center gap-3 m-1 p-2 border-b border-[#eee]">
        <div className="bg-[#ddd] h-[70px] w-[60px]"></div>
        <h1>Harry Potter</h1>
      </div>
    </div>
  );
};

export default SearchCard;
