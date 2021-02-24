import React from "react";
import Background from "../Background";
import DeevLogo from "../DeevLogo";
import HomeCard from "../HomeCard";
import Carousel from "../Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  render() {
    let content = this.props.content;
    return (
      <article id={content.name} className="page">
        <Background
          image={content.image}
          defaultHeight={this.props.defaultHeight}
          parent={this.ref}
        />
         <div className="content" ref={this.ref}>
             
         </div>
      </article>
    );
  }
}

export default Pricing;
