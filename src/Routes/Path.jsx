import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "../Layout/Dashboard/DashoardLayout";
import AuthLayout from "../Layout/Authentication/AuthLayout";
import LoadingScreen from "../Components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router(){
    return useRoutes([
        {
            path:'/auth',
            element:<AuthLayout />,
            children:[
                {element:<LoginPage />, path:'login'},
                {element:<RegisterPage />, path:'register'},
            ],
        },
        {
            path:'/',
            element:<DashboardLayout />,
            children:[
              { index: true, element: <Navigate to="/home" replace /> }, // ✅ Redirect "/" → "/home"
              { path: "home", element: <HomePage /> }, // ✅ HomePage added
              { path: "*", element: <Page404 /> },
            ]
        },
        { path: "*", element: <Navigate to={Page404} replace /> },
    ]);
}

const LoginPage = Loadable(lazy(() => import("../Pages/AuthPage/Login")));
const RegisterPage = Loadable(lazy(() => import("../Pages/AuthPage/Register")));

const HomePage = Loadable(lazy(() => import("../Pages/DashboardPage/Home")));


const Page404 = Loadable(lazy(() => import("../Pages/NotFound")));