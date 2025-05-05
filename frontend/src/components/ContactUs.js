import { useState } from "react";
import Navbar from "./Navbar";


const offices = [
  {
    id: 1,
    name: "Sharjah Media City (Shams), ",
    image:
      "https://cdn.pixabay.com/photo/2016/10/16/10/30/office-space-1744803_1280.jpg",
    address: "Al Messaned, Al Bataeh, Sharjah, United Arab Emirates",
    // phone: "+91 80 3456 7890",
    // email: "contact@itsoftlab.com",
  },
  {
    id: 3,
    name: "Dubai, UAE",
    image:
      "https://cdn.pixabay.com/photo/2016/10/16/10/30/office-space-1744805_640.jpg",
    address:
      "HDS Business Centre, 34th Cluster M, Jumeirah Lake Towers, Dubai, United Arab Emirates",
    // phone: "+91 80 3456 7890",
    // email: "contact@itsoftlab.com",
  },
  {
    id: 6,
    name: "Indore, India",
    image:
      "https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181951_1280.jpg",
    address: "651 Sector A Mahalaxmi Nagar Indore, INDIA",
    // phone: "+91 22 1234 5678",
    // email: "contact@itsoftlab.com",
  },
  {
    id: 2,
    name: "Malta, Europe",
    image:
      "https://cdn.pixabay.com/photo/2015/05/29/19/17/study-789631_640.jpg",
    address: "Tower Business Centre, Tower Street, Swatar, BKR 4013, MALTA",
    // phone: "+91 80 3456 7890",
    // email: "contact@itsoftlab.com",
  },
  {
    id: 5,
    name: "Jaipur, India",
    image:
      "https://cdn.pixabay.com/photo/2017/03/28/12/09/chairs-2181939_1280.jpg",
    address: "6, Khandelwal Tower, Vidhyadhar Nagar Jaipur, INDIA",
    // phone: "+91 11 2345 6789",
    // email: "contact@itsoftlab.com",
  },

  {
    id: 4,
    name: "Texas, US",
    image:
      "https://cdn.pixabay.com/photo/2023/04/18/17/14/ai-generated-7935610_640.jpg",
    address: "1220 River Bend Dr, Dallas, TX, 75247, USA",
    // phone: "+91 80 3456 7890",
    // email: "contact@itsoftlab.com",
  },




];
export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(true);
  // Fixed location coordinates (New Delhi, India)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Loader state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader when message is sending

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message Sent Successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setLoading(false); // Hide loader after message is sent
  };
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
      <main className="main-container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-description">
            We’re here to connect and assist you. Whether you have a question, suggestion, or need support, feel free to reach out to us. Your message matters, and we’ll respond promptly to ensure you get the help you need.
          </p>
        </section>

        {/* Contact Information */}
        <section className="contact-section">
          <div className="contatainer">

            <section className="locations-container">
              <h2 className="locations-title">Our Office Locations</h2>
              <div className="locations-grid">
                {offices.map((office) => (
                  <div key={office.id} className="location-card">
                    <img
                      src={office.image}
                      alt={office.name}
                      className="location-image"
                    />
                    <h3 className="location-name">{office.name}</h3>
                    <div className="location-contact">
                    
                      <p className="location-address">{office.address}</p>
                    </div>

                  </div>
                ))}
              </div>
            </section>

            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contactaa">
                <h2 className="section-title">Send Us a Message</h2>
                {loading && (
                  <div className="loading-popup">
                    <div className="spinner"></div>
                    <p>Sending...</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="input-group">
                    <div className="contactccc">
                      <label>Your Name</label>
                      <input name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <label>Your Email</label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div>
                    <label>Phone Number</label>
                    <input name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                  </div>

                  <div>
                    <label>Subject</label>
                    <input name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>

                  <div>
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required />
                  </div>

                  <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Map */}
              <div className="contactbb">
                <h2 className="section-title">Our Location</h2>
                <div className="map-placeholder">
                  <img
                    className="imggg"
                    src="https://cdn.pixabay.com/photo/2018/01/31/06/56/map-3120436_1280.jpg"
                    alt=""
                  />
                  <div className="map-application">
                  </div>
                </div>
                <p className="map-text">
                  Visit us at our office located in the heart of the business
                  district. We're easily accessible by public transportation and
                  have parking available for visitors.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>



      <style jsx>{`

.map-application {

  position: relative;

  // width: 50vw;

  height: 50vh;

  overflow: hidden;

}























.map-container {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.zoom-controls {

  position: absolute;

  top: 20px;

  right: 20px;

  background-color: white;

  border-radius: 8px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  z-index: 2;

}

.zoom-button {

  display: flex;

  align-items: center;

  justify-content: center;

  background-color: white;

  border: none;

  padding: 8px;

  cursor: pointer;

  transition: background-color 0.2s;

}

.zoom-button:first-child {

  border-bottom: 1px solid #eee;

}

.zoom-button:hover {

  background-color: #f5f5f5;

}

.loading-overlay {

  position: absolute;

  top: 0;

  left: 0;

  right: 0;

  bottom: 0;

  background-color: rgba(255, 255, 255, 0.8);

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  z-index: 3;

}

.spinner {
  width: 40px;
   z-index: 30;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4a89dc;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;

}

.map-text{
text-align: center;
}

@keyframes spin {

  0% { transform: rotate(0deg); }

  100% { transform: rotate(360deg); }

}

          `}</style>

      <style>
        {`
        /* General Styles */
.main-container {
    min-height: 100vh;
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

 .hero-section {
    /* background-color: #0c7ef0; */
    padding: 150px 20px;
    margin-top: 70px;
    text-align: center;
     position: relative;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
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
    max-width: 1200px;
  }
  
  /* Contact Information */
  .contact-section {
    background-color: white;
    // padding: 60px 20px;
    /* overflow: hidden; */
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .infoo-card {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
    /* background-color: red; */
  }

  .contactccc{
    /* background-color: red; */
  }
  
  .icon-style {
    font-size: 24px;
    color: #007bff;
  }
  
  .info-title {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }
  
  .info-link {
    color: #007bff;
    position: relative;
    text-decoration: none;
  }
  
  /* Contact Form */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  .section-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .input-group {
    display: flex;
    gap: 20px;
  }
  
  label {
    font-weight: 500;
    color: #333;
    display: block;
    margin-bottom: 5px;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .submit-button {
    background-color: #007bff;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    z-index: 30;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }

  .contactaa{
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .contactbb{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  /* Map Placeholder */
  .map-placeholder {
    /* background-color: #e2e8f0; */
    /* height: 300px; */
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
  
  /* FAQ Section */
  .faq-section {
    /* background-color: #f9fafb; */
    background: linear-gradient(to right, #007bff, #0056b3);
    padding: 40px 20px;
    text-align: center;
  }

  .faq-text{
    color: white;
  }
  
  .divider {
    width: 80px;
    height: 4px;
    background-color: #007bff;
    margin: 10px auto;
  }

  /* .map-placeholder img{
    min-width: 100%;
  } */

  .imggg{
    /* height: 100%; */
    max-width: 75%;
  }

  .sectionnn-title{
    color: white;
  }
  


  .loading-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 200;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #fff;
    border-radius: 50%;
    width: 40px;
    z-index: 30;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

















  /* contact us page */
/* Office Locations Styles */
.locations-container {
  position: relative;
  backdrop-filter: blur(6px);
  z-index: 2;
  padding: 4rem 2rem;
  /* background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); */
}

.locations-title {
  text-align: center;
  color: rgb(0, 0, 0);
  margin: 0;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 700;
}

.locations-grid {
  display: flex; /* Use flexbox for horizontal layout */
  gap: 2rem;
  max-width: 1600px;
  padding-bottom: 10px;
  margin: 0 auto;
  overflow-x: auto; /* Enable horizontal scrolling */
  scroll-snap-type: x mandatory; /* Ensures snapping to cards */
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
}

.location-card {
  background: rgba(255, 255, 255, 0.422);
  backdrop-filter: blur(3px);
  border-radius: 12px;
  padding: 0.5rem;
  z-index: 2;
  gap: 20px;
  width: 350px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  flex: 0 0 auto; /* Ensure cards don't stretch and remain fixed width */
  scroll-snap-align: start; /* Cards snap to the start of the container */
}

.location-card:hover {
  transform: translateY(-5px);
}

.location-image {
  width: 350px;
  height: 200px; /* Fixed height for all images */
  z-index: 2;
  object-fit: cover; /* Ensure image covers the area without distortion */
  border-radius: 8px;
  margin-bottom: 1rem;
}

.location-name {
  font-size: 1.2rem;
  color: #393939;
  margin-bottom: 1rem;
  font-weight: 600;
}

.location-address {
  color:rgb(69, 136, 212);
  margin-bottom: 1rem;
  z-index: 2;
  font-size: 0.9rem;
  line-height: 1.5;
}

.location-contact {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color:rgb(0, 0, 0);
  font-size: 1rem;
  height: 35px;
  margin-bottom: 0.5rem;
}

.location-contact svg {
  color:rgb(0, 0, 0);
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .locations-title {
    font-size: 2rem;
  }
  
  .locations-grid {
    grid-template-columns: 1fr;
    flex-direction: row; /* Ensure horizontal scrolling on smaller screens */
  }
  
  .locations-container {
    padding: 2rem 1rem;
  }
}

/* Hide Swiper's Pagination Line */
.swiper-pagination {
  display: none !important;
}
  .swiper-pagination {
  display: none !important;
}
        `}
      </style>


    </>
  );
}
