import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { useThemeContext } from "../../contexts"
import * as S from './style'

export const Header: React.FC = () => {
  const { theme } = useThemeContext()
  const bg = {
    header: theme.palette.background.paper,
    box: theme.palette.error.dark
  }
  return (
    <>
    <Stack component="header" sx={{ ...S.header, backgroundColor: bg.header }}>
      <Box className="header-box">
        <Typography component="h1" variant="h5">
          Bolão da Copa 2022
        </Typography>
        <Typography component="h2" variant="subtitle1" sx={{ backgroundColor: bg.box }}>
          Organizador: 
          <Link href="https://panthio3d.wixsite.com/bolao" target="_blank">
            Marcelo Panthio 3D
          </Link>
        </Typography>
      </Box>
    </Stack>
    <Divider />
    </>
  )
}
