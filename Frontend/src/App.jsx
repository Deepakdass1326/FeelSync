import { RouterProvider } from "react-router"
import { router } from "./app.routes"
import "./Features/shared/styles/GlobalStyle.scss"




function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
