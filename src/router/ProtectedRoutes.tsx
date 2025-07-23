import type { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";


interface ProtectedRoutesProps {
    isAllowed: boolean;
    redirectPath?: string;
    children?: ReactNode;
}

export default function ProtectedRoutes({ isAllowed, redirectPath = '/login', children }: ProtectedRoutesProps) {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return (children || <Outlet />)
}
