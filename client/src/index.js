import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Registration from './views/Registration/Registration';
import Users from './views/Users/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/users',
    element: <Users />
  },
])

root.render(<RouterProvider router={router} />);


