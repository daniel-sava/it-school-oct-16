import { Link } from "react-router-dom";
import List from "../components/List";

export default function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <button>
                <Link to="/terms-and-conditions">Go to Terms and Conditions</Link>
            </button>
            <List />
        </div>
    );
}
