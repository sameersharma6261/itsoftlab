import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import React, { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';

// Leadership Hero Component
const LeadershipHero: React.FC = () => {
  return (
    <section className="abbleadership-hero">
      <div className="abbbcontainer">
        {/* <div className="category-label">Leadership</div> */}
        <h1>Visionary Leadership</h1>
        <p className="abbsubtitle">
          Meet the innovative mind driving ITSoftlab's growth and technological excellence
        </p>
        
        <div className="abbprofile-card">
          <div className="abbprofile-image">
            <div className="abbimage-placeholder">
              <img src="/images/m.jpeg" alt="Monika Ahirwal" />
            </div>
            
            <div className="abbprofile-info">
              <h2>Monika Ahirwal</h2>
              <p>Chief Executive Officer</p>
              <p>Monika Ahirwal is the dynamic CEO and visionary leader of IT Softlab. With over 15 years of experience in the business and technology sectors, Monika has built a reputation for her strategic thinking, leadership, and ability to drive growth. A post-graduate by education, she has applied her strong foundation in management to successfully lead a technology-driven company.</p>
              <p>Monika’s unique perspective, combining a deep understanding of business operations with a focus on technology, has been instrumental in building IT Softlab into a global IT solutions provider. Her leadership style is marked by a customer-first mentality, innovation, and an unwavering commitment to delivering high-quality, scalable solutions for businesses of all sizes.</p>

              <div className="abbsocial-links">
                <a href="https://www.linkedin.com/in/monika-ahirwal-14471232b/" aria-label="LinkedIn Profile">
                  <Linkedin size={20} />
                </a>
                {/* <a href="#email" aria-label="Email">
                  <Mail size={20} />
                </a>
                <a href="/contactus" aria-label="Phone">
                  <Phone size={20} />
                </a> */}
              </div>
            </div>
          </div>
          <div className="abbprofile-content">
            <div className="abbstats-row">
              <div className="abbstat">
                <span className="abbstat-number">15+</span>
                <span className="abbstat-label">Years Experience</span>
              </div>
              <div className="abbstat">
                <span className="abbstat-number">290+</span>
                <span className="abbstat-label">Projects Delivered</span>
              </div>
              <div className="abbstat">
                <span className="abbstat-number">190+</span>
                <span className="abbstat-label">Happy clients.</span>
              </div>
              <div className="abbstat">
                <span className="abbstat-number">120+</span>
                <span className="abbstat-label">Team Members</span>
              </div>
              <div className="abbstat">
                <span className="abbstat-number">39+</span>
                <span className="abbstat-label">Repetitive Clients</span>
              </div>
            </div>
            <a href="/contactus" className="abbconnect-button">
              Connect with Monika Ahirwal →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="video-container">
          <video autoPlay loop muted playsInline>
            <source
              src="https://cdn.pixabay.com/video/2020/08/12/46965-449623750_large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* Hero Section */}
        <section className="hero">
          <div className="containerrr">
            <div className="text-center">
              <h1 className="hero-title">About Us</h1>
              <p className="hero-subtitle">
              At ITSoftlab, we deliver innovative and reliable IT solutions tailored to modern business needs.
              Our mission is to empower organizations with technology that drives growth, efficiency, and digital transformation.
              </p>
            </div>
          </div>
        </section>











        <div className="appppp">
      <main>
        <LeadershipHero />
      </main>
    </div>
    









       
        <div className="about-container">
      {/* Our Story Section */}
      <div className="our-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
          The Journey of IT Softlab
In early 2015, IT Softlab was born with a mission to address a critical gap in the market — affordable IT solutions for startups, MSMEs, and small businesses. Many of these businesses had innovative ideas and huge potential but faced difficulties in finding the right IT support at an affordable cost. The need for a trusted IT partner was evident, and this need sparked the creation of IT Softlab.
Starting with a small but dedicated team, we set out to provide businesses with scalable, reliable, and cost-effective IT solutions. Our goal was simple: help businesses focus on their growth and marketing efforts while we took care of their IT needs.
          </p>
         
          <p>
          Since our inception, IT Softlab has grown into a global IT powerhouse, proudly serving clients from different industries across the world. Our CEO, Monika Ahirwal, has played an instrumental role in shaping our journey. With over 15 years of experience and a strong post-graduate education, Monika's leadership and vision have guided us to where we are today — a trusted IT partner delivering innovative, high-quality solutions to businesses of all sizes.
          From delivering 290+ successful projects to earning the trust of 180+ happy clients, our story is one of growth, resilience, and a commitment to helping businesses thrive.
          </p>
        </div>
        <div className="story-image">
          <div className="image-placeholder"></div>
        </div>
      </div>








      {/* Mission & Values */}
      <div className="mission-values">
        <div className="mv-header">
          <h2>Our Mission & Values</h2>
          <p>
            Guided by our core principles, we strive to deliver innovative technology solutions that empower businesses
            to thrive in the digital age.
          </p>
        </div>

        <div className="mv-cards">



        <div className="mv-card">
            <div className="icon">💡</div>
            <h3>Our Vision</h3>
            <p>
            To be recognized as the most trusted global IT solutions provider, known for innovation, integrity, and customer success. at affordable IT solutions for startups, MSMEs, and small businesses
            </p>
          </div>



          <div className="mv-card">
            <div className="icon">🎯</div>
            <h3>Our Global Presence</h3>
            <p>
            With a global footprint across 6 geo-locations worldwide, we deliver personalized IT services to clients from diverse industries and regions.
            We have successfully delivered 290+ projects and earned the trust of 180+ happy clients, standing as a symbol of excellence, reliability, and innovation.
            </p>
          </div>

         

          <div className="mv-card">
            <div className="icon">🏅</div>
            <h3>Our Values</h3>
            <p>
              Excellence, integrity, innovation, collaboration, and client-centricity form the foundation of everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>









    {/* <div class="it-services">
  <div class="it-header">
    <h2>Comprehensive IT Solutions</h2>
    <p>From network management to custom software development, we offer a full spectrum of IT services to meet your business needs.</p>
  </div>

  <div class="it-grid">
    <div class="it-card">
      <div class="it-icon">🔗</div>
      <h3>Network Management</h3>
      <p>Comprehensive network solutions to keep your business connected, secure, and performing optimally.</p>
    </div>

    <div class="it-card">
      <div class="it-icon">🛡️</div>
      <h3>Cybersecurity</h3>
      <p>Robust security measures to protect your valuable data and systems from evolving threats.</p>
    </div>

    <div class="it-card">
      <div class="it-icon">☁️</div>
      <h3>Cloud Services</h3>
      <p>Scalable cloud solutions that enhance flexibility, accessibility, and business continuity.</p>
    </div>

    <div class="it-card">
      <div class="it-icon">💻</div>
      <h3>Software Development</h3>
      <p>Custom software solutions tailored to your unique business requirements and objectives.</p>
    </div>

    <div class="it-card">
      <div class="it-icon">📈</div>
      <h3>IT Consulting</h3>
      <p>Strategic guidance to help you leverage technology for maximum business impact and growth.</p>
    </div>

    <div class="it-card">
      <div class="it-icon">🛠️</div>
      <h3>IT Support</h3>
      <p>Responsive technical support to resolve issues quickly and minimize business disruption.</p>
    </div>
  </div>
</div> */}



<div class="it-services">
  <div class="it-header">
    <h2>Our Core Strengths</h2>
    <p>Key skills and expertise that drive the company’s success and deliver outstanding results.</p>
  </div>

  <div class="it-grid">
    <div class="it-card">
      <div class="it-icon">🔗</div>
      <h3>AI-powered Enterprise Solutions</h3>
      <p>Advanced enterprise solutions using artificial intelligence to automate processes and boost business efficiency.</p>
    </div>

    <div class="it-card">
      <div class="it-icon">🛡️</div>
      <h3>Customized CRM, ERP, and HR Platforms</h3>
      <p>Tailor-made CRM, ERP, and HR platforms designed to fit specific business needs and workflows.</p>
    </div>

    <div class="it-card">
      <div class="it-icon">☁️</div>
      <h3>Robust Cloud and Data Infrastructure</h3>
      <p>Strong and reliable cloud services and data infrastructure ensuring scalability, security, and high performance.</p>
    </div>

    <div class="it-card">
      <div class="it-icon">💻</div>
      <h3>Advanced Cybersecurity and Disaster Recovery Solutions</h3>
      <p>Comprehensive cybersecurity measures and disaster recovery plans to protect data and ensure business continuity.</p>
    </div>

    <div class="it-card">
      <div class="it-icon">📈</div>
      <h3>Subscription-based Business Software Products</h3>
      <p>Software products offered on a subscription model, providing ongoing updates and support for businesses.</p>
    </div>

    <div class="it-card">
      <div class="it-icon">🛠️</div>
      <h3>Agile Website and Mobile Application Development</h3>
      <p>Flexible and efficient development of websites and mobile apps using agile methodologies for quick delivery and adaptability.</p>
    </div>
  </div>
</div>









    {/* <div className="app">
      <section className="why-choose-us">
        <h2 className="title">Why Choose ITSoftlab</h2>
        <p className="subtitle">
          We differentiate ourselves through our commitment to excellence, innovation, and client satisfaction.
        </p>
        
        <div className="features-grid">
          <div className="feature">
            <span className="check">✓</span>
            <div>
              <h3>Expertise & Experience</h3>
              <p>Our team brings deep technical knowledge and years of industry experience to every project.</p>
            </div>
          </div>

          <div className="feature">
            <span className="check">✓</span>
            <div>
              <h3>Client-Centric Approach</h3>
              <p>Your success is our priority. We work closely with you to understand your goals and challenges.</p>
            </div>
          </div>

          <div className="feature">
            <span className="check">✓</span>
            <div>
              <h3>Reliable Support</h3>
              <p>We're there when you need us, providing responsive support and maintenance.</p>
            </div>
          </div>

          <div className="feature">
            <span className="check">✓</span>
            <div>
              <h3>Tailored Solutions</h3>
              <p>We don't believe in one-size-fits-all. Our solutions are customized to your specific needs.</p>
            </div>
          </div>

          <div className="feature">
            <span className="check">✓</span>
            <div>
              <h3>Innovative Thinking</h3>
              <p>We stay at the forefront of technology trends to bring you cutting-edge solutions.</p>
            </div>
          </div>

          <div className="feature">
            <span className="check">✓</span>
            <div>
              <h3>Proven Results</h3>
              <p>Our track record speaks for itself, with numerous successful projects and satisfied clients.</p>
            </div>
          </div>
        </div>
      </section>
    </div> */}









<div className="app">
      <section className="why-choose-us">
        <h2 className="title">Why Choose ITSoftlab</h2>
        <p className="subtitle">
          We differentiate ourselves through our commitment to excellence, innovation, and client satisfaction.
        </p>
        
        <div className="features-grid">
          <div className="feature">
            <span className="check">✓</span>
            <div>
              <h3>One-Stop IT Solutions Provider</h3>
              <p>A company offering complete IT services like software development, cybersecurity, cloud solutions, and technical support under one roof.</p>
            </div>
          </div>

          <div className="feature">
            <span className="check">✓</span>
            <div>
              <h3>Presence in 6 Global Locations</h3>
              <p>The company operates internationally with offices or service centers in six major locations around the world.</p>
            </div>
          </div>

          <div className="feature">
            <span className="check">✓</span>
            <div>
              <h3>290+ Projects Successfully Delivered</h3>
              <p>The company has completed and delivered over 500 projects across various industries, ensuring client satisfaction and quality service.</p>
            </div>
          </div>

          <div className="feature">
            <span className="check">✓</span>
            <div>
              <h3>180+ Satisfied Clients Worldwide</h3>
              <p>Over 250 clients globally trust the company, reflecting strong relationships built through quality service and successful projects.</p>
            </div>
          </div>

          <div className="feature">
            <span className="check">✓</span>
            <div>
              <h3>Innovative, Scalable, and Future-Ready Solutions</h3>
              <p>The company provides creative, easily expandable, and forward-thinking solutions designed to meet evolving business and technology needs.</p>
            </div>
          </div>

          <div className="feature">
            <span className="check">✓</span>
            <div>
              <h3>Proven Results</h3>
              <p>Our track record speaks for itself, with numerous successful projects and Happy clients.</p>
            </div>
          </div>
        </div>
      </section>
    </div>










    <div className="appp">
      <section className="approach">
        <div className="approach-content">
          <div className="approach-text">
            <h2 className="approach-title">Our Approach</h2>
            <p className="approach-description">
              At ITSoftlab, we follow a systematic and collaborative approach to ensure we deliver
              solutions that truly address your business needs and drive tangible results.
            </p>

            <div className="steps">
              <div className="step">
                <span className="step-number">1</span>
                <div className="step-content">
                  <h3>Discovery & Analysis</h3>
                  <p>We begin by understanding your business, challenges, and objectives.</p>
                </div>
              </div>

              <div className="step">
                <span className="step-number">2</span>
                <div className="step-content">
                  <h3>Strategic Planning</h3>
                  <p>We develop a tailored strategy and solution architecture.</p>
                </div>
              </div>

              <div className="step">
                <span className="step-number">3</span>
                <div className="step-content">
                  <h3>Implementation</h3>
                  <p>Our experts execute the plan with precision and attention to detail.</p>
                </div>
              </div>

              <div className="step">
                <span className="step-number">4</span>
                <div className="step-content">
                  <h3>Testing & Optimization</h3>
                  <p>We rigorously test and refine to ensure optimal performance.</p>
                </div>
              </div>

              <div className="step">
                <span className="step-number">5</span>
                <div className="step-content">
                  <h3>Ongoing Support</h3>
                  <p>We provide continuous support and maintenance to ensure long-term success.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="approach-image">
            <img 
              src="https://cdn.pixabay.com/photo/2019/07/26/20/52/man-4365597_640.png" 
              alt="Team collaboration and planning"
              className="image"
            />
          </div>
        </div>
      </section>
    </div>










    


    {/* <div className="apppp">
      <main>
        <ProfileTabs />
      </main>
    </div> */}

{/* 
    <div className="appppppp">
      <main>
        <Testimonials />
      </main>
    </div> */}



















        {/* CTA Section */}
        <section
          className="ctxaa"
          style={{ position: "relative", zIndex: "2" }}
        >
          <div className="contaiiiner">
            <h2 className="cta-titleex">Ready to Work With Us?</h2>
            <p className="cta-texxtt">
              Contact us today to learn more about our services.
            </p>
            <Link to="/contactus">
              <button className="button">Contact Us</button>
            </Link>
          </div>
        </section>
      </main>




     
      <style>
        {`


.abbbcontainer{

  max-width: 1200px;
  width: 100%; /* ensures it can shrink on smaller screens */


}








          
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

  .containerrr {
    width: 100%;
    padding: 0px;
    /* max-width: 1200px; */
    /* margin: 0 auto; */
  }
  
  .text-center {
    text-align: center;
  }
  
  /* Hero Section */
  .hero {
    /* background: linear-gradient(to right, #007bff, #0056b3); */
    color: white;
    margin-top: 60px;
    padding: 150px 20px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .hero-subtitle {
    font-size: 20px;
    max-width: 1200px;
    margin: 0 auto;
    color: white;
  }

  
  /* CTA Section */
    .ctxaa {
    /* background: #007bff; */
    color: white;
    background: linear-gradient(to right, #007bff, #0056b3);
    padding: 10px 20px;
    text-align: center;
  }
  
  .cta-titleex {
    font-size: 30px;
    font-weight: bold;
    margin: 0;
  }
  
  .cta-texxtt {
    font-size: 16px;
    color: white;
    margin-bottom: 20px;
  }
  
  .button {
    background: white;
    color: #000000;
    padding: 10px 22px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .button:hover {
    background: #e0e0e0;
  }
  






  /* General Container */
.about-container {
  padding: 60px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
  // max-width: 1200px;
  margin: auto;
  position: relative;
  background: #f9f9f9;
  z-index: 2;
}

/* Our Story Section */
.our-story {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  margin-bottom: 80px;
}

.story-text {
  flex: 1;
  min-width: 300px;
}

.story-text h2 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #004080;
}

.story-text p {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 12px;
  color: #444;
}

.story-image {
  flex: 1;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  height: 360px;
  // background-color: #ddd;
  background-image: url('https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  color: #888;
  font-size: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

/* Mission & Values Section */
.mission-values {
  background-color: #f0f6ff;
  padding: 60px 30px;
  border-radius: 16px;
}

.mv-header {
  text-align: center;
  margin-bottom: 50px;
}

.mv-header h2 {
  font-size: 34px;
  margin-bottom: 10px;
  color: #004080;
}

.mv-header p {
  font-size: 16px;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}

/* Cards Layout */
.mv-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.mv-card {
  background-color: white;
  padding: 30px 25px;
  width: 320px;
  border-radius: 14px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease;
}

.mv-card:hover {
  transform: translateY(-5px);
}

.mv-card .icon {
  font-size: 36px;
  margin-bottom: 18px;
}

.mv-card h3 {
  font-size: 22px;
  color: #003366;
  margin-bottom: 12px;
}

.mv-card p {
  font-size: 15px;
  color: #444;
  line-height: 1.6;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .our-story {
    flex-direction: column;
  }

  .mv-cards {
    flex-direction: column;
    align-items: center;
  }

  .mv-card {
    width: 90%;
  }
}






.it-services {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #222;
}

.it-header h2 {
  font-size: 32px;
  margin-bottom: 12px;
  color: white;
  font-weight: bold;
}

.it-header p {
  font-size: 16px;
  color: white;
  max-width: 800px;
  margin: 0 auto 40px;
}

.it-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.it-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  width: 320px;
  padding: 30px 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.it-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.it-icon {
  font-size: 36px;
  margin-bottom: 16px;
}

.it-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #003366;
}

.it-card p {
  font-size: 15px;
  color: #444;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .it-card {
    width: 90%;
  }
}







.app {
  font-family: -apple-system, system-ui, sans-serif;
  background:rgb(20, 34, 68);
  min-height: 100%;
  padding: 60px 20px;
  position: relative;
  z-index: 2;
  color: white;
}

.why-choose-us {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 16px;
}

.subtitle {
  text-align: center;
  color: #cbd5e1;
  max-width: 800px;
  margin: 0 auto 48px;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;
}

.feature {
  display: flex;
  gap: 16px;
  padding: 16px;
  transition: transform 0.3s;
}

.feature:hover {
  transform: translateY(-4px);
}

.check {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature h3 {
  margin: 0 0 8px;
  font-size: 20px;
}

.feature p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}











.appp {
  font-family: -apple-system, system-ui, sans-serif;
  // min-height: 60vh;
  background-color: #f8fafc;
  padding: 40px 20px;
  position: relative;
  z-index: 2;
}

.approach {
  max-width: 1200px;
  margin: 0 auto;
}

.approach-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

.approach-text {
  flex: 1;
}

.approach-title {
  font-size: 36px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
}

.approach-description {
  font-size: 18px;
  line-height: 1.6;
  color: #64748b;
  max-width: 800px;
  margin-bottom: 48px;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.step {
  display: flex;
  gap: 20px;
  padding: 10px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.step:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.step-number {
  width: 32px;
  height: 32px;
  background-color: #f1f5f9;
  color: #0f172a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;
}

.step-content h3 {
  color: #1e293b;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 4px 0;
}

.step-content p {
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

.approach-image {
  flex: 1;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .approach-title {
    font-size: 42px;
  }

  .step {
    padding: 24px;
  }
  
  .step-content h3 {
    font-size: 20px;
  }
  
  .step-content p {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .app {
    padding: 80px 40px;
  }

  .approach-content {
    flex-direction: row;
    align-items: stretch;
    gap: 60px;
  }

  .approach-text {
    flex: 1;
    max-width: 50%;
  }

  .approach-image {
    flex: 1;
    max-width: 50%;
    height: auto;
    position: relative;
  }
}








.inmb-20 {
  position: relative;
  z-index: 2;
  padding-bottom: 30px;
  /* background: linear-gradient(to bottom right, #cff2f9, #e6d4f9); */
  /* background-color: white; */

}


.insection-title2 {
  font-size: 2.25rem;
  font-weight: bold;
  color: rgb(251, 251, 251);
  padding-top: 30px;
  margin: 0;
  text-align: center;
  margin-bottom: 3rem;
}

.ingrid5 {    
  display: grid;
  justify-content: center;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 1rem;
  max-width: 1200px;       
  margin: 0 auto;           
}


  
@media (min-width: 768px) {
  .ingrid-cols-3 {
    regrid-template-columns: repeat(3, 1fr);
  }
}


/* Testimonial Cards */
.intestimonial-card {
  background: rgba(255, 255, 255, 0.365);
  backdrop-filter: blur(4px);
  // padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.intestimonial-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.intestimonial-image {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

.intestimonial-name {
  font-weight: 600;
  margin: 0;
  color: var(--gray-800);
  color: rgb(70, 70, 70);
}

.intestimonial-role {
  margin: 0;
  color: var(--gray-600);
  color: rgb(255, 255, 255);
}

.intestimonial-content {
  color: var(--gray-700);
  color: rgb(0, 0, 0);
  font-style: italic;
}

















:root {
  /* Color palette */
  --color-primary: #1D3557;
  --color-primary-light: #457B9D;
  --color-primary-dark: #0D1B2A;
  
  --color-secondary: #E9C46A;
  --color-secondary-light: #F4E3B1;
  --color-secondary-dark: #D4A24E;
  
  --color-text: #333333;
  --color-text-light: #666666;
  --color-text-lighter: #999999;
  
  --color-background: #FFFFFF;
  --color-background-alt: #F8F9FA;
  --color-background-dark: #E9ECEF;

  --color-success: #2E7D32;
  --color-warning: #FF9800;
  --color-error: #D32F2F;
  
  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  
  /* Spacing (8px grid) */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
  
  /* Borders and shadows */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;
  
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

body {
  font-family: var(--font-family);
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text);
  background-color: var(--color-background);
}

.appppp {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.apppp {
  display: flex;
  flex-direction: column;
  // min-height: 100vh;
}

.appppppp {
  display: flex;
  flex-direction: column;
  // min-height: 100vh;
  margin-top: 50px;
}

/* Leadership Hero styles */
.abbleadership-hero {
  background-color: var(--color-background-alt);
  // padding: var(--space-5) 0;
  position: relative;
  overflow: hidden;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.abbcategory-label {
  display: inline-block;
  background-color: var(--color-secondary-light);
  color: var(--color-primary);
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-md);
  margin-bottom: var(--space-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.abbleadership-hero h1 {
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
  line-height: 1.1;
}

.abbsubtitle {
  font-size: 1.25rem;
  color: var(--color-text-light);
  // max-width: 700px;
  text-align: center;
  margin-bottom: var(--space-4);
}


.abbprofile-card {
  // background-color: var(--color-background);
  // border-radius: var(--border-radius-lg);
  // overflow: hidden;
  // box-shadow: var(--shadow-lg);
  // margin-top: var(--space-5);
  // display: flex;
  // flex-direction: column;
  // max-width: 1200px;

  background-color: var(--color-background);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  margin-top: var(--space-5);
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%; /* ensures it can shrink on smaller screens */
  margin-left: auto;
  margin-right: auto; /* centers the card */
}

.abbprofile-image {
  display: flex;
  position: relative;
}

.abbimage-placeholder {
  flex: 0 0 40%;
  height: 650px;
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.abbimage-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition-normal);
}

.abbimage-placeholder:hover img {
  transform: scale(1.03);
}

.abbprofile-info {
  flex: 1;
  padding: var(--space-4);
  background: linear-gradient(to right, rgba(46, 86, 141, 0.95), rgba(35, 95, 180, 0.85));
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.abbprofile-info h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--space-1);
  color: white;
}

.abbprofile-info p {
  font-size: 1.125rem;
  color: var(--color-secondary-light);
  margin-bottom: var(--space-3);
}

@media (min-width: 700px) and (max-width: 1193px){
.abbprofile-info p {
  font-size: 0.8rem;
}

}

@media (min-width: 480px) and (max-width: 700px){
.abbprofile-info p {
  font-size: 0.7rem;
}
   .abbprofile-info h2 {
    font-size: 1.3rem;
  }
}


 @media (max-width: 480px) {
 .abbprofile-info p {
   font-size: 0.5rem;
  }
 
  .abbprofile-info h2 {
    font-size: 1.1rem;
  }
 }

.abbsocial-links {
  display: flex;
  gap: var(--space-2);
}

.abbsocial-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: background-color var(--transition-fast);
}

.abbsocial-links a:hover {
  background-color: var(--color-secondary);
  color: var(--color-primary);
}

.abbprofile-content {
  padding: var(--space-4);
  display: flex;
  position: relative;
  z-index: 2;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.abbstats-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.abbstat {
  flex: 1;
  min-width: 120px;
  text-align: center;
  padding: var(--space-2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.abbstat-number {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--space-1);
}

.abbstat-label {
  font-size: 0.875rem;
  color: var(--color-text-light);
  font-weight: 500;
}

.abbconnect-button {
  display: block;
  width: 90%;
  padding: var(--space-2);
  background-color: var(--color-secondary);
  color: var(--color-primary-dark);
  text-align: center;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
}

.abbconnect-button:hover {
  background-color: var(--color-secondary-dark);
  color: var(--color-primary-dark);
  transform: translateY(-2px);
}


















/* Profile Tabs styles */
.abbprofile-tabs {
  // padding: var(--space-6) 0;
  margin-top: 50px;
    padding-top: 20px;
  background-color: white;
}

.abbtabs-container {
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  background-color: var(--color-background);
}

.abbtabs-header {
  display: flex;
  border-bottom: 1px solid var(--color-background-dark);
  overflow-x: auto;
  position: relative;
  z-index: 2;
  scrollbar-width: none;
}

.abbtabs-header::-webkit-scrollbar {
  display: none;
}

.abbtab-button {
  padding: var(--space-2) var(--space-3);
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-light);
  position: relative;
  transition: color var(--transition-fast);
  flex: 1;
  white-space: nowrap;
}

.abbtab-button:hover {
  color: var(--color-primary);
}

.abbtab-button.active {
  color: var(--color-primary);
}

.abbtab-button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--color-secondary);
}

.abbtab-content {
  padding: var(--space-4);
}

.abbtab-panel {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.abbtab-panel p {
  margin-bottom: var(--space-3);
  line-height: 1.6;
}

.abbvision-quote {
  font-size: 1.25rem;
  font-style: italic;
  color: var(--color-primary);
  padding: var(--space-3);
  background-color: var(--color-background-alt);
  border-left: 4px solid var(--color-secondary);
  margin-bottom: var(--space-4);
  line-height: 1.4;
}

.abbvision-pillars {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-3);
  margin: var(--space-4) 0;
}

.abbvision-pillar {
  padding: var(--space-3);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-background-dark);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.abbvision-pillar:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.abbvision-pillar h4 {
  color: var(--color-primary);
  margin-bottom: var(--space-2);
  font-size: 1.125rem;
}

.abbexperience-item {
  display: flex;
  margin-bottom: var(--space-4);
  position: relative;
}

.abbexperience-year {
  flex: 0 0 150px;
  font-weight: 600;
  color: var(--color-primary);
  padding-right: var(--space-3);
}

.abbexperience-content {
  position: relative;
  padding-left: var(--space-3);
  border-left: 2px solid var(--color-background-dark);
}

.abbexperience-content::before {
  content: '';
  position: absolute;
  left: -9px;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  border: 3px solid white;
}

.abbexperience-content h4 {
  margin-bottom: 0.25rem;
  font-size: 1.125rem;
}

.abbexperience-company {
  color: var(--color-text-light);
  font-style: italic;
  margin-bottom: var(--space-1);
}

.abbtab-panel h3 {
  margin-top: var(--space-4);
  margin-bottom: var(--space-3);
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 600;
}

.abbachievement-item {
  display: flex;
  margin-bottom: var(--space-3);
}

.abbachievement-year {
  flex: 0 0 80px;
  font-weight: 700;
  color: var(--color-secondary-dark);
}

.abbachievement-content h4 {
  margin-bottom: 0.25rem;
}














/* Testimonials styles */
.abbtestimonials {
  padding: var(--space-6) 0;
  background-color: var(--color-background-alt);
  overflow: hidden;
}

.abbtestimonials h2 {
  text-align: center;
  margin-bottom: var(--space-5);
  font-size: 2.25rem;
  color: var(--color-primary);
}

.abbtestimonials-slider {
  position: relative;
  zindex: 2;
  display: flex;
  align-items: center;
  padding: 0 var(--space-3);
  margin-bottom: var(--space-4);
}

.abbtestimonials-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.abbtestimonial-card {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: var(--space-4);
  background-color: var(--color-background);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform var(--transition-normal), opacity var(--transition-normal);
  transform: translateX(100%);
  opacity: 0;
}

.abbtestimonial-card.active {
  transform: translateX(0);
  opacity: 1;
}

.abbtestimonial-stars {
  color: var(--color-secondary);
  font-size: 1.25rem;
  margin-bottom: var(--space-2);
}

.abbtestimonial-quote {
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: var(--space-3);
  font-style: italic;
  color: var(--color-text);
}

.abbtestimonial-author {
  margin-top: auto;
}

.abbauthor-name {
  font-weight: 600;
  color: var(--color-primary);
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.abbauthor-title {
  color: var(--color-text-light);
  font-size: 0.875rem;
}

.abbslider-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-background);
  border: none;
  box-shadow: var(--shadow-sm);
  color: var(--color-primary);
  z-index: 10;
  transition: all var(--transition-fast);
}

.abbslider-arrow:hover {
  background-color: var(--color-primary);
  color: white;
  box-shadow: var(--shadow-md);
}

.abbslider-arrow-left {
  margin-right: var(--space-2);
}

.abbslider-arrow-right {
  margin-left: var(--space-2);
}

.abbtestimonial-indicators {
  display: flex;
  justify-content: center;
  gap: var(--space-1);
}

.abbindicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-background-dark);
  border: none;
  transition: all var(--transition-fast);
}

.abbindicator.active {
  background-color: var(--color-secondary);
  transform: scale(1.2);
}

        `}
      </style>
    </>
  );
}
