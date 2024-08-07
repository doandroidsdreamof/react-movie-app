import * as React from 'react';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import genres from '../../constants/genreList'

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 280px;
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === 'light' ? 'hsl(240, 1%, 20%)' : '#fff'};
  border: 1px solid ${theme.palette.mode === 'light' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'light' ? grey[300] : grey[900]};


  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'light' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'light' ? grey[600] : grey[300]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'light' ? blue[500] : blue[200]};

  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 4px;
  margin: 12px 0;
  min-width: 280px;
  border-radius: 12px;
  overflow: auto;
  max-height: 300px;
  outline: 0px;
  background: ${theme.palette.mode === 'light' ? 'hsl(240, 1%, 20%)' : '#fff'};
  border: 1px solid ${theme.palette.mode === 'light' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'light' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'light' ? grey[900] : grey[200]};
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;



  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'light' ? 'hsl(240, 1%, 20%)' : blue[100]};
    color: ${theme.palette.mode === 'light' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'light' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'light' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'light' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'light' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'light' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'light' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'light' ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} ref={ref} slots={slots} />;
});

function GenresExplore(prop) {
  return (
    <CustomSelect onChange={(e) => prop.onChange(e)} defaultValue={1}>
      {genres?.map((genre) => (
        <StyledOption key={genre.id} id={genre.id} value={genre.value}>
          {genre.label}
        </StyledOption>
      ))}
    </CustomSelect>
  );
}

export default GenresExplore;
