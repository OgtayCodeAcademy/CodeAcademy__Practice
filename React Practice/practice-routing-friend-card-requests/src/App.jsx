import Navbar from "./Components/UserNavbar"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ROUTES } from "./Routes"
const routes = createBrowserRouter(ROUTES)


function App() {

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
