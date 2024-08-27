import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";

const basename = import.meta.env.VITE_BASENAME;

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/msc-fds-react/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
