import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg">
        <Search color="red" />
        <input type="text" placeholder="Search" className="outline-none" />
      </div>
      <div>
        <h2 className="bg-gradient-to-br from-rose-500 via-rose-700 to-orange-800 p-2 rounded-full text-md text-white">
          🔥 Join Membership just for $9.99/Month
        </h2>
      </div>
    </div>
  );
};

export default Header;
