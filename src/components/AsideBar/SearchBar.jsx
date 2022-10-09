import React from "react";
import { useState, useEffect } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Data from "../../../Data";

const SearchBar = () => {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState();
  const [items, setItems] = useState();
  const [active, setActive] = useState(false);
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

    setQuery(string);
  };

  const handleOnHover = (result) => {
    console.log(
      "handleOnHover =>",

      result
    );
  };

  const handleOnSelect = (item) => {
    console.log(
      "handleOnSelect =>",

      item
    );
  };

  const handleOnFocus = () => {
    console.log("Focused");
    setActive(!active)
  };
  //console.log("items out of scope =>", items);
  
  const formatResult = (item) => {
    const addElipsis = item.name.length > 20 ? item.name.substring(0, 20) + "..." : item.name;
    return (
      <>
        <span style={{ borderRadius: "5px", hoverBackgroundColor: "none", backgroundColor: "hsl(240, 2%, 20%)", display: "block", textAlign: "left" }}>{addElipsis}</span>
      </>
    );
  };
  return (
    <form className="flex items-center   justify-center w-full z-50 relative">
      <header className="App-header cursor-pointer">
        <div className="w-72 ml-10 px-2">
          <ReactSearchAutocomplete styling={{ borderRadius: "5px", hoverBackgroundColor: "none", backgroundColor: "hsl(240, 1%, 20%)", color: "white", border: "0.01rem solid hsl(240, 1%, 50%)",boxShadow:"0px" }} maxResults={4} placeholder="Search..." items={items} onSearch={handleOnSearch} onHover={handleOnHover} onSelect={handleOnSelect} onFocus={handleOnFocus} autoFocus formatResult={formatResult} />
        </div>
      </header>
    </form>
  );
};

export default SearchBar;
