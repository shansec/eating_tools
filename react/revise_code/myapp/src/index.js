import React from "react";
import { createRoot } from "react-dom/client";

import App from "./04-router/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
