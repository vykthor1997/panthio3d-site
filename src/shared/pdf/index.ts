import { TDocumentDefinitions } from "pdfmake/interfaces"
import { columns } from "../states"
import { TData } from "../types"

type TInfo = {
  nome: string
  email: string
  telefone: string
}

const c =  ['J', 'Data', 'Hora', 'Local', 'Grupo', ...columns]

export const pdf = (data: TData[], info: TInfo): TDocumentDefinitions => {
  const d = data.map(({ 
    jogo, data, hora, local, grupo, mandante, placarMandante, placarVisitante, visitante
  }) => [ 
    jogo, data, hora, local, grupo, mandante, placarMandante, 'X', placarVisitante, visitante 
  ] )
  return {
    pageSize: 'TABLOID',
    content: [
      {
        table: {
          body: [
            [
              {
                text: [
                  'Nome'
                ],
                border: [true, true, true, false]
              },
              {
                text: [
                  'Email'
                ],
                border: [true, true, true, false]
              },
              {
                text: [
                  'Telefone'
                ],
                border: [true, true, true, false]
              }
            ],
            [
              {
                text: [
                  info.nome
                ]
              },
              {
                text: [
                  info.email
                ]
              },
              {
                text: [
                  info.telefone
                ]
              }
            ]
          ]
        }
      },
      {
        text: [''],
        margin: [ 0, 0, 0, 20]
      },
      {
        table: {
          body: [
            c,
            ...d
          ]
        }
      }
    ]
  }
}
