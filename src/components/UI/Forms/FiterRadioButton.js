import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const FilterRadioButton = () => {
    
    return ( 
        <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Search By</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="Author" control={<Radio />} label="Author" />
          <FormControlLabel value="Title" control={<Radio />} label="Title" />

        </RadioGroup>
      </FormControl>
     );
}
 
export default FilterRadioButton;
