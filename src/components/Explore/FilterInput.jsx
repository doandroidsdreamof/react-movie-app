import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';






function FilterInput() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
<div className="grid grid-cols-2 gap-8">
  <div className="relative">
    <input
      className="group peer hidden"
      type="radio"
      name="shippingOption"
      value="standard_alt"
      id="standard_alt"
    />

    <label
      className="block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
      for="standard_alt"
    >
      <span>Horror</span>

    </label>

    <svg
      className="absolute top-4 right-4 h-5 w-5 text-blue-600 opacity-0 peer-checked:opacity-100"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  </div>

</div>
  );
}

export default FilterInput;


