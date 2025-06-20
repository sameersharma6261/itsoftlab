import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  BarChart2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import "./CaseStudy.css";
import Navbar from "./Navbar";

interface CaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string[];
  results: string[];
  conclusion: string;
  category: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Enhancing Deployment Efficiency with DevOps",
    client: "a mid-sized e-commerce company",
    challenge:
      "was facing significant delays in software releases due to manual deployment processes and inconsistent development environments. These inefficiencies resulted in frequent downtime, delayed feature rollouts, and higher operational costs.",
    solution: [
      "CI/CD Pipeline Automation",
      "Infrastructure as Code (IaC)",
      "Containerization",
      "Monitoring & Logging",
      "Security Enhancements",
    ],
    results: [
      "Deployment frequency increased by 70%, reducing time-to-market for new features.",
      "99.9% uptime achieved, minimizing downtime and enhancing user experience.",
      "Reduction in operational costs by 30% due to automation and optimized resource utilization.",
      "Improved collaboration between development and operations teams, fostering a culture of innovation.",
    ],
    conclusion:
      "By leveraging modern DevOps practices, Realguruji successfully enhanced deployment efficiency, improved system reliability, and streamlined operational workflows. This transformation allowed the company to focus on innovation while maintaining a high-performance infrastructure Want to implement DevOps for your business? Contact us today to optimize your development and deployment processes",
    category: "Enhancing Deployment Efficiency with DevOps",
  },
  {
    title: "AI-ML & ERP Solutions for Business Optimization",
    client: "Single Step Associates",
    challenge:
      "Single Step Associates was struggling with inefficient business processes and a lack of data-driven decision-making capabilities. Their existing systems were siloed, making it difficult to extract meaningful insights.",
    solution: [
      "AI-Powered Predictive Analytics",
      "ERP Implementation",
      "Intelligent Automation",
      "Natural Language Processing (NLP)",
      "Data-Driven Decision Making",
    ],
    results: [
      "40% increase in operational efficiency",
      "Improved customer engagement with AI-based chatbots",
      "20% reduction in costs",
      "Enhanced data accuracy and forecasting",
    ],
    conclusion:
      "By leveraging AI-ML and ERP solutions, Single Step Associates successfully optimized its business operations, improved efficiency, and enhanced customer satisfaction.",
    category: "AI-ML & ERP Solutions for Business Optimization",
  },
  {
    title: "Frontend & Backend Design for Seamless User Experience",
    client: "Mahavir Home Decor",
    challenge:
      "Mahavir Home Decor was facing issues with an outdated website that lacked a modern user interface and a seamless backend system.",
    solution: [
      "Modern Frontend Redesign",
      "Optimized Backend Performance",
      "Seamless E-commerce Integration",
      "Payment & Security Enhancements",
      "Performance Optimization",
    ],
    results: [
      "50% faster website load times",
      "30% increase in online sales",
      "Improved backend scalability",
      "Enhanced security",
    ],
    conclusion:
      "By modernizing both the frontend and backend, Mahavir Home Decor successfully improved its online presence, enhanced customer experience, and boosted sales.",
    category: "Frontend & Backend Design for Seamless User Experience",
  },
  {
    title: "Custom CRM Software for Enhanced Business Operations",
    client: "Aayurvedam (a leading Ayurvedic healthcare provider)",
    challenge:
      "Aayurvedam struggled with managing customer relationships, appointment scheduling, and sales tracking. Their existing system relied on manual processes, leading to inefficiencies, missed follow-ups, and lack of centralized customer data.",
    solution: [
      "Centralized Customer Database",
      "Automated Appointment Scheduling",
      "Sales & Inventory Tracking",
      "Personalized Marketing Automation",
      "Secure Access & Role Management",
    ],
    results: [
      "40% increase in operational efficiency",
      "25% growth in customer retention",
      "Real-time insights and analytics",
      "Reduction in appointment scheduling errors by 50%",
    ],
    conclusion:
      "By implementing a custom CRM solution, Aayurvedam transformed its business operations, leading to improved efficiency, enhanced customer experience, and increased revenue. The solution provided a scalable foundation for future growth and digital transformation. Looking to streamline your business with a custom CRM solution? Contact us today for cutting-edge software development services!",
    category: "Custom CRM Software for Enhanced Business Operations",
  },
  {
    title: "CRM & ERP Web Apps with DevOps Tools",
    client: "MR Group Of Companies (a diversified business conglomerate)",
    challenge:
      "MR Group Of Companies faced operational inefficiencies due to fragmented data management, lack of process automation, and slow deployment cycles. Their existing CRM and ERP systems were outdated, leading to delays in decision-making, high maintenance costs, and inconsistent workflows across business units.",
    solution: [
      "Custom CRM & ERP Development",
      "Microservices Architecture",
      "CI/CD Pipeline Implementation",
      "Infrastructure as Code (IaC)",
      "Monitoring & Security",
    ],
    results: [
      "50% improvement in operational efficiency",
      "30% reduction in deployment time",
      "Enhanced security and compliance",
      "Scalability & future growth",
    ],
    conclusion:
      "By leveraging modern CRM & ERP web apps with DevOps tools, MR Group Of Companies achieved streamlined business operations, improved decision-making, and reduced costs. This transformation empowered them to scale efficiently while ensuring system reliability and security. Want to optimize your business processes with a powerful CRM & ERP solution? Contact us today for innovative IT solutions!",
    category: "CRM & ERP Web Apps with DevOps Tools",
  },
  {
    title:
      "Automation of Email Scheduler & Web Solution for Promotional Campaigns",
    client: "DIZTAL (a digital marketing solutions provider)",
    challenge:
      "DIZTAL needed an efficient and automated system to manage email scheduling and promotional campaign distribution. Their manual process resulted in inconsistencies, missed deadlines, and inefficient audience targeting, leading to lower engagement and conversion rates.",
    solution: [
      "Automated Email Scheduling",
      "Personalized Campaign Management",
      "User-Friendly Web Portal",
      "AI-Driven Optimization",
      "Security & Compliance",
    ],
    results: [
      "40% increase in email open rates",
      "50% time savings",
      "Improved audience targeting",
      "Scalability & reliability",
    ],
    conclusion:
      "By implementing an automated email scheduler and promotional campaign management system, DIZTAL significantly improved marketing efficiency, engagement, and conversion rates. The solution provided a scalable and reliable platform for future growth in digital marketing. Want to streamline your marketing campaigns with automation? Contact us today for innovative web solutions!",
    category:
      "Automation of Email Scheduler & Web Solution for Promotional Campaigns",
  },
  {
    title: "Android & iOS App Development with Web Solutions",
    client: "TS Pvt Ltd (a technology-driven enterprise)",
    challenge:
      "TS Pvt Ltd required a seamless digital ecosystem encompassing both mobile applications (Android & iOS) and a responsive web platform. Their existing system lacked mobile accessibility, user engagement, and efficient backend integration, limiting customer reach and operational effectiveness.",
    solution: [
      "Android & iOS App Development",
      "Custom Web Development",
      "Secure API Integration",
      "User Authentication & Security",
      "Scalability & Cloud Deployment",
    ],
    results: [
      "60% increase in customer engagement",
      "30% faster service delivery",
      "Unified digital experience",
      "Enhanced security & compliance",
    ],
    conclusion:
      "By implementing a fully integrated Android, iOS, and web solution, TS Pvt Ltd transformed its digital presence, improving user accessibility, engagement, and operational efficiency. This comprehensive approach enabled them to scale effectively in a competitive market. Want to build a mobile and web solution for your business? Contact us today for cutting-edge development services!",
    category: "Android & iOS App Development with Web Solutions",
  },
  {
    title: "AI Chatbot Development for Enhanced Customer Engagement",
    client: "Lotus Prints (a custom printing and merchandise company)",
    challenge:
      "Lotus Prints faced challenges in handling customer inquiries, order tracking, and support requests efficiently. Their manual customer service process resulted in delayed responses, increased workload on support staff, and reduced customer satisfaction.",
    solution: [
      "24/7 Automated Customer Support",
      "Natural Language Processing (NLP)",
      "Seamless Integration",
      "Order Tracking & Assistance",
      "Personalized Recommendations",
    ],
    results: [
      "50% reduction in response time",
      "40% decrease in manual support workload",
      "20% increase in sales conversions",
      "Scalable AI solution",
    ],
    conclusion:
      "By implementing a fully integrated Android, iOS, and web solution, TS Pvt Ltd transformed its digital presence, improving user accessibility, engagement, and operational efficiency. This comprehensive approach enabled them to scale effectively in a competitive market. Want to build a mobile and web solution for your business? Contact us today for cutting-edge development services!",
    category: "AI Chatbot Development for Enhanced Customer Engagement",
  },
  {
    title: "Data Solution for Efficient Resource Management",
    client: "Deccan Trees (a sustainable forestry and landscaping company)",
    challenge:
      "Deccan Trees faced difficulties in managing and analyzing vast amounts of environmental and operational data. The lack of a structured data solution led to inefficiencies in resource planning, inventory tracking, and sustainability reporting. Manual data processing also resulted in inaccuracies and delays in decision-making.",
    solution: [
      "Centralized Data Management System",
      "Automated Data Collection & Processing",
      "Advanced Analytics & AI-Driven Insights",
      "Interactive Dashboards & Reports",
      "Scalable & Secure Architecture",
    ],
    results: [
      "30% increase in operational efficiency",
      "25% reduction in resource wastage",
      "Real-time decision-making",
      "Enhanced accuracy",
    ],
    conclusion:
      "By implementing a robust data solution, Deccan Trees optimized resource management, improved efficiency, and enhanced sustainability initiatives. This data-driven approach positioned them as a leader in eco-friendly forestry and landscaping. Want to leverage data for smarter decision-making? Contact us today for innovative data solutions!",
    category: "Data Solution for Efficient Resource Management",
  },
  {
    title: "Seamless Data Migration from On-Premise to Cloud",
    client: "Theory Wise (an educational technology solutions provider)",
    challenge:
      "Theory Wise faced significant challenges with their legacy on-premise infrastructure, which resulted in high maintenance costs, limited scalability, and data accessibility issues. The company needed a secure, efficient, and scalable cloud migration strategy to modernize its data ecosystem and enhance performance.",
    solution: [
      "Comprehensive Assessment & Planning",
      "Cloud Infrastructure Setup",
      "Automated Data Migration",
      "Enhanced Security & Compliance",
      "Performance Optimization & Monitoring",
    ],
    results: [
      "40% reduction in operational costs",
      "Increased scalability",
      "99.9% uptime reliability",
      "Enhanced security and compliance",
    ],
    conclusion:
      "By migrating from on-premise to the cloud, Theory Wise achieved a modern, scalable, and cost-effective data infrastructure, improving operational efficiency and future-proofing their business. Looking to migrate your data to the cloud? Contact us today for a seamless cloud transition!",
    category: "Seamless Data Migration from On-Premise to Cloud",
  },
  {
    title: "Disaster Recovery and Cybersecurity Prevention",
    client: "Curios TeD (a digital learning and content platform)",
    challenge:
      "Curios TeD faced cybersecurity vulnerabilities and lacked a robust disaster recovery plan. Their existing infrastructure was susceptible to data breaches, ransomware attacks, and system failures, putting sensitive user data and business operations at risk. They needed a resilient security framework and disaster recovery strategy to ensure business continuity.",
    solution: [
      "Comprehensive Security Audit",
      "Advanced Threat Protection",
      "Data Backup & Disaster Recovery",
      "Incident Response & Monitoring",
      "Compliance & Governance",
    ],
    results: [
      "99.99% uptime achieved",
      "80% reduction in cybersecurity threats",
      "Zero data loss incidents",
      "Improved compliance posture",
    ],
    conclusion:
      "With a strong cybersecurity and disaster recovery framework, Curios TeD now operates with enhanced security, reduced risks, and seamless business continuity, ensuring uninterrupted digital learning experiences for users. Looking to strengthen your cybersecurity and disaster recovery strategy? Contact us today for a tailored solution!",
    category: "Disaster Recovery and Cybersecurity Prevention",
  },
  {
    title: "Automation Solution with Terraform IaC and Jenkins CI/CD",
    client: "Craffictra (a transportation and logistics solutions provider)",
    challenge:
      "Craffictra required a highly automated and scalable infrastructure to support its growing business demands. Their existing infrastructure provisioning process was manual, leading to delays, inconsistencies, and increased operational costs. Additionally, they lacked an efficient CI/CD pipeline and real-time monitoring for performance tracking.",
    solution: [
      "Infrastructure as Code (IaC) with Terraform",
      "CI/CD Pipeline with Jenkins",
      "Automated Monitoring & Logging",
      "Security & Compliance Automation",
      "Scalability & High Availability",
    ],
    results: [
      "60% reduction in infrastructure deployment time",
      "40% faster release cycles",
      "Improved system reliability and uptime",
      "Enhanced security compliance",
    ],
    conclusion:
      "By leveraging Terraform IaC, Jenkins CI/CD, and a full suite of monitoring tools, Craffictra successfully automated its infrastructure and deployment processes. This transformation resulted in improved efficiency, scalability, and security for their operations. Looking to automate your infrastructure and CI/CD pipelines? Contact us today for cutting-edge DevOps solutions!",
    category: "Automation Solution with Terraform IaC and Jenkins CI/CD",
  },
];

