import { SxProps, Theme } from "@mui/material"

export const footer: SxProps<Theme> = {
  padding: 2,
  textAlign: 'center',
  '& q': {
    marginRight: 1
  }, 
  '& address': {
    padding: 2,
    '& a': {
      color: 'inherit',
      fontStyle: 'normal',
      textDecoration: 'none'
    },
    '& .social-icons': {
      padding: 1,
      display: 'flex',
      gap: 1,
      justifyContent: 'center'
    }
  }
}
