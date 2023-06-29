import htmlProjectImg from "../images/htmlProject.jpg";
import calculatior from "../images/calculator.jpg";
import memberships from "../images/membership.jpg";

export const myProjects = [
  {
    image: htmlProjectImg,
    title: "First Html CSS project",
    subtitle: (
      <>
        This <span>HTML</span> and <span>CSS</span> project focuses on creating
        a responsive website that follows the <span>mobile-first</span> approach
        and includes both mobile and desktop versions. The project aims to
        ensure optimal user experience and accessibility on various devices and
        screen sizes.
      </>
    ),
    link: "https://github.com/SpaceMushroom/Exam",
  },
  {
    image: calculatior,
    title: "Calculator",
    subtitle: (
      <>
        The <span>calculator</span> project was developed using{" "}
        <span>vanilla JavaScript</span> to create the functionality, and
        <span> dynamic HTML and CSS were generated through JavaScript</span>.
        The calculator allows users to perform basic mathematical operations
        such as addition, subtraction, multiplication, and division.
      </>
    ),
    link: "https://github.com/SpaceMushroom/calculator",
  },
  {
    image: memberships,
    title: "Memberships and users management",
    subtitle: (
      <>
        The <span>Node.js</span> and <span>MongoDB</span> project aims to
        develop a membership and user management system. It utilizes Node.js for
        server-side JavaScript execution and MongoDB as a flexible and scalable
        NoSQL database.
      </>
    ),
    link: "https://github.com/SpaceMushroom/MembershipManagement",
  },
];
