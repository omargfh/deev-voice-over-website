import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import "./App.css"
import Home from "./components/pages/Home"
import Pricing from "./components/pages/Pricing"

import Sidebar from "./components/Sidebar"

class App extends React.Component {
  constructor() {
    super()
    this.pages = [
      {
        id: 0,
        name: "Home",
        path: "/",
        image: `${process.env.PUBLIC_URL}/img/deev-bg.png`,
      },
      {
        id: 1,
        name: "About",
        path: "/about",
        image: null
      },
      {
        id: 2,
        name: "Pricing",
        path: "/pricing",
        image: `${process.env.PUBLIC_URL}/img/pricing-bg.png`,
      },
      {
        id: 3,
        name: "Recruit",
        path: "/recruit",
        image: null
      },
      {
        id: 4,
        name: "Contact",
        path: "/contact",
        image: null
      }
    ]
    this.state = {
      currentPage: 0,
      USERNAME: null,
      scrolled: false
    }
    this.defaultHeight = 0
    this.pageChange = this.pageChange.bind(this)
    this.scrollChange = this.scrollChange.bind(this)
  }
  componentWillMount(){
    // eslint-disable-next-line no-restricted-globals
    this.defaultHeight = screen.availHeight - 100;
  }
  pageChange(key) {
    this.setState(prev => ({
      currentPage: key,
      USERNAME: prev.USERNAME,
      scrolled: prev.scrolled
    }))
  }
  scrollChange(scrollState) {
    this.setState(prev => ({
      currentPage: prev.currentPage,
      USERNAME: prev.USERNAME,
      scrolled: scrollState
    }))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar 
            currentPage={this.state.currentPage}
            pages={this.pages.map(page => page.name)}
            paths={this.pages.map(page => page.path)}
            handleClick={this.pageChange}
            defaultHeight={this.defaultHeight}
            USERNAME={this.state.USERNAME}
            handleScroll={
              {
                function: this.scrollChange,
                state: this.state.scrolled
              }
            }
          />
          <main>
            <Switch>
              <Route exact path={this.pages[0].path}>
                <Home id={this.pages[0].id} content={this.pages[0]} changePage={this.pageChange} defaultHeight={this.props.defaultHeight} />
              </Route>
              <Route path={this.pages[2].path}>
                <Pricing id={this.pages[2].id} content={this.pages[2]} changePage={this.pageChange} defaultHeight={this.props.defaultHeight} />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
