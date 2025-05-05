import React from "react";
// import "./Redcarpet.css";
import Navbar from "./Navbar";

const Redcarpet = () => {
  return (
    <>
      <Navbar />
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source
            src="https://cdn.pixabay.com/video/2020/08/12/46965-449623750_large.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <section className="hero-section">
        <h1 className="hero-title">RedCarpet one way Solutions</h1>
        <p className="hero-description">
          Reserve your exclusive space at premium mall counters and enjoy a VIP
          shopping experience like never before.
        </p>
        <div className="cyhero-buttons">
          <a href="https://redcarpet.qrblack.com/67f62f023315a186e545b0a8">
            <button className="cybtn-green">Get Started</button>
          </a>
        </div>
      </section>

      <section className="cychallenges-section">
            <div className="cychallenges-header">
              <h2>Your Shortcut to a Quick Checkout.
              </h2>
              <p>
              Done shopping? Don’t feel like waiting in line to pay? With Redcarpet, you get access to an exclusive fast-lane billing counter. Pay a bit more, skip the line, and head home early.


              </p>
            </div>

            <div className="cyfeatures-grid">
              {[
                {
                  title: " Shortcut Billing Counter",
                  desc: " Premium users can directly bill without standing in regular queues",
                  icon: "🧾 ",
                },
                {
                  title: "Fast-track Experience",
                  desc: " Speedy exit process after shopping",
                  icon: "⚡ ",
                },
                {
                  title: "App Integration",
                  desc: "Access Redcarpet via the web or mobile app",
                  icon: "📱 ",
                },
                {
                  title: "Queue-Free Experience",
                  desc: "No stress, no wait, just walk out smoothly",
                  icon: "🧍 ",
                },
              ].map((item, idx) => (
                <div key={idx} className="cyfeature-card">
                  <div className="cyfeature-icon">{item.icon}</div>
                  <h3 className="cyfeature-title">{item.title}</h3>
                  <p className="cyfeature-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

      <div className="redcarpet-container">
        {/* Header Section */}
        <div className="header-section">
          <div className="header-content">
            <span className="tag">Premium Service</span>
            <h1>
              RedCarpet <span className="highlight">Premium</span> Experience
            </h1>
            <p>
              Reserve your exclusive space at premium mall counters and enjoy a
              VIP shopping experience like never before.
            </p>
            <a href="https://redcarpet.qrblack.com/67f62f023315a186e545b0a8">
              <button className="book-button">You can Visit Here</button>
            </a>
          </div>
          <div className="rrheader-image"></div>
        </div>

        {/* How It Works */}
        <div className="rrsection">
          <h2>How RedCarpet Works</h2>
          <div className="rrcard-grid">
            <div className="rrcard">
              <h3>Select Your Mall</h3>
              <p>
                Choose from our network of premium shopping malls across the
                country.
              </p>
            </div>
            <div className="rrcard">
              <h3>Reserve Your Space</h3>
              <p>
                Book your exclusive counter space for the date and time of your
                choice.
              </p>
            </div>
            <div className="rrcard">
              <h3>Enjoy VIP Treatment</h3>
              <p>
                Arrive at your reserved space and enjoy a premium shopping
                experience.
              </p>
            </div>
          </div>
        </div>

        {/* Premium Features */}
        <div className="rrsection">
          <h2>Premium Features</h2>
          <div className="rrcard-grid two-columns">
            <div className="rrcard">
              <div className="rrimage2-placeholder"></div>
              <h3>Exclusive Counter Space</h3>
              <p>
                Get your own dedicated counter space in premium locations within
                the mall, ensuring you have the perfect spot for your needs.
              </p>
            </div>
            <div className="rrcard">
              <div className="rrimage1-placeholder"></div>
              <h3>Priority Service</h3>
              <p>
                Skip the lines and enjoy priority service from mall staff and
                retailers when you book through RedCarpet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="redcarpet-container">
        {/* Why Choose RedCarpet */}
        <h2 className="section-title">Why Choose RedCarpet</h2>
        <div className="features-box">
          <div className="feature-item">
            <span className="check-icon">✔️</span>
            <p>Guaranteed space at premium mall locations</p>
          </div>
          <div className="feature-item">
            <span className="check-icon">✔️</span>
            <p>Exclusive access to VIP areas</p>
          </div>
          <div className="feature-item">
            <span className="check-icon">✔️</span>
            <p>Priority customer service</p>
          </div>
          <div className="feature-item">
            <span className="check-icon">✔️</span>
            <p>Complimentary refreshments</p>
          </div>
          <div className="feature-item">
            <span className="check-icon">✔️</span>
            <p>Special discounts from partner retailers</p>
          </div>
          {/* <div className="feature-item">
    <span className="check-icon">✔️</span>
    <p>Personalized shopping assistance</p>
  </div> */}
        </div>

        {/* Testimonials */}
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial">
           
            <p className="testimonial-name">Simran Kaur</p>
            <p className="testimonial-role"> Fashion Blogger, Delhi</p>
            <p className="testimonial-text">
            Simran wanted a crowd-free shopping experience during sale seasons. RedCarpet’s exclusive booking system allowed her to reserve counters at her favorite brands. With personalized assistance and zero waiting, she now recommends RedCarpet to all her followers.
            </p>
          </div>
          <div className="testimonial">
            
            <p className="testimonial-name">Rahul Joshi</p>
            <p className="testimonial-role">Event Manager, Mumbai</p>
            <p className="testimonial-text">
            Rahul often shops for clients' gifts and branded giveaways. With RedCarpet, he easily reserves space at top malls and gets VIP service without delays. This platform helped him complete urgent shopping with class and comfort.
            </p>
          </div>
          <div className="testimonial">
           
            <p className="testimonial-name">Ayesha Sheikh</p>
            <p className="testimonial-role">Businesswoman, Hyderabad</p>
            <p className="testimonial-text">
            Ayesha values her time and prefers shopping without the crowd. Through RedCarpet One Way, she secures her spot at luxury counters, avoids queues, and receives one-on-one attention from staff. It’s now her go-to solution for stress-free premium shopping.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-box">
          <h2 className="cta-title">Ready to Experience RedCarpet?</h2>
          <p className="cta-text">
            Join our premium members and enjoy exclusive access to reserved
            spaces at mall counters across the country.
          </p>
          <a href="https://redcarpet.qrblack.com/67f62f023315a186e545b0a8">
            <button className="cta-button">Visit site</button>
          </a>
        </div>
      </div>
      <style>
        {`
        /* RedCarpetPremium.css */

.redcarpet-container {
    font-family: 'Arial', sans-serif;
    /* padding: 40px; */
    background: linear-gradient(to bottom right, #cff2f9, #e6d4f9);
    color: #1a1a1a;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }

  
  /* Challenges Section */
  .cychallenges-section {
    /* padding: 40px 1px; */
    padding-top: 40px;
    padding-bottom: 0px;
        width: 100%;

    text-align: center;
    background-color: white;
  }
  
  .cychallenges-header h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .cychallenges-header p {
    color: #4b5563;
    max-width: 900px;
    margin: 0 auto 40px auto;
  }
  
  .cyfeatures-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
    max-width: 1500px;
    margin: 0 auto;
  }
  
  .cyfeature-card {
    border: 1px solid #e5e7eb;
    padding: 20px;
    border-radius: 10px;
    text-align: left;
  }
  
  .cyfeature-icon {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .cyfeature-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .cyfeature-desc {
    font-size: 0.95rem;
    color: #374151;
  }


  cyhero-buttons {
  position: relative;
  z-index: 2;}

  .cybtn-green{
  background-color: #0084d6;
  color: white;
  padding: 12px 25px;
  font-size: 16px;
  border: none;
  position: relative;
  z-index: 2;
  }
  
  /* Header Section */
  .header-section {
    display: flex;
    flex-wrap: wrap;
    padding: 40px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
  }
  
  .header-content {
    max-width: 600px;
  }
  
  .tag {
    display: inline-block;
    background-color: #0084d6;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 10px;
  }
  
  .header-content h1 {
    font-size: 36px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .highlight {
    color: #00a0d6;
  }
  
  .header-content p {
    font-size: 16px;
    margin: 20px 0;
    color: #444;
  }
  
  .book-button {
    /* background-color: #d60000; */
    background-color: #0084d6;

    color: white;
    padding: 12px 24px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .book-button:hover {
    background-color: #0009b1;
  }
  
  .rrheader-image {
    width: 500px;
    height: 350px;
    /* background-color: #e0e0e0; */
    background-image: url("https://cdn.pixabay.com/photo/2024/04/19/16/49/ai-generated-8706674_640.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 18px;
    border-radius: 10px;
    margin-top: 20px;
  }
  
  /* Sections */
  .rrsection {
    margin-bottom: 0px;
    text-align: center;
    padding-bottom: 40px;
  }
  
  .rrsection h2 {
    font-size: 28px;
    margin-bottom: 30px;
    font-weight: bold;
  }
  
  /* Cards */
  .rrcard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 20px;
  }
  
  .rrcard {
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    text-align: left;
  }
  
  .rrcard h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  
  .rrcard p {
    font-size: 14px;
    color: #555;
  }
  
  .rrimage-placeholder {
    width: 100%;
    height: 160px;
    background-color: #f0f0f0;
    margin-bottom: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
  }
  
  /* Utility */
  .two-columns {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .rrimage1-placeholder {
    width: 100%;
    height: 160px;
    background-image: url("https://cdn.pixabay.com/photo/2022/11/07/14/21/guard-7576516_640.jpg");
    background-position: center;
    background-size: cover;    margin-bottom: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
  }
  .rrimage2-placeholder {
    width: 100%;
    height: 160px;
    background-image: url("https://cdn.pixabay.com/photo/2017/08/05/12/02/architecture-2582984_640.jpg");
    background-position: center;
    background-size: cover;    margin-bottom: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
  }


















/* 
  .redcarpet-container {
    font-family: Arial, sans-serif;
    padding: 40px 20px;
    max-width: 1200px;
    margin: auto;
  } */
  
  .section-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 20px;
    padding-top: 20px;
  }
  
  .features-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    background: #fff;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
  }
  
  .check-icon {
    color: red;
    font-weight: bold;
  }
  
  .testimonials {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
    justify-content: center;
  }
  
  .testimonial {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 300px;
    flex: 1;
  }
  
  .testimonial-text {
    font-style: italic;
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  .testimonial-name {
    font-weight: bold;
    text-align: center;
  }
  
  .testimonial-role {
    color: gray;
    font-size: 12px;
    text-align: center;
  }

    .hero-section {
    /* background-color: #0c7ef0; */
    padding: 150px 20px;
    /* background-color: red; */
    margin-top: 70px;
    text-align: center;
    position: relative;
    z-index: 2;
  }


  .hero-title {
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 10px;
  }
  
  .hero-description {
    font-size: 18px;
    color: #ffffff;
  }
  
  .cta-box {
    background-color: #ffffff;
    text-align: center;
    padding: 40px 20px;
    position: relative;
    z-index: 2;
    /* border-radius: 10px; */
    /* margin-top: 40px; */
  }
  
  .cta-title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .cta-text {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .cta-button {
    background-color: rgb(64, 149, 252);
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .cta-button:hover {
    background-color: rgb(0, 67, 139);
  }
  
        `}
      </style>
    </>
  );
};

export default Redcarpet;
