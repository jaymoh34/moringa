import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/*
path -> "./"
import  <AnyName:Default Export> from "patch"
import js or jsx files .the extension is optional
*/

import ColorsCircles from './StateAndEvents/ColorsAndCircles';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorsCircles />
  </StrictMode>
);