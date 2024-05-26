import { useState } from "react";
import Navbar from "../components/Navbar";
import { FaCopy } from "react-icons/fa";
import "./About.css";
// import Footer from '../components/Footer';
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/js.png";
import ReactLogo from "../assets/react.png";
import Next from "../assets/nextjs.svg";
import Mongo from "../assets/mongodb.png";
import Node from "../assets/nodejs.png";
import Express from "../assets/expressjs.png";
import Java from "../assets/java.png";
import Firebase from "../assets/firebase.png";
import Figma from "../assets/figma.png";
import Docker from "../assets/docker.png";
import Github from "../assets/github-logo.png";
import vscode from "../assets/vscode.png";

const About = () => {
  const logos = [
    Html,
    Css,
    Javascript,
    ReactLogo,
    Next,
    Mongo,
    Node,
    Express,
    Java,
    Firebase,
    Figma,
    Docker,
    Github,
    vscode,
  ];
  const [copied, setCopied] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-heading">
          <div className="vertical-line"></div>
          <p>ABOUT</p>
        </div>
        <div className="about-text">
          I&apos;m Nidhish Rathore, a dedicated Full Stack Web Developer
          specializing in the MERN stack (MongoDB, Express.js, React.js,
          Node.js). I excel in crafting dynamic, user-friendly web applications,
          seamlessly integrating responsive React.js interfaces with robust
          server-side applications in Node.js and Express.js. My commitment to
          staying updated with the latest technologies ensures the delivery of
          cutting-edge web experiences, addressing the evolving demands of the
          digital landscape.
        </div>
        <div className="skill-heading">
          <div className="vertical-line"></div>
          <p>SKILLS</p>
        </div>
        <div className="logos-container">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Tech Logo ${index + 1}`}
              className="logo"
            />
          ))}
        </div>
        <div className="contact-heading">
          <div className="vertical-line"></div>
          <p>CONTACT</p>
        </div>

        <div className="contactsection">
          <div>
            <div>
              <p>
                codenidhish07@gmail.com
                <span
                  className="copy-button"
                  onClick={() => handleCopy("codenidhish07@gmail.com")}
                >
                  <FaCopy
                    className={
                      copied === "codenidhish07@gmail.com" ? "copied" : ""
                    }
                  />
                </span>
              </p>
            </div>

            <div>
              <p>
                +91 870-8295706
                <span
                  className="copy-button"
                  onClick={() => handleCopy("+91 870-8295706")}
                >
                  <FaCopy
                    className={copied === "+91 870-8295706" ? "copied" : ""}
                  />
                </span>
              </p>
            </div>
          </div>
          <div className="githublink">
            <a target='/' href="https://github.com/Nidhish-Dev/Nidhish-Dev">
              <img className="aboutgithub" src="/Portfolio/github.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;
