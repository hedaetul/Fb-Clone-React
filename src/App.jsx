import Login from './components/auth/login/Login';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/pages/home/Home';
import { Protected } from './components/Protected';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/home',
      element: (
        <Protected>
          <Home />
        </Protected>
      ),
    },
  ]);

  return (
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>;
    </AuthContext>
  );
};

export default App;
