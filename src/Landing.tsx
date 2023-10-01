// components/Landing.tsx
import React from 'react';
import ContactForm from './ContactForm';

const Landing: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">M</div>
        <nav className="navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Side Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <main className="main-content">
        <section id="landing">
          <h1>Matthias Nilsson</h1>
          <p>Software developer inspired by the digital age.</p>
        </section>
        
        <section id="about">
          {/* Your About content here */}
        </section>
        
        <section id="work">
          {/* Your Work or Projects content here */}
        </section>
        
        <section id="projects">
          {/* Your Side Projects content here */}
        </section>
        
        <section id="contact">
          {/* Your Contact content here */}
        </section>
        <ContactForm />
        <footer>
            
          {}
        </footer>
      </main>
    </div>
  );
}

export default Landing;
