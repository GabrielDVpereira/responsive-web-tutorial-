import React from "react";
import Content from "./components/Content";
import WindowDimentionsProvider from "./contexts/WindowDimensionsProvider";
import items from "./data.json";
import "bulma/css/bulma.css";

function App() {
  return (
    <WindowDimentionsProvider>
      <div className="app">
        <Content items={items} />
      </div>
    </WindowDimentionsProvider>
  );
}

export default App;
