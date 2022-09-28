import { FocusEvent } from "react"
import {TableContainer, Table as MUITable, TableHead, TableCell, TableBody, TableRow, TextField, Typography, Button } from "@mui/material"
import { TData } from "../../types"
import { columns } from "../../states"
import * as S from './style'
import { Stack } from "@mui/system"

type Props = {
  data: TData[]
  handleBlur(e: FocusEvent<HTMLInputElement>, index: number): void
  handleClear(): void
}

export const Table: React.FC<Props> = ({ data, handleBlur, handleClear }) => {
  const getAlign = (index: number) => index != 0 ? 'left' : 'right'
  return (
    <TableContainer sx={S.table}>
      <Stack direction="row" justifyContent="space-between">
        <Typography component="h2" variant="h5">
          Preencha os jogos da Copa
        </Typography>
        <Button color="error" variant="outlined" onClick={handleClear}>
          Limpar a aposta
        </Button>
      </Stack>
      <MUITable>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} align={getAlign(index)}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ 
            mandante, placarMandante, placarVisitante, visitante 
          }, index) => (
            <TableRow key={index}>
              <TableCell align="right">{mandante}</TableCell>
              <TableCell align="center">
                <TextField 
                  type="number" name="placarMandante" defaultValue={placarMandante} 
                  onBlur={(e: FocusEvent<HTMLInputElement>) => handleBlur(e, index)}
                />
              </TableCell>
              <TableCell align="center">X</TableCell>
              <TableCell align="center">
                <TextField 
                  type="number" name="placarVisitante" defaultValue={placarVisitante} 
                  onBlur={(e: FocusEvent<HTMLInputElement>) => handleBlur(e, index)} 
                />
              </TableCell>
              <TableCell align="left">{visitante}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  )
}
