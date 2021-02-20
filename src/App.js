import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: "Home",
      pages: ["Home", "About", "Pricing", "Recruit", "Contact"]
    }
  }
  render(){
    return (
      <div className="App">
        <Sidebar/>
      </div>
    );
  }
}

export default App;
