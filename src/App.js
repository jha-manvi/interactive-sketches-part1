import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";
import Login from "../public/Login.png";
import CarModel from "../public/Car Model.png";
import Insert1 from "../public/Insert1.png";
import Insert2 from "../public/Insert3.png";
import Document from "../public/Documentation.png";
import Logout from "../public/Logout.png";

/* Change debug to `true` to see the invisible Buttons */
export const debug = false;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image={Login}>
              <Button to="/choose-model" x="185" y="370" w="75" h="25" />
            </Screen>
          }
        />
        <Route
          path="/choose-model"
          element={
            <Screen image={CarModel}>
              <Button to="/input-1" x="210" y="330" w="78" h="25" />
            </Screen>
          }
        />
        <Route
          path="/input-1"
          element={
            <Screen image={Insert1}>
              <Button to="/document" x="85" y="240" w="130" h="55" />
              <Button to="/document" x="55" y="120" w="130" h="55" />
            </Screen>
          }
        />
        
                <Route
          path="/document"
          element={
            <Screen image={Document}>
              <Button to="/logout" x="35" y="520" w="200" h="55" />
              <Button to="/input-1" x="35" y="360" w="200" h="55" />
            </Screen>
          }
        />
        <Route
          path="/logout"
          element={
            <Screen image={Logout}>
              <Button to="/" x="65" y="510" w="200" h="55" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
