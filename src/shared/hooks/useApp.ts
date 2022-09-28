import { FocusEvent, FormEvent, useState } from 'react'
import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { data as d } from '../states'
import { getElementValues, clearInputs, validate } from '../functions'
import { pdf } from '../pdf'

const storageItem = localStorage.getItem('aposta')
const data = storageItem ? JSON.parse(storageItem) as [] : []
const state = data.length > 0 ? data : d
    
export const useApp = () => {
  (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs
  const [ data, setData ] = useState(state)
  const [ modal, setModal ] = useState(false)
  const [ loader, setLoader ] = useState(false)
  const [ message, setMessage ] = useState('')

  const handleBlur = (e: FocusEvent<HTMLInputElement>, index: number) => {
    const d = [ ...data ]
    d[index] = { 
      ...d[index], 
      [ e.currentTarget.name ]: Number(e.currentTarget.value)
    }
    localStorage.setItem('aposta', JSON.stringify(d))
    setData(d)
  }

  const handleClear = () => {
    localStorage.setItem('aposta', JSON.stringify([]))
    clearInputs()
  }

  const handleOpen = () => {
    if(!validate()) {
      setMessage('É necessários preencher todos os jogos!')
      return
    }
    setModal(true)
  }

  const handleClose = () => {
    setModal(false)
    setLoader(false)
    setMessage('')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoader(true)
      const [ nome, email, telefone ] = getElementValues(e, ['nome', 'email', 'telefone'])
      const doc = pdf(data, { nome, email, telefone })
      pdfMake.createPdf(doc).open()
      setModal(false)
      setMessage('Aposta realizada com sucesso!')
    } catch (error) {
      setMessage('Algo deu errado!')
      setLoader(false)
    }
  }

  return {
    data, 
    handleBlur, handleClear,
    modal, handleOpen, handleClose,
    handleSubmit,
    loader, message 
  }
}
