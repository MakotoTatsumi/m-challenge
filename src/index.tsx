import React from "react"
import { createRoot } from "react-dom/client"
import reportWebVitals from "./reportWebVitals"

import "./styles/reset.css"
import { App } from "./components/templates/App"

const renderApp = () => {
  const rootElement = document.getElementById("root")
  if (!rootElement) return

  const root = createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

renderApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
