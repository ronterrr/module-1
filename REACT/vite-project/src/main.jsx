import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/*
import <AnyName:Default Export> from "Path"
*/

import AmazonPage from './amazonPage';
import "./index.css";

createRoot(document.getElementById("root")).render(
<StrictMode>
  <AmazonPage/>
</StrictMode>
);
