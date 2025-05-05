import React from 'react';
import { QrCode, Share2, Database, Layers } from 'lucide-react';
import Navbar from './Navbar';
import { useState } from 'react';


interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps = [
    {
      number: 1,
      title: 'Select Product',
      description: 'Choose any product from our extensive catalog to share',
    },
    {
      number: 2,
      title: 'Generate QR Code',
      description: 'QrBlack instantly creates a unique QR code for your selected product',
    },
    {
      number: 3,
      title: 'Share & Track',
      description: 'Share the QR code and track engagement with detailed analytics',
    },
  ];

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="qbfeature">
      <div className="qbfeature-icon">{icon}</div>
      <div className="qbfeature-content">
        <h3 className="qbfeature-title">{title}</h3>
        <p className="qbfeature-description">{description}</p>
      </div>
    </div>
  );
}


interface SolutionCardProps {
    title: string;
    description: string;
    link: string;
  }
  
  const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, link }) => {
    return (
      <div className="qqrsolution-card">
        <div className="qqrsolution-icon">
          <QrCode size={24} />
        </div>
        <h3 className="qqrsolution-title">{title}</h3>
        <p className="qqrsolution-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="qqrshare-via-qr">
          Visit Here
        </a>
      </div>
    );
  };
  




const QrCodeSection = () => {
  return (
    <div className="qbqr-section">
      <div className="qbcheck-mark">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
          <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      
      <div className="qbqr-container">
        {/* <div className="qbqr-code">
          <div className="qbqr-pattern">
            <div className="qbqr-square top-left"></div>
            <div className="qbqr-square top-right"></div>
            <div className="qbqr-square bottom-left"></div>
            <div className="qbqr-dots"></div>
          </div>
          <p className="qbqr-text">Scan to explore QrBlack</p>
        </div> */}
      </div>
      
      <div className="qbshare-button">
        <Share2 size={20} />
      </div>
    </div>
  );
}

const Hero = () => {
  const features = [
    {
      icon: <QrCode size={24} />,
      title: 'Easy Sharing',
      description: 'Share any product instantly with a simple QR code scan'
    },
    {
      icon: <Database size={24} />,
      title: 'Centralized Management',
      description: 'Manage all your products from a single dashboard'
    },
    {
      icon: <Layers size={24} />,
      title: 'Seamless Integration',
      description: 'Works with all our software solutions without additional setup'
    }
  ];

  return (
    <main className="qbhero">
      <div className="qbhero-content">
        <h1>Introducing QrBlack</h1>
        <p className="qbhero-description">
          The ultimate product management and sharing platform that 
          simplifies how you showcase and distribute your software 
          solutions.
        </p>
        
        <div className="qbfeatures">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <a href="https://www.qrblack.com">
        <button className="qblearn-more-btn">
          Learn More
          <span className="qbarrow">→</span>
        </button>
        </a>
      </div>

      <QrCodeSection />
    </main>
  );
}


