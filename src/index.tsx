import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = React.lazy(() => import("./app"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Suspense fallback={"Loading..."}>
            <App />
        </Suspense>
    </React.StrictMode>
);
