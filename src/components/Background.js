import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Background = (props) => {
  const content = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(content.current, {
  //     autoAlpha: 1,
  //     scrollTrigger: {
  //       trigger: props.parent.current,
  //       start: "top top",
  //       end: "bottom bottom",
  //       pin: content.current,
  //       pinSpacing: false,
  //       scrub: true,
  //     },
  //     ease: "power3"
  //   });
  // }, []);

  return (
    <div
      className="background-image"
      style={{ minHeight: props.defaultHeight, height: "100vh" }}
      ref={content}
    >
      {/* <div className="background-sticky"> */}
      <img src={props.image}></img>
      {/* </div> */}
    </div>
  );
};
export default Background;
