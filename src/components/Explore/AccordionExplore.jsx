import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';






function AccordionExplore(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className=''>
      <Accordion sx={{  backgroundColor: 'hsl(240, 1%, 20%)' }} className='' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
      
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: '#d1d5db' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.genresExplore}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionExplore;