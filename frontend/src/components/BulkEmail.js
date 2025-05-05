import React from "react";
// import "./BulkEmail.css";
import {
  FaCheckCircle,
  FaRocket,
  FaGlobe,
  FaChartBar,
  FaUsers,
  FaShieldAlt,
  FaEnvelope,
} from "react-icons/fa";
import Navbar from "./Navbar";

const BulkEmail = () => {
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
            <h1 className="hero-title">Powerful Bulk Email Marketing Made Simple</h1>
            <p className="hero-description">
            Our bulk email service lets you connect with thousands of customers at once with just a few clicks. Reach your audience effectively and drive engagement like never before.
            </p>
            <div className="cyhero-buttons">
              <a href="https://bulkemailservice.netlify.app/">
                <button className="cybtn-green">Get Started</button>
              </a>
            </div>
          </section>

          

      <section className="cychallenges-section">
            <div className="cychallenges-header">
              <h2>Bulk Email: Power Up Your Promotions
              </h2>
              <p>
                
EmailEase lets you advertise smarter and reach your audience faster. Design your email with ready-to-use templates, upload your contacts, and blast out your campaign—all in one seamless workflow.

              </p>
            </div>

            <div className="cyfeatures-grid">
              {[
                {
                  title: " Mass Email Campaigns",
                  desc: "Send personalized emails to thousands of recipients",
                  icon: "📋",
                },
                {
                  title: "Targeted Mailing Lists",
                  desc: "Organize your contacts for more relevant reach.",
                  icon: "🎯 ",
                },
                {
                  title: "Drag-and-Drop Editor",
                  desc: "Create stunning emails without any coding",
                  icon: "🖼️ ",
                },
                {
                  title: "Custom Templates",
                  desc: " Design or upload your own email layout",
                  icon: "🧩 ",
                },
                {
                  title: "Real-Time Analytics",
                  desc: "Track open rates, bounce rates, and engagement",
                  icon: "📈 ",
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


        <div className="bebulk-email-container">
      <div className="betop-section">
        <div className="beleft-content">
          <h2>Send Thousands of Emails in One Go</h2>
          <p>
            Our powerful bulk email platform allows you to send personalized
            emails to thousands of recipients simultaneously. No more tedious
            copying and pasting or sending emails one by one.
          </p>
          <ul className="befeature-list">
            <li>
              <FaCheckCircle className="beicon" /> Send to unlimited recipients
              with one click
            </li>
            <li>
              <FaCheckCircle className="beicon" /> Track open rates and
              engagement metrics
            </li>
            <li>
              <FaCheckCircle className="beicon" /> Personalize each email with
              dynamic content
            </li>
            <li>
              <FaCheckCircle className="beicon" /> Schedule emails for optimal
              delivery times
            </li>
          </ul>
        </div>
        <div className="beright-image">
          <div className="beimage-placeholder">[]</div>
        </div>
      </div>

      <h3 className="besection-title">Why Choose Our Bulk Email Service?</h3>

      <div className="becard-grid">
        <Card
          icon={<FaEnvelope />}
          title="High Deliverability"
          desc="Our optimized sending infrastructure ensures your emails reach the inbox, not the spam folder."
        />
        <Card
          icon={<FaUsers />}
          title="Audience Segmentation"
          desc="Target specific groups within your audience based on demographics, behavior, or preferences."
        />
        <Card
          icon={<FaRocket />}
          title="Lightning Fast"
          desc="Send thousands of emails in minutes with our high-performance email delivery system."
        />
        <Card
          icon={<FaChartBar />}
          title="Detailed Analytics"
          desc="Track opens, clicks, and conversions to measure the success of your email campaigns."
        />
        <Card
          icon={<FaGlobe />}
          title="Global Reach"
          desc="Connect with customers worldwide with support for multiple languages and time zones."
        />
        <Card
          icon={<FaShieldAlt />}
          title="Compliance Built-in"
          desc="Stay compliant with global email regulations including GDPR, CAN-SPAM, and more."
        />
      </div>
    </div>














    <div className="bulbulk-email-container">
      <h2 className="bulsection-title">How Our Bulk Email System Works</h2>
      <div className="bulsteps">
        <div className="bulstep">
          <div className="bulstep-number">1</div>
          <h3 className="bulstep-title">Upload Your Contacts</h3>
          <p className="bulstep-desc">
            Import your contact list from CSV, Excel, or connect directly with your CRM system.
          </p>
        </div>

        <div className="bulstep">
          <div className="bulstep-number">2</div>
          <h3 className="bulstep-title">Create Your Email</h3>
          <p className="bulstep-desc">
            Design beautiful emails with our drag-and-drop editor or choose from dozens of templates.
          </p>
        </div>

        <div className="bulstep">
          <div className="bulstep-number">3</div>
          <h3 className="bulstep-title">Send & Track Results</h3>
          <p className="bulstep-desc">
            Schedule your campaign and monitor real-time analytics as your emails are delivered.
          </p>
        </div>
      </div>

      <div className="bultestimonial">
        <h3 className="bultestimonial-title">What Our Customers Say</h3>
        <p className="bultestimonial-text">
          "This bulk email service has transformed how we communicate with our customers. We've seen a 40% increase in engagement since switching to this platform. The ability to send personalized emails to thousands of people at once has been a game-changer for our business."
        </p>
        <div className="bultestimonial-author">
          <div className="bulauthor-image"></div>
          <div>
            <p className="bulauthor-name">Sarah Johnson</p>
            <p className="bulauthor-role">Marketing Director, TechCorp</p>
          </div>
        </div>
      </div>
    </div>


    <div className="incta-box">
        <h2 className="incta-title">Ready to Experience Invoice?</h2>
        <p className="incta-text">
          Preview our beautiful invoice templates and see how easy it is to
          customize them
        </p>
        <a href="https://bulkemailservice.netlify.app/">
          <button className="incta-button">Visit site</button>
        </a>
      </div>
      <style>
        {`
        .bebulk-email-container {
    padding: 40px;
    font-family: sans-serif;
    background: linear-gradient(to bottom right, #cff2f9, #e8def3);
    position: relative;
    z-index: 2;
  }

    .hero-section {
    /* background-color: #0c7ef0; */
    padding: 150px 20px;
    margin-top: 70px;
    text-align: center;
     position: relative;
    z-index: 2;
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
  
  .betop-section {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
  }
  
  .beleft-content {
    flex: 1;
    min-width: 300px;
  }
  
  .beleft-content h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  
  .beleft-content p {
    margin-bottom: 20px;
    color: #555;
  }
  
  .befeature-list {
    list-style: none;
    padding: 0;
  }
  
  .befeature-list li {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    color: #398ae6;
    font-weight: 500;
  }
  
  .beicon {
    margin-right: 8px;
  }
  
  .beright-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;
  }
  
  .beimage-placeholder {
    width: 100%;
    max-width: 500px;
    height: 300px;
    /* background-color: #f0f0f0; */
    background-image: url("https://cdn.pixabay.com/photo/2019/06/19/07/13/email-4284157_640.png");
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  .besection-title {
    text-align: center;
    margin: 50px 0 20px;
    font-size: 28px;
    font-weight: bold;
  }
  
  .becard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
  
  .becard {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    gap: 16px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    transition: transform 0.3s ease;
  }
  
  .behover {
    transform: translateY(-5px);
  }
  
  .becard-icon {
    color: #39afe6;
    font-size: 24px;
    flex-shrink: 0;
  }
  
  .becard-content h4 {
    margin: 0 0 8px;
    font-size: 18px;
  }
  
  .becard-content p {
    color: #666;
    margin: 0;
  }








  .bulbulk-email-container {
    /* background-color: #f9f9fb; */
    /* padding: 40px 0px; */
    font-family: sans-serif;
    position: relative;
    backdrop-filter: blur(6px);
    z-index: 2;
    text-align: center;
    /* min-height: 100vh; */
  }
  
  .bulsection-title {
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin-bottom: 50px;
  }
  
  .bulsteps {
    display: flex;
    flex-direction: column;
    gap: 60px;
    /* margin-bottom: 60px; */
  }
  
  .bulstep {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .bulstep-number {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #4494ef;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .bulstep-title {
    font-size: 18px;
    color: white;
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .bulstep-desc {
    color: #f8f8f8;
    font-size: 14px;
    max-width: 250px;
  }
  
  .bultestimonial {
    background: linear-gradient(to bottom right, #cff2f9, #e8def3);
    padding: 30px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
    /* max-width: 600px; */
  }
  
  .bultestimonial-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .bultestimonial-text {
    font-style: italic;
    color: #444;
    margin-bottom: 20px;
  }
  
  .bultestimonial-author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .bulauthor-image {
    width: 32px;
    height: 32px;
    /* background-color: #ccc; */
    background-image: url("https://cdn.pixabay.com/photo/2022/11/23/06/11/girl-7611238_640.jpg");
    border-radius: 50%;
    background-position: center;
    background-size: cover;
  }
  
  .bulauthor-name {
    font-weight: bold;
    font-size: 14px;
  }
  
  .bulauthor-role {
    font-size: 12px;
    color: #222222;
  }
  
  /* Responsive */
  @media (min-width: 768px) {
    .bulsteps {
      flex-direction: row;
      justify-content: center;
    }
  
    .bulstep-desc {
      max-width: 200px;
    }
  }
        `}
      </style>
    </>
  );
};

const Card = ({ icon, title, desc }) => (
  <div className="becard">
    <div className="becard-icon">{icon}</div>
    <div className="becard-content">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
  
);

export default BulkEmail;
