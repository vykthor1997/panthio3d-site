import { FocusEvent } from "react"
import { Box, Button, Card, Divider, List, ListItem, Stack, TextField, Typography } from "@mui/material"
import { TData } from "../../types"
import * as S from './style'
import { formatGroups, handleFocus } from "../../functions"

type Props = {
  data: TData[]
  handleBlur(e: FocusEvent<HTMLInputElement>, index: number): void
  handleClear(): void
}

export const Table: React.FC<Props> = ({ data, handleBlur, handleClear }) => {
  const d = formatGroups(data)
  console.log(d) 
  return (
    <Box sx={S.table}>
      <>
      <Stack direction="row" justifyContent="space-between">
        <Typography component="h2" variant="h5">
          Preencha os jogos:
        </Typography>
        <Button color="error" variant="outlined" onClick={handleClear}>
          Limpar a aposta
        </Button>
      </Stack>
      {d.map((d, index) => (
        <Card key={index} className="group">
          <Typography component="h3" variant="h6">
            Grupo {d?.grupo}
          </Typography>
          <Divider />
          <List>
            {d?.data.map(({
              data, hora, local, 
              mandante, placarMandante, placarVisitante, visitante
            }, index) => (
              <ListItem key={index}>
                <Typography component="p" variant="caption">
                  {data} &nbsp;
                  {hora} &nbsp;
                  {local}
                </Typography>
                <Stack direction="row">
                  <Typography sx={{ textAlign: 'right' }}>
                    {mandante}
                  </Typography>
                  <Box className="score">
                    <TextField 
                      type="number" name="placarMandante" 
                      defaultValue={placarMandante} required 
                      onBlur={(e: FocusEvent<HTMLInputElement>) => handleBlur(e, index)} onFocus={handleFocus}
                    />
                    <Typography>
                      X
                    </Typography>
                    <TextField 
                      type="number" name="placarVisitante" 
                      defaultValue={placarVisitante} required 
                      onBlur={(e: FocusEvent<HTMLInputElement>) => handleBlur(e, index)} onFocus={handleFocus}
                    />
                  </Box>
                  <Typography>
                    {visitante}
                  </Typography>
                </Stack>
              </ListItem>
            ))}
          </List>
        </Card>
      ))}
      </>
    </Box>
  )
}
