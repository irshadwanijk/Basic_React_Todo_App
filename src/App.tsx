import "./styles.css";
import React from "react";
import Todo from "./todo";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}