const SolutionsSection = () => {
    const [activeCategory, setActiveCategory] = useState('crm');
  
    const solutions = {
      crm: [
        {
          title: "Laundry CRM",
          description: "Complete management system for laundry businesses",
          link: "/"
        },
        {
          title: "Car Wash CRM",
          description: "Streamline operations for car wash services",
          link: "/"
        },
        {
          title: "Saloon CRM",
          description: "Appointment and customer management for salons",
          link: "/"
        }
      ],
      hrms: [
        {
          title: "Real Estate HRMSM",
          description: "HR management for real estate companies",
          link: "/"
        },
        {
          title: "Our Prices",
          description: "Pricing management solution",
          link: "/"
        },
        {
          title: "HRMSM Kidz",
          description: "School HRMS for educational institutions",
          link: "/"
        }
      ],
      medical: [
        {
          title: "Medi Scan",
          description: "Medical records scanning and management",
          link: "/"
        },
        {
          title: "Medi Chart",
          description: "Digital medical charts and patient records",
          link: "/"
        }
      ],
      management: [
        {
          title: "Cylinder Management",
          description: "Track and manage gas cylinders inventory",
          link: "/"
        },
        {
          title: "Water Jars Management",
          description: "Water delivery and jar tracking system",
          link: "/"
        },
        {
          title: "Invoice Generator",
          description: "Create and manage professional invoices",
          link: "/"
        },
        {
            title: "Image to Excel Convertor",
            description: "Extract data from images to Excel format",
            link: "/"
          }
      ],
      mall: [
        {
          title: "Order Easy",
          description: "Food ordering system for mall restaurants",
          link: "/"
        },
        {
          title: "Red Carpet",
          description: "Shop management for mall retail stores",
          link: "/"
        }
      ],
      other: [
        {
          title: "Bulk Email Schedular",
          description: "Schedule and send mass emails efficiently",
          link: "/"
        }
      ]
    };
  
    const categories = [
      { id: 'crm', label: 'CRM Solutions' },
      { id: 'hrms', label: 'HRMS Solutions' },
      { id: 'medical', label: 'Medical Solutions' },
      { id: 'management', label: 'Management Tools' },
      { id: 'mall', label: 'Mall Solutions' },
      { id: 'other', label: 'Other Tools' }
    ];
  
    return (
      <section className="qqrsolutions-section">
        <div className="qqrsolutions-header">
          <h2>Our Products Managed by QrBlack</h2>
          <p className="qqrsolutions-description">
            QrBlack seamlessly manages and shares all our software solutions, making it
            easier for clients to discover and access our products.
          </p>
        </div>
  
        <div className="qqrcategory-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`qqrcategory-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
  
        <div className="qqrsolutions-grid">
          {solutions[activeCategory]?.map((solution, index) => (
  <SolutionCard
    key={index}
    title={solution.title}
    description={solution.description}
    link={solution.link}
  />
))}
        </div>
      </section>
    );
  };
  


