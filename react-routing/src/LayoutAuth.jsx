import { Outlet } from "react-router-dom";
import NavbarAuth from "./components/LayoutAuth/NavbarAuth";

export default function LayoutAuth() {
    return (
        <>
            <NavbarAuth />
            <Outlet />
        </>
    );
}
