import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex items-center mb-8 mt-2">
      {/* Input field */}
      <input
        id="search"
        placeholder="Search"
        className="bg-black text-white placeholder-gray-400 w-64 h-10 px-4 rounded-l-full border border-gray-600 focus:outline-none"
      />

      {/* Search button */}
      <button className="bg-gray-700 hover:bg-gray-600 h-10 px-4 rounded-r-full flex items-center justify-center border border-gray-600 border-1-0">
        <Search className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};
