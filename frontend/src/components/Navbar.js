import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
// import "./Navbar.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutPage" },
  { name: "Services", href: "/servicespage" },
  { name: "Career", href: "/careerpage" },
  { name: "Contact Us", href: "/contactus" },
  { name: "Privacy Policy", href: "/privacypage" },
  { name: "Terms & Conditions", href: "/termpage" },
  {
    name: "Products",
    dropdown: true,
    children: [
      { name: "Crm-Laundry", href: "/CrmLaundry" },
      { name: "Cylinder Management", href: "/Cylinder" },
       { name: "Crm-Car-Service", href: "/CrmCarWash" },
       { name: "Inventory-Management", href: "/WaterJarManagement" },
       { name: "Crm-Salon", href: "/CrmSaloon" },
       { name: "Invoice Generator", href: "/Invoice" },
       { name: "CRM-Realtify", href: "/realitify" },
       { name: "Image To Excel Converter", href: "/ImageExcel" },
       { name: "HRMSM", href: "/Hrms" },
       { name: "OrderEasy", href: "/OrderEasy" },
      { name: "Hrmsm For School", href: "/HrmsKidz" },
      { name: "RedCarpet", href: "/RedCarpet" },
      { name: "Mediscan", href: "/Mediscan" },
      { name: "BulkEmail", href: "/BulkEmail" },
      { name: "Medichart", href: "/Medichart" },
      { name: "QR-Black", href: "/QrBlack" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const location = useLocation();


  return (
    <>
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="scrolled-logo">
            <div className="ll"></div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${isMobile ? "hide" : ""}`}>
  {navItems.map((item) => {
    if (item.dropdown) {
      return (
        <div className="dropdown" key={item.name}>
          <span className="scrolled-link">{item.name} 🡻</span>
          <div className="dropdown-menu">
            {item.children.map((child) => (
              <Link
                key={child.name}
                to={child.href}
                className={`dropdown-item ${
                  location.pathname === child.href ? "active" : ""
                }`}
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={`scrolled-link ${
            location.pathname === item.href ? "active" : ""
          }`}
        >
          {item.name}
        </Link>
      );
    }
  })}
</nav>
        <a href="/startcontact">
          <button className="get-started-btn">Get Started</button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
  {navItems.map((item) => {
    if (item.dropdown) {
      return (
        <div key={item.name} className="mobile-dropdown">
          <span className="mobile-dropdown-title">{item.name}</span>
          <div className="mobile-dropdown-menu">
            {item.children.map((child) => (
              <Link
                key={child.name}
                to={child.href}
                onClick={() => setMobileMenuOpen(false)}
                className={location.pathname === child.href ? "active" : ""}
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <Link
          key={item.name}
          to={item.href}
          onClick={() => setMobileMenuOpen(false)}
          className={location.pathname === item.href ? "active" : ""}
        >
          {item.name}
        </Link>
      );
    }
  })}
</div>
    </div>
    <style>
      {`
      
 /* Navbar Container */

 .scrolled-link{
   font-size: 18px;
   color:rgb(6, 0, 59);
   margin-top: -2px;
  // text-shadow: 0 0.5px 2px rgb(0, 0, 0);
 }

 .scrolled-link.active,
.dropdown-item.active {
  background-color:rgb(37, 85, 218);
  color: white;
  border-radius: 6px;
  padding: 6px 12px;
}

.mobile-menu a.active {
  background-color:rgb(37, 85, 218);
  color: white;
  border-radius: 6px;
  padding: 8px 12px;
  display: block;
}

.navbar {
  width: 100%;
  // background: rgba(0, 153, 255, 0.554);
  background: linear-gradient(to right,rgb(255, 255, 255),rgba(31, 115, 184, 0.66));

  // background: linear-gradient(to bottom right,rgba(0, 89, 255, 0.75),rgba(248, 244, 244, 0.74),rgba(0, 110, 255, 0.8));
  backdrop-filter: blur(17px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  max-width: 1500px;
  margin: auto;
}



/* Logo */
.logo a {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #fcfcfc;
}

.logo span {
  color:rgb(0, 202, 252);
  text-shadow: 0 0 2px rgb(255, 255, 255);
}

/* Desktop Navigation */
.nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color:rgb(6, 0, 59);
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s;
  // text-shadow: 0 0.5px 2px rgb(0, 0, 0);
}

.nav-links a:hover {
  color: #e1e1e1c0;
}

/* Get Started Button */
.get-started-btn {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}

.get-started-btn:hover {
  background: #0056b3;
}

/* Mobile Menu Button */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* Mobile Navigation */
.mobile-menu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 58px;
  left: 0;
  z-index: 2;
  // margin-bottom: 30px;
  width: 100%;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  max-height: 80vh;     
  overflow-y: auto;
}

.scrolled-logo{
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}




































.ll{
height: 70px;
width: 280px;
position: relative;
// background:rgba(169, 213, 255, 0.66);
// border-style: solid;
// border-radius: 5px;
// border-color: rgb(113, 172, 248);
// background: white;
background-image: url("/images/log.png");
background-size: cover;
background-position: center;
}

.mobile-menu a {
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  display: block;
  transition: 0.3s;
}

.mobile-menu a:hover {
  background: #f0f0f0;
  zindex: 9;
}

/* Responsive Design */
@media (max-width: 1132px) {
  .navbar-container {
  padding: 8px 20px;
  }

  .nav-links {
    gap: 10px;
  }

  .nav-links a {
    font-size: 14px;
  }

  .get-started-btn {
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 1320px) {
  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: block;
  }
  .get-started-btn {
    position: absolute;
    right: 57px;
    // width: 100px;
    top: 20px;
    padding: 14px 18px;
  }

  .mobile-menu.open {
    display: flex;
    margin-top: 18px;
  }
}



@media (max-width: 600px){
.ll{
  height: 60px;
  width: 230px;
  }

  .get-started-btn {
    top: 15px;
    display: none;
  }
}








/* Desktop Dropdown */
.dropdown {
  position: relative;
  color: white;
  font-weight: 600;
  font-size: 16px;
  bottom: 1px;
  /* background-color: red; */
}

.dropdown:hover {
  color: #e1e1e1c0;
} 

.dropdown-menu {
  position: absolute;
  background: rgba(173, 173, 173, 0.81);
  // background: white
  backdrop-filter: blur(12px);
  box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
  padding: 10px 0;
  top: 100%;
  right: 0;
  display: none;
  min-width: 600px;
  z-index: 100;
}

.dropdown:hover .dropdown-menu {
  display: block;
  display: grid;
   backdrop-filter: blur(6px);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.dropdown-item {
  padding: 8px 16px;
  display: block;
  // color: black;
  // text-decoration: none;
}

.dropdown-item:hover {
  background-color: #1392fa64;
}

/* Mobile Dropdown */
.mobile-dropdown {
  margin: 10px 0;
}

.mobile-dropdown-title {
  font-weight: bold;
  display: block;
  padding: 8px 0;
  margin-left: 20px;
}

.mobile-dropdown-menu {
  padding-left: 19px;
}

.mobile-dropdown-menu a {
  display: block;
  padding: 5px 0;
}

      `}
    </style>
    </>
  );
}
