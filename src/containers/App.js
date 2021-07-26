import React, { Component } from "react";
import CardList from "../components/CardList";
// import { robots } from '../robots';
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return (
        robot.name.toLowerCase().substr(0, searchfield.length) ===
        searchfield.toLowerCase());
    });
      return !robots.length ? 
      <h1 className='tc light-purple'>Loading ...</h1> :        
      <div className="tc">
        <div className="vh-20">
          <h1>Robo - Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    }
}

export default App;
