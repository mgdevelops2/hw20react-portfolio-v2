// import essentials
import React from "react"; // import react
import { BrowserRouter } from "react-router-dom"; // import router functiom from react

// import styling
import "./App.module.scss";

// import components
import Main from "./components/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
