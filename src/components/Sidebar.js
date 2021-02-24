import React from "react"
class Sidebar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        const pages = []
        const pagesClasses = "sidebarElement"
        for (let [index, value] of this.props.pages.entries()){
            pages.push (
                <div key={index} className={index === this.props.currentPage ? `${pagesClasses} active` : pagesClasses}>
                    <a onClick={ () => {this.props.handleClick(index)} }
                        href={"#" + value}
                    >{value}</a>
                    <img src={`${process.env.PUBLIC_URL}/img/sidebar_break.png`} className="sidebarBreak"></img>
                </div>
            )
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
        }
        return (
            <header>
                <nav className="sidebar">
                    {pages}
                </nav>
                <div className="accounts">
                    {accounts}
                </div>
            </header>
        )
    }
}

export default Sidebar