import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./RoutesList";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routers />
      </BrowserRouter>
    </>
  );
};

export default App;
