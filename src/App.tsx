import React from "react";
import CardsList from "./components/CardsList";
import Button from "./components/Button";

import "./App.sass";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="content">
        <p className="header">Shopping List</p>
        <CardsList />
        <Button />
      </div>
    </div>
  );
};

export default App;
