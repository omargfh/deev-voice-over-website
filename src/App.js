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
        image: null
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
    }
    this.pageChange = this.pageChange.bind(this)
  }

  pageChange(key) {
    this.setState({
      currentPage: key
    })
  }
  render() {
    return (
      <div className="App">
        <Sidebar 
          currentPage={this.state.currentPage}
          pages={this.pages.map(page => page.name)}
          handleClick={this.pageChange}
        />
        <Content pages={this.pages} />
      </div>
    )
  }
}

export default App
