import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { useNotification } from "./shared/hooks/useNotification.ts";
import type { Router as RemixRouter } from "@remix-run/router"
import { loginRoutes } from './modules/login/routes.tsx'
import { firstScreenRoutes } from "./modules/firstScreen/routes.tsx";
import { productScreensRoutes } from "./modules/product/routes.tsx";
import { getAuthorizationToken, verifyLoggedIn } from "./shared/functions/connection/auth.ts";
import { useRequests } from "./shared/hooks/useRequests.ts";
import { useEffect } from "react";
import { URL_USER } from "./shared/constants/urls.ts";
import { MethodsEnum } from "./shared/enums/methods.enum.ts";
import { useGlobalContext } from "./shared/hooks/useGlobalContext.tsx";
import { categoryScreensRoutes } from "./modules/category/routes.tsx";
  
const routes: RouteObject[] = [...loginRoutes,]
const routesLoggedIn: RouteObject[] = [...productScreensRoutes, ...categoryScreensRoutes, ...firstScreenRoutes, ].map((route) => ({
  ...route,
  loader: verifyLoggedIn
}))

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn])

function App() {
  const { contextHolder } = useNotification()
  const { setUser } = useGlobalContext()
  const { request } = useRequests()

  useEffect(() => {
    const token = getAuthorizationToken()
    if (token) {
      request(URL_USER, MethodsEnum.GET, setUser)
    }
  }, [])

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  )
}

export default App
