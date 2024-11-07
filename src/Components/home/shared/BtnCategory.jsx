const BtnCategory = ({ children, handle, choiceActive }) => {
  return (
    <button
      onClick={handle}
      className={`h-max ${
        (choiceActive === "Movies" && children === "Movies") ||
        (choiceActive === "TV Series" && children === "TV Series")
          ? "bg-main-primary"
          : "bg-transparent"
      } rounded-xl py-2 px-4`}
    >
      {children}
    </button>
  );
};

export default BtnCategory;
