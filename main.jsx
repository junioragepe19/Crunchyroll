import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { useState } from 'react';
import { Header } from './assets/Components/Header';
import { Initial } from './Views/Initial';
import { Video } from './Views/video';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Initial/>
  },
  {
    path: 'video',
    element: <Video />
  }
])

const AppWrapper = () => {
  const [menu, setMenu] = useState(false);

  const OpenMenu = () => {
    setMenu(!menu);
  };

  return (
    <React.StrictMode>
       <Header /*OpenMenu={OpenMenu}*/ /> 
      <RouterProvider router={router}>
        {/* Adicione as rotas e o conteúdo da página aqui */}
      </RouterProvider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<AppWrapper />);





