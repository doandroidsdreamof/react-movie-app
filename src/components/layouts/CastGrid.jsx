import React from 'react';

function CastGrid({ children }) {
  return (
    <section>
      <div
        className={`card-grid mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-2 px-5 `}
      >
        {children}
      </div>
    </section>
  );
}

export default CastGrid;
