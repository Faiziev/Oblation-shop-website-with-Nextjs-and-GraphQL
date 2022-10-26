import { TextField, Select } from '@mui/material';
import { textStyle, BORDERPRIM } from '../utils/styling';

export function BorderedTextField({ rows, placeHolder }) {
  return (
    <TextField
      InputLabelProps={{
        style: {
          ...textStyle('v3'),
        },
      }}
      sx={{
        ...textStyle('v3'),
      }}
      InputProps={{
        sx: {
          // border: `1px solid ${BORDERPRIM}`,
          // padding: "10.5px 14px",
          // background: LINERGRAD,
          ...textStyle('h3'),
          '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
            border: '1px solid #D7D4D4 !important',
          },

          '&:hover': {
            '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
              border: '1px solid #D7D4D4',
            },
          },
        },
      }}
      fullWidth
      id="outlined-textarea"
      label={placeHolder}
      placeholder={placeHolder}
      size='small'
      rows={rows}
      required
    />
  );
}

export function BorderedSelect({ label, value, onChange }) {
  return (
    <Select
      labelId="demo-simple-select-label"
      fullWidth
      sx={{
        border: '1px solid transparent !important',
        '.MuiOutlinedInput-notchedOutline': {
          border: '1px solid #D7D4D4 !important',
        },
      }}
      id="demo-simple-select"
      value={value}
      label={label}
      onChange={onChange}
    />
  );
}
