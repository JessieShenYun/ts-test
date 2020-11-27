// import './es6/c'
// import './tpl/type'
// import './libs/index'

// const dom = document.querySelector('.app')
// const hello: string = 'hello'

// if (dom) {
//   dom.innerHTML = hello
// }
import React from 'react'
import ReactDom from 'react-dom'

import Hello from './component/demo/Hello'

ReactDom.render(
  <Hello name="TypeScript"/>,
  document.querySelector('.app')
)
