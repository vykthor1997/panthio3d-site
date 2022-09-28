import { SxProps, Theme } from "@mui/material"

export const modal: SxProps<Theme> = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  '& header': {
    marginBottom: 2
  },
  '& .MuiInputBase-root': {
    marginBottom: 1
  }
}

export const flex: SxProps<Theme> = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
} 