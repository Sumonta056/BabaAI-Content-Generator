import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className="p-10 bg-gradient-to-br from-rose-500 via-rose-700 to-orange-600 flex justify-center items-center flex-col gap-2">
      <h2 className="text-3xl font-bold text-white">Browse All Templates</h2>
      <p className="text-white">What would you like to create today?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-3 w-[50%]">
          <Search color="red" />
          <input
            type="text"
            placeholder="Search templates..."
            className="bg-transparent border-none focus:outline-none text-black"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
