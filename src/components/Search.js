import React from "react";
import icons from "../ultis/icons";

const { CiSearch } = icons;

const Search = () => {
  return (
    <div className="w-full flex items-center ">
      <span className="h-10 pl-4 bg-[#DDE4E4] flex items-center justify-center rounded-l-[20px] text-gray-600">
        <CiSearch size={24} />
      </span>
      <input
        type="text"
        className="outline-none px-4 bg-[#DDE4E4] py-2 w-full rounded-r-[20px] h-10 text-gray-600"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      />
    </div>
  );
};

export default Search;
