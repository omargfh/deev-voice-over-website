import React from "react"
import {Link} from "react-router-dom"

import DeevLogo from "./DeevLogo"

class Sidebar extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          toggled: false
      }
      this.toggle = this.toggle.bind(this)
      this.scrolled = this.scrolled.bind(this)
    }
    toggle(){
        this.setState(prev => ({
            toggled: !prev.toggled
        }))
    }
    scrolled() {
        let scrollDistance = 30
        if (window.scrollY > scrollDistance && this.props.handleScroll.state !== true) {
            this.props.handleScroll.function(true)
        }
        else if (window.scrollY <= scrollDistance && this.props.handleScroll.state !== false) {
            this.props.handleScroll.function(false)
        }
    }
    componentDidMount(){
        window.onscroll = () => {
            this.scrolled();
        }
    }
    render() {
        const pages = []
        let index = 0
        const pagesClasses = "sidebarElement"
        for (let [index, value] of this.props.pages.entries()){
            pages.push (
                <div key={index} className={index === this.props.currentPage ? `${pagesClasses} active` : pagesClasses}>
                        <Link to={this.props.paths[index]} onClick={()=>{this.props.handleClick(index)}}>
                            {value}
                        </Link>
                    <img src={`${process.env.PUBLIC_URL}/img/sidebar_break.png`} className="sidebarBreak"></img>
                </div>
            )
            index++
        }
        let accounts = ""
        if (this.props.USERNAME !== null) {
            accounts = (
                <div id="account-logged">
                    <a href="#">{this.props.USERNAME}</a>
                    <img src={`${process.env.PUBLIC_URL}/img/wave.png`}/>
                </div>
            )
        }
        else {
            accounts = (
                <React.Fragment>
                    <div id="account-signin">
                        <a href="#">Sign In</a>
                        <img src={`${process.env.PUBLIC_URL}/img/wave.png`}/>
                    </div>
                    <div id="account-signup">
                        <a href="#">Sign Up</a>
                        <img src={`${process.env.PUBLIC_URL}/img/wave.png`}/>
                    </div>
                </React.Fragment>
            )
            pages.push(
                <React.Fragment>
                    <div key={index + 1} className={`${pagesClasses} mobilebar`}>
                        <Link to="/signin">
                            Sign In
                        </Link>
                        <img src={`${process.env.PUBLIC_URL}/img/sidebar_break.png`} className="sidebarBreak"></img>
                    </div>
                    <div key={index + 2} className={`${pagesClasses} mobilebar`}>
                        <Link to="/signup">
                            Sign Up
                        </Link>
                        <img src={`${process.env.PUBLIC_URL}/img/sidebar_break.png`} className="sidebarBreak"></img>
                    </div>
                </React.Fragment>
            )
        }
        return (
            <header>
                <nav>
                    <div className={`navbar mobilebar ${this.props.handleScroll.state ? "scrolled" : ""} ${this.state.toggled ? "toggled" : ""}`}>
                        <div className={`navbrand ${this.props.handleScroll.state ? "enabled" : ""} ${this.state.toggled ? "enabled" : ""}`}>
                            <DeevLogo />
                        </div>
                        <div className={this.state.toggled ? "sidebarButton change" : "sidebarButton"} onClick={this.toggle}>
                            <div key={1} className="bar1"></div>
                            <div key={2} className="bar2"></div>
                            <div key={3} className="bar3"></div>
                        </div>
                    </div>
                    <div className={`sidebar ${this.state.toggled ? "" : "disabled"}`}>
                        {pages}
                    </div>
                </nav>
                <div className="accounts">
                    {accounts}
                </div>
            </header>
        )
    }
}

export default Sidebar