import React, { useState } from 'react';
import "./Skill.css";

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(2);
  };

  const prevPage = () => {
    setCurrentPage(1);
  };

  return (
    <div id='Skills'>
      {currentPage === 1 && (
        <div id="photos">
          <div className="collab1">
            <div className="p1"><img src="c1.png" alt="c" className='ph1'/><h1>c-language</h1></div>
            <div className="p1"><img src="cpp.png" alt="cpp" className='ph1'/><h1>c++language</h1></div>
            <div className="p1"><img src="java.png" alt="java" className='ph1'/><h1>java-language</h1></div>
          </div>
          
          <div className="collab2">
            <div className="p2"><img src="html.webp" alt="html" className='ph1'/><h1>HTML</h1></div>
            <div className="p2"> <img src="css.webp" alt=""  className='ph1'/><h1>CSS</h1></div>
            <div className="p2"><img src="js.png" alt="js" className='ph1'/><h1>JAVA-SCRIPT</h1></div>
            
          </div>

          <div className="collab3">
            <div className="p3"><img src="logo192.png" alt="reactjs" className='ph1'/><h1>React.js</h1></div>
            <div className="p3"><img src="node.png" alt="reactjs" className='ph1'/><h1>Node.js</h1></div>
            <div className="p3"><img src="dsa java.webp" alt="reactjs" className='ph1'/><h1>DSA with java</h1></div>
          </div>
        </div>
        
      )}
     {currentPage === 1 && (
        <div className="next1" onClick={nextPage}>
          <img src="next.png" alt="" id='next'/>
        
        </div>
      )}

      {currentPage === 2 && (
        <div className="next2">
          <div className="back" onClick={prevPage}>
            <img src="back.png" alt="" id='back'/>
            
          </div>
          <div className="collab4">
            <div className="p4">
            <img src="artist.jfif" alt="" id='artist'/>
              <table>
                <tr>
                  
                 <h1>Artist:</h1> 
                
                <td><h2>with web expert , i am a professional sketch and painting artist.</h2></td></tr>
                <tr>
                <h1> Chess:</h1> 
                
                <td><h2>with web expert , i am a professional chess player also . xenesis 2023(runnerup)</h2></td></tr>
              </table>
              <img src="chess.jfif" alt=""  id='chess'/>
            
            </div>
           
          </div>
        </div>
      )}

     
    </div>
  );
};

export default Skills;
