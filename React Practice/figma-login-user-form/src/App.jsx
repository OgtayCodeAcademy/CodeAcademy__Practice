import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserContextProvider from "./Services/Context/UserContext";
import { ROUTES } from "./Routes";

const route = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={route} />
      </UserContextProvider>
    </>
  );
}

export default App;
