import { createBrowserRouter } from 'react-router-dom';
import Header from '../Components/MainLayout/Header';
import GetStarted from '../Pages/GetStarted/GetStarted';
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register';
import Todopage from '../Pages/ToDo/ToDo';

const router= createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
        {
            index: true,
            element: <GetStarted />,
        },
        {
            path:'register',
            element:<Register/>
        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'todo',
            element:<Todopage/>
        },

        ],
    }
   
])

export default router;