import React from "react";
// import "./Ordereasy.css";
import Navbar from "./Navbar";

const Ordereasy = () => {
  const features = [
    {
      title: "Multi-vendor Ordering",
      desc: "Order from multiple food vendors in a single transaction. Combine items from different restaurants without having to wait in multiple lines.",
      image:
        "https://cdn.pixabay.com/photo/2016/10/27/10/27/regulation-1773920_640.png",
    },
    {
      title: "Real-time Order Tracking",
      desc: "Track your order status in real-time and receive notifications when your food is ready for pickup, allowing you to continue shopping without worry.",
      image:
        "https://cdn.pixabay.com/photo/2014/07/31/23/01/clock-407101_640.jpg",
    },
    {
      title: "Customizable Orders",
      desc: "Easily customize your food orders with special instructions, dietary preferences, and portion sizes to get exactly what you want.",
      image:
        "https://cdn.pixabay.com/photo/2023/01/13/13/52/man-7716120_640.png",
    },
    {
      title: "Loyalty Program",
      desc: "Earn points with every order and redeem them for discounts, free items, or special offers from participating vendors in the mall.",
      image:
        "https://cdn.pixabay.com/photo/2015/01/12/03/25/keyboard-597007_640.jpg",
    },
  ];

  const benefits = [
    "Save time by avoiding long food court lines",
    "Order from multiple restaurants in one transaction",
    "Customize orders to meet dietary needs",
    "Schedule orders in advance for specific pickup times",
    "Pay securely through multiple payment options",
    "Earn rewards with our integrated loyalty program",
  ];
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
        <h1 className="hero-title">Revolutionizing Mall Food Courts</h1>
        <p className="hero-description">
          OrderEasy is a cutting-edge food ordering system designed specifically
          for busy mall environments. Our platform connects hungry shoppers with
          all food vendors in the mall through a simple, intuitive interface.
          With OrderEasy, customers can browse menus.
        </p>
        <div className="cyhero-buttons">
          <a href="https://ordereasy.qrblack.com/">
            <button className="cybtn-green">Get Started</button>
          </a>
        </div>
      </section>
      <section className="cychallenges-section">
        <div className="cychallenges-header">
          <h2>OrderEasy: The Fast Track to Great Food</h2>
          <p>
            OrderEasy makes dining faster and smoother. Just scan the QR code,
            pick your restaurant, browse the menu, and place your order—all from
            your phone. No more waiting in lines to order. Simple, smart, and
            queue-free.
          </p>
        </div>

        <div className="cyfeatures-grid">
          {[
            {
              title: "QR Code Integration",
              desc: "Scan at the table or entrance to access restaurant profiles",
              icon: "🔍 ",
            },
            {
              title: "Dynamic Menus",
              desc: "Browse dish categories, prices, and descriptions.",
              icon: "📖 ",
            },
            {
              title: "Easy Order Placement",
              desc: " Select items, customize your order, and confirm",
              icon: "🛍️ ",
            },
            {
              title: "Digital Receipts",
              desc: "Get instant confirmation and order tracking",
              icon: "🧾 ",
            },
            {
              title: "Contactless Experience",
              desc: "Fully digital for faster, safer service",
              icon: "👥 ",
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
              <span className="oebadge">Mall Food Ordering</span>
              <h1>
                Order<span className="oehighlight">Easy</span>
              </h1>
              <p className="oesubtitle">
                Simplifying food ordering in malls with our innovative digital
                solution. No more waiting in long lines!
              </p>
              <a href="https://ordereasy.qrblack.com/">
                <button className="oelearn-more">Learn More</button>
              </a>
            </div>
            <div className="oeimage-placeholder">
              <span></span>
            </div>
          </div>

          {/* Revolutionizing Section */}
          {/* <div className="oerevolution-section">
            <h2>Revolutionizing Mall Food Courts</h2>
            <p>
              OrderEasy is a cutting-edge food ordering system designed
              specifically for busy mall environments. Our platform connects
              hungry shoppers with all food vendors in the mall through a
              simple, intuitive interface.
            </p>
            <p>
              With OrderEasy, customers can browse menus, place orders, and
              pay—all from their phone or our convenient kiosks—eliminating the
              need to stand in multiple lines or juggle cash while carrying
              shopping bags.
            </p>
          </div> */}

          {/* How It Works Section */}
          <div className="oehow-it-works">
            <h3>How OrderEasy Works</h3>
            <div className="oesteps">
              <div className="oestep">
                <div className="oeicon">🍴</div>
                <h4>Browse & Select</h4>
                <p>
                  Browse menus from all food court vendors in one place and
                  select your items.
                </p>
              </div>
              <div className="oestep">
                <div className="oeicon">📱</div>
                <h4>Order & Pay</h4>
                <p>
                  Place your order and pay securely through our platform—no
                  lines, no waiting.
                </p>
              </div>
              <div className="oestep">
                <div className="oeicon">👍</div>
                <h4>Pick Up & Enjoy</h4>
                <p>
                  Receive a notification when your food is ready and pick it up
                  from the designated area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second part */}
      <div className="mall-container">
        <h2 className="mall-heading">Key Features</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img
                src={feature.image}
                alt={feature.title}
                className="feature-image"
              />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="benefits-section">
          <div className="benefits-text">
            <h3 className="benefits-heading">Benefits for Mall Visitors</h3>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  ✔ {benefit}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_640.jpg"
            alt="Mall Benefits"
            className="benefits-image"
          />
        </div>
      </div>

      {/* third part */}
      <div className="impact-wrapper">
        {/* Impact Stats Section */}
        <div className="impact-section">
          <h2 className="impact-heading">OrderEasy Impact</h2>
          <div className="impact-stats">
            <div className="stat">
              <p className="stat-number">50+</p>
              <p className="stat-label">Mall Locations</p>
            </div>
            <div className="stat">
              <p className="stat-number">500+</p>
              <p className="stat-label">Food Vendors</p>
            </div>
            <div className="stat">
              <p className="stat-number">15 min</p>
              <p className="stat-label">Average Time Saved</p>
            </div>
            <div className="stat">
              <p className="stat-number">1M+</p>
              <p className="stat-label">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="ctaxx-section">
          <h2 className="cta-heading">Ready to Experience OrderEasy?</h2>
          <p className="cta-text">
            Whether you're a mall operator looking to enhance customer
            experience or a food vendor wanting to streamline operations,
            OrderEasy has solutions for you.
          </p>
          <div className="cta-buttons">
            <a href="https://ordereasy.qrblack.com/">
              <button className="demo-btn">Visit site</button>
            </a>
          </div>
        </div>
      </div>
      <style>
        {`
        
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

  .cybtn-green{
  padding: 10px 20px;
    background-color: #0095ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
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
    background-image: url("https://cdn.pixabay.com/photo/2024/11/07/09/27/ai-generated-9180295_640.png");
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

























  .mall-container {
    padding: 40px;
    position: relative;
    z-index: 2;
    background-color: #fff7f0;
    min-height: 100vh;
    font-family: sans-serif;
  }
  
  .mall-heading {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 32px;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 64px;
  }
  
  @media (min-width: 768px) {
    .features-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .feature-card {
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .feature-image {
    height: 120px;
    background-color: #e0e0e0;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    margin-bottom: 12px;
  }
  
  .feature-title {
    font-weight: 600;
    margin-bottom: 6px;
  }
  
  .feature-desc {
    font-size: 14px;
    color: #555;
  }

  .benefits-text{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .benefits-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  @media (min-width: 768px) {
    .benefits-section {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .benefits-heading {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
  }
  
  .benefits-list {
    list-style: none;
    padding-left: 0;
  }
  
  .benefit-item {
    font-size: 14px;
    color: #444;
    margin-bottom: 10px;
  }
  
  .benefit-item::before {
    content: '✔ ';
    color: orange;
    margin-right: 6px;
  }
  
  .benefits-image {
    height: 100%;
    width: 100%;
    background-color: #e0e0e0;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
  }

























  .impact-wrapper {
    width: 100%;
    position: relative;
    z-index: 2;
    /* padding: 40px 20px; */
    padding-top: 20px;
    background-color: #fff;
    display: flex;
  justify-content: center;
      flex-direction: column;
    align-items: center;
  }
  
  /* Impact Section */
  .impact-section {
    background-color: #fff3e6;
    border-radius: 8px;
    /* padding: 30px 20px; */
    width: 100%;
    max-width: 1400px;
    text-align: center;
    margin-bottom: 40px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  
  .impact-heading {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .impact-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
  }
  
  .stat {
    min-width: 120px;
  }
  
  .stat-number {
    color: #009dff;
    font-size: 24px;
    font-weight: bold;
  }
  
  .stat-label {
    font-size: 14px;
    margin-top: 5px;
  }
  
  /* CTA Section */
  .ctaxx-section {
    background-color: #fff;
    border-radius: 8px;
    padding: 30px 0px;
    width: 100%;
    max-width: 1400px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  
  .cta-heading {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .cta-text {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  
  .demo-btn {
    background-color: #0088ff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .demo-btn:hover {
    background-color: #0077e6;
  }
  
  .sales-btn {
    background-color: #6a97f7;
    color: #fffcfa;
    border: 1px solid #008cff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .sales-btn:hover {
    background-color: #fff7f0;
  }`}
      </style>
    </>
  );
};

export default Ordereasy;
