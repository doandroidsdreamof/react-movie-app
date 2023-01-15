import React, { useEffect, useState } from 'react';

//* Local imports //
import ExploreLayout from '../components/layouts/ExploreLayout.jsx';
import SideNav from '../components/navbar/SideNav.jsx';

function Explore({ load }) {
  const [searchLogic, setSearchLogic] = useState(false);
  useEffect(() => {
    setSearchLogic(true);
  }, [load]);

  return <ExploreLayout expolorePage={searchLogic} logic={searchLogic} sideNav={<SideNav />} />;
}

export default Explore;
