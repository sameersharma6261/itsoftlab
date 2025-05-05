// import React from 'react'

// function PrivacyPage() {
//   return (
//     <>
//      <div className="pcontainer">
//       {/* Header Section */}
//       <header className="pheader">
//         <h1>Data Protection</h1>
//         <span className="pplock-icon">🔒</span>
//       </header>
      
//       {/* Policy Video Section */}
//       <section className="ppolicy">
//         <div className="ppolicy-box">
//           <span className="pshieldi9eripoergoijipigfpoerkger-icon">🛡️</span>
//           <h2>Your Policy Matters</h2>
//           <p>Watch this video to understand how we protect your data.</p>
//           <button className="pbtn">Play Video</button>
//         </div>
//       </section>
      
//       {/* Info Cards */}
//       <section className="pinfo-section">
//         <div className="pinfo-card">
//           <h3>1. Introduction</h3>
//           <p>At ITSoftlab, we respect your privacy and are committed to protecting your personal data.</p>
//         </div>
//         <div className="pinfo-card">
//           <h3>2. Information We Collect</h3>
//           <p>We collect various types of information from you to improve our services.</p>
//         </div>
//       </section>
      
//       {/* Image Placeholder */}
//       <section className="pimage-placeholder">
//         <p>Your Data’s Security is Our Priority</p>
//       </section>
      
//       {/* Collection and Usage Section */}
//       <section className="pcollection-usage">
//         <h3>3. How We Collect Information</h3>
//         <ul>
//           <li>Registration and account setup</li>
//           <li>Interactions with our team</li>
//           <li>Website browsing data</li>
//         </ul>
        
//         <h3>4. How We Use Your Information</h3>
//         <div className="usage-grid">
//           <div className="usage-box">
//             <h4>Service Provision</h4>
//             <p>We use your data to provide and improve our services.</p>
//           </div>
//           <div className="usage-box">
//             <h4>Analytics</h4>
//             <p>We analyze user behavior to enhance experience.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//     </>
//   )
// }

// export default PrivacyPage
















import React from "react";
// import "./PrivacyPage.css";
import Navbar from "./Navbar";

