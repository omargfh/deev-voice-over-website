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
        return (
            <nav className="sidebar">
                <div className="sidebarSticky">
                    {pages}
                </div>
            </nav>
        )
    }
}

export default Sidebar