import React from "react";
import {  Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import CareerPage from "./components/CareerPage";
import AnimatedBackground from "./components/AnimatedDisplay";
import ContactUs from "./components/ContactUs";
import PrivacyPage from "./components/PrivacyPage";
import TermPage from "./components/TermPage";
import Appp from "./components/CaseStudy";
import Cursor from "./components/Cursor";
import Companies from "./components/Companies";
import Medichart from "./components/Medichart";
import Redcarpet from "./components/Redcarpet";
import Ordereasy from "./components/Ordereasy";
import Mediscan from "./components/Mediscan";
import Cylinder from "./components/Cylinder";
import Hrms from "./components/Hrms";
import Realitify from "./components/Realitify";
import Crm from "./components/Crm";
import Invoice from "./components/Invoice";
import ImageExcel from "./components/ImageExcel";
import BulkEmail from "./components/BulkEmail";
import CrmCarWash from "./components/CrmCarWash";
import CrmLaundry from "./components/CrmLaundry";
import CrmSaloon from "./components/CrmSaloon";
import HrmsKidz from "./components/HrmsKidz";
import WaterJarManagement from "./components/WaterJarManagement";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import QrBlack from "./components/QrBlack";
import StartContact from "./components/StartContact";

function App() {
  return (
    <>
      <AnimatedBackground />
        <Cursor />
        <ScrollToTop />
        <Routes>
          <Route path="/medichart" element={<Medichart />} />
          <Route path="/redcarpet" element={<Redcarpet />} />
          <Route path="/orderEasy" element={<Ordereasy />} />
          <Route path="/MediScan" element={<Mediscan />} />
          <Route path="/cylinder" element={<Cylinder />} />
          <Route path="/realitify" element={<Realitify />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/products" element={<Products />} />
          <Route path="/imageexcel" element={<ImageExcel />} />
          <Route path="/bulkemail" element={<BulkEmail />} />
          <Route path="/crmcarwash" element={<CrmCarWash />} />
          <Route path="/crmlaundry" element={<CrmLaundry />} />
          <Route path="/crmsaloon" element={<CrmSaloon />} />
          <Route path="/hrmskidz" element={<HrmsKidz />} />
          <Route path="/waterjarmanagement" element={<WaterJarManagement />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/hrms" element={<Hrms />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/servicespage" element={<ServicesPage />} />
          <Route path="/careerpage" element={<CareerPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypage" element={<PrivacyPage />} />
          <Route path="/termpage" element={<TermPage />} />
          <Route path="/appp" element={<Appp />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/qrblack" element={<QrBlack />} />
          <Route path="/StartContact" element={<StartContact />} />
        </Routes>
    </>
  );
}

export default App;
