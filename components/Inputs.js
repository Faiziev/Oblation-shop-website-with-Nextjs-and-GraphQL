import { TextField } from "@mui/material"
import { textStyle, BORDERPRIM } from "../utils/styling"

export const BorderedTextField = ({rows, placeHolder}) => {
  return <TextField
    InputLabelProps={{
      style: { 
        border: "1px solid transparent !important",
        ...textStyle("w3"),
      },
    }}
    sx={{
      border: "1px solid transparent !important",
      ...textStyle("w3"),
    }}
    InputProps={{
      sx: {
        border: `1px solid ${BORDERPRIM}`,
        // background: LINERGRAD,
        ...textStyle("w3"),
        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
          border: "1px solid transparent !important",
        },

        "&:hover": {
          ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            border: "1px solid #D7D4D4",
          },
        },
      },
    }}
    fullWidth
    id="outlined-textarea"
    label={placeHolder}
    placeholder={placeHolder}
    multiline
    rows={rows}
  />
}