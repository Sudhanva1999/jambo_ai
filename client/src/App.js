/* eslint-disable */

import React, { Component } from "react";
import Login from "./components/login/googleAuth";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleDarkMode = () => {
    const { isDarkMode } = this.state;
    this.setState({ isDarkMode: !isDarkMode });

    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  render() {
    return (
      <div className="App bg-background text-text min-h-screen flex flex-col items-center justify-center">
        {/* Theme Toggle Button */}
        <button
          onClick={this.toggleDarkMode}
          className="px-4 py-2 mb-8 bg-accent text-text font-semibold rounded-lg shadow-md"
        >
          Toggle {this.state.isDarkMode ? "Light" : "Dark"} Mode
        </button>

        <div className="mt-8">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
