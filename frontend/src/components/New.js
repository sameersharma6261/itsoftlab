import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HomePage.css";
gsap.registerPlugin(ScrollTrigger);
function New() {
  useEffect(() => {
    gsap.fromTo(
      ".circle",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.6, // Ek ek karke circles aayenge
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".circle-container",
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none none",
          markers: true, // Debugging ke liye
        },
      }
    );
  }, []);
  return (
    <>
      {/* Page 1 */}
      <div className="page page1">
        <h1>Page 1</h1>
      </div>
      {/* Page 2 - Scroll Trigger */}
      <div className="page page2">
        <div className="circle-container">
          <div className="circle">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
          <div className="circle">5</div>
          <div className="circle">6</div>
        </div>
      </div>
      {/* Page 3 */}
      <div className="page page3">
        <h1>Page 3</h1>
      </div>
    </>
  );
}

export default New;





// css


.page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
}
.page2 {
  background-color: #222;
}
.circle-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.circle {
  width: 260px;
  height: 260px;
  background-color: red;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  opacity: 0; /* Pehle hidden rakha */
  transform: scale(0);
}
.circle:nth-child(1) {
  background-color: red;
  margin-top: 250px;
  box-shadow: 0px 0px 30px white;
}
.circle:nth-child(2) {
  background-color: blue;
  margin-top: 30px;
  box-shadow: 0px 0px 30px white;
}
.circle:nth-child(3) {
  background-color: green;
  margin-top: -120px;
  box-shadow: 0px 0px 30px white;
}
.circle:nth-child(4) {
  background-color: yellow;
  margin-top: -120px;
  box-shadow: 0px 0px 30px white;
}
.circle:nth-child(5) {
  background-color: purple;
  margin-top: 30px;
  box-shadow: 0px 0px 30px white;

}
.circle:nth-child(6) {
  background-color: orange;
  margin-top: 250px;
  box-shadow: 0px 0px 30px white;
}
