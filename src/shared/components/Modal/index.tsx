import { FormEvent } from "react"
import { ArrowBack } from "@mui/icons-material"
import { Box, Modal as MUIModal, FormControl, Stack, TextField, Typography, useMediaQuery, useTheme, Button } from "@mui/material"
import * as S from './style'

type Props = {
  open: boolean
  handleClose(): void
  handleSubmit(e: FormEvent<HTMLFormElement>): void
}

export const Modal: React.FC<Props> = ({ open, handleClose, handleSubmit }) => {
  return (
    <MUIModal open={open} onClose={handleClose}>
      <Box sx={S.modal}>
        <Stack component="header" sx={S.flex}>
          <Typography component="h3" variant="h6">
            Preencha os campos abaixo:
          </Typography>
          <ArrowBack fontSize="large" color="primary" onClick={handleClose} />
        </Stack>
        <Box component="form" onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <TextField label="Nome" name="nome" required />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Telefone" name="telefone" type="tel" required />
            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </FormControl>
        </Box>
      </Box>
    </MUIModal>
  )
}
