import { ReactNode } from "react"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, useMediaQuery, useTheme } from "@mui/material"
import * as S from './style'

type Props = {
  message: string
  children?: ReactNode
  handleClose(): void
}
export const Notification: React.FC<Props> = ({ message, children, handleClose }) => {
  const open = Boolean(message)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      >
        <DialogContentText sx={S.notification}>
          {message}
        </DialogContentText>
        {children && (
          <DialogContent dividers>
            {children}
          </DialogContent>
        )}
        <DialogActions onClick={handleClose}>
          <Button>OK</Button>
        </DialogActions>
      </Dialog>
  )
}
