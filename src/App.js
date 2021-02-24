import React from "react"
import "./App.css"
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"

class App extends React.Component {
  constructor() {
    super()
    this.pages = [
      {
        name: "Home",
        image: `${process.env.PUBLIC_URL}/img/deev-bg.png`,
      },
      {
        name: "About",
        image: null
      },
      {
        name: "Pricing",
        image: `${process.env.PUBLIC_URL}/img/pricing-bg.png`,
      },
      {
        name: "Recruit",
        image: null
      },
      {
        name: "Contact",
        image: null
      }
    ]
    this.state = {
      currentPage: 0,
      USERNAME: null
    }
    this.defaultHeight = 0
    this.pageChange = this.pageChange.bind(this)
  }
  componentWillMount(){
    // eslint-disable-next-line no-restricted-globals
    this.defaultHeight = screen.availHeight - 100;
  }
  pageChange(key) {
    this.setState(prev => ({
      currentPage: key,
      USERNAME: prev.USERNAME
    }))
  }
  render() {
    return (
      <div className="App">
        <Sidebar 
          currentPage={this.state.currentPage}
          pages={this.pages.map(page => page.name)}
          handleClick={this.pageChange}
          defaultHeight={this.defaultHeight}
          USERNAME={this.state.USERNAME}
        />
        <Content pages={this.pages} defaultHeight={this.defaultHeight}/>
      </div>
    )
  }
}

export default App
