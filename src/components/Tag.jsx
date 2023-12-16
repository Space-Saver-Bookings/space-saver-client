import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {forwardRef} from 'react';

// export default function Tag({options, placeholder, isMultiple, isDisabled, error, helperText}) {
//   return (
//     <Stack spacing={3} sx={{width: '100%'}}>
//       <Autocomplete
//         multiple={isMultiple}
//         id="tags"
//         options={options.map((option) => option.identifier)}
//         // defaultValue={[options[2].roomName]}
//         freeSolo
//         renderTags={(value, getTagProps) =>
//           value.map((option, index) => (
//             <Chip
//               key={index}
//               variant="outlined"
//               label={option}
//               {...getTagProps({index})}
//             />
//           ))
//         }
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             // variant="filled"
//             id='room'
//             label="room"
//             placeholder={placeholder}
//             // size='small'
//             disabled={isDisabled}
//             error={error}
//             helperText={helperText}
//           />
//         )}
//       />
//     </Stack>
//   );
// }

const Tag = forwardRef(
  (
    {options, placeholder, isMultiple, isDisabled, error, helperText, field},
    ref
  ) => {
    return (
      <Stack spacing={3} sx={{width: '100%'}}>
        <Autocomplete
          multiple={isMultiple}
          id="tags"
          options={options.map((option) => option.identifier)}
          freeSolo
          value={field?.value || null} // Use optional chaining here
          onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
              // If freeSolo allows entering values not present in the options, handle this case.
              field.onChange(newValue);
            } else {
              field.onChange(newValue?.identifier || ''); // If newValue is an object, extract identifier.
            }
          }}
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
              label="room"
              placeholder={placeholder}
              disabled={isDisabled}
              error={error}
              helperText={helperText}
              inputRef={ref}
            />
          )}
        />
      </Stack>
    );
  }
);


// Assign displayName after the component definition
Tag.displayName = 'Tag';

Tag.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  isMultiple: PropTypes.bool,
  isDisabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  field: PropTypes.any,
};

export default Tag;
