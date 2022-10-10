import { FocusEvent, FormEvent } from "react"
import { TData } from "../types"

export const clearInputs = () => {
  const inputs = document.querySelectorAll('input')
  inputs.forEach(input => input.value = '')
}

export const  validate = () => {
  const inputs = document.querySelectorAll('input')
  const input = Array.from(inputs).find(input => input.value === '')
  if (!input) return true
  input.focus()
  return false
}

export const getElementValues = (e: FormEvent<HTMLFormElement>, elements: string[]): string[] => (
  elements.map(elementName => {
    const element = e.currentTarget.elements.namedItem(elementName) as HTMLInputElement | null
    return element ? element.value : ''
  })
)

export const formatGroups = (data: TData[]) => (
  data.map((d, index) => {
    return index % 6 === 0 ? {
      grupo: d.grupo,
      data: data.slice(0, index + 6)
    } : null
  }).filter(data => data)
)

export const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()
