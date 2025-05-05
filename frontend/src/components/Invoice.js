import React from "react";
import Navbar from "./Navbar";
// import "./Invoice.css";

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

function Invoice() {
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
        <h1 className="hero-title">Invoice Generating System</h1>
        <p className="hero-description">
          Our Invoice Generating System is built to simplify and optimize your
          billing workflow. It is ideal for small businesses and large
          enterprises alike. The system is user-friendly, secure, and scalable –
          ensuring that you have all the tools you need to manage your invoices
          and products with ease.
        </p>
        <div className="cyhero-buttons">
          <a href="https://invoicegeneratingsystem.netlify.app/">
            <button className="cybtn-green">Get Started</button>
          </a>
        </div>
      </section>

      <section className="cychallenges-section">
        <div className="cychallenges-header">
          <h2>Invoice Generator: Fast, Accurate, Digital</h2>
          <p>
            Invoice Generator is a complete billing solution for shopkeepers.
            Create, print, and share invoices with automated calculations, PDF
            export, analytics, and SMS delivery—all from one platform.
          </p>
        </div>

        <div className="cyfeatures-grid">
          {[
            {
              title: "Simplified Entry Management",
              desc: "Easily record and track cylinder entries and exits from your godowns without the hassle of manual paperwork.",
              icon: "📋",
            },
            {
              title: "Mobile Application",
              desc: "Manage your entire inventory on the go with our powerful mobile application for Android and iOS.",
              icon: "📱",
            },
            {
              title: "Real-time Analytics",
              desc: "Get instant insights into your inventory levels, distribution patterns, and business performance.",
              icon: "📈",
            },
            // {
            //   title: "Distribution Tracking",
            //   desc: "Track which cylinders are sent where, to whom, and maintain complete distribution records.",
            //   icon: "🚚",
            // },
            {
              title: "Comprehensive Reporting",
              desc: "Generate detailed reports on inventory, distribution, and financial aspects of your cylinder business.",
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

      <div className="inheader-section">
        <div className="inheader-content">
          <span className="intag">Premium Service</span>
          <h1>
            Simplify Your <span className="inhighlight">Billing</span> Workflow
          </h1>
          <p>
            Our Invoice Generating System is built to simplify and optimize your
            billing workflow. It is ideal for small businesses and large
            enterprises alike.
          </p>
          <a href="https://invoicegeneratingsystem.netlify.app/">
            <button className="inbook-button">You can Visit Here</button>
          </a>
        </div>
        <div className="inrrheader-image"></div>
      </div>

      <h2 className="hrmsectionx-title">Powerful Features</h2>
      <div className="mmmain">
        <div className="infeatures-grid">
          {/* Card 1 */}
          <div className="infeature-card featured">
            <div className="inimage-placeholder1"></div>
            <h3 className="infeature-title">Easy Invoice Creation</h3>
            <p className="infeature-subtitle">
              Create professional invoices in seconds with our intuitive
              interface
            </p>
            <p className="infeature-description">
              Our drag-and-drop editor makes it simple to customize invoices to
              match your brand. Add your logo, change colors, and adjust layouts
              with ease.
            </p>
          </div>

          {/* Card 2 */}
          <div className="infeature-card">
            <div className="inimage-placeholder2"></div>
            <h3 className="infeature-title">Client Management</h3>
            <p className="infeature-subtitle">
              Keep track of all your clients and their billing information
            </p>
            <p className="infeature-description">
              Store client details, view payment history, and manage
              relationships all in one place. Set up recurring invoices for
              regular clients.
            </p>
          </div>

          {/* Card 3 */}
          <div className="infeature-card">
            <div className="inimage-placeholder3"></div>
            <h3 className="infeature-title">Secure Payments</h3>
            <p className="infeature-subtitle">
              Accept payments online with our secure payment gateway
              integrations
            </p>
            <p className="infeature-description">
              Integrate with popular payment processors to accept credit cards,
              bank transfers, and other payment methods securely and
              efficiently.
            </p>
          </div>
        </div>

        <div className="invoice-container">
          <div className="invoice-box">
            <div className="invoice-header">
              <div className="invoice-logo">YOUR LOGO</div>
              <h2>INVOICE</h2>
            </div>

            <div className="invoice-info">
              <div className="invoice-from">
                <h3>From</h3>
                <p>
                  Your Company Name
                  <br />
                  123 Business Street
                  <br />
                  City, State 12345
                  <br />
                  contact@yourcompany.com
                </p>
              </div>
              <div className="invoice-to">
                <h3>Bill To</h3>
                <p>
                  Client Company Name
                  <br />
                  456 Client Avenue
                  <br />
                  Client City, State 67890
                  <br />
                  client@example.com
                </p>
              </div>
            </div>

            <div className="invoice-details">
              <div>
                <h3>Invoice Details</h3>
                <p>
                  Invoice Number: <strong>INV-2025-0042</strong>
                  <br />
                  Date: <strong>April 11, 2025</strong>
                  <br />
                  Due Date: <strong>May 11, 2025</strong>
                </p>
              </div>
              <div className="payment-status">
                <h3>Payment Status</h3>
                <span className="paid">✔ Paid in Full</span>
              </div>
            </div>

            <table className="invoice-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Website Design</td>
                  <td>1</td>
                  <td>$1200.00</td>
                  <td>$1200.00</td>
                </tr>
                <tr>
                  <td>Hosting (Annual)</td>
                  <td>1</td>
                  <td>$300.00</td>
                  <td>$300.00</td>
                </tr>
                <tr>
                  <td>Domain Registration</td>
                  <td>2</td>
                  <td>$15.00</td>
                  <td>$30.00</td>
                </tr>
                <tr>
                  <td>Maintenance</td>
                  <td>5</td>
                  <td>$75.00</td>
                  <td>$375.00</td>
                </tr>
                <tr className="subtotal">
                  <td colSpan="3">Subtotal</td>
                  <td>$1905.00</td>
                </tr>
                <tr className="subtotal">
                  <td colSpan="3">Tax (10%)</td>
                  <td>$190.50</td>
                </tr>
                <tr className="total">
                  <td colSpan="3">Total</td>
                  <td>$2095.50</td>
                </tr>
              </tbody>
            </table>

            <div className="terms">
              <h3>Terms & Conditions</h3>
              <p>
                Thank you for your business! Payment is due within 30 days of
                receipt. Please make checks payable to Your Company Name or use
                the online payment link.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="inmb-20">
          <h2 className="insection-title2">What Our Client's Say</h2>
          <div className="ingrid5 grid-cols-3">
            <TestimonialCard
              name=" Megha Talwar"
              role="Freelance Designer, Bengaluru"
              content="As a freelancer, Megha used to create invoices manually in Word, which was both time-consuming and unprofessional. With ITSoftlab’s Invoice Generating System, she now sends branded invoices in seconds, tracks payment status, and gets auto-reminders — giving her business a more professional edge."
              image="https://cdn.pixabay.com/photo/2019/11/30/22/38/girl-4664440_640.jpg"
            />
            <TestimonialCard
              name="Yash Verma"
              role="Owner, QuickFix Electrical Services"
              content="ash manages daily customer jobs and needed a quick way to send invoices post-service. The new system allowed him to auto-generate GST-enabled invoices, send them via WhatsApp instantly, and keep a digital record — improving trust and faster payments."
              image="https://cdn.pixabay.com/photo/2021/11/28/15/37/man-6830588_640.jpg"
            />
            <TestimonialCard
              name="Shruti Bansal"
              role="Sales Manager, GreenGlow Organic Products"
              content="Shruti used to manage product-based invoicing manually, leading to delays and inventory mismatches. With ITSoftlab’s tool, product rates auto-fill, taxes are calculated automatically, and a professional invoice is ready in one click. Monthly billing time reduced by 75%."
              image="https://cdn.pixabay.com/photo/2019/06/03/05/09/portrait-4248100_640.jpg"
            />
          </div>
        </div>
      </div>

      <div className="incta-box">
        <h2 className="incta-title">Ready to Experience Invoice?</h2>
        <p className="incta-text">
          Preview our beautiful invoice templates and see how easy it is to
          customize them
        </p>
        <a href="https://invoicegeneratingsystem.netlify.app/">
          <button className="incta-button">Visit site</button>
        </a>
      </div>
      <style>{`
      .inheader-section {
    display: flex;
    flex-wrap: wrap;
    background: linear-gradient(to bottom right, #cff2f9, #e6d4f9);
    /* background-color: white; */
    position: relative;
    z-index: 2;
    padding: 50px;
    justify-content: space-between;
    align-items: center;
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
  
  .inheader-content {
    max-width: 600px;
  }
  
  .intag {
    display: inline-block;
    background-color: #0084d6;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 10px;
  }
  
  .inheader-content h1 {
    font-size: 36px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .inhighlight {
    color: #00a0d6;
  }
  
  .inheader-content p {
    font-size: 16px;
    margin: 20px 0;
    color: #444;
  }
  
  .inbook-button {
    /* background-color: #d60000; */
    background-color: #0084d6;

    color: white;
    padding: 12px 24px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .inbook-button:hover {
    background-color: #0009b1;
  }
  
  .inrrheader-image {
    width: 500px;
    height: 250px;
    margin: 5px;
    /* background-color: #e0e0e0; */
    background-image: url("https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540913_640.jpg");
    background-position: right;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 18px;
    border-radius: 10px;
    /* margin-top: 20px; */
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














  
  .infeatures-grid {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    position: relative;
    /* background-color: white; */
    z-index: 2;
    gap: 1rem;
    justify-content: center;
  }
  
  .infeature-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 300px;
    padding: 1rem;
    box-shadow: 0 0 8px rgba(0,0,0,0.05);
    position: relative;
  }
  
  .infeature-card.featured {
    border-color: #1d4ed8;
    box-shadow: 0 0 12px rgba(29, 78, 216, 0.2);
  }

  .hrmsectionx-title{
    color: white;
    display: flex;
    /* background-color: white; */
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-bottom: 5px;
  }
  
  /* .hrmbadge {
    background: #1d4ed8;
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    font-size: 12px;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
   */
  .infeature-title {
    font-size: 18px;
    margin: 0.5rem 0;
    font-weight: bold;
  }
  
  .infeature-subtitle {
    color: #666;
    font-size: 14px;
    margin-bottom: 0.5rem;
  }
  
  .inimage-placeholder1 {
    height: 150px;
    background-image: url("https://cdn.pixabay.com/photo/2019/05/14/17/56/button-4203036_640.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 6px;
  }

  .inimage-placeholder2 {
    height: 150px;
    background-image: url("https://cdn.pixabay.com/photo/2017/01/09/12/15/time-management-1966396_640.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 6px;
  }

  .inimage-placeholder3 {
    height: 150px;
    display: flex;
    background-image: url("https://cdn.pixabay.com/photo/2016/10/10/22/37/credit-card-1730085_640.jpg");
    background-position: center;
    background-size: cover;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 6px;
  }
  
  .inimage-placeholder.large {
    height: 250px;
    width: 100%;
    background-image: url("https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_640.jpg");
    background-position: center;
    background-size: cover;
  }
  
  .infeature-description {
    font-size: 14px;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .infeature-list {
    list-style: none;
    padding: 0;
  }
  
  .infeature-list li {
    margin-bottom: 0.5rem;
    font-size: 14px;
  }








  
.mmmain{
  background: linear-gradient(to bottom right, #cff2f9, #e6d4f9);
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
    color: rgb(0, 128, 255);
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
  

















  .inmall-container {
    padding-bottom: 40px;
    padding-left: 5px;
    padding-right: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
    background-color: #ffffff;
    /* min-height: 100vh; */
    font-family: sans-serif;
  }
  
  .inmall-heading {
    text-align: center;
    font-size: 35px;
    color: rgb(0, 110, 255);
    font-weight: bold;
    margin-bottom: 32px;
  }
  
  
  .inbenefits-text{
    display: flex;
    /* width: 80%;
    background-color: red; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .inbenefits-section {
    display: grid;
    width: 100%;
    /* background-color: red; */
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 768px) {
    .inbenefits-section {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .inbenefits-heading {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
  }
  
  .inbenefits-list {
    list-style: none;
    padding-left: 0;
  }
  
  .inbenefit-item {
    font-size: 17px;
    color: #444;
    margin-bottom: 10px;
  }
  
  .inbenefit-item::before {
    content: '✔ ';
    color: orange;
    margin-right: 6px;
  }
  
  .inbenefits-image {
    height: 300px;
    max-width: 450px;
    margin-left: 10%;
    background-color: #e0e0e0;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
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
  










  .invoice-container {
    display: flex;
    justify-content: center;
    padding: 20px;
    /* background: linear-gradient(to bottom right, #cff2f9, #e6d4f9); */
    font-family: Arial, sans-serif;
  }
  
  .invoice-box {
    background: #fff;
    border-radius: 5px;
    padding: 30px;
    width: 800px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .invoice-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .invoice-logo {
    background: #ddd;
    padding: 10px;
    width: 120px;
    margin: 0 auto 10px;
    text-align: center;
    font-size: 12px;
  }
  
  .invoice-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .invoice-from,
  .invoice-to {
    width: 48%;
  }
  
  .invoice-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .payment-status .paid {
    background-color: #d1fae5;
    color: #047857;
    padding: 5px 10px;
    border-radius: 4px;
    font-weight: bold;
    display: inline-block;
  }
  
  .invoice-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .invoice-table th,
  .invoice-table td {
    border: 1px solid #ccc;
    padding: 8px 12px;
    text-align: left;
  }
  
  .invoice-table th {
    background-color: #f0f0f0;
  }
  
  .invoice-table .subtotal td {
    font-weight: bold;
  }
  
  .invoice-table .total td {
    font-size: 18px;
    font-weight: bold;
    background-color: #f9fafb;
  }
  
  .terms {
    font-size: 14px;
    margin-top: 20px;
  }
        `}</style>
    </>
  );
}

export default Invoice;
