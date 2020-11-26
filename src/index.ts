// import './es6/c'
// import './tpl/type'
import './libs/index'
import a = require('./amd')

let dom = document.querySelector('.app')

if (dom) {
  dom.innerHTML = 'hello'
}
