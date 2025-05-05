import React from "react";
// import { Linkedin, Twitter, Mail } from "lucide-react";
// import "./Companies.css";
import Navbar from "./Navbar";

const companies = [
  {
    name: "Acme Corporation",
    tagline: "Global technology solutions provider",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2023/06/21/18/39/girl-8080001_640.png",
    description:
      "Acme Corporation has been our client since 2018.",
    socials: {
      linkedin: "https://linkedin.com/company/acme",
      twitter: "https://twitter.com/acme",
      mail: "mailto:contact@acme.com"
    }
  },
  {
    name: "Globex Industries",
    tagline: "Manufacturing excellence",
    rating: 5.0,
    image: "https://cdn.pixabay.com/photo/2022/09/13/14/47/girl-7452067_640.jpg",
    description:
      "Globex Industries is a leading manufacturer in the automotive sector.",
    socials: {
      linkedin: "https://linkedin.com/company/globex",
      twitter: "https://twitter.com/globex",
      mail: "mailto:contact@globex.com"
    }
  },
  {
    name: "Stark Enterprises",
    tagline: "Innovative engineering solutions",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2022/11/04/07/00/matrix-7569159_640.jpg",
    description:
      "Working with Stark Enterprises has been a highlight of our portfolio.",
    socials: {
      linkedin: "https://linkedin.com/company/stark",
      twitter: "https://twitter.com/stark",
      mail: "mailto:contact@stark.com"
    }
  },
  {
    name: "Wayne Industries",
    tagline: "Sustainable development",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2024/09/21/13/48/ai-generated-9063887_640.png",
    description:
      "Wayne Industries focuses on sustainable development and green technologies.",
    socials: {
      linkedin: "https://linkedin.com/company/wayne",
      twitter: "https://twitter.com/wayne",
      mail: "mailto:contact@wayne.com"
    }
  },
  {
    name: "Umbrella Corporation",
    tagline: "Healthcare research",
    rating: 3.9,
    image: "https://cdn.pixabay.com/photo/2023/06/21/18/39/girl-8080001_640.png",
    description:
      "Umbrella Corporation relies on our expertise for their data management needs.",
    socials: {
      linkedin: "https://linkedin.com/company/umbrella",
      twitter: "https://twitter.com/umbrella",
      mail: "mailto:contact@umbrella.com"
    }
  },
  {
    name: "Oscorp",
    tagline: "Scientific innovation",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2024/09/21/13/48/ai-generated-9063887_640.png",
    description:
      "Our work with Oscorp has focused on bringing scientific innovations to market.",
    socials: {
      linkedin: "https://linkedin.com/company/oscorp",
      twitter: "https://twitter.com/oscorp",
      mail: "mailto:contact@oscorp.com"
    }
  },
  {
    name: "Acme Corporation",
    tagline: "Global technology solutions provider",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2023/06/21/18/39/girl-8080001_640.png",
    description:
      "Acme Corporation has been our client since 2018.",
    socials: {
      linkedin: "https://linkedin.com/company/acme",
      twitter: "https://twitter.com/acme",
      mail: "mailto:contact@acme.com"
    }
  },
  {
    name: "Globex Industries",
    tagline: "Manufacturing excellence",
    rating: 5.0,
    image: "https://cdn.pixabay.com/photo/2022/09/13/14/47/girl-7452067_640.jpg",
    description:
      "Globex Industries is a leading manufacturer in the automotive sector.",
    socials: {
      linkedin: "https://linkedin.com/company/globex",
      twitter: "https://twitter.com/globex",
      mail: "mailto:contact@globex.com"
    }
  },
  {
    name: "Stark Enterprises",
    tagline: "Innovative engineering solutions",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2022/11/04/07/00/matrix-7569159_640.jpg",
    description:
      "Working with Stark Enterprises has been a highlight of our portfolio.",
    socials: {
      linkedin: "https://linkedin.com/company/stark",
      twitter: "https://twitter.com/stark",
      mail: "mailto:contact@stark.com"
    }
  },
  {
    name: "Wayne Industries",
    tagline: "Sustainable development",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2024/09/21/13/48/ai-generated-9063887_640.png",
    description:
      "Wayne Industries focuses on sustainable development and green technologies.",
    socials: {
      linkedin: "https://linkedin.com/company/wayne",
      twitter: "https://twitter.com/wayne",
      mail: "mailto:contact@wayne.com"
    }
  },
  {
    name: "Umbrella Corporation",
    tagline: "Healthcare research",
    rating: 3.9,
    image: "https://cdn.pixabay.com/photo/2023/06/21/18/39/girl-8080001_640.png",
    description:
      "Umbrella Corporation relies on our expertise for their data management needs.",
    socials: {
      linkedin: "https://linkedin.com/company/umbrella",
      twitter: "https://twitter.com/umbrella",
      mail: "mailto:contact@umbrella.com"
    }
  },
  {
    name: "Oscorp",
    tagline: "Scientific innovation",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2024/09/21/13/48/ai-generated-9063887_640.png",
    description:
      "Our work with Oscorp has focused on bringing scientific innovations to market.",
    socials: {
      linkedin: "https://linkedin.com/company/oscorp",
      twitter: "https://twitter.com/oscorp",
      mail: "mailto:contact@oscorp.com"
    }
  }
];

