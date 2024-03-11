import Links from "./links/Links";
import Logo from "./logo/Logo";
import "./Navbar.css";

export default function Navbar() {
    const name = "React";

    return (
        <div className="navbar">
            <Logo appName={name}></Logo>
            <Links />
        </div>
    );
}
