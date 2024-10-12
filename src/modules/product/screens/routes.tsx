import { RouteObject } from "react-router-dom";
import Product from "./product";

export const productScreensRoutes: RouteObject[] = [
    {
      path: "/product",
      element: <Product />,
      errorElement: <div>Página não encontrada</div>
    },
];