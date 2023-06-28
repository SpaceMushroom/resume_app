import React, { useEffect, useRef, useState } from "react";
import Skill from "../Skill/Skill";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

import "./Skills.scss";

const Skills = () => {
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
    <div ref={sectionRef} className={`tooling ${isShow ? "show" : ""}`}>
      <div className="tooling-title">
        <h2>My skills</h2>
      </div>
      <div className="tooling-box">
        <Skill icon={<FaReact />} title={"react"} />
        <Skill icon={<FaNodeJs />} title={"node"} />
        <Skill icon={<SiMongodb />} title={"mongoDB"} />
        <Skill icon={<SiJavascript />} title={"javaScript"} />
        <Skill icon={<FaSass />} title={"sass"} />
        <Skill icon={<FaCss3Alt />} title={"Css"} />
      </div>
    </div>
  );
};

export default Skills;
