import Navbar from "./Navbar";
// import "./TermPage.css";

export default function TermPage() {
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
        <h1 className="hero-title">Terms & Conditions</h1>
        <p className="hero-description">
        By using ITSoftlab’s services, you agree to comply with our Terms and Conditions. Our services are for lawful use only, and any misuse, including spamming or impersonation, is prohibited. All content is owned by ITSoftlab and is protected under intellectual property laws. We reserve the right to modify or suspend access at any time.
        </p>
      </section>
      <main className="term-pageeg">
        <div className="containeeerr">
          <div className="contentet">
            {/* <h1 className="titltee">Terms and Conditions</h1> */}
            <p className="leated">Last updated: March 15, 2023</p>
            <p>
              Please read these Terms and Conditions ("Terms", "Terms and
              Conditions") carefully before using the website operated by
              Company ("us", "we", or "our").
            </p>
            <p>
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users, and others who access or use the Service.
            </p>
            <h2 className="subtittele">Use of Our Services</h2>
            <p>
              Our website and services are intended for use as is. You must be
              at least 18 years old to use our services.
            </p>
            <ul className="litest">
              <li>
                In any way that violates any applicable law or regulation.
              </li>
              <li>
                To transmit any advertising or promotional material, including
                "junk mail" or "spam."
              </li>
              <li>
                To impersonate the Company, an employee, another user, or any
                other entity.
              </li>
              <li>
                To engage in any conduct that restricts or inhibits anyone's use
                or enjoyment of the Service.
              </li>
            </ul>
            <h2 className="subtitltee">Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality
              are and will remain the exclusive property of ITCompany and
              its licensors.
            </p>
            <h2 className="subtitetle">Links To Other Websites</h2>
            <p>
              Our Service may contain links to third-party websites or services
              that are not owned or controlled by Company.
            </p>
            <h2 className="subtitetle">Termination</h2>
            <p>
              We may terminate or suspend access to our Service immediately,
              without prior notice, for any reason including violation of these
              Terms.
            </p>
            <h2 className="subtteitle">Disclaimer</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is
              provided on an "AS IS" and "AS AVAILABLE" basis.
            </p>
            <h2 className="subtteitle">Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of the United States,
              without regard to conflict of law provisions.
            </p>
            <h2 className="subtetitle">Changes</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time.
            </p>
            <h2 className="subtetitle">Contact Us</h2>
            {/* <address>
              <p>ClassicCompany</p>
              <p>123 Business Street</p>
              <p>City, State 12345</p>
              <p>Email: legal@classiccompany.com</p>
              <p>Phone: (123) 456-7890</p>
            </address> */}
          </div>
        </div>
      </main>
      <style>
        {`.term-pageeg {
    width: 100%;
    /* max-width: 900px; */
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .titltee {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .leated {
    font-size: 0.9rem;
    color: #777;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .contentet p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .subtittele, .subtitltee, .subtitetle, .subtitetle, .subtteitle, .subtetitle {
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #222;
    border-left: 5px solid #007bff;
    padding-left: 10px;
  }
  
  .litest {
    list-style: none;
    padding-left: 20px;
  }
  
  .litest li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    font-size: 1rem;
  }
  
  .litest li::before {
    content: ' ';
    color: #007bff;
    font-size: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
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
  
  address {
    font-style: normal;
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .term-pageeg {
      padding: 20px;
    }
    .titltee {
      font-size: 1.8rem;
    }
    .subtittele, .subtitltee, .subtitetle, .subtitetle, .subtteitle, .subtetitle {
      font-size: 1.2rem;
    }
  }
  `}
      </style>
    </>
  );
}
