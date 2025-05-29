import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Please enter your name");
      return;
    } else if (message === "") {
      alert("Please enter a message");
      return;
    } else {
      const data = { name, email, message };

      try {
        const response = await axios.post('http://localhost:3000/api/data', data);
        if (response.status === 200) {
          setResponseMessage("Thank you! I will answer you soon :)");
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setResponseMessage("Failed to submit the form. Please try again later.");
        }
      } catch (error) {
        setResponseMessage("There was an error submitting your message. Please try again later.");
        console.error("Axios error:", error);
        alert("there is problem with web please try letter")
      }
    }
  };

  return (
    <div id='Contact' className='contact-container'>
      <div id="cont">
        <p id='para'>{responseMessage || 'If you have any questions or would like to work together, please fill out the form below or reach out to me on social media!'}</p>
        <form className='contact-form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <br />
          <input
            type='text'
            id='n'
            name='name'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />

          <label htmlFor='email'>Email</label>
          <br />
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          <label htmlFor='message'>Message</label>
          <br />
          <textarea
            id='message'
            name='message'
            placeholder='Enter your message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <br />

          <button type='submit' id='submit'>Submit</button>
          <button type='reset' id='reset' onClick={() => { setName(''); setEmail(''); setMessage(''); setResponseMessage(''); }}>Reset</button>
        </form>
        <div className='social-media'>
          <a href='https://www.linkedin.com/feed/' target='_blank' rel='noopener noreferrer'>
            <i className="fa-brands fa-linkedin" id='i'></i>
          </a>
          <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
            <i className="fa-brands fa-github" id='i'></i>
          </a>
          <a href='https://www.instagram.com/about_art_13/' target='_blank' rel='noopener noreferrer'>
            <i className="fa-brands fa-instagram" id='i'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
