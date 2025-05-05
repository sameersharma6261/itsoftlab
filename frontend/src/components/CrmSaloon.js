import React from "react";
import Navbar from "./Navbar";
import { useState } from 'react';

function TestimonialCard({ name, role, content, image }) {
  // : {
  //   name: string,
  //   role: string,
  //   content: string,
  //   image: string,
  // }
  return (
    <div className="intestimonial-card">
      <div className="intestimonial-header">
        {/* <img src={image} alt={name} className="intestimonial-image" /> */}
        <div>
          <h4 className="intestimonial-name">{name}</h4>
          <p className="intestimonial-role">{role}</p>
        </div>
      </div>
      <p className="intestimonial-content">&ldquo;{content}&rdquo;</p>
    </div>
  );
}
function CrmSaloon() {
  const [activeTab, setActiveTab] = useState('messaging');

  const contentMap = {
    customer: {
      title: 'Comprehensive Customer Profiles',
      description: 'Our CRM system allows you to create detailed customer profiles with all essential information:',
      points: [
        'Contact details',
        'Service history',
        'Preferences',
        'Appointment records',
        'Payment history'
      ]
    },
    billing: {
      title: 'Efficient Billing System',
      description: "Generate professional bills instantly and manage your salon's finances with ease:",
      points: [
        'Quick bill generation',
        'Service itemization',
        'Tax calculation',
        'Payment tracking',
        'Financial reporting'
      ]
    },
    messaging: {
      title: 'Smart Communication Tools',
      description: 'Keep your customers informed and engaged with our messaging features:',
      points: [
        'Bulk SMS campaigns',
        'Personalized messages',
        'Appointment reminders',
        'Special offers & promotions',
        'Feedback collection'
      ]
    }
  };

  const { title, description, points } = contentMap[activeTab];

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
      {/* Hero Section */}
      <section className="hero">
        <div className="containerrr">
          <div className="text-center">
            <h1 className="hero-title">Customer Relationship Management System FOR Salon</h1>
            <p className="hero-subtitle">
            This is a powerful tool to manage customers, billing, offers, and marketing, all from one platform. Here's a complete overview including features, technology, benefits, monetization, and future upgrades.
            </p>
          </div>
        </div>
      </section>

      <section className="cychallenges-section">
        <div className="cychallenges-header">
          <h2>What Problems Does the Salon CRM Solve? (With Real-World Solutions)</h2>
          <p>
          Previously, salon owners used notebooks or registers to note customer names, contact numbers, and the services they took. Over time, these records became messy, easy to lose, and impossible to analyze.
          </p>
        </div>

        <div className="cyfeatures-grid">
          {[
            {
              title: " Customer Management",
              desc: "Easily store and access customer details, service history, and visit records in one place. No more messy registers or lost data.",
              icon: "💼 ",
            },
            {
              title: "Automated Messaging",
              desc: "Send offers, reminders, and birthday wishes directly to customers via SMS or WhatsApp. Stay connected without any manual effort.",
              icon: "📲",
            },
            {
              title: "Quick Billing System",
              desc: "Generate accurate bills in seconds with automatic tax, discount, and invoice creation. Say goodbye to calculation errors.",
              icon: "📊 ",
            },
            {
              title: "Business Analytics",
              desc: "Track daily income, best-selling services, and top customers. Make smart business decisions with real-time data insights.",
              icon: "🧾 ",
            },
            {
              title: "Offer & Campaign Control",
              desc: "Create and send promotional offers to specific customer groups. Increase walk-ins and re-engage inactive clients with one click.",
              icon: "🎯 ",
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

      <div className="order-easy-wrapper">
        <div className="oecontainer">
          {/* Header Section */}
          <div className="oeheader-section">
            <div className="oetext-content">
              <span className="oebadge"> Your Salon CRM</span>
              <h1>
                CRM<span className="oehighlight"> Salon</span>
              </h1>
              <p className="oesubtitle">
             A powerful tool to manage customers, billing, offers, and marketing, all from one platform.
              </p>
              <a href="https://crmhub.netlify.app/">
                <button className="oelearn-more">Learn More</button>
              </a>
            </div>
            <div className="oeimage-placeholder">
              <span></span>
            </div>
          </div>



          {/* How It Works Section */}
          <div className="oehow-it-works">
            <h3>How CRM Salon Works</h3>
            <div className="oesteps">
              <div className="oestep">
                <div className="oeicon">👥</div>
                <h4>Customer Entry & Service Selection</h4>
                <p>
                Customer details are added when they visit the salon. Services taken are selected and saved for billing and future records.
                </p>
              </div>
              <div className="oestep">
                <div className="oeicon">🧾</div>
                <h4>Bill Generation & Data Storage</h4>
                <p>
                The system automatically calculates the total bill, applies taxes/discounts, and stores all visit data securely.
                </p>
              </div>
              <div className="oestep">
                <div className="oeicon">📢</div>
                <h4>Follow-up & Marketing</h4>
                <p>
                Based on visit history, the system sends reminders, offers, and birthday messages via SMS or WhatsApp—bringing customers back regularly.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="how-it-works">
      <h2>How It Works</h2>
      <div className="tabs">
        <button
          className={activeTab === 'customer' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('customer')}
        >
          Customer Management
        </button>
        <button
          className={activeTab === 'billing' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('billing')}
        >
          Billing System
        </button>
        <button
          className={activeTab === 'messaging' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('messaging')}
        >
          Messaging
        </button>
      </div>

      <div className="content-area">
        <div className="text-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
            {points.map((point, index) => (
              <li key={index}>✔ {point}</li>
            ))}
          </ul>
        </div>
        <div className="image-placeholder">
          <p></p>
        </div>
      </div>
    </div>



    <div className="inmb-20">
          <h2 className="insection-title2">What Our Client's Say</h2>
          <div className="ingrid5 grid-cols-3">
            <TestimonialCard
              name="Anjali Deshmukh"
              role=" Founder, Blush & Bloom Salon, Pune"
              content="Anjali struggled with managing customer appointments and keeping track of their preferences. With ITSoftlab’s Salon CRM, she automated appointment bookings, stored style histories, and ran birthday offers via SMS — leading to a 60% increase in repeat clients."
              image="https://cdn.pixabay.com/photo/2017/05/27/19/29/profile-2349288_640.jpg"
            />
            <TestimonialCard
              name="Ritika Jain"
              role="Owner, The Beauty Room, Indore"
              content="Ritika wanted to grow her salon without compromising service quality. The CRM helped her monitor staff performance, track billings, and analyze customer trends. Using built-in marketing tools, she launched festive packages that boosted revenue by 40% during Diwali."
              image="https://cdn.pixabay.com/photo/2023/10/25/08/52/man-8339887_640.jpg"
            />
            <TestimonialCard
              name="Emily Rodriguez"
              role="Property Owner"
              content="This invoice system has completely transformed how we handle our billing. It's intuitive, powerful, and has saved us countless hours every month."
              image="https://cdn.pixabay.com/photo/2019/12/17/09/42/female-4701255_640.jpg"
            />
          </div>
        </div>



        <div className="incta-box">
        <h2 className="incta-title">Ready to Experience CRM Saloon?</h2>
        <p className="incta-text">
          Preview our beautiful CRM working and see how easy it is to
          customize them
        </p>
        <a href="https://crmhub.netlify.app/">
          <button className="incta-button">Visit site</button>
        </a>
      </div>
      <style>
        {`
      /* Challenges Section */
      .cychallenges-section {
        /* padding: 40px 1px; */
            width: 100%;

        padding-top: 40px;
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





    .order-easy-wrapper {
    padding: 40px 20px;
    background: linear-gradient(to bottom right, #cff2f9, #e6d4f9);
  }
  
  .oecontainer {
    max-width: 1600px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
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
  
  .hero-description {
    font-size: 18px;
    color: #ffffff;
  }

  /* Header Section */
  .oeheader-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    padding: 50px;
  }
  
  .oetext-content {
    flex: 1 1 500px;
    padding-bottom: 10px;
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
  }
  
  .oebadge {
    display: inline-block;
    background-color: #00a6ff;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  h1 {
    font-size: 48px;
    margin: 10px 0;
  }
  
  .oehighlight {
    color: #00a6ff;
  }
  
  .oesubtitle {
    font-size: 20px;
    margin-bottom: 20px;
    max-width: 450px;
  }
  
  .oelearn-more {
    padding: 10px 20px;
    background-color: #0095ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .oeimage-placeholder {
    width: 550px;
    height: 350px;
    /* background-color: #eee; */
    background-image: url("https://cdn.pixabay.com/photo/2014/12/15/14/00/beauty-saloon-569111_640.jpg");
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  /* Revolutionizing Section */
  .oerevolution-section {
    text-align: center;
    margin-bottom: 60px;
  }
  
  .oerevolution-section h2 {
    font-size: 26px;
    margin-bottom: 15px;
  }
  
  .oerevolution-section p {
    max-width: 700px;
    margin: 10px auto;
    font-size: 15px;
    line-height: 1.6;
  }
  
  /* How It Works Section */
  .oehow-it-works {
    text-align: center;
  }
  
  .oehow-it-works h3 {
    font-size: 24px;
    margin-bottom: 30px;
  }
  
  .oesteps {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
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
  
  .oestep {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    flex: 1 1 30%;
    padding: 20px;
    text-align: center;
  }
  
  .oeicon {
    font-size: 28px;
    margin-bottom: 10px;
  }
  
  .oestep h4 {
    font-size: 18px;
    margin-bottom: 8px;
  }
  
  .oestep p {
    font-size: 14px;
    color: #555;
  }












.how-it-works {
  padding: 40px;
  background-color: white;
  position: relative;
  z-index: 2;
  font-family: Arial, sans-serif;
}

.how-it-works h2 {
  text-align: center;
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #ddd;
}

.tab {
  background: none;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: 0.3s ease;
}

.tab:hover {
  background-color: #f0f0f0;
}

.tab.active {
  font-weight: bold;
  border-bottom: 3px solid #000;
  background-color: #f9f9f9;
}

.content-area {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
}

.text-content {
  flex: 1;
  min-width: 300px;
}

.text-content h3 {
  margin-bottom: 10px;
}

.text-content ul {
  list-style: none;
  padding-left: 0;
}

.text-content li {
  margin-bottom: 10px;
  color: green;
  font-size: 16px;
}

.image-placeholder {
  flex: 1;
  min-width: 300px;
  height: 250px;
  // background-color: #eee;
  background-image: url("https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_640.png");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  border-radius: 10px;
  font-size: 16px;
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
  padding: 2rem;
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
  color: rgb(164, 164, 164);
}

.intestimonial-content {
  color: var(--gray-700);
  color: rgb(0, 0, 0);
  font-style: italic;
}





.incta-box {
  background-color: #ffffff;
  text-align: center;
  padding: 40px 20px;
  position: relative;
  z-index: 2;
  /* border-radius: 10px; */
  /* margin-top: 40px; */
}

.incta-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}

.incta-text {
  font-size: 16px;
  margin-bottom: 20px;
}

.incta-button {
  background-color: rgb(64, 149, 252);
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
}

.incta-button:hover {
  background-color: rgb(0, 67, 139);
}


      
  
  `}
      </style>
    </>
  );
}

export default CrmSaloon;
