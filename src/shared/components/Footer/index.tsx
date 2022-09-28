import { Box, Divider, Stack, Typography } from "@mui/material"
import * as S from './style'

export const Footer: React.FC = () => {
  return (
    <>
    <Divider />
    <Stack component="footer" sx={S.footer}>
      <Box component="blockquote">
        <Typography component="q">
          E o enchi do Espírito de Deus, de sabedoria, e de entendimento, e de ciência, em todo o lavor
        </Typography>
        (Êxodo 31:3)
      </Box>
      <Typography component="address">
        Organizador: Marcelo Panthio 3D (77) 9 8132-9155 ou panthio3d@hotmail.com
      </Typography>
    </Stack>
    </>
  )
}
