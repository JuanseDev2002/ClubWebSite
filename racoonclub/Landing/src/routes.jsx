import React from "react";

import { Routes, Route } from "react-router-dom";

//FILE-PAGES
import Home from "./pages/home";
//

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;