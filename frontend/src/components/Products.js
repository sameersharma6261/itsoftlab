import React from "react";
import {
  Briefcase,
  FileText,
  ClipboardList,
  Users,
  Mail,
  Image,
  Home,
  Truck,
  CalendarCheck,
  LayoutDashboard,
  WashingMachine,
  SquareBottomDashedScissors,
  MapPinHouse,
  ChartCandlestick,
  Blocks,
  FireExtinguisher,
  Droplet,
} from "lucide-react";
import Navbar from "./Navbar";
import { FaWater } from "react-icons/fa";

const services = [
  {
    title: "Medichart",
    description:
      "Securely manage patient records, prescriptions, and appointments in one digital platform.",
    icon: <ClipboardList className="icon" />,
    
  },
  {
    title: "RedCarpet",
    description:
      "Premium healthcare booking system with priority appointments and a VIP experience.",
    icon: <CalendarCheck className="icon red" />,
  },
  {
    title: "OrderEasy",
    description:
      "Smart ordering and inventory solution for pharmacies and medical stores.",
    icon: <Truck className="icon green" />,
  },
  {
    title: "MediScan",
    description:
      "Effortless scan booking and report delivery for diagnostic labs and patients.",
    icon: <FileText className="icon purple" />,
  },
  {
    title: "Cylinder Management",
    description:
      "Track and manage oxygen/gas cylinders with alerts and refill reminders.",
    icon: <LayoutDashboard className="icon orange" />,
  },
  {
    title: "Human Resource Management System",
    description:
      "Automate attendance, payroll, and performance tracking for hospital staff.",
    icon: <Users className="icon yellow" />,
  },
  {
    title: "Realitify",
    description:
      "List or discover healthcare spaces like clinics and labs with ease.",
    icon: <Home className="icon cyan" />,
  },
  {
    title: "Invoice",
    description:
      "Create, send, and track professional invoices with automated tax and reminders.",
    icon: <Briefcase className="icon pink" />,
  },
  {
    title: "ImageExcel",
    description:
      "Convert scanned medical records into editable Excel files using OCR.",
    icon: <Image className="icon indigo" />,
  },
  {
    title: "BulkEmail",
    description:
      "Send bulk emails with smart campaigns and analytics for healthcare outreach.",
    icon: <Mail className="icon lime" />,
  },
  {
    title: "CRM Laundry ",
    description:
      "A complete custiomer relatioship management solution designed specifically for laundry businesses to manage customers, orders, billing, and delivery tracking",
    icon: <WashingMachine className="icon green" />,
  },
  {
    title: "CRM Car Wash",
    description:
      "OrderEasy makes dining faster and smoother. Just scan the QR code, pick your restaurant, browse the menu, and place your order—all from your phone. No more waiting in lines to order. Simple, smart, and queue-free.",
    icon: <FaWater className="icon lime" />,
  },
  {
    title: "CRM Saloon ",
    description:
      "OrderEasy makes dining faster and smoother. Just scan the QR code, pick your restaurant, browse the menu, and place your order—all from your phone. No more waiting in lines to order. Simple, smart, and queue-free.",
    icon: 
    <SquareBottomDashedScissors className="icon purple"/>
    // <GlassWater className="icon lime" />,
  },
  {
    title: "CRM Real Estate ",
    description:
      "With Realtify, real estate agencies can streamline property management, employee assignments, and client interactions. Easily manage and track properties, assign tasks to employees, and keep an eye on all transactions,",
    icon: 
    <MapPinHouse className="icon orange" />
    // <ServerCog className="icon lime" />,
  },
  {
    title: "HRMSM Our Prices ",
    description:
      "Our system addresses the complex challenges of cylinder inventory management in godowns, making tracking and record-keeping simple and efficient.",
    icon:
    <ChartCandlestick className="icon yellow"/>
    //  <ServerCog className="icon lime" />,
  },
  {
    title: "HRMSM Kidz ",
    description:
      ".HRMS - Kidz is a smart and efficient Human Resource Management System tailored for educational institutes to manage student attendance and movements..",
    icon: 
    <Blocks  className="icon cyan"/>
    // <ServerCog className="icon lime" />,
  },
  {
    title: "Cylinder Management ",
    description:
      ".Simplify your cylinder inventory tracking, streamline warehouse operations, and manage your entire supply chain from a single platform..",
    icon:
    <FireExtinguisher className="icon pink"/>
    //  <ServerCog className="icon lime" />,
  },
  {
    title: "Water Jars Management  ",
    description:
      ".The Bottle Management System is a custom-built solution designed to efficiently manage and track the movement of bottles across different stages — including sending, receiving, and inventory history.",
    icon: 
    <Droplet className="icon indigo" />
    // <ServerCog className="icon lime" />,
  },
];

const Products = () => {
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
      .{/* Hero Section */}
      <section className="hero">
        <div className="containerrr">
          <div className="text-center">
            <h1 className="hero-title">For Products:</h1>
            <p className="hero-subtitle">
              "Smart Industry-Specific Products That Simplify Business"
              Ready-to-use software for Laundry, Salons, Schools, Healthcare,
              Real Estate & more.
            </p>
          </div>
        </div>
      </section>
      <div className="services-page">
        {/* <h1 className="title">Our Premium Services</h1> */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-container">{service.icon}</div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      
      <style>
        {`
       .services-page {
  background: linear-gradient(to bottom right, #f0f4ff, #ffffff);
  min-height: 100vh;
  padding: 60px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


/* Heading */
.title {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color:rgb(36, 92, 222);
  margin-bottom: 40px;
}

/* Grid Layout */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Card Styling */
.service-card {
  background-color: #ffffff;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e7ff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

/* Icon Styling */
.icon-container {
  margin-bottom: 15px;
}

.icon {
  width: 36px;
  height: 36px;
  color: #2563eb;
}

.icon.red { color: #ef4444; }
.icon.green { color: #10b981; }
.icon.purple { color: #8b5cf6; }
.icon.orange { color: #f97316; }
.icon.yellow { color: #facc15; }
.icon.cyan { color: #06b6d4; }
.icon.pink { color: #ec4899; }
.icon.indigo { color: #6366f1; }
.icon.lime { color: #84cc16; }

/* Text Styling */
.service-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 10px;
}

.service-description {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.5;
}












        `}
      </style>
    </>
  );
};

export default Products;
