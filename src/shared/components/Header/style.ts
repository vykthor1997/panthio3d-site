import { SxProps, Theme } from "@mui/material"

export const header: SxProps<Theme> = {
  padding: 2,
  '& .header-box': {
    '& h2': {
      padding: .5,
      display: 'inline',
    }
  }
}
