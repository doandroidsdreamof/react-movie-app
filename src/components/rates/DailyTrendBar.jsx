import React from "react";
import { AiFillStar } from "react-icons/ai";
import ProgressBar from "react-customizable-progressbar";



const DailyTrendBar = ({ dailyTrends,scale }) => {
  const starColor = "hsl(226, 100%, 66%)";
  const rating = dailyTrends !== '' ? (Math.round(dailyTrends * 100) / 100).toFixed(1) : '';

  return ( 
    <div className={scale ? "font-roboto  absolute top-3 -translate-y-4 text-4xl z-50 font-medium" : "font-roboto relative -translate-y-4 text-4xl z-50 font-medium "}>
      <ProgressBar className={scale ? "scale-75  order-1  " : "scale-50 "} radius={50} 
      progress={rating * 10} strokeWidth={8}
      initialAnimation={true}
       strokeColor="hsl(226, 100%, 66%)" 
       strokeLinecap="square"
        trackStrokeWidth={8}>
        <div className="indicator">
          <div>{rating}</div>
        </div>
      </ProgressBar>
    </div>
  );
};

export default DailyTrendBar;
