import { useEffect, useRef, useState } from "react";
import { FaHandPaper } from "react-icons/fa";
import "./Hero.scss";
import image1 from "../../images/1.png";
// import image2 from "../../images/2.png";
// import image3 from "../../images/3.png";

const Hero = () => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [isShow, setIsShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsShow(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event) => {
    // Get the mouse position relative to the component
    const { clientX, clientY, target } = event;
    const { left, top, width, height } = target.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const moveX = (clientX - centerX) / (width / 2);
    const moveY = (clientY - centerY) / (height / 2);

    // Calculate the rotation angles based on mouse position and adjust the sensitivity
    const rotateY = -(moveX * 5); // Increase this multiplier for a more dramatic effect
    const rotateX = moveY * 5; // Increase this multiplier for a more dramatic effect

    // Update the state to trigger a re-render with the new rotation angles
    setRotation({ rotateX, rotateY });
  };

  return (
    <div
      style={{
        transform: `perspective(2000px) rotateY(${rotation.rotateY}deg) rotateX(${rotation.rotateX}deg)`,

        transition: "transform 500ms ease 0s",
      }}
      onMouseMove={handleMouseMove}
      ref={sectionRef}
      className={`hero ${isShow ? "show" : ""}`}
    >
      <div className="star-1"></div>
      <div className="star-2"></div>
      <div className="star-3"></div>
      <div className="content">
        <div className="info">
          <h4>
            <span className="peace">
              <FaHandPaper />
            </span>
            {"  "}Hello there! I'm <span>Ignas</span>
          </h4>
          <h1>
            A <span>Frontend engineer</span>. Transforming ideas into intuitive
            digital realities.
          </h1>
          <p>
            Enthusiastic and motivated Junior Developer with a passion for
            creating dynamic and user-friendly web applications. Detail-oriented
            and eager to learn, with a strong desire to contribute to
            cutting-edge projects and grow as a developer. A collaborative team
            player with excellent problem-solving skills and a commitment to
            writing clean and maintainable code.
          </p>
        </div>
        <div className="img">
          <img src={image1} alt="image1" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
