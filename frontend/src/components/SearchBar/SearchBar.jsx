import search from "../../assets/search.png";

function SearchBar() {
  return (
    <div className="mt-2 flex w-full max-w-6xl items-center rounded-3xl border border-gray-200 bg-white px-2 py-2 shadow-lg transition-all duration-300 hover:shadow-xl">
      <input
        type="text"
        placeholder="What do you need today?"
        className="flex-1 bg-transparent text-lg text-gray-700 outline-none placeholder:text-gray-400"
      />

      <button className="rounded-full bg-blue-600 px-3 py-3 text-white transition-all duration-300 hover:bg-blue-700">
        <img src={search} alt="Search" className="h-5 w-5" />
      </button>
    </div>
  );
}

export default SearchBar;