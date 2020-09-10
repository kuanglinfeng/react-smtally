import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import 'index.css'

// 解决键盘弹起导致影响布局的问题
//获取当前页面高度
// const pageHeight = document.body.clientHeight
// document.body.onresize = function () {
//   const currentHeight = document.body.clientHeight
//   if (pageHeight - currentHeight > 50) {
//     document.body.style.height = pageHeight + 'px'
//   } else {
//     document.body.style.height = "100vh"
//   }
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)