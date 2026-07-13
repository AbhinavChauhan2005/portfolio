import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "AI Finance Platform",
      description: "Next.js | Prisma | PostgreSQL",
      imgUrl: "/ai-finance.jpeg",
    },
    {
      title: "AI Object Detector",
      description: "React | TensorFlow.js",
      imgUrl: "/object-detector.jpeg",
    },
    {
      title: "AI Trip Planner",
      description: "React | Gemini AI",
      imgUrl: "/ai-trip.jpeg",
    },
    {
      title: "Task Tracker",
      description: "React | Node.js | MongoDB",
      imgUrl: "/task-tracker.jpeg",
    },
    {
      title: "Social Media App",
      description: "React | Socket.io | MongoDB",
      imgUrl: "/social.png",
    },
    {
      title: "upcomming project",
      description: "React | Socket.io | MongoDB",
      imgUrl: "/up.jpeg",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore some of the projects I've built, showcasing my
                    experience in full-stack web development, modern
                    technologies, and solving <br></br> real-world problems.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I'm a Full Stack Web Developer with a passion for
                          building responsive, scalable, and user-friendly web
                          applications. I enjoy transforming ideas into
                          real-world solutions using modern technologies such as
                          React.js, Next.js, Node.js, Express.js, MongoDB,
                          PostgreSQL, and Tailwind CSS. I'm continuously
                          learning new technologies, improving my
                          problem-solving skills through Data Structures &
                          Algorithms, and exploring AI-powered web applications.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
