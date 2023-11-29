import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {ROUTES} from './Routes'

const route = createBrowserRouter(ROUTES)

function App() {

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
