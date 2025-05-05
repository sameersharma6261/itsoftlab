import React from "react";
// import "./Realitify.css";
import {
  Building2,
  Users,
  MessageSquare,
  // FileText,
  // BarChart3,
  Shield,
  Clock,
  // Banknote,
  Globe2,
  CheckCircle2,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import Navbar from "./Navbar";

function TestimonialCard({ name, role, content, image }) 

{
  return (
    <div className="retestimonial-card">
      <div className="retestimonial-header">
        {/* <img src={image} alt={name} className="retestimonial-image" /> */}
        <div>
          <h4 className="retestimonial-name">{name}</h4>
          <p className="retestimonial-role">{role}</p>
        </div>
      </div>
      <p className="retestimonial-content">&ldquo;{content}&rdquo;</p>
    </div>
  );
}

function StatCard({ icon: Icon, value, label }) // : {
//   icon: React.ElementType,
//   value: string,
//   label: string,
// }
{
  return (
    <div className="restat-card">
      <Icon className="restat-icon" />
      <h3 className="restat-value">{value}</h3>
      <p className="restat-label">{label}</p>
    </div>
  );
}

function Realitify() {
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
        <h1 className="hero-title">Modern Property Management Solution</h1>
        <p className="hero-description">
          Transform your property business with our comprehensive CRM platform.
          Streamline operations, enhance communication, and drive growth.
        </p>
        <div className="cyhero-buttons">
          <a href="https://realestate-ochre-eight.vercel.app/">
            <button className="cybtn-green">Get Started</button>
          </a>
        </div>
      </section>

      
      <section className="cychallenges-section">
            <div className="cychallenges-header">
              <h2>Realtify: The Complete Real Estate Management Hub
              </h2>
              <p>
              With Realtify, real estate agencies can streamline property management, employee assignments, and client interactions. Easily manage and track properties, assign tasks to employees, and keep an eye on all transactions, providing greater transparency and control over your operations.
              </p>
            </div>

            <div className="cyfeatures-grid">
              {[
                {
                  title: "Property Management",
                  desc: "Add, edit, and manage properties easily",
                  icon: "🏠 ",
                },
                {
                  title: "Employee Management",
                  desc: " Add and assign employees to specific tasks",
                  icon: "👥 ",
                },
                {
                  title: "Property-Employee Assignment",
                  desc: "Track which employee is managing which property",
                  icon: "📊 ",
                },
                {
                  title: "Client Interaction Tracking",
                  desc: "Monitor all interactions between employees and clients",
                  icon: "📝 ",
                },
                {
                  title: "Real-Time Updates",
                  desc: "Get live status updates on property deals and employee activities",
                  icon: "📅 ",
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


      {/* About Section */}
      <div className="remax-w-4xl mb-20">
        <h2 className="resection-title">Transforming Property Management</h2>
        <p className="retext-center2">
          Our CRM platform revolutionizes how property transactions are managed
          and recorded. We've created a comprehensive solution that eliminates
          the challenges of handling written records when dealing with a large
          user base. By digitizing the entire process, we make property
          management efficient, secure, and scalable.
        </p>
        <div className="regrid2 grid-cols-3">
          <div className="retext-center">
            <Clock className="restat-icon" />
            <h3 className="refeature-title">24/7 Availability</h3>
            <p className="refeature-description">
              Access your dashboard anytime, anywhere
            </p>
          </div>
          <div className="retext-center">
            <Shield className="restat-icon" />
            <h3 className="refeature-title">Secure Platform</h3>
            <p className="refeature-description">
              Enterprise-grade security for your data
            </p>
          </div>
          <div className="retext-center">
            <TrendingUp className="restat-icon" />
            <h3 className="refeature-title">Growth Focused</h3>
            <p className="refeature-description">
              Scale your business efficiently
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="remb-20">
        <h2 className="resection-title2">What Our Client's Say</h2>
        <div className="regrid5 grid-cols-3">
          <TestimonialCard
            name="Priya Nair"
            role="Property Manager, EliteSpaces Realty"
            content="Managing multiple tenants across properties was overwhelming for Priya. With ITSoftlab’s CRM, she now handles lease renewals, rent tracking, and maintenance requests from a single dashboard. Her response time improved drastically, and tenant satisfaction rose by 50%."
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <TestimonialCard
            name="Nikhil Verma"
            role="Founder, SmartLiving Realty"
            content="Nikhil needed a scalable solution to handle growing customer queries, maintenance schedules, and rent payments. ITSoftlab’s CRM provided centralized control with real-time updates and easy access for his clients. It also helped him generate detailed financial reports with a click"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <TestimonialCard
            name="Zara Khan"
            role="Operations Head, UrbanNest Rentals"
            content="Zara’s team struggled with scattered communication and lost paperwork. After adopting the Modern Property CRM, she streamlined client onboarding, auto-generated agreements, and improved follow-ups with built-in reminders. The system helped them scale from 20 to 70 managed units within 6 months."
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"
          />
        </div>
      </div>

      <div className="remin-h-screen">
        {/* Stats Section */}

        <div className="mmaaiinn">
          <div className="recontainer stats-section">
            <div className="regrid1 grid-cols-4">
              <StatCard
                icon={Building2}
                value="1000+"
                label="Properties Listed"
              />
              <StatCard icon={Users} value="500+" label="Active Users" />
              <StatCard
                icon={HeartHandshake}
                value="2,000+"
                label="Successful Deals"
              />
              <StatCard icon={Globe2} value="20+" label="Cities Covered" />
            </div>
          </div>

          <div className="reprocess-section">
            <h2 className="resection-title">How It Works</h2>
            <div className="regrid4 grid-cols-4">
              <div className="reprocess-step">
                <div className="reprocess-icon-wrapper">
                  <Users className="reprocess-icon" />
                </div>
                <h3 className="refeature-title">1. Register</h3>
                <p className="refeature-description">
                  Create your account and verify your identity
                </p>
              </div>
              <div className="reprocess-step">
                <div className="reprocess-icon-wrapper">
                  <Building2 className="reprocess-icon" />
                </div>
                <h3 className="refeature-title">2. List Property</h3>
                <p className="refeature-description">
                  Add your properties with detailed information
                </p>
              </div>
              <div className="reprocess-step">
                <div className="reprocess-icon-wrapper">
                  <MessageSquare className="reprocess-icon" />
                </div>
                <h3 className="refeature-title">3. Connect</h3>
                <p className="refeature-description">
                  Communicate with interested parties
                </p>
              </div>
              <div className="reprocess-step">
                <div className="reprocess-icon-wrapper">
                  <CheckCircle2 className="reprocess-icon" />
                </div>
                <h3 className="refeature-title">4. Close Deals</h3>
                <p className="refeature-description">
                  Finalize transactions securely
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-box">
        <h2 className="cta-title">Ready to Experience Realitify?</h2>
        <p className="cta-text">
          Join our premium members and enjoy exclusive access to reserved spaces
          at mall counters across the country.
        </p>
        <a href="https://realestate-ochre-eight.vercel.app/">
          <button className="cta-button">Visit site</button>
        </a>
      </div>
      <style>{`
  
  /* Layout */
  .recontainer {
    /* max-width: 1280px; */
    margin: 0 auto;
    padding: 4rem;
    /* background: linear-gradient(to bottom right, #cff2f9, #f2e7fd); */
    /* padding: 0 1rem; */
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

  .recontainer2 {
    /* max-width: 1280px; */
    margin: 0 auto;
    /* background-color: white; */
    /* padding: 0 1rem; */
  }
  
  .remin-h-screen {
    /* min-height: 100vh; */
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

   .cybtn-green{
  background-color: #0084d6;
  color: white;
  padding: 12px 25px;
  font-size: 16px;
  border: none;
  position: relative;
  z-index: 2;
  }
  
  /* Grid System */
  .regrid1 {
    display: grid;
    justify-content: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 1rem;
    max-width: 1200px;       
    margin: 0 auto;           
  }
  .regrid2 {
    display: grid;
    justify-content: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 1rem;
    max-width: 1200px;       
    margin: 0 auto;           
  }
  .regrid3 {
    display: grid;
    justify-content: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 1rem;
    max-width: 1400px;       
    margin: 0 auto;           
  }
  .regrid4 {
    display: grid;
    justify-content: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 1rem;
    max-width: 1200px;       
    margin: 0 auto;           
  }
 
  .regrid6 {
    display: grid;
    justify-content: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 1rem;
    max-width: 1200px;       
    margin: 0 auto;           
  }

  
  /* Hero Section */
  .rehero {
    position: relative;
    height: 600px;
    overflow: hidden;
  }
  
  .rehero-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .rehero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.7));
  }
  
  .rehero-content {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .rehero-text {
    max-width: 42rem;
    color: white;
  }
  
  .rehero-title {
    font-size: 3.75rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  
  .rehero-description {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  /* Buttons */
  .rebutton-group {
    display: flex;
    gap: 1rem;
  }
  
  .rebutton-primary {
    background-color: var(--blue-600);
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: background-color 0.2s;
  }
  
  .rebutton-primary:hover {
    background-color: #1d4ed8;
  }
  
  .rebutton-secondary {
    background-color: rgba(255,255,255,0.1);
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    backdrop-filter: blur(4px);
    transition: background-color 0.2s;
  }
  
  .rebutton-secondary:hover {
    background-color: rgba(255,255,255,0.2);
  }

  .mmaaiinn{
    background: linear-gradient(to bottom right, #cff2f9, #f2e7fd);
  }
  
  /* Stats Section */
  .restats-section {
    margin-top: -4rem;
    position: relative;
    z-index: 10;
  }
  
  .restat-card {
    background: white;
    max-width: 200px;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    
    text-align: center;
  }
  
  .restat-icon {
    width: 2rem;
    height: 2rem;
    color: #1d5ed8;
    color: var(--blue-600);
    margin: 0 auto 1rem;
  }
  
  .restat-value {
    font-size: 1.875rem;
    font-weight: bold;
    color: var(--gray-800);
    margin-bottom: 0.5rem;
  }
  
  .restat-label {
    color: var(--gray-600);
  }
  
  /* Feature Cards */
  .refeature-card {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: box-shadow 0.2s;
  }
  
  .refeature-card:hover {
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  .refeature-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .refeature-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--blue-600);
    margin-right: 0.75rem;
  }
  
  .refeature-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-800);
  }
  
  .refeature-description {
    color: var(--gray-600);
  }
  
  /* Testimonial Cards */
  .retestimonial-card {
    background: rgba(255, 255, 255, 0.365);
    backdrop-filter: blur(4px);
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  
  .retestimonial-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .retestimonial-image {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
  }
  
  .retestimonial-name {
    font-weight: 600;
    margin: 0;
    color: var(--gray-800);
    color: rgb(70, 70, 70);
  }
  
  .retestimonial-role {
    margin: 0;
    color: var(--gray-600);
    color: rgb(221, 221, 221);
  }
  
  .retestimonial-content {
    color: var(--gray-700);
    color: white;
    font-style: italic;
  }
  
  /* Process Section */
  .reprocess-section {
    /* background: white; */
    /* border-radius: 1rem; */
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    padding: 3rem;
    /* margin-bottom: 2rem; */
  }
  
  .reprocess-step {
    text-align: center;
  }
  
  .reprocess-icon-wrapper {
    width: 4rem;
    height: 4rem;
    background-color: #dbeafe;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
  }
  
  .reprocess-icon {
    width: 2rem;
    height: 2rem;
    color: var(--blue-600);
  }
  
  /* Section Titles */
  .resection-title {
    font-size: 2.25rem;
    font-weight: bold;
    padding-top: 30px;
    margin: 0;
    color: rgb(73, 165, 251);
    text-align: center;
    margin-bottom: 3rem;
  }

  
  /* Contact Section */
  .recontact-section {
    background: white;
    /* border-radius: 1rem; */
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    padding: 1rem;
  }
  
  .recontact-item {
    text-align: center;
  }
  
  .recontact-icon {
    width: 2rem;
    height: 2rem;
    color: var(--blue-600);
    /* margin: 0 auto 1rem; */
  }
  
  .recontact-title {
    font-weight: 600;
    /* margin-bottom: 0.5rem; */
  }
  
  .recontact-info {
    color: var(--gray-600);
  }
  

  
  .retext-center {
    text-align: center;
    background-color: rgb(211, 211, 211);
  }

  .retext-center2 {
    text-align: center;
  }
  
  
  .remax-w-4xl {
    background: linear-gradient(to bottom right, #cff2f9, #f2e7fd);
    margin-left: auto;
    padding-bottom: 30px;
    position: relative;
    z-index: 2;
    margin-right: auto;
  }











  
  .remb-20 {
    position: relative;
    z-index: 2;
        backdrop-filter: blur(6px);

    padding-bottom: 30px;
  }


  .resection-title2 {
    font-size: 2.25rem;
    font-weight: bold;
    color: white;
    padding-top: 30px;
    margin: 0;
    text-align: center;
    margin-bottom: 3rem;
  }

  .regrid5 {
    display: grid;
    justify-content: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 1rem;
    max-width: 1200px;       
    margin: 0 auto;           
  }


    
  @media (min-width: 768px) {
    .regrid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    .regrid-cols-3 {
      regrid-template-columns: repeat(3, 1fr);
    }
    .grid-cols-4 {
      regrid-template-columns: repeat(4, 1fr);
    }
  }
        `}</style>
    </>
  );
}

export default Realitify;
