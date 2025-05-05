import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";

const Mediscan = () => {
  const [activeTab, setActiveTab] = useState("patients");

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
        <h1 className="hero-title">Mediscan one way Solutions</h1>
        <p className="hero-description">
        MediScan revolutionizes the patient experience. Scan a QR at the hospital, get your number, and wait comfortably until your turn. No phone?.{" "}
        </p>
        <div className="cyhero-buttons">
          <a href="https://www.mediscan.qrblack.com">
            <button className="cybtn-green">Get Started</button>
          </a>
        </div>
      </section>

      
      <section className="cychallenges-section">
            <div className="cychallenges-header">
              <h2>Queue smarter, record better—with MediScan</h2>
              <p>
              MediScan revolutionizes the patient experience. Scan a QR at the hospital, get your number, and wait comfortably until your turn. No phone? No problem—get your token from the front desk. We also keep your appointment and billing history safely stored for easy access.
              </p>
            </div>

            <div className="cyfeatures-grid">
              {[
                {
                  title: "Mobile Application",
                  desc: "Manage your entire inventory on the go with our powerful mobile application for Android and iOS.",
                  icon: "📱",
                },
                {
                  title: "Real-time Analytics",
                  desc: "Get instant insights into your inventory levels, distribution patterns, and business performance.",
                  icon: "📈",
                },
                {
                  title: "QR Token Scan",
                  desc: "Instantly get a token number by scanning a QR code at the clinic",
                  icon: "📲 ",
                },
                {
                  title: " Live Queue Updates",
                  desc: "Know exactly when your turn is approaching",
                  icon: "⏳ ",
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
      <div className="msm">

      <div className="mscontainer">
        {/* Header Section */}
        <div className="msheader-section">
          <div className="msheader-text">
            <h1>
              Skip the Wait with <span className="mshighlight">Mediscan</span>
            </h1>
            <p>
              Our innovative solution reduces long queues at medical facilities
              by allowing patients to scan, book slots, and receive timely care
              without the endless waiting.
            </p>
            <div className="msbutton-group">
              <a href="https://www.mediscan.qrblack.com">
                <button className="msbtn-primary">See Here →</button>
              </a>
              {/* <button className="msbtn-secondary">Learn More</button> */}
            </div>
          </div>
          <div className="msimage-placeholder">
            <span></span>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mshow-it-works">
          <h2>How Mediscan Works</h2>
          <div className="mscards">
            <div className="mscard">
              <div className="msicon">📱</div>
              <h3>Scan QR Code</h3>
              <p>
                Patients scan the QR code at the medical facility using their
                smartphone camera.
              </p>
            </div>
            <div className="mscard">
              <div className="msicon">📅</div>
              <h3>Book Your Slot</h3>
              <p>
                Choose an available time slot that works for you and complete a
                quick registration.
              </p>
            </div>
            <div className="mscard">
              <div className="msicon">⏰</div>
              <h3>Get Notified</h3>
              <p>
                Receive real-time notifications as your appointment approaches,
                eliminating unnecessary waiting.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mkredcarpet-container">
        {/* WHY CHOOSE */}
        <section className="mksection">
          <h2 className="mksection-heading">Why Choose Mediscan</h2>
          <div className="mkfeatures-grid">
            <Feature
              title="Reduced Waiting Time"
              desc="Patients spend less time in crowded waiting rooms, minimizing exposure and frustration."
            />
            <Feature
              title="Better Resource Management"
              desc="Medical facilities can optimize staff allocation and improve patient flow."
            />
            <Feature
              title="Enhanced Patient Experience"
              desc="A streamlined process leads to higher patient satisfaction and better reviews."
            />
            <Feature
              title="Data-Driven Insights"
              desc="Collect valuable data on patient flow to continuously improve service delivery."
            />
          </div>
        </section>

        {/* FEATURES */}
        <section className="mksection">
          <h2 className="mksection-heading">Mediscan Features</h2>
          <div className="mktab-buttons">
            <button
              className={activeTab === "patients" ? "active" : ""}
              onClick={() => setActiveTab("patients")}
            >
              For Patients
            </button>
            <button
              className={activeTab === "facilities" ? "active" : ""}
              onClick={() => setActiveTab("facilities")}
            >
              For Medical Facilities
            </button>
          </div>

          <div className="mktab-content">
            {activeTab === "patients" ? (
              <PatientFeatures />
            ) : (
              <FacilityFeatures />
            )}
          </div>
        </section>
      </div>

      <div className="impact-wrapper">
        {/* CTA Section */}
        <div className="ctacc-section">
          <h2 className="cta-heading">Ready to Experience OrderEasy?</h2>
          <p className="cta-text">
            Join hundreds of medical facilities that have already improved their
            patient flow and satisfaction with OrderEasy.
          </p>
          <div className="cta-buttons">
            <a href="https://www.mediscan.qrblack.com">
              <button className="demo-btn">Visit site</button>
            </a>
          </div>
        </div>
      </div>
      </div>
      <style>
        {`
        
.mscontainer {
    /* max-width: 1200px; */
    
    margin: 0 auto;
    padding: 40px 60px;
    position: relative;
    z-index: 2;
  }

  .demo-btn{
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background-color: #0085ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  }

  
  /* Challenges Section */
  .cychallenges-section {
    /* padding: 40px 1px; */
    padding-top: 40px;
        width: 100%;

    padding-bottom: 0px;
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


  .hero-section {
    /* background-color: #0c7ef0; */
    padding: 150px 20px;
    margin-top: 70px;
    text-align: center;
     position: relative;
    z-index: 2;
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

  .msm{
    background: linear-gradient(to bottom right, #cff2f9, #e6d4f9);
    position: relative;
    z-index: 2;
  }
  
  /* Header Section */
  .msheader-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    margin-bottom: 80px;
  }
  
  .msheader-text {
    flex: 1;
  }
  
  .msheader-text h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .mshighlight {
    color: #43d0ff;
  }
  
  .msheader-text p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: #374151;
  }
  
  .msbutton-group button {
    padding: 12px 20px;
    margin-right: 15px;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    transition: background-color 0.3s;
  }
  
  .msbtn-primary {
    background-color: #43d0ff;
    color: white;
  }
  
  .msbtn-primary:hover {
    background-color: #43d0ff;
  }
  
  .msbtn-secondary {
    background-color: white;
    border: 2px solid #cbd5e1;
    color: #1f2937;
  }
  
  .msbtn-secondary:hover {
    background-color: #f1f5f9;
  }
  
  .msimage-placeholder {
    flex: 1;
    /* background-color: #e2e8f0; */
    background-image: url("https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_640.jpg");
    background-position: center;
    background-size: cover;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    border-radius: 8px;
    font-size: 1rem;
    border: 2px dashed #cbd5e1;
  }
  
  /* How It Works Section */
  .mshow-it-works h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px;
    font-weight: bold;
  }
  
  .mscards {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .mscard {
    background-color: white;
    padding: 25px;
    width: 300px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s;
    text-align: left;
  }
  
  .mscard:hover {
    transform: translateY(-5px);
  }
  
  .msicon {
    background-color: #d9f99d;
    color: #0f5132;
    font-size: 1.8rem;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
  .mscard h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .mscard p {
    font-size: 0.95rem;
    color: #4b5563;
  }



























  
  .mkredcarpet-container {
    font-family: Arial, sans-serif;
    padding: 40px 20px;
    color: #222;
    position: relative;
    z-index: 2;
  }
  
  .mksection {
    margin-bottom: 60px;
  }

  .ctacc-section {
    background-color: #fff;
    border-radius: 8px;
    padding: 30px 0px;
    width: 100%;
    // max-width: 1400px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  
  .mksection-heading {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .mkfeatures-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .mkfeature-box {
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }
  
  .mkfeature-box .checkmark {
    font-size: 20px;
    color: #00c896;
    margin-top: 5px;
  }
  
  .mkfeature-box h4 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  
  .mkfeature-box p {
    font-size: 14px;
    color: #666;
    margin: 4px 0 0;
  }
  
  .mktab-buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  
  .mktab-buttons button {
    padding: 10px 20px;
    margin: 0;
    border: 1px solid #ddd;
    background: #f1f1f1;
    color: #555;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .mktab-buttons button:first-child {
    border-radius: 6px 0 0 6px;
  }
  
  .mktab-buttons button:last-child {
    border-radius: 0 6px 6px 0;
  }
  
  .mktab-buttons button.active {
    background-color: white;
    font-weight: bold;
    color: #000;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .mkpatient-grid {
    display: flex;
    padding-left: 40px;
    padding-right: 40px;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-between;
    align-items: center;
  }
  
  .mkpatient-info {
    flex: 1;
    min-width: 280px;
  }
  
  .mkpatient-info h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .mkpatient-info ul {
    list-style: none;
    padding: 0;
  }
  
  .mkpatient-info li {
    margin-bottom: 12px;
    font-size: 14px;
    color: #222;
  }
  
  .mkimage-placeholder {
    /* background-color: #eee; */
    background-image: url("https://cdn.pixabay.com/photo/2015/12/04/14/49/hand-1076597_640.jpg");
    background-position: center;
    background-size: cover;
    height: 220px;
    flex: 1;
    min-width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaa;
    font-size: 14px;
    border-radius: 10px;
  }
        `}
      </style>
    </>
  );
};

const Feature = ({ title, desc }) => (
  <div className="mkfeature-box">
    <div className="mkcheckmark">✔</div>
    <div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

const PatientFeatures = () => (
  <div className="mkpatient-grid">
    <div className="mkpatient-info">
      <h3>Patient-Friendly Experience</h3>
      <ul>
        <li>✔ Easy slot booking with just a few taps</li>
        <li>✔ Real-time updates on waiting times</li>
        <li>✔ Digital health records access</li>
        <li>✔ Appointment reminders and notifications</li>
      </ul>
    </div>
    <div className="mkimage-placeholder">[ ]</div>
  </div>
);

const FacilityFeatures = () => (
  <div style={{ padding: "40px", textAlign: "center", color: "#888" }}>
    Coming soon...
  </div>
);

export default Mediscan;
