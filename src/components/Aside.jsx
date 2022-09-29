import React from "react";
import SearchBar from "./SearchBar.jsx";

const Aside = () => {


  return (
    <div className={" border-l-2  bg-bg-color relative font-roboto right-0 border-gray-800  hidden lg:block w-[250px] pt-4 " }>
      <div className=" text-white mt-6">

      <SearchBar />
      </div>


    </div>
  );
};
export default Aside;