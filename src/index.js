import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import data from './data.json'
import { HashRouter as Router } from 'react-router-dom'
import GlobalStlyles from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStlyles />
      <App data={data} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
