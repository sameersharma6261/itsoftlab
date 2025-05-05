import React, { useState } from "react";
// import "./Cylinder.css";
import Navbar from "./Navbar";

const tabs = [
  { label: "Inventory Management", key: "inventory" },
  { label: "Distribution", key: "distribution" },
  { label: "Mobile App", key: "mobile" },
  { label: "Reports & Analytics", key: "analytics" },
];

const contentData = {
  inventory: {
    heading: "Effortless Inventory Tracking",
    description:
      "Managing cylinder inventory in godowns has never been easier. Our system allows you to:",
    points: [
      "Track every cylinder with unique identification",
      "Record entries and exits with timestamp and handler information",
      "Maintain accurate counts across multiple godowns and locations",
      "Get alerts for low stock or discrepancies in inventory",
    ],
  },
  distribution: {
    heading: "Streamlined Distribution Process",
    description:
      "Keep track of your entire distribution network with precision:",
    points: [
      "Record which cylinders are sent to which customers or locations",
      "Track delivery status and confirmation in real-time",
      "Manage returns and exchanges efficiently",
      "Optimize routes and delivery schedules",
    ],
  },
  mobile: {
    heading: "Powerful Mobile Application",
    description:
      "Manage your cylinder business from anywhere with our feature-rich mobile app:",
    points: [
      "Scan cylinder barcodes for instant tracking and updates",
      "Process transactions and update inventory on the go",
      "Receive real-time notifications about important events",
      "Access dashboards and reports from anywhere",
    ],
  },
  analytics: {
    heading: "Comprehensive Analytics",
    description:
      "Gain valuable insights into your business with detailed reports:",
    points: [
      "View inventory levels across all locations at a glance",
      "Analyze distribution patterns and customer preferences",
      "Track financial metrics including revenue and outstanding payments",
      "Generate custom reports for specific business needs",
    ],
  },
};

