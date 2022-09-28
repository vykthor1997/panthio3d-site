import { Divider, Button as MUIButton, Box } from "@mui/material"
import * as S from './style'

type Props = {
  handleClick(): void
}

export const Button: React.FC<Props> = ({ handleClick }) => {
  return (
    <>
    <Divider />
    <Box sx={S.button}>
      <MUIButton variant="contained" onClick={handleClick}>
        Enviar Aposta
      </MUIButton>
    </Box>
    </>
  )
}
