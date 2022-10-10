import React from "react";

const CastGrid = ({children}) => {
  

  return (
    <div className={`card-grid  mt-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  justify-evenly gap-2    px-5 `}>
      {children}

  
    </div>
  );
};

export default CastGrid;

