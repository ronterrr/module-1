import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import AmazonPage from './amazonPage';
import Props from './Props';

createRoot(document.getElementById("root")).render(
<StrictMode>
  <Props/>
</StrictMode>
);
