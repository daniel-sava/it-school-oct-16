import React from "react";
import ReactDOM from "react-dom/client";
import PropsExample from "./components/common/PropsExample/PropsExample";
import Navbar from "./components/navbar/Navbar";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Navbar />
        <PropsExample name1="Andrei" name2="Mihai" isStudent={false} />
    </React.StrictMode>
);
