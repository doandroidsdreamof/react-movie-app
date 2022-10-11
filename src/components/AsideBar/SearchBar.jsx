import React from "react";
import { useState, useEffect } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useNavigate } from "react-router-dom";
import Data from "../../../Data";

const SearchBar = (searchLogic) => {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState();
  const [items, setItems] = useState();
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies(query);
  }, [query]);
  async function fetchMovies(queryValue) {
    try {
      const response = await fetch(`${Data.requestSearch}&query=${queryValue}`);
      const getData = await response.json();
      const passData = await getData.results.sort();
     // console.log("getData => ", passData);
      setSearch([...passData]);
      let parseData = [{}];
      search.map(function (item) {
        parseData.push({
          id: item.id,
          name: item.title,
        });
      });
      setItems(parseData);
      //console.log("parse", parseData);
    } catch (error) {
      console.error(err);
    }
  }
  //console.log("search out of scope =>", search);

  const handleOnSearch = (string, results) => {
    console.log("handleOnSearch string=>", string);
    console.log("handleOnSearch results=>", results);

    console.log(
      "handleOnSearch =>",

      string,
      results
    );

    console.log(results.id)
    setQuery(string);
  };

  const handleOnHover = (result) => {
   /* console.log(
      "handleOnHover =>",

      result
    );*/
  };

  const handleOnSelect = (item) => {
    console.log(
      "handleOnSelect =>",

      item
    );
    console.log('here', item)
    navigate(`/movie/${item.id}`)

  };
  const handleOnFocus = () => {
    //console.log("Focused");
    setActive(!active)
  };
  //console.log("items out of scope =>", items);


  
  const formatResult = (item) => {
    const addElipsis = item.name.length > 20 ? item.name.substring(0, 20) + "..." : item.name;
    return (
      <>

      <span style={{ borderRadius: " 15px", hoverBackgroundColor: "none", backgroundColor: "hsl(240, 1%, 20%)", display: "block", textAlign: "left" }}>{addElipsis}</span>

      
      </>
    );
  };
  return (
    <form className="flex items-center   justify-center w-full z-50 relative">
      <header className="App-header cursor-pointer w-full">
        <div className={searchLogic.explorePage ? "lg:w-[650px] md:w-[550px] w-ninty mx-auto  " : "w-72  px-2"}>

        <ReactSearchAutocomplete styling={{ borderRadius: "15px", hoverBackgroundColor: "none", backgroundColor: "hsl(240, 1%, 20%)", color: "white", border: "0.12rem solid hsl(226, 80%, 66%)",boxShadow:"0px" }} maxResults={4} placeholder="Search..." items={items} onSearch={handleOnSearch} onHover={handleOnHover} onSelect={handleOnSelect} onFocus={handleOnFocus} autoFocus formatResult={formatResult} />


        </div>
      </header>
    </form>
  );
};

export default SearchBar;
