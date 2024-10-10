import type { Router as RemixRouter } from "@remix-run/router"
import { loginRoutes } from './modules/login/routes.tsx'
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'

const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>Tela Principal!</div>,
    errorElement: <div>Página não encontrada</div>
  },
];

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...loginRoutes])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