const CompanyCard = ({ name, tagline, rating, description, socials, image }) => (
  <>
  <Navbar />
  <div className="company-card">
    <div className="company-header">
      <img src={image} alt={name} className="company-image" />
      <div>
        <h2 className="company-name">{name}</h2>
        {/* <p className="company-tagline">{tagline}</p> */}
        {/* <p className="company-rating">{'⭐'.repeat(Math.floor(rating))} <span>{rating}</span></p> */}
      </div>
    </div>
    <div className="company-body">
      <p>{description}</p>
    </div>
  </div>
  </>
);

const Companies = () => (
  <>
    <section className="hero-section">
    <h1 className="hero-title">Meet our Team</h1>
    <p className="hero-description">
    Get to know the brilliant minds and trusted partners driving our shared success.
    </p>
  </section>
  <div className="companies-container">
    {companies.map((company, index) => (
      <CompanyCard key={index} {...company} />
    ))}
  </div>
    <div className="video-container">
    <video autoPlay loop muted playsInline>
      <source
        src="https://cdn.pixabay.com/video/2020/08/12/46965-449623750_large.mp4"
        type="video/mp4"
      />
    </video>
  </div>
  <style>
    {`.companies-container {
    /* min-height: 100vh; */
    height: 100%;
    background-color: #ffffff;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    position: relative;
    z-index: 2;
  }
  
  @media (min-width: 640px) {
    .companies-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .companies-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .company-card {
    width: 90%;
    height: 100%;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }
  
  .company-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .hero-section {
    /* background-color: #0c7ef0; */
    padding: 150px 20px;
    margin-top: 70px;
    text-align: center;
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
  .hero-section{
    position: relative;
    z-index: 2;
  }
  
  .company-image {
    width: 56px;
    height: 56px;
    border-radius: 9999px;
    object-fit: cover;
  }
  
  .company-name {
    font-size: 1.125rem;
    font-weight: bold;
  }
  
  .company-tagline {
    font-size: 0.875rem;
    color: #6b7280;
  }
  
  .company-rating {
    margin-top: 0.25rem;
    color: #facc15;
    font-size: 0.875rem;
  }
  
  .company-rating span {
    color: #000;
  }
  
  .company-body {
    margin-top: 1rem;
  }
  
  .company-body p {
    font-size: 0.875rem;
    color: #374151; 
    text-align: center;
  }
  
  .company-socials {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    color: #4b5563;
  }
  
  .company-buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .company-buttons button {
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
    font-size: 0.875rem;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  .company-buttons button:hover {
    background-color: #f3f4f6;
  }
  
  .company-buttons .primary {
    background-color: #3b82f6;
    color: white;
    border: none;
  }
  
  .company-buttons .primary:hover {
    background-color: #2563eb;
  }
  `}
  </style>
  </>
);

export default Companies;