function Appp() {
  <div className="video-container">
    <video autoPlay loop muted playsInline>
      <source
        src="https://cdn.pixabay.com/video/2020/08/12/46965-449623750_large.mp4"
        type="video/mp4"
      />
    </video>
  </div>;
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(caseStudies.map((study) => study.category)),
  ];

  const filteredStudies =
    selectedCategory === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % filteredStudies.length);
  };

  const prevCase = () => {
    setActiveIndex(
      (prev) => (prev - 1 + filteredStudies.length) % filteredStudies.length
    );
  };

  const activeCase = filteredStudies[activeIndex];

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
      <div className="app">
        <header className="header">
          <h1>Case Study</h1>
          <p>
            Discover how our innovative solutions transformed businesses across
            industries.
          </p>
        </header>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setActiveIndex(0);
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="case-study-container">
          <button className="nav-btn prev" onClick={prevCase}>
            <ChevronLeft />
          </button>

          <div className="case-study-content">
            <div className="case-header">
              <span className="category-tag">{activeCase.category}</span>
              <h2>{activeCase.title}</h2>
              <h3>{activeCase.client}</h3>
            </div>

            <div className="case-body">
              <section className="challenge">
                <h4>The Challenge</h4>
                <p>{activeCase.challenge}</p>
              </section>

              <section className="solution">
                <h4>Our Solution</h4>
                <ul>
                  {activeCase.solution.map((item, index) => (
                    <li key={index}>
                      <CheckCircle2 className="icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="results">
                <h4>Key Results</h4>
                <div className="results-grid">
                  {activeCase.results.map((result, index) => (
                    <div key={index} className="result-card">
                      <BarChart2 className="icon" />
                      <p>{result}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="conclusion">
                <h4>Conclusion</h4>
                <p>{activeCase.conclusion}</p>
              </section>

              <a href="/contactus" className="case-link"> 
              <button className="contact-btn">
                Contact Us Today
                <ArrowUpRight className="icon" />
              </button>
              </a>
            </div>
          </div>

          <button className="nav-btn next" onClick={nextCase}>
            <ChevronRight />
          </button>
        </div>

        <div className="pagination">
          {filteredStudies.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <style>
          {`
          .contact-btn{
            text-decoration: none;
  text-transform: none;
          }
          `}
        </style>
      </div>
    </>
  );
}

export default Appp;
