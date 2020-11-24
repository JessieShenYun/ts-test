import { str } from './datatype'
import { getValues } from './type'

let dom = document.querySelector('.app')

if (dom) {
  dom.innerHTML = str
}

console.log(getValues)
