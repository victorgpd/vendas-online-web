import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import type { Router as RemixRouter } from "@remix-run/router"
import { loginRoutes } from './modules/login/routes.tsx'
import { useNotification } from "./shared/hooks/useNotification.ts";

const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>Tela Principal!</div>,
    errorElement: <div>Página não encontrada</div>
  },
];

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...loginRoutes])

function App() {
  const { contextHolder } = useNotification()

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  )
}

export default App
