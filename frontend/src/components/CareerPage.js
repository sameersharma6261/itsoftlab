import Navbar from "./Navbar";
import "./CareerPage.css";
import React, { useState } from "react";
// import axios from "axios";


export default function CareerPage() {
  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health, dental, and vision insurance",
    "401(k) retirement plan with company match",
    "Paid time off and holidays",
    "Professional development opportunities",
    "Flexible work arrangements",
    "Employee wellness programs",
    "Team building events and activities",
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    experience: "",
    skills: "",
    education: "",
    additional: "",
  });

  
  const [file, setFile] = useState(null);
  const [message] = useState("");
  const [loading, setLoading] = useState(false); 
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData();

    form.append("name", `${formData.firstName} ${formData.lastName}`);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("subject", `Resume Submission: ${formData.jobTitle}`);
    form.append(
      "message",
      `Experience: ${formData.experience}\nSkills: ${formData.skills}\nEducation: ${formData.education}\nAdditional: ${formData.additional}`
    );
    if (file) form.append("attachment", file);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/send-email`, {
        method: "POST",
        body: form,
      });
      const result = await response.json();
      setLoading(false); // 👈 Stop loader

      if (result.success) {
        setSuccessMessage("Your information was sent successfully!");
      } else {
        alert("Sending failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false); // 👈 Stop loader
    }
  };

  return (
    <>

<Navbar />
<main className="main">
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
              <h1 className="hero-title">Careers</h1>
              <p className="hero-subtitle">
              Join our team of talented professionals and build a rewarding
              career with us.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="wwwhy-join-section">
          <div className="wwcccontiner">
            <div className="wwcontent-wrapper">
              <div className="wwtext-content">
                <h2 className="wwsection-title">Why Join IT Softlab?</h2>
                <p className="wwsection-text">
                  At IT Softlab Company, we believe that our success is directly
                  tied to the quality and dedication of our team. We are
                  committed to creating a positive, inclusive work environment
                  where employees can grow professionally and personally.
                </p>
                <p className="wwsection-text">
                  We value innovation, collaboration, and excellence in
                  everything we do. Our employees are empowered to contribute
                  ideas, take initiative, and make a meaningful impact on our
                  company and our clients.
                </p>
                <p className="wwsection-text">
                  If you're looking for a challenging and rewarding career with
                  opportunities for advancement, we invite you to explore our
                  current openings and join our team.
                </p>
              </div>
              <div className="wwimage-container">
                <img
                  src="https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_640.jpg"
                  alt="Team collaboration"
                  className="wwimagggge"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="wwwemployee-benefits">
          <div className="wwwccontainer">
            <div className="wwwsection-header">
              <h2 className="wwwsection-titleee">Employee Benefits</h2>
              <div className="wwwsection-divider"></div>
              <p className="wwwsection-textt">
                We offer a comprehensive benefits package to support our
                employees' well-being and success.
              </p>
            </div>

            <div className="wwwbenefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="wwwbenefit-item">
                  <div className="wwwicon-container">
                    <svg
                      className="wwwicon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="wwwbenefit-text">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


















        <div className="resume-resume-form-container">
        <div className="resume-form-container">
      <h1>Submit Your Resume</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <input
          name="jobTitle"
          type="text"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
        <input
          name="experience"
          type="text"
          placeholder="Years of Experience"
          value={formData.experience}
          onChange={handleChange}
          required
        />
        <textarea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          required
        />
        <textarea
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          required
        />
        <textarea
          name="additional"
          placeholder="Additional Info"
          value={formData.additional}
          onChange={handleChange}
        />

        <label>Upload Resume (PDF):</label>
        <input type="file" accept="application/pdf" onChange={handleFileChange} />

        <button type="submit">Submit</button>
        {message && <p className="message">{message}</p>}
      </form>
       {/* Full-screen loader popup */}
       {loading && (
        <div className="loader-overlay">
          <div className="loader-popup"></div>
        </div>
      )}

      {successMessage && <p>{successMessage}</p>}
    </div>
    </div>

















        {/* Application Process */}
        <section class="aaaapplication-process">
          <div class="aaaccconntainer">
            <div class="aaasection-header">
              <h2 class="aaasectionn-title">Our Application Process</h2>
              <div class="aaasection-divider"></div>
            </div>

            <div class="aaaprocess-steps">
              <div class="aaasteps-container">
                <div class="aaastep" id="step-1">
                  <div class="aaastep-icon">1</div>
                  <div class="aaastep-content">
                    <h3 class="aaastep-title">Application Review</h3>
                    <p class="aaastep-description">
                      We review all applications and select candidates whose
                      qualifications match our requirements.
                    </p>
                  </div>
                </div>

                <div class="aaastep" id="step-2">
                  <div class="aaastep-icon">2</div>
                  <div class="aaastep-content">
                    <h3 class="aaastep-title">L1-Interview</h3>
                    <p class="aaastep-description">
                      Selected candidates are invited for an initial interview
                      to discuss their experience and our expectations.
                    </p>
                  </div>
                </div>

                <div class="aaastep" id="step-3">
                  <div class="aaastep-icon">3</div>
                  <div class="aaastep-content">
                    <h3 class="aaastep-title">L2-Skills Assessment</h3>
                    <p class="aaastep-description">
                      Candidates may be asked to complete a skills assessment
                      relevant to the position.
                    </p>
                  </div>
                </div>

                <div class="aaastep" id="step-4">
                  <div class="aaastep-icon">4</div>
                  <div class="aaastep-content">
                    <h3 class="aaastep-title">L3-Interview</h3>
                    <p class="aaastep-description">
                    Shortlisted candidates meet with senior team members to assess technical depth and cultural fit.
                    </p>
                  </div>
                </div>

                <div class="aaastep" id="step-4">
                  <div class="aaastep-icon">5</div>
                  <div class="aaastep-content">
                    <h3 class="aaastep-title">L4-Final Interview</h3>
                    <p class="aaastep-description">
                      Final candidates meet with the hiring manager and team
                      members for a more in-depth discussion.
                    </p>
                  </div>
                </div>

                <div class="aaastep" id="step-5">
                  <div class="aaastep-icon">6</div>
                  <div class="aaastep-content">
                    <h3 class="aaastep-title">Release-Offer Letter</h3>
                    <p class="aaastep-description">
                      Successful candidates receive a job offer with details
                      about compensation and benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="cctta-section">
          <div class="contatainer text-center">
            <h2 class="cctta-title">Don't See the Right Position?</h2>
            <p class="cctta-text">
              We're always looking for talented individuals to join our team.
              Send us your resume, and we'll keep you in mind for future
              opportunities.
            </p>
            <a href="/contactus" class="cctta-button">
              Contact Us
            </a>
          </div>
        </section>
       
      </main>
    </>
  );
}
