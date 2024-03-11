import Link from "../../common/Link/Link";
import "./Links.css";

export default function Links() {
    return (
        <div className="links">
            <Link page="https://google.com" name="Google" />
            <Link page="https://itschool.ro" name="ITSchool" />
            <Link isButton={true} page="https://juniors.ro" name="Juniors" />
        </div>
    );
}