function PrivacyPage() {
  return (
    <>
      <Navbar />
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
        <h1 className="hero-title">Privacy Policy</h1>
        <p className="hero-description">
        At ITSoftlab, your privacy is our top priority. We collect only essential data to improve user experience and provide better services. Your information is protected with strict security measures and retained only as long as necessary. You also have full rights over your data, including access, correction, and deletion.
        </p>
      </section>
      <div className="pcontainer">
        {/* Header Section */}
        <header className="pheader">
          <h1>Data Protection</h1>
          <span className="pplock-icon">🔒</span>
        </header>

        {/* Policy Video Section */}
        {/* <section className="ppolicy">
          <div className="ppolicy-box">
            <span className="pplock-icon">🛡️</span>
            <h2>Your Policy Matters</h2>
            <p>Watch this video to understand how we protect your data.</p>
            <button className="pbtn">Play Video</button>
          </div>
        </section> */}

        {/* Info Cards */}
        <section className="pinfo-section">
          <div className="pinfo-card">
            <h3>1. Introduction</h3>
            <p>
              At ITSoftlab, we respect your privacy and are committed to
              protecting your personal data.
            </p>
          </div>
          <div className="pinfo-card">
            <h3>2. Information We Collect</h3>
            <p>
              We collect various types of information from you to improve our
              services.
            </p>
          </div>
        </section>

        {/* Image Placeholder */}
        {/* <section className="pimage-placeholder">
          <p>Your Data’s Security is Our Priority</p>
        </section> */}

        {/* Collection and Usage Section */}
        <section className="pcollection-usage">
          <h3>3. How We Collect Information</h3>
          <ul>
            <li>Registration and account setup</li>
            <li>Interactions with our team</li>
            <li>Website browsing data</li>
          </ul>

          <h3>4. How We Use Your Information</h3>
          <div className="pusage-grid">
            <div className="pusage-box">
              <h4>Service Provision</h4>
              <p>We use your data to provide and improve our services.</p>
            </div>
            <div className="pusage-box">
              <h4>Analytics</h4>
              <p>We analyze user behavior to enhance experience.</p>
            </div>
          </div>
        </section>
        <section className="data-security">
          <h3>5. Data Security 🔒</h3>
          <p>
            We have implemented appropriate technical and organizational
            security measures to protect your personal information. However,
            please remember that the internet itself is not 100% secure.
          </p>
          {/* <div className="image-placeholder">
          <section className="ppimage-placeholder">
          <p>Safe your Priority with us</p>
        </section>
          </div> */}
        </section>

        <section className="data-retention">
          <h3>6. Data Retention</h3>
          <p>
            We will only retain your personal data for as long as necessary to
            fulfill the purposes we collected it for, including satisfying any
            legal or reporting requirements.
          </p>
        </section>

        <section className="data-rights">
          <h3>7. Your Data Protection Rights</h3>
          <p>Depending on your location, you may have the following rights:</p>
          <div className="rights-grid">
            <button>Right to Access</button>
            <button>Right to Rectification</button>
            <button>Right to Erasure</button>
            <button>Right to Restrict</button>
            <button>Right to Portability</button>
            <button>Right to Object</button>
          </div>
        </section>

        <section className="cookies-policy">
          <h3>8. Cookies Policy 🍪</h3>
          <p>
            Our Website uses cookies to enhance your browsing experience. You
            can set your browser to refuse all or some browser cookies.
          </p>
        </section>

        <section className="privacy-changes">
          <h3>9. Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by updating the "Last Updated" date on this page.
          </p>
        </section>
      </div>
      <style>
        {`
        




/* General Styling */
.pcontainer {
  width: 100%;
  margin: auto;
  font-family: Arial, sans-serif;
  color: #333;
  /* background-color: rgb(224, 224, 224); */
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

/* Header */
.pheader {
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #ddd;
}

.pplock-icon {
  font-size: 20px;
}

/* Policy Section */
.ppolicy {
  display: flex;
  justify-content: center;
  background-color: white;
  /* margin: 20px 0; */
}

.ppolicy-box {
  text-align: center;
  background: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  width: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.pbtn {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
}

/* Information Section */
.pinfo-section {
  display: flex;
  justify-content: space-between;
  /* margin: 20px 0; */
  background-color: white;

}

.pinfo-card {
  width: 48%;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* Image Placeholder */
.pimage-placeholder {
  background-image: url("https://cdn.pixabay.com/photo/2014/03/05/15/40/barbed-wire-280142_640.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Yeh line background ko fixed karegi */
  width: 100%;
  padding: 200px 20px;
  text-align: center;
  color: white;
  padding-left: 10px;
  padding: 90px 0;
}

.pimage-placeholder p{
  font-size: 2rem;
  font-weight: 600;
}

.ppimage-placeholder p{
  font-size: 2rem;
  font-weight: 600;
  color: white;
}



/* Collection & Usage */
.pcollection-usage {
  /* margin-top: 20px; */
  background-color: white;
  padding: 20px;
}

.pusage-grid {
  display: flex;
  justify-content: space-between;
}

.pusage-box {
  width: 48%;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}


/* Image Placeholder */
.image-placeholder {
  /* background-image: url("https://cdn.pixabay.com/photo/2020/03/09/01/29/hand-4914155_1280.jpg"); */
  background-image: url("https://cdn.pixabay.com/photo/2014/03/05/15/40/barbed-wire-280142_640.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Yeh line background ko fixed karegi */
  width: 100%;
  padding: 90px 0px;
  text-align: center;
  border-radius: 8px;
  margin: 20px 0;
}

/* Collection and Usage Section */
.collection-usage h3 {
  margin-top: 20px;
}

.usage-grid {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.usage-box {
  flex: 1;
  background: #e6e6e6;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* New Sections */
.data-security, .data-retention, .data-rights, .cookies-policy, .privacy-changes {
  /* margin: 20px 0; */
  padding: 20px;
  background: #f9f9f9;
  /* border-radius: 8px; */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.data-security h3, .data-retention h3, .data-rights h3, .cookies-policy h3, .privacy-changes h3 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  margin-top: 10px;
}

.rights-grid button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px;
  /* cursor: pointer; */
  border-radius: 5px;
}

.rights-grid button:hover {
  background: #0056b3;
}
`}
      </style>
    </>
  );
}

export default PrivacyPage;
