import React from 'react';

//* Local imports //
import errorPage from '../assets/image/404.jpg';

function Error() {
  return (
    <div className=" relative overflow-hidden h-screen">
      <img alt="error-page" src={errorPage} className=" h-full w-full absolute object-cover" />

      <div className="container mx-auto px-6  md:px-12 relative z-50 flex items-center py-32 xl:py-40">
        <div className="w-full z-50 font-mono flex flex-col items-center relative ">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You&#x27;re alone here
          </h1>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">404</p>
        </div>
      </div>
    </div>
  );
}
export default Error;
