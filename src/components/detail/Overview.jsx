import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../../Data";
import {BsCurrencyDollar} from 'react-icons/bs'

const Overview = () => {
  const [detail, setDetail] = useState([]);
  let { id } = useParams();
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}?`;


  useEffect(() => {
    fetch(baseUrl + data.requestSearchMovie)
      .then((res) => res.json())
      .then((get) => setDetail(get))
      .catch((err) => {
        console.error(err);
      });
  }, [id]);


  return (
 <section>
     <div className="w-full h-full flex flex-col flex-wrap px-5 md:px-10 lg:px-14 mt-8 gap-y-12">
<div className="translate-x-2  gap-y-12 flex flex-col">
<div className="">
    <h3 className="italic font-roboto font-medium text-black dark:text-white text-xl block text-center">{detail.tagline ? <blockquote><q>{detail.tagline}</q></blockquote> : <></>}</h3>
      </div>
      <div className="flex flex-col gap-y-4">
      <h3 className="font-roboto text-gray-900 dark:text-gray-100 text-xl text-center md:text-left">Overview</h3>
      <p className="font-roboto text-gray-800 dark:text-gray-100 text-md text-justify ">{detail.overview}</p>
      </div>
      <div className="flex flex-col gap-y-1">
      <h3 className="font-roboto text-gray-800 dark:text-gray-100 text-lg text-center md:text-left">Details</h3>
      <p className="font-roboto text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">Original Title: {detail.original_title}</p>
      <p className="font-roboto text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">Release Date: {detail.release_date}</p>
      </div>
</div>
  <div className="stats shadow flex flex-wrap md:flex-nowrap bg-card-second rounded-md ">
  <div className="stat  ">
    <div className="stat-title ">Budged</div>
    <div className="stat-value text-primary flex border-b border-gray-500 sm:border-0">{detail.budget} <span><BsCurrencyDollar size={23} className='text-gray-300 translate-y-3'/></span> </div>
  </div>
  <div className="stat ">
    <div className="stat-title ">Vote Count</div>
    <div className="stat-value text-secondary border-b border-gray-500 sm:border-0 ">{detail.vote_count}</div>
  </div>
  <div className="stat ">
    <div className="stat-title">Popularity</div>
    <div className="stat-value border-b border-gray-500 sm:border-0">{detail.popularity}</div>
  </div>

</div>
      </div>
 </section>


  );
};

export default Overview;
