import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LayoutAuth from "./LayoutAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
    return (
        <Routes>
            {/* <Route index path="/" element={<Home />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> */}

            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            </Route>

            <Route path="/auth" element={<LayoutAuth />}>
                <Route path="/auth/login" element={<Login />} />
            </Route>
        </Routes>
    );
}

export default App;
