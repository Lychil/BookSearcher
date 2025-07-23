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

export default function RoutesProvider() {
    const isAuth = false;

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/auth" replace />} />
                    <Route path="auth" element={<AuthSwitcher />} />
                    <Route element={<ProtectedRoutes isAllowed={isAuth} />}></Route>
                </Route>
            </>
        )
    );

    return <RouterProvider router={router} />;
}
