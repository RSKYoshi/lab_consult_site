import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {App} from "./App";
import * as React from "react";

const root = createRoot(document.getElementById('root')!);
console.log("test_index.tsx");
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// ReactDOM.render(<App />), document.getElementById('root');
// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );
