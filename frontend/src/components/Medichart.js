import React from 'react';
import { Heart, Activity, Users, Star} from 'lucide-react';
// import './Medichart.css';
import Navbar from './Navbar';

const Medichart = () => {
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
        <h1 className="hero-title">MediChart Healthcare Solutions</h1>
        <p className="hero-description">
        Revolutionizing healthcare management with innovative digital solutions that connect patients, doctors, and healthcare providers seamlessly.
        </p>
        <div className="mchero-buttons">
          <a href="https://www.medichart.qrblack.com">
            <button className="cybtn-green">Get Started</button>
          </a>
        </div>
      </section>

      


















      <section className="cychallenges-section">
            <div className="cychallenges-header">
              <h2>MediChart keeps all your meds together.
              </h2>
              <p>
              Simplify your medication routine with MediChart. Add health conditions, enter prescribed medicines once, and mark your daily doses with just a tap. Your full medication history—organized and accessible at any time.

              </p>
            </div>

            <div className="cyfeatures-grid">
              {[
                {
                  title: "Description Management",
                  desc: "Add medicines once based on your doctor's advice",
                  icon: "💊 ",
                },
                {
                  title: "Duration Setup",
                  desc: "Set how many days each medicine needs to be taken",
                  icon: "📅 ",
                },
                {
                  title: "Daily Tracking",
                  desc: "Check off medicines as you take them—no need to retype",
                  icon: "✅ ",
                },
                {
                  title: " Disease Tracking",
                  desc: " Log ongoing health conditions with ease",
                  icon: "🩺",
                },
                {
                  title: "Central Dashboard",
                  desc: "View your entire medication plan at a glance",
                  icon: "🧾 ",
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


















    <div className="medichart">
      <div className="caaontainer">
        {/* Header Section */}
        {/* <div className="headereer">
          <h2>
            MediChart
            <span> Healthcare Solutions</span>
          </h2>
          <p>
            Revolutionizing healthcare management with innovative digital solutions that connect patients, doctors, and healthcare providers seamlessly.
          </p>
        </div> */}

        {/* Main Feature Section */}
        <div className="mcmain-feature">
          <div className="video-caaontainer">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="MediChart Dashboard" 
            />
            <div className="mcvideo-overlay" />
            {/* <button className="play-button">
              <PlayCircle />
            </button> */}
          </div>
          <div className="mcfeature-content">
            <h3>Comprehensive Healthcare Management Platform</h3>
            <p>
              MediChart provides a complete suite of tools for healthcare professionals and patients, featuring intuitive dashboards, real-time patient monitoring, and secure communication channels.
            </p>
            <div className="mcfeature-icons">
              <div className="mcicon-item">
                <div className="mcicon-bg">
                  <Heart />
                </div>
                <span>Patient Care</span>
              </div>
              <div className="mcicon-item">
                <div className="mcicon-bg">
                  <Activity />
                </div>
                <span>Real-time Monitoring</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mcstats-grid">
          <div className="mcstat-card">
            <Users />
            <h4>10,000+</h4>
            <p>Active Users</p>
          </div>
          <div className="mcstat-card">
            <Heart />
            <h4>95%</h4>
            <p>Patient Satisfaction</p>
          </div>
          <div className="mcstat-card">
            <Star />
            <h4>4.9/5</h4>
            <p>Average Rating</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mcfeatures-grid">
          <div className="mcfeature-card">
            <img 
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Electronic Health Records" 
            />
            <h3>Electronic Health Records</h3>
            <p>
              Secure and easily accessible digital health records that streamline patient care and improve healthcare delivery.
            </p>
          </div>
          <div className="mcfeature-card">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Appointment Scheduling" 
            />
            <h3>Smart Scheduling</h3>
            <p>
              Intelligent appointment scheduling system with automated reminders and calendar integration.
            </p>
          </div>
          <div className="mcfeature-card">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Telemedicine" 
            />
            <h3>Telemedicine Portal</h3>
            <p>
              Virtual consultations and remote patient monitoring for convenient healthcare access.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mcctaa-section">
          <h3>Here you can Visit Our Site</h3>
          {/* <p>
            Join thousands of healthcare professionals who have already elevated their practice with MediChart's innovative solutions.
          </p> */}
          <a href="https://www.medichart.qrblack.com"><button className="mccta-button">
            view
          </button>
          </a>
        </div>
      </div>
    </div>
    <style>
      {`
      .medichart {
    background: linear-gradient(to bottom right, #cff9eb, #e4f9d4);
    padding: 5rem 0;
    position: relative;
    z-index: 2;
  }

  .cybtn-green{
 background-color: #0084d6;
  color: white;
  padding: 12px 25px;
  font-size: 16px;
  cursor: pointer;  
  border: none;
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

 .mchero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
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
























  
  .caaontainer {
    /* max-width: 1600px; */
    
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .headereer {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .headereer h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }
  
  .headereer h2 span {
    color: #2563eb;
  }
  
  .headereer p {
    font-size: 1.25rem;
    color: #4b5563;
    max-width: 48rem;
    margin: 0 auto;
  }
  
  .mcmain-feature {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5rem;
    padding: 2rem;
    align-items: center;
    margin-bottom: 5rem;
  }
  
  @media (min-width: 768px) {
    .mcmain-feature {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .video-caaontainer {
    position: relative;
    /* border-radius: 1rem; */
    overflow: hidden;
    /* box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); */
  }
  
  .video-caaontainer img {
    width: 80%;
    height: 80%;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
  
  .mcvideo-overlay {
    position: absolute;
    inset: 0;
    /* background: linear-gradient(to top right, rgba(37, 99, 235, 0.2), transparent); */
  }
  
  /* .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .play-button:hover {
    background: #fff;
  }
  
  .play-button svg {
    width: 2rem;
    height: 2rem;
    color: #2563eb;
  }
   */

  .mcfeature-content h3 {
    font-size: 1.875rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
  }
  
  .mcfeature-content p {
    color: #4b5563;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  .mcfeature-icons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .mcicon-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .mcicon-bg {
    background: #dbeafe;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  
  .mcicon-bg svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #2563eb;
  }
  
  .mcstats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 5rem;
  }
  
  @media (min-width: 768px) {
    .mcstats-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .mcstat-card {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .mcstat-card:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  .mcstat-card svg {
    width: 3rem;
    height: 3rem;
    color: #2563eb;
    margin-bottom: 1rem;
  }
  
  .mcstat-card h4 {
    font-size: 2.25rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-top: 10px;
    margin-bottom: 0.5rem;
  }
  
  .mcstat-card p {
    color: #4b5563;
  }
  
  .mcfeatures-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 5rem;
  }
  
  @media (min-width: 768px) {
    .mcfeatures-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .mcfeatures-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .mcfeature-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .mcfeature-card:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-0.25rem);
  }
  
  .mcfeature-card img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .mcfeature-card h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 0.75rem;
  }
  
  .mcfeature-card p {
    color: #4b5563;
  }
  
  .mcctaa-section {
    background: linear-gradient(to right, #2563eb, #4f46e5);
    border-radius: 1.5rem;
    padding: 3rem;
    text-align: center;
  }
  
  .mcctaa-section h3 {
    font-size: 1.875rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1.5rem;
  }
  
  .mcctaa-section p {
    color: #bfdbfe;
    max-width: 32rem;
    margin: 0 auto 2rem;
  }
  
  .mccta-button {
    background: white;
    color: #2563eb;
    padding: 1rem 2rem;
    border-radius: 9999px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .mccta-button:hover {
    background: #f8fafc;
  }`}
    </style>
    </>
  );
};

export default Medichart;