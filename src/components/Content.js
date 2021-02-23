import React from "react"
import Home from "./pages/Home"

class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>
                <Home content={this.props.pages[0]} />
            </main>
        );
    }
}

export default Content