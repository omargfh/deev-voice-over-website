import React from 'react'

class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: 2
        }
        this.setActive = this.setActive.bind(this)
        this.carouselContent = [
            {
                id: 0,
                image: "https://i.ytimg.com/vi/5NqitWbBim8/maxresdefault.jpg"
            },
            {
                id: 1,
                image: "https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
            },
            {
                id: 2,
                image: "https://i.ytimg.com/vi/5NqitWbBim8/maxresdefault.jpg"
            },
            {
                id: 3,image: "https://i.ytimg.com/vi/5NqitWbBim8/maxresdefault.jpg"
            },
            
            {
                id: 4,
                image: "https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
            },
            {
                id: 5,
                image: "https://i.ytimg.com/vi/5NqitWbBim8/maxresdefault.jpg"
            }
        ]
    }
    setActive(index) {
        this.setState({
            active: index
        });
    }
    render(){
        let follow = this.state.active === this.carouselContent.length - 1 ? 0 : this.state.active + 1
        let precede = this.state.active === 0 ? this.carouselContent.length - 1 : this.state.active - 1
        let carouselElements = []
        for (let item of this.carouselContent) {
            let classes = item.id === this.state.active ? "active" 
                        : item.id === follow ? "follow"
                        : item.id === precede ? "precede"
                        : ""
            carouselElements.push(
                <div key={item.id} className={`carouselElement ${classes}`}>
                    <img src={item.image}></img>
                </div>
            )
        }
        return (
            <div className="homeCard carousel">
                <h2>Previous Work</h2>
                <div className="carouselElements">
                    {carouselElements}
                </div>
                <div class="navigationButtons">
                    <div class="arrow back clickable" onClick={()=>{this.setActive(precede)}}>
                        <div class="icon-container">                        <div class="icon"></div>
                        </div>

                    </div>
                    <div class="arrow next clickable" onClick={()=>{this.setActive(follow)}}>
                        <div class="icon-container">                        <div class="icon"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel