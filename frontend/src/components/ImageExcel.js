import React from "react";
// import "./ImageExcel.css";
import Navbar from "./Navbar";


const ImageExcel = () => {
    function TestimonialCard({
        name,
        role,
        content,
        image,
      }) {
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
        <h1 className="hero-title">Image to Excel Converter</h1>
        <p className="hero-description">
          Transform any bill or document image into an organized Excel
          spreadsheet with just one click. Save time and eliminate manual data
          entry.
        </p>
        <div className="cyhero-buttons">
          <a href="/imageexcel">
            <button className="cybtn-green">Get Started</button>
          </a>
        </div>
      </section>

      

      <section className="cychallenges-section">
            <div className="cychallenges-header">
              <h2>Image to Excel Converter – Convert Any Table Image into Editable Excel</h2>
              <p>
              Manual data entry from images or scanned documents into Excel can be time-consuming and error-prone. Our Image to Excel Converter solves this problem by using smart OCR technology to automatically extract text and table data from images and convert it into a clean, editable Excel file within seconds. It’s perfect for digitizing handwritten notes, bills, receipts, or printed tables, saving both time and effort.
              </p>
            </div>

            <div className="cyfeatures-grid">
              {[
                {
                  title: "Image Upload Support",
                  desc: "Easily upload images containing tables, receipts, or handwritten notes for fast conversion to structured Excel data.",
                  icon: "📷",
                },
                {
                  title: "Text Recognition (OCR)",
                  desc: "Uses smart Optical Character Recognition to detect and extract accurate text and table data from images.",
                  icon: "🧠",
                },
                {
                  title: "Real-time Analytics",
                  desc: "Get instant insights into your inventory levels, distribution patterns, and business performance.",
                  icon: "📄",
                },
                {
                  title: "Download & Save",
                  desc: "Instantly download the Excel file or save it to your device/cloud for easy access and sharing.",
                  icon: "📁",
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


      <div className="exservice-container">
        <h2 className="exsection-heading">Why Choose Our Service?</h2>

        <div className="exfeatures">
          <div className="exfeature-box">
            <div className="exicon purple-bg">📷</div>
            <h3>Easy Upload</h3>
            <p>
              Simply upload any image of your bill or document in common formats
              like JPG, PNG, or PDF.
            </p>
          </div>

          <div className="exfeature-box">
            <div className="exicon purple-bg">📄</div>
            <h3>Accurate Conversion</h3>
            <p>
              Our advanced OCR technology extracts data with high precision and
              organizes it into Excel format.
            </p>
          </div>

          <div className="exfeature-box">
            <div className="exicon purple-bg">⬇️</div>
            <h3>Instant Download</h3>
            <p>
              Get your Excel file immediately after conversion, ready to use for
              your accounting or analysis.
            </p>
          </div>
        </div>

        {/* <h2 className="exsection-heading">How It Works</h2>

        <div className="exsteps">
          <div className="exstep">
            <div className="exstep-number">1</div>
            <h4>Upload Image</h4>
            <p>Upload your bill or document image in any common format</p>
          </div>

          <div className="exstep">
            <div className="exstep-number">2</div>
            <h4>Automatic Processing</h4>
            <p>Our system analyzes and extracts all data from your image</p>
          </div>

          <div className="exstep">
            <div className="exstep-number">3</div>
            <h4>Download Excel</h4>
            <p>Get your perfectly formatted Excel file ready to use</p>
          </div>
        </div> */}
      </div>




      <section class="exhow-it-works-section">
  <h2 class="exsection-heading">How It Works</h2>
  <div class="exsteps-container">
    <div class="exstep-box">
      <div class="exstep-circle">1</div>
      <h3 class="exstep-title">Upload Image</h3>
      <p class="exstep-desc">Upload your bill or document image in any common format</p>
    </div>
    <div class="exstep-box">
      <div class="exstep-circle">2</div>
      <h3 class="exstep-title">Automatic Processing</h3>
      <p class="exstep-desc">Our system analyzes and extracts all data from your image</p>
    </div>
    <div class="exstep-box">
      <div class="exstep-circle">3</div>
      <h3 class="exstep-title">Download Excel</h3>
      <p class="exstep-desc">Get your perfectly formatted Excel file ready to use</p>
    </div>
  </div>
</section>


{/* Testimonials */}
<div className="remb-20">
        <h2 className="resection-title2">What Our Client's Say</h2>
        <div className="regrid5 grid-cols-3">
          <TestimonialCard
            name="Aarav Sharma"
            role="Accountant, CleanFuel Logistics"
            content="Aarav used to spend hours every week entering fuel and toll bills manually into Excel. After using ITSoftlab’s Image to Excel Converter, he now uploads screenshots of bills and gets accurate, ready-to-analyze spreadsheets instantly. It boosted his productivity and reduced errors to nearly zero."
            image="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_640.jpg"
          />
          <TestimonialCard
            name="Nikita Soni"
            role="Admin Executive, Vishwas Enterprises"
            content="Managing vendor bills, receipts, and order forms was time-consuming for Nikita. With the new image-to-Excel system, she simply clicks a photo and gets structured Excel sheets ready for reporting and uploads. Her monthly report preparation time dropped from 3 days to just a few hours."
            image="https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg"
          />
          <TestimonialCard
            name="Ritika Bhagat"
            role="Inventory Assistant, DailyMart Wholesalers"
            content="Ritika handles incoming product invoices daily. Manually updating stock quantities was tiring and error-prone. With ITSoftlab’s converter, she now extracts all item names, prices, and quantities from invoice images directly into Excel — saving time and avoiding stock mismatches."
            image="https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_640.jpg"
          />
        </div>
      </div>




      <div className="cta-box">
        <h2 className="cta-title">Ready to Experience Realitify?</h2>
        <p className="cta-text">
          Join our premium members and enjoy exclusive access to reserved spaces
          at mall counters across the country.
        </p>
        <a href="/imageexcel">
          <button className="cta-button">Visit site</button>
        </a>
      </div>
      <style>
        {`
        .exservice-container {
    padding: 50px 20px;
    text-align: center;
    position: relative;
    z-index: 2;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom right, #cff2f9, #f1e8fa);
  }
  
  .exsection-heading {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  
  .exfeatures {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-bottom: 60px;
  }
  
  .exfeature-box {
    border: 1px solid #eee;
    padding: 20px;
    width: 300px;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0,0,0,0.05);
    transition: 0.3s;
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




  .remb-20 {
    position: relative;
    z-index: 2;
        backdrop-filter: blur(6px);

    padding-bottom: 30px;
    /* background: linear-gradient(to bottom right, #cff2f9, #e6d4f9); */
    /* background-color: white; */

  }


  .resection-title2 {
    font-size: 2.25rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
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
    .regrid-cols-3 {
      regrid-template-columns: repeat(3, 1fr);
    }
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
    color: rgb(255, 255, 255);
  }
  
  .retestimonial-content {
    color: var(--gray-700);
    color: rgb(0, 0, 0);
    font-style: italic;
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
  
  .hero-description {
    font-size: 18px;
    color: #ffffff;
  }
  
  .exfeature-box:hover {
    transform: translateY(-5px);
  }
  
  .exicon {
    font-size: 30px;
    background-color: #eee;
    width: 60px;
    height: 60px;
    margin: 0 auto 15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .expurple-bg {
    background-color: #f3e8ff;
    color: #7c3aed;
  }
  
  .exfeature-box h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .exfeature-box p {
    font-size: 14px;
    color: #555;
  }
  
  .exsteps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
  
  .exstep {
    max-width: 250px;
  }
  
  .exstep-number {
    width: 50px;
    height: 50px;
    background-color: #f3e8ff;
    color: #7c3aed;
    font-weight: bold;
    font-size: 20px;
    margin: 0 auto 15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .exstep h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .exstep p {
    font-size: 14px;
    color: #555;
  }











  .exhow-it-works-section {
    /* max-width: 1200px; */
    margin: 0 auto;
    position: relative;
    z-index: 2;
    /* padding: 4rem 1rem; */
    background: linear-gradient(to bottom right, #cff2f9, #e8def3);
  }
  
  .exsection-heading {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }
  
  .exsteps-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 960px;
    margin: 0 auto;
  }
  
  @media (min-width: 768px) {
    .steps-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .exstep-box {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .exstep-circle {
    width: 64px;
    height: 64px;
    background-color: #f3e8ff; /* light purple */
    color: #7e22ce; /* purple text */
    font-weight: bold;
    font-size: 1.25rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .exstep-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .exstep-desc {
    color: #4b5563; /* gray-600 */
  }











  
        `}
      </style>
    </>
  );
};

export default ImageExcel;
