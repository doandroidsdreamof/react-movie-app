import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import BookmarkButton from "./BookmarkButton.jsx";
import PlayVideoButton from "./PlayVideoButton.jsx";
import ShareButton from "./ShareButton.jsx";
import DailyTrendBar from "../Rates/DailyTrendBar.jsx";
import { Lazy } from "swiper";
import { Swiper } from "swiper/react";
import GenresDetail from "../Detail/GenresDetail.jsx";

import "swiper/css";
import "swiper/css/lazy";

const DetailCover = ({ passDetail }) => {
  const [loaded, setLoaded] = useState(false);
  const [genre, setGenre] = useState(passDetail);
  // console.log("DETAIL COVER =>",passDetail)
  //console.log('genre =>', genre)

  return (
    <>
      <Swiper className="mySwiper z-50  " modules={[Lazy]}>
        <div className="swiper-slide  h-fit w-full">
          <PlayVideoButton />
          <div className="bg-gradient-to-tl flex flex-col from-black w-onehundred   h-96 z-0   absolute    rounded-br-xl rounded-bl-xl  ">
            <div className="flex flex-row  justify-end gap-3 p-4">
              <BookmarkButton />
              <ShareButton />
            </div>
            <div className="z-50 flex-col   h-full flex ">
              <DailyTrendBar scale={"scale"} dailyTrends={passDetail.vote_average} />
              <h3 className="text-gray-50 order-2 relative bottom-3 ml-8 mt-auto -translate-y-8 text-2xl md:text-4xl z-50 font-roboto font-medium">{passDetail.title}</h3>
              <GenresDetail genresList={genre} />
              <div className="h-28 w-full bottom-0 bg-white-600 absolute rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-br-xl rounded-bl-xl border-gray-100"></div>
            </div>
          </div>
          <LazyLoadImage
            effect="opacity"
            afterLoad={() => {
              setLoaded(true);
            }}
            className="object-cover -z-50  rounded-br-xl rounded-bl-xl   h-96 w-screen "
            src={`https://image.tmdb.org/t/p/original/${passDetail?.backdrop_path}`}
            alt={passDetail.title}
          />
          <div className={!loaded ? "swiper-lazy-preloader" : ""}></div>
        </div>
      </Swiper>
    </>
  );
};

export default DetailCover;
