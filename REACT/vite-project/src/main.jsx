import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/*
import <AnyName:Default Export> from "Path"
*/

import Navigation from "./amazonPage/Navigation";

createRoot(document.getElementById("root")).render(
<StrictMode>
  <Navigation/>
</StrictMode>
);
