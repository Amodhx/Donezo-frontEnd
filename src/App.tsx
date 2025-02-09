import './App.css'
import Login from "./pages/Login.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element : <Login/>
        },
        {
            path:"/form",
            element : <MainPage/>
        }
    ])

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
