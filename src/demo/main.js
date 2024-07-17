import { badep } from '../lib'

const el = id => document.getElementById(id)
const error = err => {
  alert(err)
  throw Error(err)
}
const val = id => {
  const value = Number(el(id).value)
  if (isNaN(value) || !Number.isInteger(value) || value < 1)
    error('invalid number')
  return value
}

window.calc = () => {
  const l = val('L')
  const d = val('D')
  if (d >= l)
    error('d >= l')

  el('result').innerHTML = `[${badep(l, d).join(', ')}]`
}
