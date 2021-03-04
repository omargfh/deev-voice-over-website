import React from "react"

import Background from "../Background"
import DeevLogo from "../DeevLogo"
import HomeCard from "../HomeCard"
import Carousel from "../Carousel"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.ref = React.createRef()
        this.firstCard = React.createRef()
        this.secondCard = React.createRef()
        this.logo = React.createRef()
    }
    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({ ease: "power3.inOut" });
        let timeline = gsap.timeline()
        for (let el of [this.firstCard.current, this.secondCard.current]) {
            timeline.from(el, {
                scrollTrigger: {
                    trigger: el,
                    toggleActions: "play pause resume reset"
                },
                opacity: 0,
                y: "+=100",
            })
        }
        this.props.changePage(this.props.id);
    }
    render() {
        let content = this.props.content
        return (
            <article id={content.name} className="page">
                <Background image={content.image} defaultHeight={this.props.defaultHeight} parent={this.ref} />
                <div className="content" ref={this.ref}>
                    <Container>
                        <Row className="d-flex justify-content-center align-items-center">
                            <Col className="d-flex justify-content-center align-items-center"  ref={this.logo}>
                                <DeevLogo />
                            </Col>
                            <Container>
                                <Row>
                                    <Col md={4} id="about-card" className="d-flex justify-content-end align-items-start" ref={this.firstCard}>
                                        <HomeCard />
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start align-items-start" ref={this.secondCard}>
                                        <Carousel />
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Container>
                </div>
            </article>
        );
    }
}

export default Home