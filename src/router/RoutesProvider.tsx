import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider
} from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

export default function RoutesProvider() {
    const isAuth = false;

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<></>}>
                    <Route index element={<Navigate to="/login" replace />} />
                    <ProtectedRoutes isAllowed={isAuth}></ProtectedRoutes>
                </Route>
            </>
        )
    );

    return <RouterProvider router={router} />;
}
