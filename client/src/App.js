/* eslint-disable */
import "./index.css"
import "./App.css";
import React, { Component } from "react";
import Login from "./components/login/googleAuth";
import ThemeSlider from "./components/common/slider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState(
      (prevState) => ({ isDarkMode: !prevState.isDarkMode }),
      () => {
        if (this.state.isDarkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    );
  };

  render() {
    return (
      <div className="App bg-background text-text min-h-screen flex flex-col items-center justify-center">
        <ThemeSlider checked={this.state.isDarkMode} onChange={this.toggleDarkMode} />
        <div className="mt-8">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
