import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useNotification } from "./shared/hooks/useNotification.ts";
import type { Router as RemixRouter } from "@remix-run/router"
import { loginRoutes } from './modules/login/routes.tsx'
import { firstScreenRoutes } from "./modules/firstScreen/routes.tsx";
import { productScreensRoutes } from "./modules/product/screens/routes.tsx";

const router: RemixRouter = createBrowserRouter([
  ...firstScreenRoutes,
  ...loginRoutes,
  ...productScreensRoutes,
])

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
