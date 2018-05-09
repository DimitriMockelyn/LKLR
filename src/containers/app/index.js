import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";
import Header from "../header";
import Footer from "../footer/index";
import { Provider } from "react-alert";
import AlertTemplate from "./alert-template";

const options = {
  timeout: 5000,
  position: "bottom center"
};

console.log(AlertTemplate);
const App = () => (
  <Provider template={AlertTemplate} {...options}>
    <Header />
    <main style={{ "margin-top": "75px" }}>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Footer />
    </main>
  </Provider>
);

export default App;
