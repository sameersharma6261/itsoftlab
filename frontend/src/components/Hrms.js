import React from "react";
import Navbar from "./Navbar";
// import "./Hrms.css";

function Hrms() {
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
        <h1 className="hero-title">HRMSM one way Solutions</h1>
        <p className="hero-description">
          Streamline your HR operations with our comprehensive HRMSM platform
          designed to manage your workforce efficiently.{" "}
        </p>
        <div className="cyhero-buttons">
          <a href="https://hrms-ten-eta.vercel.app/">
            <button className="cybtn-green">Get Started</button>
          </a>
        </div>
      </section>

      <section className="cychallenges-section">
        <div className="cychallenges-header">
          <h2>HRMSM: The Office Brain
          </h2>
          <p>
          HRMSM simplifies office management by combining employee data, departments, payroll, events, leave tracking, and more into a single powerful platform.

          </p>
        </div>

        <div className="cyfeatures-grid">
          {[
            {
              title: "Add & manage employees",
              // desc: "Easily record and track cylinder entries and exits from your godowns without the hassle of manual paperwork.",
              icon: "👥 ",
            },
            {
              title: "Create and manage departments",
              // desc: "Manage your entire inventory on the go with our powerful mobile application for Android and iOS.",
              icon: "🏢 ",
            },
            {
              title: "View employee leaves & events",
              // desc: "Get instant insights into your inventory levels, distribution patterns, and business performance.",
              icon: "📅 ",
            },
            {
              title: "Run payrolls easily",
              // desc: "Generate detailed reports on inventory, distribution, and financial aspects of your cylinder business.",
              icon: "💰 ",
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

      {/* Header Section */}
      <div className="hrheader-section">
        <div className="hrrrheader-image"></div>
        <div className="hrheader-content">
          <span className="hrtag">Premium Service</span>
          <h1>
            Complete Human{" "}
            <span className="hrhighlight">Resource Management</span> System
          </h1>
          <p>
            Streamline your HR operations with our comprehensive HRMSM platform
            designed to manage your workforce efficiently.
          </p>
          <a href="https://hrms-ten-eta.vercel.app/">
            <button className="hrbook-button">You can Visit Here</button>
          </a>
        </div>
      </div>

      {/* next section */}
      <div className="hrmkey-features-container">
        <h2 className="hrmsection-title">Key Features</h2>

        <div className="hrmfeatures-grid">
          {/* Card 1 */}
          <div className="hrmfeature-card featured">
            {/* <div className="hrmbadge">Featured</div> */}
            <h3 className="hrmfeature-title">Advanced Attendance Tracking</h3>
            <p className="hrmfeature-subtitle">
              Complete employee attendance management
            </p>
            <div className="hrmimage-placeholder1"></div>
            <p className="hrmfeature-description">
              Our professional attendance tracking module records when employees
              arrive and leave, storing complete information for accurate time
              management. Track attendance patterns, manage time-off requests,
              and generate comprehensive reports.
            </p>
            <ul className="hrmfeature-list">
              <li>✔ Real-time clock in/out tracking</li>
              <li>✔ Detailed attendance reports</li>
              <li>✔ Absence management</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="hrmfeature-card">
            <h3 className="hrmfeature-title">Employee Management</h3>
            <p className="hrmfeature-subtitle">
              Centralized employee information
            </p>
            <div className="hrmimage-placeholder2"></div>
            <p className="hrmfeature-description">
              Store and manage all employee information in one secure location.
              Track employment history, personal details, documents, and
              performance metrics.
            </p>
            <ul className="hrmfeature-list">
              <li>✔ Employee profiles and records</li>
              <li>✔ Document management</li>
              <li>✔ Custom fields and categories</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="hrmfeature-card">
            <h3 className="hrmfeature-title">Analytics & Reporting</h3>
            <p className="hrmfeature-subtitle">Data-driven HR decisions</p>
            <div className="hrmimage-placeholder3"></div>
            <p className="hrmfeature-description">
              Generate comprehensive reports on attendance, performance, and
              other key metrics. Visualize trends and make informed decisions
              with our powerful analytics tools.
            </p>
            <ul className="hrmfeature-list">
              <li>✔ Customizable dashboards</li>
              <li>✔ Exportable reports</li>
              <li>✔ Trend analysis</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="hrmbottom-section">
          <div className="hrmimage-placeholder large"></div>
          <div className="hrmbottom-content">
            <h3 className="hrmfeature-title">Advanced Attendance Tracking</h3>
            <p className="hrmfeature-description">
              Our HRMSM attendance system provides comprehensive tracking of
              employee attendance, capturing when employees arrive and leave
              work. All information is securely stored and easily accessible.
            </p>
            <ul className="hrmfeature-list">
              <li>
                <strong>Real-time Tracking:</strong> Monitor clock-in and
                clock-out times as they happen with our real-time attendance
                system.
              </li>
              <li>
                <strong>Complete History:</strong> Access the complete
                attendance history of any employee with detailed timestamps and
                records.
              </li>
              <li>
                <strong>Analytical Insights:</strong> Generate reports on
                attendance patterns, punctuality, and work hours to optimize
                workforce management.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="impact-wrapper">
        {/* CTA Section */}
        <div className="cta-section">
          <h2 className="cta-heading">Ready to Experience HRMSM?</h2>
          <p className="cta-text">
            Our HRMSM solution provides everything you need to manage your
            workforce efficiently, from attendance tracking to comprehensive
            employee management.
          </p>
          <div className="cta-buttons">
            <a href="https://hrms-ten-eta.vercel.app/">
              <button className="demo-btn">Visit site</button>
            </a>
          </div>
        </div>
      </div>
      <style>
        {`
        
  /* Header Section */
  .hrheader-section {
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    padding: 60px;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 60px; */
    background: linear-gradient(to bottom right, #cff2f9, #e6d4f9);
  }

  .demo-btn{
  padding: 12px 24px;
  color: white;
  font-size: 17px;
  border: none;
  border-radius: 6px;
  background-color:rgb(26, 138, 243);
  }
  
  .hrheader-content {
    max-width: 600px;
    text-align: right;
  }
  
  .hrtag {
    display: inline-block;
    background-color: #0084d6;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 10px;
  }

  








  /* Challenges Section */
  .cychallenges-section {
    /* padding: 40px 1px; */
    padding-top: 40px;
    padding-bottom: 0px;
    text-align: center;
        width: 100%;

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










  
  .cta-section {
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
  

    .hero-section {
    /* background-color: #0c7ef0; */
    padding: 150px 20px;
    /* background-color: red; */
    margin-top: 70px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 10px;
  }

  

   .cybtn-green{
  background-color: #0084d6;
  color: white;
  padding: 12px 25px;
  font-size: 16px;
  border: none;
  position: relative;
  z-index: 2;
  }
  
  .hero-description {
    font-size: 18px;
    color: #ffffff;
  }
  
  .hrheader-content h1 {
    font-size: 36px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .hrhighlight {
    color: #00a0d6;
  }
  
  .hrheader-content p {
    font-size: 16px;
    margin: 20px 0;
    color: #444;
  }
  
  .hrbook-button {
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
  
  .hrbook-button:hover {
    background-color: #0009b1;
  }
  
  .hrrrheader-image {
    width: 500px;
    height: 350px;
    /* background-color: #e0e0e0; */
    background-image: url("https://cdn.pixabay.com/photo/2018/05/06/10/12/handshake-3378254_640.jpg");
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






  /* next part */
  .hrmkey-features-container {
    padding-top: 10px;
    font-family: Arial, sans-serif;
    /* background-color: #f9f9f9; */
    position: relative;
    z-index: 2;
        backdrop-filter: blur(6px);

  }
  
  .hrmsection-title {
    text-align: center;
    font-size: 30px;
    color: white;
    margin: 0;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  


  
  .hrmfeatures-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  
  .hrmfeature-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 300px;
    padding: 1rem;
    box-shadow: 0 0 8px rgba(0,0,0,0.05);
    position: relative;
  }
  
  .hrmfeature-card.featured {
    border-color: #1d4ed8;
    box-shadow: 0 0 12px rgba(29, 78, 216, 0.2);
  }
  
  .hrmbadge {
    background: #1d4ed8;
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    font-size: 12px;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  
  .hrmfeature-title {
    font-size: 18px;
    margin: 0.5rem 0;
    font-weight: bold;
  }
  
  .hrmfeature-subtitle {
    color: #666;
    font-size: 14px;
    margin-bottom: 0.5rem;
  }
  
  .hrmimage-placeholder1 {
    height: 150px;
    background-image: url("https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_640.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 6px;
  }

  .hrmimage-placeholder2 {
    height: 150px;
    background-image: url("https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_640.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 6px;
  }

  .hrmimage-placeholder3 {
    height: 150px;
    display: flex;
    background-image: url("https://cdn.pixabay.com/photo/2017/10/17/14/10/financial-2860753_640.jpg");
    background-position: center;
    background-size: cover;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 6px;
  }
  
  .hrmimage-placeholder.large {
    height: 250px;
    width: 100%;
    background-image: url("https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_640.jpg");
    background-position: center;
    background-size: cover;
  }
  
  .hrmfeature-description {
    font-size: 14px;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .hrmfeature-list {
    list-style: none;
    padding: 0;
  }
  
  .hrmfeature-list li {
    margin-bottom: 0.5rem;
    font-size: 14px;
  }
  
  .hrmbottom-section {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    position: relative;
    z-index: 2;
    background: #eaf1fb;
    padding: 2rem;
    /* border-radius: 10px; */
  }
  
  .hrmbottom-content {
    flex: 1;
    min-width: 250px;
  }
        `}
      </style>
    </>
  );
}

export default Hrms;
