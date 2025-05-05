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
function CrmLaundry() {
  const [activeTab, setActiveTab] = useState('messaging');

  const contentMap = {
    customer: {
      title: 'Comprehensive Customer Profiles',
      description: 'Our CRM system allows you to create detailed customer profiles with all essential information:',
      points: [
        'Contact details',
        'Service preferences',
        'Fabric sensitivities',
        'Order history',
        'Payment records'
      ]
    },
    billing: {
      title: 'Efficient Billing System',
      description: "Track every garment through each stage of the cleaning process:",
      points: [
        'Barcode/QR code tracking',
        'Service type selection',
        'Stain and damage notation',
        'Processing status updates',
        'Quality check verification'
      ]
    },
    messaging: {
      title: 'Smart Delivery Management',
      description: 'Streamline your pickup and delivery operations:',
      points: [
        'Route optimization',
        'Delivery scheduling',
        'Real-time status updates',
        'Proof of delivery',
        'Customer notifications'
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
            <h1 className="hero-title">CRM Laundry System </h1>
            <p className="hero-subtitle">
            Managing a laundry business involves tracking customer orders, handling delivery dates, calculating weight-based pricing, managing payments, and keeping customers informed. Doing all this manually is time-consuming, error-prone, and unorganized.
            </p>
          </div>
        </div>
      </section>

      <section className="cychallenges-section">
        <div className="cychallenges-header">
          <h2>CRM Laundry System</h2>
          <p>
          Most laundry shops write down customer names, clothes count, weight, and delivery dates in notebooks, which leads to confusion or lost data.
          </p>
        </div>

        <div className="cyfeatures-grid">
          {[
            {
              title: "Digital Order Management",
              desc: "No more paper registers or lost details. CRM stores every order with customer info, service type, and delivery date—secure and organized.",
              icon: "📘 ",
            },
            {
              title: "Instant Billing System",
              desc: "CRM automatically calculates cost by item or weight, applies discounts/taxes, and generates a clear, professional bill within seconds.",
              icon: "🧾 ",
            },
            {
              title: "Auto SMS Alerts",
              desc: " Send instant updates to customers when their clothes are received, ready, or delayed. Also notify them about new offers or discounts.",
              icon: "📲 ",
            },
            {
              title: "Business Insights & Reports",
              desc: "Get reports on income, best-selling services, and top customers—helping you make smart decisions and grow your laundry business.",
              icon: "📊 ",
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
              <span className="oebadge">for CRM Laundry</span>
              <h1>
                CRM<span className="oehighlight"> Laundry</span>
              </h1>
              <p className="oesubtitle">
              Owners don’t know which service is doing well or which customers are frequent.
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
            <h3>How CRM Laundry Works</h3>
            <div className="oesteps">
              <div className="oestep">
                <div className="oeicon">🧾</div>
                <h4>Order Booking & Entry</h4>
                <p>
                Customer name, phone, items, quantity, service type, and delivery date are entered into the system.
                </p>
              </div>
              <div className="oestep">
                <div className="oeicon">💰</div>
                <h4>Bill Generation & Order Tracking</h4>
                <p>
                The system calculates cost (based on weight or per item), applies tax or discounts, and generates a bill. It also stores the order for tracking.
                </p>
              </div>
              <div className="oestep">
                <div className="oeicon">📲</div>
                <h4>SMS Alerts & Customer Engagement</h4>
                <p>
                Customers automatically receive SMS/WhatsApp messages about order status, delivery reminders, or offers—keeping them connected and engaged.
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
              name="Anjali Patel"
              role="Owner, SparkleWash Laundry Services"
              content="Anjali struggled with maintaining manual records for over 200 daily customer orders. After adopting the CRM Laundry System from ITSoftlab, her team automated customer tracking, weight-based pricing, and delivery alerts. She now saves 15+ hours weekly and has seen a 40% improvement in customer satisfaction."
              image="https://cdn.pixabay.com/photo/2022/05/24/06/23/indian-face-7217718_640.jpg"
            />
            <TestimonialCard
              name="Vikram Sen"
              role="Manager, UrbanCloth Laundry Hub"
              content="Before using ITSoftlab’s CRM Laundry System, Vikram dealt with missed pickups, delayed deliveries, and payment confusion. The new system centralized all order data, sent timely SMS updates to clients, and integrated digital payments. Revenue tracking became effortless, and repeat business grew by 25%."
              image="https://cdn.pixabay.com/photo/2017/01/03/01/38/man-1948310_640.jpg"
            />
          </div>
        </div>



        <div className="incta-box">
        <h2 className="incta-title">Ready to Experience CRM Laundry</h2>
        <p className="incta-text">
          Preview our beautiful CRM and see how easy it is to
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
    background-image: url("https://cdn.pixabay.com/photo/2016/11/21/16/01/clothes-1846128_640.jpg");
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
  color: rgb(255, 255, 255);
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
  color: rgb(255, 255, 255);
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

export default CrmLaundry;
