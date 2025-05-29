import React, { useState } from 'react';
import "./Top.css";

const Top = () => {
  const [activeLink, setActiveLink] = useState('link1');

  const handleClick = (id) => {
    setActiveLink(id);
  

  }
  const download=()=>{
   
    const a=document.getElementById("pop");
 

    a.style.display="flex";
  
    a.scrollIntoView({ behavior: 'smooth' });
   
   
  }
  
  const ok=()=>{
    const b=document.getElementById("pop")
    const c=document.getElementById("content");
   b.style.display="none";
     c.textContent= "resume downloaded"
     c.style.color="green"
     c.style.background="yellow"
    
 c.style.cursor="not-allowed";
  }

  return (
    <>
    <div className='topbar'>
 
      <div id="navbar">
      <h1 id='port'>.......My-PORTFOLIO........</h1>
        <a
          href='#About'
          id='link1'
          className={activeLink === 'link1' ? 'active' : '' }
          onClick={() => handleClick('link1')}
        >
         <h3> about-me</h3>
        </a>
        <a
          href='#Skills'
          id='link2'
          className={activeLink === 'link2' ? 'active' : '' }
          onClick={() => handleClick('link2')}
        >
         <h3> skills</h3>
        </a>
        <a
          href='#Projects'
          id='link3'
          className={activeLink === 'link3' ? 'active' : ''}
          onClick={() => handleClick('link3')}
        >
          <h3>Project</h3>
        </a>
        <a
          href='#Contact'
          id='link4'
          className={activeLink === 'link4' ? 'active' : ''}
          onClick={() => handleClick('link4')}
        >
         <h3>contact</h3> 
        </a>
        <a
          href='yug-resume.pdf'
          id='link5'
          className={activeLink === 'link5' ? 'active' : ''}
          onClick={download}
          download='yug-resume.pdf'
        >
         <h3 id='content'>resume</h3> 
        </a>
      </div>
      </div>

  <div id="pop" >
    <i class="fa-solid fa-check" id="tick"></i>
<h3>successfully downloaded resume....</h3>
<br />
<button id='ok' onClick={ok}>ok</button>
  </div>
      </>
   
  );
}

export default Top;
