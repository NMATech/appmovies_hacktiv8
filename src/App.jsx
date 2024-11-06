import Navbar from "./Components/Navbar/Navbar";
import SearchCard from "./Components/Navbar/SearchCard";
import SuggestionMovies from "./Components/home/SuggestionMovies";

function App() {
  return (
    <>
      <Navbar />
      {/* <SearchCard /> */}

      <main className="bg-main-bg_primary text-white p-2">
        <SuggestionMovies />
      </main>
    </>
  );
}

export default App;
