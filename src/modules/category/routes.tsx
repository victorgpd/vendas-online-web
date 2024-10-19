import CategoryInsert from "./screens/CategoryInsert";
import Category from "./screens/Category";
import { RouteObject } from "react-router-dom";

export enum CategoryRoutesEnum {
  CATEGORY = "/category",
  CATEGORY_INSERT = "/category/insert",
}

export const categoryScreensRoutes: RouteObject[] = [
    {
      path: CategoryRoutesEnum.CATEGORY,
      element: <Category />,
    },
    {
      path: CategoryRoutesEnum.CATEGORY_INSERT,
      element: <CategoryInsert />,
    },
];