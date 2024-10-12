import { RouteObject } from "react-router-dom";
import FirstScreen from "./screens/FirstScreen";
import PageNotFound from "../pageNotFound/screens/PageNotFound";

export const firstScreenRoutes: RouteObject[] = [
    {
      path: "/",
      element: <FirstScreen />,
      errorElement: <PageNotFound />
    },
];