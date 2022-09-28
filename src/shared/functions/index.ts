import { FormEvent } from "react"

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

