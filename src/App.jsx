import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Info, Products } from "./pages";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/products/:category",
      element: <Products />,
    },
    {
      path: "/info",
      element: <Info />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
