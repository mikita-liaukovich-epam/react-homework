import App from './views/App/App'
import { renderToString } from "react-dom/server"

const renderHTML = (html) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}

export default function serverRenderer() {
  return (req, res) => {
    const renderString = renderToString(<App/>)

    res.send(renderHTML(renderString))
  }
}