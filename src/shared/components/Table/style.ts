import { SxProps, Theme } from "@mui/material"

export const table: SxProps<Theme> = {
  padding: 2,
  minHeight: '400px',
  flex: 1,
  overflow: 'auto',
  '& h2': {
    marginRight: 2,
  },
  '& .group': {
    padding: 2,
    marginTop: 2
  },
  '& li': {
    flexDirection: 'column',
    alignItens: 'center',
    justifyContent: 'center',
    border: '1px solid #ffffff1f',
    borderRadius: 1,
    marginBottom: 1,
    '& > div': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      alignItems: 'center',
      gap: 1,
      '& .score': {
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }
    }
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
    margin: 0,
    padding: 1,
    width: 20,
    textAlign: 'center'
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0
  }
}