function QrBlack() {
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
              <h1 className="hero-title">QR-Black</h1>
              <p className="hero-subtitle">
                Learn more about our QR, our values, and our commitment to
                excellence.
              </p>
            </div>
          </div>
        </section>




    <div className="qbapp">
      <Hero />
    </div>





    <div className="qqqrhow-it-works-container">
      <h2 className="qqqrhow-it-works-title">How QrBlack Works</h2>
      <div className="qqqrsteps">
        {steps.map((step) => (
          <div key={step.number} className="qqqrstep">
            <div className="qqqrstep-circle">{step.number}</div>
            <h3 className="qqqrstep-title">{step.title}</h3>
            <p className="qqqrstep-description">{step.description}</p>
            
          </div>
        ))}
      </div>
    </div>






    <div className="qqrapp">
      <SolutionsSection />
    </div>




    <div className="impact-wrapper">
        {/* CTA Section */}
        <div className="cta-section">
          <h2 className="cta-heading">Ready to Streamline Your Product Sharing?</h2>
          <p className="cta-text">
          Get started with QrBlack today and revolutionize how you manage and share your software solutions.
          </p>
          <div className="cta-buttons">
            <a href="https://www.qrblack.com">
              <button className="demo-btn">Visit site</button>
            </a>
          </div>
        </div>
      </div>

    
    
    <style jsx>{`
     






     .cta-section {
        // background-color: #ffffff;
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
        color: white;
      }
      
      .cta-text {
        font-size: 16px;
        margin-bottom: 20px;
        color:white;
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
        .cta-heading{
        color: white;
        font-size: 30px;
        }
    
        .demo-btn{
  padding: 12px 24px;
  color: white;
  font-size: 17px;
  border: none;
  border-radius: 6px;
  background-color:rgb(26, 138, 243);
  }
  
      







.qbapp {
//   min-height: 100vh;
//   max-width: 1400px;
  margin: 0 auto;
  height; 100%;
  padding: 10px 24px;
  background:rgb(255, 255, 255);
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
}

a {
  text-decoration: none;
}

/* Header Styles */
.qbheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  width: 100%;
}

.qblogo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-black);
}

.qbnav ul {
  display: flex;
  list-style: none;
  gap: 32px;
}

.qbnav a {
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  transition: var(--transition);
}

.qbnav a:after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-black);
  transition: var(--transition);
}

.qbnav a:hover:after {
  width: 100%;
}

.qbauth-buttons {
  display: flex;
  gap: 16px;
}

.qblogin-btn {
  padding: 8px 16px;
  font-weight: 500;
  color: var(--primary-black);
  transition: var(--transition);
}

.qbsignup-btn {
  padding: 8px 16px;
  font-weight: 500;
  background-color: var(--primary-black);
  color: var(--primary-white);
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.qblogin-btn:hover {
  color: var(--accent-blue);
}

.qbsignup-btn:hover {
  background-color: #333333;
  transform: translateY(-2px);
}

/* Hero Styles */
.qbhero {
  display: flex;
  align-items: flex-start;
  gap: 48px;
  margin-top: 5px;
//   padding; 50px;
  position: relative;
//   background: red;
  display; flex;
//   flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.qbhero-content {
  flex: 1;
//   max-heigth; 30vh;
  padding-right: 24px;
}

h1 {
  font-size: 2.8rem;
  line-height: 1.2;
  margin-bottom: 16px;
  font-weight: 700;
}

.qbhero-description {
  font-size: 1.1rem;
  color: var(--dark-gray);
  margin-bottom: 40px;
  max-width: 480px;
  line-height: 1.6;
}

.qbfeatures {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.qblearn-more-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 2;
  background-color:rgb(71, 150, 239);
  color: white;
  padding: 12px 24px;
  font-weight: 500;
  border-radius: 5px;
  transition: var(--transition);
}

.qblearn-more-btn:hover {
  background-color: rgb(45, 131, 231);
  transform: translateY(-2px);
}

.qbarrow {
  font-size: 1.2rem;
  transition: var(--transition);
}

.qblearn-more-btn:hover .arrow {
  transform: translateX(4px);
}

/* Feature Styles */
.qbfeature {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.qbfeature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--light-gray);
  color: var(--primary-black);
  flex-shrink: 0;
  transition: var(--transition);
}

.qbfeature:hover .feature-icon {
  background-color: var(--medium-gray);
  transform: scale(1.05);
}

.qbfeature-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.qbfeature-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.qbfeature-description {
  font-size: 0.95rem;
  color: var(--dark-gray);
  line-height: 1.5;
}

/* QR Code Section Styles */
.qbqr-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 400px;
}

.qbcheck-mark {
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 3;
  background-color: white;
  border-radius: 50%;
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

.qbqr-container {
  border-radius: 16px;
  flex: 1;
  display: flex;
  align-items: center;
  background-image: url("https://cdn.pixabay.com/photo/2020/07/18/13/52/alipay-5417261_640.jpg");
  background-size: cover;
  background-position: center;
  padding: 48px;
  margin-bottom: 14px;
  position: relative;
}

.qbqr-code-container {
  justify-content: center;
  padding: 48px;
  position: relative;
}

.qbqr-code {
  background-color: white;
  border-radius: 12px;
  width: 100%;
  max-width: 220px;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-shadow: var(--box-shadow);
}

.qbqr-pattern {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qbqr-square {
  position: absolute;
  width: 24px;
  height: 24px;
  border: 3px solid black;
  background-color: transparent;
}

.qbqr-square.top-left {
  top: 0;
  left: 0;
}

.qbqr-square.top-right {
  top: 0;
  right: 0;
}

.qbqr-square.bottom-left {
  bottom: 0;
  left: 0;
}

.qbqr-dots {
  width: 70%;
  height: 70%;
  background-image: url("https://img.freepik.com/premium-photo/seamless-watercolor-polka-dot-pattern-playful-versatile-vector-pattern-scattering-handpainted-watercolor-polka-dots-variety-soft-colors-including-blush-pink-lavender_1104427-4332.jpg");
  background-size: cover;
  background-position: center;
}

.qbqr-text {
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  color; white;
  margin-top: 16px;
}

.qbshare-button {
  position: absolute;
  bottom: 24px;
  right: 24px;
//   background-color: var(--primary-white);
  background-color:rgb(255, 255, 255);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: var(--transition);
}

.qbshare-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive Styles */
@media (max-width: 992px) {
  .qbhero {
    flex-direction: column;
  }
  
  .qbhero-content {
    padding-right: 0;
  }
  
.qbqr-container {
 
//   width: 100%;
width: 80vw;
//   padding: 48px;
//   margin: auto;
}

  h1 {
    font-size: 2.4rem;
  }
  
  .qbqr-section {
    min-height: 300px;
  }
}

@media (max-width: 768px) {
  .qbapp {
    padding: 0 16px;
  }
  
  .qbnav, .auth-buttons {
    display: none;
  }
  
  .qbheader {
    justify-content: center;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .qbhero-description {
    font-size: 1rem;
  }
  
  .qbqr-container {
    padding: 32px;
  }
  
  .qbqr-code {
    max-width: 180px;
  }
}
















.qqrapp {
    height: 100%;
    // max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    background: white;
    position: relative;
      z-index: 2;
  }
  
  .qqrsolutions-section {
    padding: 10px 0;
  }
  
  .qqrsolutions-header {
    text-align: center;
    margin-bottom: 48px;
  }
  
  .qqrsolutions-header h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--primary-black);
  }
  
  .qqrsolutions-description {
    font-size: 1.1rem;
    color: var(--dark-gray);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .qqrcategory-tabs {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 48px;
    flex-wrap: wrap;
  }
  
  .qqrcategory-tab {
    padding: 8px 16px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 0.95rem;
    cursor: pointer;
    border: 1px solid gray;
    background-color:rgb(100, 100, 100);
    color: white;
    transition: var(--transition);
  }
  
  .qqrcategory-tab.active {
    background-color: var(--primary-black);
    color: var(--primary-white);
    border-color: var(--primary-black);
  }
  
  .qqrcategory-tab:hover:not(.active) {
    background-color:rgb(116, 159, 252);
    border-color: var(--dark-gray);
  }
  
  .qqrsolutions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    padding: 0 16px;
  }
  
  .qqrsolution-card {
    border-radius: 5px;
    padding: 24px;
    border: 1px solid gray;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .qqrsolution-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--box-shadow);
  }
  
  .qqrsolution-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color:rgb(80, 167, 224);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .qqrsolution-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    color: var(--primary-black);
  }
  
  .qqrsolution-description {
    color: var(--dark-gray);
    font-size: 0.95rem;
    line-height: 1.5;
    flex-grow: 1;
        margin: 0;

  }
  
  .qqrshare-via-qr {
    // width: 90%;
    padding: 8px 16px;
    border-radius: gray;
    background-color: var(--primary-white);
    border: 1px solid gray;
    color: var(--primary-black);
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
  
  .qqrshare-via-qr:hover {
    background-color: var(--primary-black);
    color: var(--primary-white);
  }
  
  @media (max-width: 768px) {
    .qqrapp {
      padding: 16px;
    }
  
    .qqrsolutions-header h2 {
      font-size: 1.8rem;
    }
  
    .qqrsolutions-description {
      font-size: 1rem;
    }
  
    .qqrcategory-tabs {
      gap: 8px;
    }
  
    .qqrcategory-tab {
      padding: 6px 12px;
      font-size: 0.9rem;
    }
  
    .qqrsolutions-grid {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }









  .qqqrhow-it-works-container {
//   background-color: white;
  padding: 40px;
//   border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   max-width: 1000px;
  margin: 0 auto;
}

.qqqrhow-it-works-title {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 30px;
  color: white;
}

.qqqrsteps {
  display: flex;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
}

.qqqrstep {
  background-color: #fff;
  padding: 10px;
  text-align: center;
  max-width: 250px;
  border-radius: 12px;
}

.qqqrstep-circle {
  width: 56px;
  height: 56px;
  margin: 0 auto 16px auto;
  background-color: #e2e2e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  color: #000;
}

.qqqrstep-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #000;
}

.qqqrstep-description {
  font-size: 14px;
  color: #555;
}
    `}</style>
    </>
  );
}

export default QrBlack;