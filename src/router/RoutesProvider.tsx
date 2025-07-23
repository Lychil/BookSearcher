import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider
} from "react-router-dom";
import ProtectedRoutes from "@/router/ProtectedRoutes";
import Layout from "@/common/components/Layout/Layout";
import AuthSwitcher from "@/modules/auth/AuthSwitcher";
import Home from "@/modules/user/Home/Home";

export default function RoutesProvider() {
    const isAuth = true;

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to={isAuth ? "/home" : "/login"} replace />} />
                    <Route path="auth" element={<AuthSwitcher />} />
                    <Route element={<ProtectedRoutes isAllowed={isAuth} />}>
                        <Route path="home" element={<Home />} />
                    </Route>
                </Route>
            </>
        )
    );

    return <RouterProvider router={router} />;
}