const Cylinder = () => {
  const [activeTab, setActiveTab] = useState("inventory");
  const content = contentData[activeTab];
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
        <h1 className="hero-title">Cylinder Management Solutions</h1>
        <p className="hero-description">
          Simplify your cylinder inventory tracking, streamline warehouse
          operations, and manage your entire supply chain from a single
          platform.
        </p>
        <div className="cyhero-buttons">
          <a href="https://www.cylinder.ltd">
            <button className="cybtn-green">Get Started</button>
          </a>
        </div>
      </section>

      <div className="cy">
        <div className="cylinder-container">
          {/* Hero Section */}

          {/* Challenges Section */}
          <section className="cychallenges-section">
            <div className="cychallenges-header">
              <h2>Cylinder: End-to-End Gas Supply Management</h2>
              <p>
              Cylinder connects every part of your gas distribution system—from plant to customer. Manage your supply chain, track transactions, monitor inventory, handle billing, and manage employees—all in one place. Optimize your operations and improve efficiency with a single platform.

              </p>
            </div>

            <div className="cyfeatures-grid">
              {[
                {
                  title: "End-to-End Supply Chain Management ",
                  desc: "Track cylinders from the gas plant to customers",
                  icon: "🏭 ",
                },
                {
                  title: "Employee Management ",
                  desc: "Manage employee roles, performance, and schedules",
                  icon: "💼 ",
                },
                {
                  title: "Inventory Tracking",
                  desc: "Real-time updates on cylinder stock levels",
                  icon: "📦 ",
                },
                {
                  title: "Dealer & Customer Management ",
                  desc: "Manage dealers and customer orders efficiently",
                  icon: "🚚 ",
                },
                {
                  title: " Reporting & Analytics",
                  desc: " Access detailed reports on all operations.",
                  icon: "📊",
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
        </div>

        <div className="cyycontainer">
          <h2>How Our System Works</h2>
          <p>
            Our comprehensive cylinder management solution streamlines every
            aspect of your operations.
          </p>

          <div className="cyytabs">
            {tabs.map((tab) => (
              <div
                key={tab.key}
                className={`cyytab ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </div>
            ))}
          </div>

          <div className="cyycontent">
            <div className="cyytext-section">
              <h3>{content.heading}</h3>
              <p>{content.description}</p>
              <ul>
                {content.points.map((point, index) => (
                  <li key={index}>✅ {point}</li>
                ))}
              </ul>
            </div>
            <div className="cyyimage-placeholder"></div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <h2 className="cysection-title">What Our Customers Say</h2>
      <div className="cytestimonials">
        <div className="cytestimonial">
          <p className="cytestimonial-name">Rajesh Kumar</p>
          <p className="cytestimonial-role">Gas Distributor, Delhi</p>
          <p className="cytestimonial-text">
            "This system has transformed how we manage our cylinder inventory.
            What used to take hours of manual work is now done in minutes. The
            mobile app is particularly useful for our delivery team.".”
          </p>
        </div>
        <div className="cytestimonial">
          <p className="cytestimonial-name">Rahul Maleshiya</p>
          <p className="cytestimonial-role">Operations Manager, Mumbai</p>
          <p className="cytestimonial-text">
            "The reporting features have given us insights we never had before.
            We've been able to optimize our distribution routes and save
            significantly on operational costs."
          </p>
        </div>
        <div className="cytestimonial">
          <p className="cytestimonial-name">Suresh Patel</p>
          <p className="cytestimonial-role">Business Owner, Ahmedabad</p>
          <p className="cytestimonial-text">
            "Managing multiple godowns was a nightmare before implementing this
            system. Now we have complete visibility across all locations, and
            reconciliation is no longer a headache."
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cycta-box">
        <h2 className="cycta-title">
          Ready to Experience Cylinder Management??
        </h2>
        <p className="cycta-text">
          Join hundreds of businesses that have simplified their operations and
          improved efficiency with our system.
        </p>
        <a href="https://www.cylinder.ltd">
          <button className="cycta-button">Visit site</button>
        </a>
      </div>
      <style>
        {`.cylinder-container {
    font-family: Arial, sans-serif;
    position: relative;
    z-index: 2
  }
  
  /* Hero Section */
  .cyhero-section {
    background: #4b5563;
    color: white;
    padding: 60px 20px;
    text-align: center;
  }
  
  .cyhero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .cy{
    background: linear-gradient(to bottom right, #cff2f9, #e6d4f9);
  }
  
  .cyhero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .cyhero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .cybtn-green {
    background-color: rgb(64, 149, 252);
    border: none;
    color: white;
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .cybtn-outline {
    background: transparent;
    color: white;
    padding: 12px 24px;
    font-size: 1rem;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
  }

   .hero-section {
    /* background-color: #0c7ef0; */
    padding: 150px 20px;
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
  .hero-section{
    position: relative;
    z-index: 2;
  }
  
  /* Challenges Section */
  .cychallenges-section {
    /* padding: 40px 1px; */
    padding-top: 40px;
        width: 100%;

    padding-bottom: 0px;
    text-align: center;
    /* background-color: white; */
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













/* next part//////////////////////////////// */
  .cyycontainer {
    padding: 40px 20px;
    /* max-width: 1200px; */
    position: relative;
    z-index: 2;
    /* background-color: white; */
    margin: 0 auto;
    text-align: center;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: #555;
  }
  
  .cyytabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
    gap: 15px;
  }
  
  .cyytab {
    padding: 12px 20px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 25px;
    transition: background-color 0.3s, color 0.3s;
    background-color: #f0f0f0;
    color: #333;
    font-weight: 500;
  }
  
  .cyytab.active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }
  
  .cyycontent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: left;
    gap: 30px;
    margin-top: 30px;
  }
  
  .cyytext-section {
    flex: 1 1 300px;
    max-width: 600px;
  }
  
  .cyyimage-placeholder {
    flex: 1 1 300px;
    max-width: 400px;
    height: 250px;
    /* background-color: #eaeaea; */
    background-image: url("https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_640.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #999;
    border-radius: 12px;
  }
  
  ul {
    list-style: none;
    padding-left: 0;
  }
  
  li {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #333;
    line-height: 1.6;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .cyycontent {
      flex-direction: column;
    }
  
    .cyytabs {
      flex-direction: column;
      align-items: center;
    }
  
    .cyytab {
      width: 80%;
      text-align: center;
    }
  
    h2 {
      font-size: 2rem;
    }
  
    p, li {
      font-size: 1rem;
    }
  
    .cyyimage-placeholder {
      height: 200px;
      width: 100%;

      font-size: 1.5rem;
    }
  }
  





  .cysection-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 20px;
    color: white;
    padding-top: 20px;
  }

  
  .cytestimonials {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    position: relative;
    z-index: 2;
    backdrop-filter: blur(6px);
    margin-top: 20px;
    justify-content: center;
  }
  
  .cytestimonial {
    background-color: #ffffffaa;
    backdrop-filter: blur(4px);
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 300px;
    flex: 1;
  }
  
  .cytestimonial-text {
    font-style: italic;
    font-size: 16px;
    color: white;
    margin-bottom: 10px;
  }
  
  .cytestimonial-name {
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    color: rgb(56, 116, 255);
  }
  
  .cytestimonial-role {
    color: gray;
    font-size: 14px;
    text-align: center;
  }

  
  .cycta-box {
    background-color: #ffffff;
    text-align: center;
    padding: 40px 20px;
    border-radius: 10px;
    margin-top: 40px;
    position: relative;
    z-index: 2;
  }
  
  .cycta-title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .cycta-text {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .cycta-button {
    background-color: rgb(64, 149, 252);
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .cycta-button:hover {
    background-color: rgb(0, 67, 139);
  }
  `}
      </style>
    </>
  );
};

export default Cylinder;
