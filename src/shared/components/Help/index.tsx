import { Box, Link, Typography } from '@mui/material'

export const Help: React.FC = () => {
  return (
    <Box>
      <Typography gutterBottom>
        Agora envie o pdf da aposta (caso esteja usando o celular, procure na pasta Downloads), o para o 
        &nbsp;
        <Link href="http://api.whatsapp.com/send?1=pt_BR&phone=7781329155" target="_blank">
          WhatsApp 77 981329155
        </Link>
        &nbsp;
        , junto com o comprovante do PIX no valor de R$ 10,00 para validar a aposta. Então, você será adicionado a o grupo do Bolão Entre Amigos.
      </Typography>
      <Typography gutterBottom>
        Ao final da fase de grupos da copa do mundo, será postado no grupo a aposta dos ganhadores para a conferencia de todos.
      </Typography>
      <Typography gutterBottom>
        Obs:  É recomendado que o numero PIX seja o mesmo número do telefone usado na aposta.
      </Typography>
      <Typography gutterBottom>
        Para mais detalhes
        &nbsp;
        <Link href="https://panthio3d.wixsite.com/bolao/aposte" target="_blank">
          click aqui
        </Link>
      </Typography>
    </Box>
  )
}
