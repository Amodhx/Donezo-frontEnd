import './App.css'
import Login from "./pages/Login.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import MyProfile from "./pages/MyProfile.tsx";
import Projects from "./pages/Projects.tsx";
import Tasks from "./components/Tasks.tsx";
import Notes from "./components/Notes.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element : <Login/>
        },
        {
            path:"/form",
            element : <MainPage/>,
            children : [
                {
                    path : '',
                    element : <MyProfile/>,
                    children : [
                        {
                            path : '',
                            element : <Tasks/>
                        },
                        {
                            path : 'tasks',
                            element : <Tasks/>
                        },
                        {
                            path : 'notes',
                            element : <Notes/>
                        }
                    ]
                },
                {
                    path : 'profile',
                    element : <MyProfile/>,
                    children : [
                        {
                            path : '',
                            element : <Tasks/>
                        },
                        {
                            path : 'tasks',
                            element : <Tasks/>
                        },
                        {
                            path : 'notes',
                            element : <Notes/>
                        }
                    ]
                },
                {
                    path : 'projects',
                    element : <Projects/>
                }
            ]
        }
    ])

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
