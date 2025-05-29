import React, { useState } from 'react';
import "./About.css";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const mouseEnterHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  const mouseEnterHandler1 = () => {
    setIsHovered1(true);
  };

  const mouseLeaveHandler1 = () => {
    setIsHovered1(false);
  };

  const mouseEnterHandler2 = () => {
    setIsHovered2(true);
  };

  const mouseLeaveHandler2 = () => {
    setIsHovered2(false);
  };

  return (
    <div id='About'>
      <div id="info">
        <div id="main">
          <div id='photo'></div>
          <div id="deve">
            <h1 id='name'>Patel Yug</h1>
            <h2 id='pass'>[web developer...]</h2>
          </div>
        </div>

        <div id="hello">
          <a href='10th.jpeg' className='open-link'>
            <div id='ten' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              <div className="click" style={{ display: isHovered ? 'flex' : 'none' }}>
                <h1>click here to check result</h1>
              </div>
              <h1>10th</h1>
              <table className='tbl1' style={{ display: isHovered ? 'none' : 'table' }}>
                <tr>
                  <td><h3>percentage: 83.83%</h3></td>
                </tr>
                <tr>
                  <td><h3>from: ultra vision academy-patadi</h3></td>
                </tr>
              </table>
            </div>
          </a>

          <a href='12th.jpeg' className='open-link'>
            <div id="twelve" onMouseEnter={mouseEnterHandler1} onMouseLeave={mouseLeaveHandler1}>
              <div className="click" style={{ display: isHovered1 ? 'flex' : 'none' }}>
                <h1>click here to check result</h1>
              </div>
              <h1>12th</h1>
              <table style={{ display: isHovered1 ? 'none' : 'table' }}>
                <tr>
                  <td><h3>percentage: 74%</h3></td>
                </tr>
                <tr>
                  <td><h3>from: ultra vision academy-patadi</h3></td>
                </tr>
              </table>
            </div>
          </a>

          <a href='clg.jpeg' className='open-link'>
            <div id="clg" onMouseEnter={mouseEnterHandler2} onMouseLeave={mouseLeaveHandler2}>
              <div className="click" style={{ display: isHovered2 ? 'flex' : 'none' }}>
                <h1>click here to check result</h1>
              </div>
              <h1>Graduation</h1>
              <table style={{ display: isHovered2 ? 'none' : 'table' }}>
                <tr>
                  <td><h3>CGPA: 7.5</h3></td>
                </tr>
                <tr>
                  <td><h3>from: LDRP institute of technology & research-Gandhinagar</h3></td>
                </tr>
              </table>
            </div>
          </a>
         
        </div>
        <h3 id='slide'>click box for see result</h3>
      </div>
      <div id="abt-me">
  <h2>About Me</h2>
  <p>
    I am a <strong>self-taught professional artist</strong> and a <strong>full-stack developer</strong> with a passion for blending <strong>creativity and technology</strong>.
  </p>
  <p>
    My patience and dedication allow me to work on a single sketch for up to <strong>8 hours</strong>, turning my art into a <strong>source of income</strong>. I have also created an <strong>Art Selling Website</strong> to showcase my work.
  </p>
  <p>My notable projects include:</p>
  <ul>
    <li><strong>Crop Selling Website for Farmers</strong> – Connecting farmers and buyers based on city and crop.</li>
    <li><strong>Art Selling Website</strong> – An e-commerce platform for selling artwork with Pay on Delivery.</li>
  </ul>
  <p>
    I have also received <strong>MYSY and CMSS scholarships</strong>, funding my <strong>four-year education</strong>. On YouTube, I run <strong>@gladart7</strong>, now at <strong>1K subscribers</strong>.
  </p>
  <p>
    With expertise in <strong>JavaScript, React.js, Node.js, Java, and DBMS</strong>, I love building impactful projects and pushing creative boundaries.
  </p>
      </div>
    </div>
  );
}

export default About;
