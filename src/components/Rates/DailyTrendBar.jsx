import React from "react";
import { AiFillStar } from "react-icons/ai";
import ProgressBar from "react-customizable-progressbar";

const DailyTrendBar = ({ dailyTrends }) => {
  const starColor = "hsl(226, 100%, 66%)";
  const fixedInteger = dailyTrends.toFixed(1);
  return (
    <div className="font-roboto relative text-4xl font-medium">
      <ProgressBar className="scale-50 " radius={50} 
      progress={fixedInteger * 10} strokeWidth={8}
      initialAnimation={true}
       strokeColor="hsl(226, 100%, 66%)" 
       strokeLinecap="square"
        trackStrokeWidth={8}>
        <div className="indicator">
          <div>{fixedInteger}</div>
        </div>
      </ProgressBar>
    </div>
  );
};

export default DailyTrendBar;
