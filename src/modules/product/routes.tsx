import { RouteObject } from "react-router-dom";
import Product from "./screens/product";

export const productScreensRoutes: RouteObject[] = [
    {
      path: "/product",
      element: <Product />,
    },
];