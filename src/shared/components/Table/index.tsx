import { FocusEvent } from "react"
import { Box, Button, Card, List, ListItem, Stack, TextField, Typography } from "@mui/material"
import { TData } from "../../types"
import { formatGroups, handleFocus } from "../../functions"
import * as S from './style'

type Props = {
  data: TData[]
  handleBlur(e: FocusEvent<HTMLInputElement>, i: number, j: number): void
  handleClear(): void
}

export const Table: React.FC<Props> = ({ data, handleBlur, handleClear }) => {
  const d = formatGroups(data)
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
      <Box className="table">
        {d.map((d, i) => (
          <Card key={i} className="group">
            <Typography component="h3" variant="h6">
              Grupo {d?.grupo}
            </Typography>
            <List>
              {d?.data.map(({
                data, hora, local, 
                mandante, placarMandante, placarVisitante, visitante
              }, j) => (
                <ListItem key={j}>
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
                        onBlur={(e: FocusEvent<HTMLInputElement>) => handleBlur(e, i, j)} onFocus={handleFocus}
                      />
                      <Typography>
                        X
                      </Typography>
                      <TextField 
                        type="number" name="placarVisitante" 
                        defaultValue={placarVisitante} required 
                        onBlur={(e: FocusEvent<HTMLInputElement>) => handleBlur(e, i, j)} onFocus={handleFocus}
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
      </Box>
      </>
    </Box>
  )
}
