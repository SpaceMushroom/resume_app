import { useEffect, useRef, useState } from "react";
import "./Title.scss";

const Title = ({ title }) => {
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

  return (
    <div ref={sectionRef} className={`title-container ${isShow ? "show" : ""}`}>
      <div className="tooling-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Title;
