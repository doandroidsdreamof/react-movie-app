import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import {MdKeyboardArrowUp} from 'react-icons/md'





function AccordionExplore(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setRotate(!rotate)
  };

  return (
      <Accordion sx={{  backgroundColor: 'hsl(240, 1%, 20%)' }} className='' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          
          <Typography sx={{ color: '#9ca3af', fontSize: '14px' }}>Filter Movies By Genres  <MdKeyboardArrowUp size={20} className={rotate ? '  absolute right-2 -translate-y-5 duration-200 ease-in ' : '  absolute right-2 -translate-y-5 duration-200 ease-in  rotate-180'} /></Typography>
  
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.genresExplore}
          </Typography>
        </AccordionDetails>
      </Accordion>
 
  );
}

export default AccordionExplore;