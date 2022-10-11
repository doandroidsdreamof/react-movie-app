import * as React from 'react';
import {useEffect,useState} from 'react'
import AccordionExplore from './AccordionExplore.jsx';
import GenresExplore from './GenresExplore.jsx';






function FilterInput() {


  return (
<>
<AccordionExplore 
genresExplore={<GenresExplore />}


/>


</>
  );
}

export default FilterInput;


