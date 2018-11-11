import React, { Component } from "react";
import "./App.css";
import MusicSearch from "./components/MusicSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MusicSearch />
      </div>
    );
  }
}

export default App;
