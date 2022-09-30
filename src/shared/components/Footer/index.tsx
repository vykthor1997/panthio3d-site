import { Facebook, Instagram, Twitter, WhatsApp, YouTube } from "@mui/icons-material"
import { Box, Divider, Link,  Stack,  Typography } from "@mui/material"
import { useThemeContext } from "../../contexts"
import * as S from './style'

export const Footer: React.FC = () => {
  const { theme } = useThemeContext()
  const backgroundColor = theme.palette.background.paper
  return (
    <>
    <Divider />
    <Stack component="footer" sx={{ ...S.footer, backgroundColor }}>
      <Box component="blockquote">
        <Typography component="q">
          E o enchi do Espírito de Deus, de sabedoria, e de entendimento, e de ciência, em todo o lavor
        </Typography>
        (Êxodo 31:3)
      </Box>
      <Divider />
      <Box component="address">
        <Typography component="p">
        </Typography>
        <Typography component="p">
          <Link href="https://panthio3d.wixsite.com/bolao" target="_blank">
            Marcelo Panthio 3D
          </Link>
        </Typography>
        <Box className="social-icons">
          <Link href="http://api.whatsapp.com/send?1=pt_BR&phone=7781329155" target="_blank">
            <WhatsApp />
          </Link>
          <Link href="https://www.instagram.com/panthio3d/" target="_blank">
            <Instagram />
          </Link>
          <Link href="https://www.facebook.com/panthio3d" target="_blank">
            <Facebook />
          </Link>
          <Link href="https://twitter.com/panthio3d" target="_blank">
            <Twitter />
          </Link>
          <Link href="https://www.youtube.com/user/Panthio3d" target="_blank">
            <YouTube />
          </Link>
        </Box>
      </Box>
    </Stack>
    </>
  )
}
