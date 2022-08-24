import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Main from "./pages/Main";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="*" element={<Main replace to="/" />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
