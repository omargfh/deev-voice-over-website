import React from "react"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"

class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>
                <Home content={this.props.pages[0]} defaultHeight={this.props.defaultHeight} />
                <Pricing content={this.props.pages[2]} defaultHeight={this.props.defaultHeight} />
            </main>
        );
    }
}

export default Content