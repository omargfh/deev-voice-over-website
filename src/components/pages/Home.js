import React from "react"
import Background from "../Background"

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let content = this.props.content
        return (
            <article id={content.name} className="page">
                <Background image={content.image} />
            </article>
        );
    }
}

export default Home