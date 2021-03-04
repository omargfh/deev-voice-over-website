import React from "react"

class HomeCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
        this.expand = this.expand.bind(this)
    }
    expand(){
        this.setState(prev=>({
            expanded: !prev.expanded
        }))
    }
    render() {
        return (
            <div className="homeCard">
                <h2>&nbsp;About</h2>
                <div className="homeCard-Image">
                    <img src={`${process.env.PUBLIC_URL}/img/donia.png`} />
                </div>
                <div className="homeCard-Text">
                    <h3>&nbsp;Donia Osama</h3>
                    <p className={this.state.expanded ? "expanded" : ""}>Voiceover artist with over 5 years of professional experience in TV ads, dubbing and radio in various Arabic dialects,American English, as well as a passionate singer in    multi natiVoiceover artist with over 5 years of professional experience in TV ads, dubbing and radio in various Arabic dialects,American English, as well as a passionate singer in    multi nati </p>
                    <p className="red clickable" onClick={this.expand}>{this.state.expanded ? "Show Less" : "Read More"}</p>
                </div>
            </div>
        )
    }
}

export default HomeCard