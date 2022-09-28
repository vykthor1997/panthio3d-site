import { Box, Divider, Stack, Typography } from "@mui/material"
import { useThemeContext } from "../../contexts"
import * as S from './style'

export const Header: React.FC = () => {
  const { theme } = useThemeContext()
  const backgroundColor = theme.palette.error.dark
  return (
    <>
    <Stack component="header" sx={S.header}>
      <Box className="header-box">
        <Typography component="h1" variant="h5">
          Bolão Panthio 3D
        </Typography>
        <Typography component="h2" variant="subtitle1" sx={{ backgroundColor }}>
          Organizador: Marcelo Panthio 3D
        </Typography>
      </Box>
    </Stack>
    <Divider />
    </>
  )
}
