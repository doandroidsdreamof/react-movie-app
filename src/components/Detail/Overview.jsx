import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../../Data";
import {BsCurrencyDollar} from 'react-icons/bs'

const Overview = () => {
  const [detail, setDetail] = useState([]);
  let { id } = useParams();
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}?`;

  // data.requestSearchByID

  useEffect(() => {
    fetch(baseUrl + data.requestSearchMovie)
      .then((res) => res.json())
      .then((get) => setDetail(get))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log("burası", detail);

  return (
    <div className="w-full h-full flex flex-col flex-wrap px-5 md:px-10 lg:px-20 text-left">
<div className="translate-x-1">
<div className="">
        <h2 className="">{detail.title}</h2>
        <h3 className="">{detail.tagline}</h3>
      </div>
      <div className="">
      <h3 className="">Overview</h3>
      <p className="">{detail.overview}</p>
      </div>
      <div className="">
      <h3 className="">Details</h3>
      <p className="">Original Title: {detail.original_title}</p>
      <p className="">Release Date: {detail.release_date}</p>
      </div>
</div>

      <div className="stats shadow flex flex-wrap md:flex-nowrap bg-card-second rounded-md ">
  <div className="stat  ">
    <div className="stat-title ">Budged</div> 
    <div className="stat-value text-primary flex border-b border-gray-200 sm:border-0">{detail.budget} <span><BsCurrencyDollar size={23} className='text-gray-300 translate-y-3'/></span> </div>
  </div>

  <div className="stat ">
    <div className="stat-title ">Vote Count</div>
    <div className="stat-value text-secondary border-b border-gray-200 sm:border-0 ">{detail.vote_count}</div>
  </div>
  
  <div className="stat ">
    <div className="stat-title">Popularity</div>
    <div className="stat-value border-b border-gray-200 sm:border-0">{detail.popularity}</div>
  </div>
  
</div>
      </div>


  );
};

export default Overview;
