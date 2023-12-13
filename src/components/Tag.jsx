import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tag({options, placeholder, isMultiple}) {
  return (
    <Stack spacing={3} sx={{width: 290}}>
      <Autocomplete
        multiple={isMultiple}
        id="tags-filled"
        options={options.map((option) => option.identifier)}
        // defaultValue={[options[2].roomName]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={index}
              variant="outlined"
              label={option}
              {...getTagProps({index})}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            // variant="filled"
            label="required*"
            placeholder={placeholder}
            // size='small'
          />
        )}
      />
    </Stack>
  );
}

Tag.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  isMultiple: PropTypes.bool,
};
