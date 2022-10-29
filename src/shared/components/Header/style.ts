import { SxProps, Theme } from "@mui/material"

export const header: SxProps<Theme> = {
  padding: 2,
  '& .header-box': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h2': {
      padding: .5,
      display: 'inline',
      '& a': {
        color: 'inherit',
        marginLeft: 1
      }
    }
  }
}
