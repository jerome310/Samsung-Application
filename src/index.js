import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Home = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Home />, document.querySelector("#root"));
