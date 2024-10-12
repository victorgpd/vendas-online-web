import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { useNotification } from "./shared/hooks/useNotification.ts";
import type { Router as RemixRouter } from "@remix-run/router"
import { loginRoutes } from './modules/login/routes.tsx'
import { firstScreenRoutes } from "./modules/firstScreen/routes.tsx";
import { productScreensRoutes } from "./modules/product/screens/routes.tsx";
import { useGlobalContext } from "./shared/hooks/useGlobalContext.tsx";
import { verifyLoggedIn } from "./shared/functions/connection/auth.ts";

function App() {
  const { contextHolder } = useNotification()
  const { user, setUser } = useGlobalContext()
  
  const routes: RouteObject[] = [...firstScreenRoutes, ...loginRoutes,]
  const routesLoggedIn: RouteObject[] = [...productScreensRoutes].map((route) => ({
    ...route,
    loader: () => verifyLoggedIn(setUser, user)
  }))

  const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn])

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  )
}

export default App
