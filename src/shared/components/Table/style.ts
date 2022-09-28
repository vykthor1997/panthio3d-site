import { SxProps, Theme } from "@mui/material"

export const table: SxProps<Theme> = {
  padding: 2,
  minHeight: '400px',
  '& input[type=number]': {
    MozAppearance: 'textfield',
    margin: 0,
    padding: 1,
    width: 20,
    textAlign: 'center'
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0
  }
}

