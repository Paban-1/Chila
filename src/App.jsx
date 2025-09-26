import React from "react";
import { Hero, Navbar } from "./constants";

const App = () => {
  return (
    <>
      <div className="select-none">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default App;
