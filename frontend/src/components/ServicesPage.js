import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";

import Navbar from "./Navbar";

function TestimonialCard({ name, role, content, image }) {
  return (
    <>


    <div className="retestimonial-card">
      <div className="retestimonial-header">
        <img src={image} alt={name} className="retestimonial-image" />
        <div>
          <h4 className="retestimonial-name">{name}</h4>
          <p className="retestimonial-role">{role}</p>
        </div>
      </div>
      <p className="retestimonial-content">&ldquo;{content}&rdquo;</p>
    </div>
    </>
  );
}



export default function ServicesPage() {
  // const scrollRef = useRef(null);
    const wrapperRef = useRef(null);
      const isDragging = useRef(false);
      //  const [isHovered, setIsHovered] = useState(false);
  // logos slider
  const clientLogos = [
    {
      id: 1,
      name: "Microsoft",
      logo: "/images/a.png",
    },
    {
      id: 2,
      name: "Google",
      logo: "/images/d.png",
    },
    {
      id: 3,
      name: "Amazon",
      logo: "/images/c.png",
    },
    {
      id: 32,
      name: "Salesforce",
      logo: "/images/g1.png",
    },
    {
      id: 33,
      name: "Salesforce",
      logo: "/images/h1.png",
    },
    {
      id: 4,
      name: "IBM",
      logo: "/images/f.png",
    },
    // {
    //   id: 5,
    //   name: "Oracle",
    //   logo: "/images/e.png",
    // },
    {
      id: 6,
      name: "Salesforce",
      logo: "/images/b.png",
    },
    {
      id: 7,
      name: "Google",
      logo: "/images/g.png",
    },
    {
      id: 8,
      name: "Amazon",
      logo: "/images/h.png",
    },
    {
      id: 9,
      name: "IBM",
      logo: "/images/k.png",
    },
    {
      id: 10,
      name: "O  racle",
      logo: "/images/j.png",
    },

    {
      id: 36,
      name: "Salesforce",
      logo: "/images/k1.png",
    },
    {
      id: 23,
      name: "Salesforce",
      logo: "/images/x.png",
    },
    {
      id: 21,
      name: "Salesforce",
      logo: "/images/v.png",
    },
    {
      id: 22,
      name: "Salesforce",
      logo: "/images/w.png",
    },
    {
      id: 26,
      name: "Salesforce",
      logo: "/images/a1.png",
    },
    {
      id: 28,
      name: "Salesforce",
      logo: "/images/c1.png",
    },

    {
      id: 24,
      name: "Salesforce",
      logo: "/images/y.png",
    },
    {
      id: 39,
      name: "Salesforce",
      logo: "/images/n1.png",
    },
    // {
    //   id: 40,
    //   name: "Salesforce",
    //   logo: "/images/o1.png",
    // },
    {
      id: 25,
      name: "Salesforce",
      logo: "/images/z.png",
    },
    {
      id: 15,
      name: "Salesforce",
      logo: "/images/p.png",
    },
    {
      id: 16,
      name: "Salesforce",
      logo: "/images/q.png",
    },
    // {
    //   id: 41,
    //   name: "Salesforce",
    //   logo: "/images/aws.png",
    // },
    {
      id: 27,
      name: "Salesforce",
      logo: "/images/b1.png",
    },
    {
      id: 29,
      name: "Salesforce",
      logo: "/images/d1.png",
    },
    {
      id: 30,
      name: "Salesforce",
      logo: "/images/e1.png",
    },
    {
      id: 13,
      name: "Salesforce",
      logo: "/images/n.png",
    },
    {
      id: 38,
      name: "Salesforce",
      logo: "/images/m1.png",
    },
    {
      id: 14,
      name: "Salesforce",
      logo: "/images/o.png",
    },

    {
      id: 17,
      name: "Salesforce",
      logo: "/images/r.png",
    },
    {
      id: 11,
      name: "Salesforce",
      logo: "/images/i.png",
    },
    {
      id: 12,
      name: "Salesforce",
      logo: "/images/l.png",
    },
    {
      id: 18,
      name: "Salesforce",
      logo: "/images/s.png",
    },
    {
      id: 19,
      name: "Salesforce",
      logo: "/images/t.png",
    },
    {
      id: 20,
      name: "Salesforce",
      logo: "/images/u.png",
    },
    {
      id: 37,
      name: "Salesforce",
      logo: "/images/l1.png",
    },

    {
      id: 35,
      name: "Salesforce",
      logo: "/images/j1.png",
    },

    {
      id: 34,
      name: "Salesforce",
      logo: "/images/i1.png",
    },

    {
      id: 31,
      name: "Salesforce",
      logo: "/images/f1.png",
    },
  ];



  const clients = [
    {
      id: 1,
      name: "Liam Anderson",
      position: "Senior Automation Engineer, FlowTech Solutions",
      company: " Industrial Automation, PLC Integration, Process Optimization",
      image:
        "/images/liam.png",
      testimonial: "Liam Anderson was facing repeated downtimes in his assembly unit due to outdated systems. After collaborating with ITSoftlab, he successfully integrated smart sensors and automation panels. Downtime reduced by 60%, and productivity skyrocketed.",
      rating: 5,
    },
    {
      id: 2,
      name: "Olivia Brooks",
      position: "Plant Manager, NovaTech Industries",
      company: "Quality Control, Project Management, AI Integration",
      image:
        "/images/olivia.png",
      testimonial: "Olivia Brooks led a major upgrade project using ITSoftlab’s AI-based inspection systems. Under her leadership, defect rates dropped significantly, and product quality reached international standards.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ethan Parker",
      position: "Mechanical Design Engineer, Mechtronix Pvt. Ltd.",
      company: "CAD Designing, Process Engineering, Modular Systems",
      image:
        "/images/ethan.png",
      testimonial: "Ethan Parker redesigned their packaging unit with the help of ITSoftlab's modular solutions. The result was a 40% increase in speed without compromising accuracy. His design became the new standard for future expansions.",
      rating: 5,
    },
    {
      id: 4,
      name: "Emma Sullivan",
      position: "Head of Innovation, SteelForge Group",
      company: "R&D, Sustainable Manufacturing, Energy Efficiency",
      image:
        "/images/emma.png",
      testimonial: "Emma Sullivan partnered with ITSoftlab to test and implement an energy-saving conveyor system. The pilot project not only saved power but also earned her team an industry award.",
      rating: 4,
    },
    {
      id: 5,
      name: "Noah Bennett",
      position: "Electrical Engineer, ElecMaster Automation",
      company: "Circuit Design, Load Balancing, Smart Control Systems",
      image:
        "/images/noah.png",
      testimonial: "Noah Bennett implemented ITSoftlab’s smart control units in their HVAC manufacturing line. His proactive approach helped reduce electrical faults and optimize load management.",
      rating: 5,
    },
    {
      id: 6,
      name: "Ava Mitchell",
      position: "Operations Supervisor, ThermoFab Ltd.",
      company: "Operations Analysis, Real-time Monitoring, Team Leadership",
      image:
        "/images/ava.png",
      testimonial: "With ITSoftlab’s real-time monitoring systems, Ava was able to identify bottlenecks in the heat treatment section and resolve them efficiently. The plant saw a 25% boost in throughput.",
      rating: 4,
    },
    {
      id: 7,
      name: "Lucas Hayes",
      position: "Maintenance Lead, Machino Industries",
      company: "Predictive Maintenance, Fault Detection, Preventive Planning",
      image:
        "/images/lucas.png",
      testimonial: "Lucas Hayes introduced predictive maintenance tools from ITSoftlab into his team’s workflow. Unexpected failures dropped, maintenance costs went down, and uptime hit a record high.",
      rating: 4,
    },
  ];

   useEffect(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
  
      let scrollSpeed = 1.7; // kitni speed se chale
      let rafId;
  
      const autoScroll = () => {
        if (!isDragging.current) {
          wrapper.scrollLeft += scrollSpeed;
          if (wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.clientWidth) {
            wrapper.scrollLeft = 0; // wapas starting
          }
        }
        rafId = requestAnimationFrame(autoScroll);
      };
  
      rafId = requestAnimationFrame(autoScroll);
  
      return () => cancelAnimationFrame(rafId);
    }, []);

   

    
    

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
      <main className="services-main">
        <section className="heroo-sectionn">
          <div className="container">
            <div classNamehero="-content">
              <h1 className="hero-title">Our Services</h1>
              <p className="hero-text">
                Welcome to ITSoftlab, your go-to partner for comprehensive IT
                solutions. Whether you are a small business looking to optimize
                your IT infrastructure or a large enterprise seeking
                cutting-edge digital transformation, we are here to provide
                innovative, customized, and scalable IT services.{" "}
              </p>
            </div>
          </div>
        </section>







        <div className="spservices">
          <h2 className="spservices-title">Our Comprehensive Services</h2>
          <p className="spservices-subtitle">
            We offer a wide range of IT solutions designed to help your business
            grow, innovate, and stay ahead of the competition.
          </p>


          <div className="scroll-wrapper">
          <div className="spservices-cards">
            {/* Card 1 */}
            <div className="spservice-card">
              <div className="spcard-header1"></div>
              <div className="spcard-content">
                <h3> AI/ML Solutions</h3>
                <p>
                  Leverage the power of artificial intelligence and machine
                  learning to transform your business with intelligent
                  automation, predictive analytics, and data-driven insights.
                </p>
                <ul>
                  <li>✔️ Custom AI model development</li>
                  <li>✔️ Machine learning implementation</li>
                  <li>✔️ Natural language processing</li>
                  <li>✔️ Computer vision solutions</li>
                  <li>✔️ Predictive analytics</li>
                </ul>
                {/* <button>Learn More</button> */}
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header2"></div>
              <div className="spcard-content">
                <h3> Cloud Solutions</h3>
                <p>
                  Migrate, optimize, and manage your cloud infrastructure with
                  our comprehensive cloud solutions designed for scalability,
                  security, and cost-efficiency.
                </p>
                <ul>
                  <li>✔️ Cloud migration strategies</li>
                  <li>✔️ Multi-cloud management</li>
                  <li>✔️ Cloud optimization</li>
                  <li>✔️ Serverless architecture</li>
                  <li>✔️ Cloud security implementation</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header3"></div>
              <div className="spcard-content">
                <h3> Data Solutions</h3>
                <p>
                  Unlock the value of your data with our end-to-end data
                  management, analytics, and visualization solutions that drive
                  informed decision-making.
                </p>
                <ul>
                  <li>✔️ Big data architecture</li>
                  <li>✔️ Data warehousing</li>
                  <li>✔️ Business intelligence</li>
                  <li>✔️ Data visualization</li>
                  <li>✔️ ETL pipeline development</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header4"></div>
              <div className="spcard-content">
                <h3> DevOps</h3>
                <p>
                Streamline your development and operations with our DevOps services that enhance collaboration, automation, and continuous delivery pipelines. We help organizations implement DevOps practices to accelerate software delivery, improve quality, and increase operational efficiency.
                </p>
                <ul>
                  <li>✔️ CI/CD pipeline implementation</li>
                  <li>✔️ Infrastructure as Code</li>
                  <li>✔️ Containerization with Docker</li>
                  <li>✔️ Kubernetes orchestration</li>
                  <li>✔️ Automated testing frameworks</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header5"></div>
              <div className="spcard-content">
                <h3>Software Development</h3>
                <p>
                Create custom software solutions tailored to your specific business needs with our expert development team using cutting-edge technologies. We follow agile methodologies to deliver high-quality software that solves real business problems and provides a competitive advantage.
                </p>
                <ul>
                  <li>✔️ Custom software development</li>
                  <li>✔️ Legacy system modernization</li>
                  <li>✔️ API development and integration</li>
                  <li>✔️ Enterprise application development</li>
                  <li>✔️ Quality assurance and testing</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header6"></div>
              <div className="spcard-content">
                <h3>Web App Development</h3>
                <p>
                Build responsive, high-performance web applications that deliver exceptional user experiences across all devices and platforms. Our web development team creates modern, scalable, and secure web applications that help businesses engage customers and streamline operations.
                </p>
                <ul>
                  <li>✔️ Progressive Web Apps (PWAs)</li>
                  <li>✔️ Single Page Applications (SPAs)</li>
                  <li>✔️ E-commerce platforms</li>
                  <li>✔️ Content Management Systems</li>
                  <li>✔️ Custom web portals</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header7"></div>
              <div className="spcard-content">
                <h3>Android/iOS App Development</h3>
                <p>
                Develop native and cross-platform mobile applications that engage users and extend your digital presence to mobile devices. Our mobile app development team creates intuitive, feature-rich applications that provide seamless experiences across iOS and Android platforms.
                </p>
                <ul>
                  <li>✔️ Native iOS development</li>
                  <li>✔️ Native Android development</li>
                  <li>✔️ Cross-platform development</li>
                  <li>✔️ Mobile app UI/UX design</li>
                  <li>✔️ App store optimization</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header8"></div>
              <div className="spcard-content">
                <h3>SaaS Services</h3>
                <p>
                Deploy and manage Software-as-a-Service solutions that provide flexibility, accessibility, and reduced maintenance overhead. Our SaaS expertise helps businesses transition to subscription-based models, improving scalability and reducing total cost of ownership.
                </p>
                <ul>
                  <li>✔️ SaaS platform development</li>
                  <li>✔️ Multi-tenant architecture</li>
                  <li>✔️ Subscription management</li>
                  <li>✔️ SaaS integration services</li>
                  <li>✔️ SaaS migration strategies</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header9"></div>
              <div className="spcard-content">
                <h3>PaaS Services</h3>
                <p>
                Utilize our Platform-as-a-Service offerings to accelerate application development and deployment with pre-configured environments. Our PaaS solutions provide developers with the tools and infrastructure needed to build, test, and deploy applications quickly and efficiently.
                </p>
                <ul>
                  <li>✔️ Custom PaaS implementation</li>
                  <li>✔️ Development environment setup</li>
                  <li>✔️ Deployment automation</li>
                  <li>✔️ Scalable application platforms</li>
                  <li>✔️ PaaS monitoring and management</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header10"></div>
              <div className="spcard-content">
                <h3>IaaS Services</h3>
                <p>
                Scale your infrastructure on-demand with our Infrastructure-as-a-Service solutions providing virtualized computing resources. Our IaaS offerings give you the flexibility to provision and manage computing, storage, and networking resources as needed, without capital expenditure.
                </p>
                <ul>
                  <li>✔️ Virtual machine provisioning</li>
                  <li>✔️ Storage solutions</li>
                  <li>✔️ Network infrastructure</li>
                  <li>✔️ Load balancing</li>
                  <li>✔️ Disaster recovery infrastructure</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header11"></div>
              <div className="spcard-content">
                <h3>Cyber Security</h3>
                <p>
                Protect your digital assets with our comprehensive security services including threat detection, prevention, and incident response. Our security experts help you identify vulnerabilities, implement robust security controls, and develop incident response plans to protect your business.


                </p>
                <ul>
                  <li>✔️ Security assessment and auditing</li>
                  <li>✔️ Penetration testing</li>
                  <li>✔️ Security monitoring</li>
                  <li>✔️ Compliance management</li>
                  <li>✔️ Security awareness training</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header12"></div>
              <div className="spcard-content">
                <h3>Disaster Recovery Solution</h3>
                <p>
                Ensure business continuity with our robust disaster recovery solutions designed to minimize downtime and data loss during disruptions. We help you develop and implement comprehensive disaster recovery plans that protect your critical systems and data from unexpected events.
                </p>
                <ul>
                  <li>✔️ Business continuity planning</li>
                  <li>✔️ Backup and recovery solutions</li>
                  <li>✔️ High availability systems</li>
                  <li>✔️ Disaster recovery testing</li>
                  <li>✔️ Recovery time optimization</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header1"></div>
              <div className="spcard-content">
                <h3> AI/ML Solutions</h3>
                <p>
                  Leverage the power of artificial intelligence and machine
                  learning to transform your business with intelligent
                  automation, predictive analytics, and data-driven insights.
                </p>
                <ul>
                  <li>✔️ Custom AI model development</li>
                  <li>✔️ Machine learning implementation</li>
                  <li>✔️ Natural language processing</li>
                  <li>✔️ Computer vision solutions</li>
                  <li>✔️ Predictive analytics</li>
                </ul>
                {/* <button>Learn More</button> */}
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header2"></div>
              <div className="spcard-content">
                <h3> Cloud Solutions</h3>
                <p>
                  Migrate, optimize, and manage your cloud infrastructure with
                  our comprehensive cloud solutions designed for scalability,
                  security, and cost-efficiency.
                </p>
                <ul>
                  <li>✔️ Cloud migration strategies</li>
                  <li>✔️ Multi-cloud management</li>
                  <li>✔️ Cloud optimization</li>
                  <li>✔️ Serverless architecture</li>
                  <li>✔️ Cloud security implementation</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header3"></div>
              <div className="spcard-content">
                <h3> Data Solutions</h3>
                <p>
                  Unlock the value of your data with our end-to-end data
                  management, analytics, and visualization solutions that drive
                  informed decision-making.
                </p>
                <ul>
                  <li>✔️ Big data architecture</li>
                  <li>✔️ Data warehousing</li>
                  <li>✔️ Business intelligence</li>
                  <li>✔️ Data visualization</li>
                  <li>✔️ ETL pipeline development</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header4"></div>
              <div className="spcard-content">
                <h3> DevOps</h3>
                <p>
                Streamline your development and operations with our DevOps services that enhance collaboration, automation, and continuous delivery pipelines. We help organizations implement DevOps practices to accelerate software delivery, improve quality, and increase operational efficiency.
                </p>
                <ul>
                  <li>✔️ CI/CD pipeline implementation</li>
                  <li>✔️ Infrastructure as Code</li>
                  <li>✔️ Containerization with Docker</li>
                  <li>✔️ Kubernetes orchestration</li>
                  <li>✔️ Automated testing frameworks</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header5"></div>
              <div className="spcard-content">
                <h3>Software Development</h3>
                <p>
                Create custom software solutions tailored to your specific business needs with our expert development team using cutting-edge technologies. We follow agile methodologies to deliver high-quality software that solves real business problems and provides a competitive advantage.
                </p>
                <ul>
                  <li>✔️ Custom software development</li>
                  <li>✔️ Legacy system modernization</li>
                  <li>✔️ API development and integration</li>
                  <li>✔️ Enterprise application development</li>
                  <li>✔️ Quality assurance and testing</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header6"></div>
              <div className="spcard-content">
                <h3>Web App Development</h3>
                <p>
                Build responsive, high-performance web applications that deliver exceptional user experiences across all devices and platforms. Our web development team creates modern, scalable, and secure web applications that help businesses engage customers and streamline operations.
                </p>
                <ul>
                  <li>✔️ Progressive Web Apps (PWAs)</li>
                  <li>✔️ Single Page Applications (SPAs)</li>
                  <li>✔️ E-commerce platforms</li>
                  <li>✔️ Content Management Systems</li>
                  <li>✔️ Custom web portals</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header7"></div>
              <div className="spcard-content">
                <h3>Android/iOS App Development</h3>
                <p>
                Develop native and cross-platform mobile applications that engage users and extend your digital presence to mobile devices. Our mobile app development team creates intuitive, feature-rich applications that provide seamless experiences across iOS and Android platforms.
                </p>
                <ul>
                  <li>✔️ Native iOS development</li>
                  <li>✔️ Native Android development</li>
                  <li>✔️ Cross-platform development</li>
                  <li>✔️ Mobile app UI/UX design</li>
                  <li>✔️ App store optimization</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header8"></div>
              <div className="spcard-content">
                <h3>SaaS Services</h3>
                <p>
                Deploy and manage Software-as-a-Service solutions that provide flexibility, accessibility, and reduced maintenance overhead. Our SaaS expertise helps businesses transition to subscription-based models, improving scalability and reducing total cost of ownership.
                </p>
                <ul>
                  <li>✔️ SaaS platform development</li>
                  <li>✔️ Multi-tenant architecture</li>
                  <li>✔️ Subscription management</li>
                  <li>✔️ SaaS integration services</li>
                  <li>✔️ SaaS migration strategies</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header9"></div>
              <div className="spcard-content">
                <h3>PaaS Services</h3>
                <p>
                Utilize our Platform-as-a-Service offerings to accelerate application development and deployment with pre-configured environments. Our PaaS solutions provide developers with the tools and infrastructure needed to build, test, and deploy applications quickly and efficiently.
                </p>
                <ul>
                  <li>✔️ Custom PaaS implementation</li>
                  <li>✔️ Development environment setup</li>
                  <li>✔️ Deployment automation</li>
                  <li>✔️ Scalable application platforms</li>
                  <li>✔️ PaaS monitoring and management</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header10"></div>
              <div className="spcard-content">
                <h3>IaaS Services</h3>
                <p>
                Scale your infrastructure on-demand with our Infrastructure-as-a-Service solutions providing virtualized computing resources. Our IaaS offerings give you the flexibility to provision and manage computing, storage, and networking resources as needed, without capital expenditure.
                </p>
                <ul>
                  <li>✔️ Virtual machine provisioning</li>
                  <li>✔️ Storage solutions</li>
                  <li>✔️ Network infrastructure</li>
                  <li>✔️ Load balancing</li>
                  <li>✔️ Disaster recovery infrastructure</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header11"></div>
              <div className="spcard-content">
                <h3>Cyber Security</h3>
                <p>
                Protect your digital assets with our comprehensive security services including threat detection, prevention, and incident response. Our security experts help you identify vulnerabilities, implement robust security controls, and develop incident response plans to protect your business.


                </p>
                <ul>
                  <li>✔️ Security assessment and auditing</li>
                  <li>✔️ Penetration testing</li>
                  <li>✔️ Security monitoring</li>
                  <li>✔️ Compliance management</li>
                  <li>✔️ Security awareness training</li>
                </ul>
              </div>
            </div>

            <div className="spservice-card">
              <div className="spcard-header12"></div>
              <div className="spcard-content">
                <h3>Disaster Recovery Solution</h3>
                <p>
                Ensure business continuity with our robust disaster recovery solutions designed to minimize downtime and data loss during disruptions. We help you develop and implement comprehensive disaster recovery plans that protect your critical systems and data from unexpected events.
                </p>
                <ul>
                  <li>✔️ Business continuity planning</li>
                  <li>✔️ Backup and recovery solutions</li>
                  <li>✔️ High availability systems</li>
                  <li>✔️ Disaster recovery testing</li>
                  <li>✔️ Recovery time optimization</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>



        <section class="process-section">
          <h2>Our Proven Process</h2>
          <p class="subheading">
          Our proven process ensures that we deliver consistent,
          high-quality results for every client.
          </p>

          <div className="scroll-wrapper">
          <div class="process-grid">
            <div class="process-card">
              {/* <h3>06</h3> */}
              <h4>Ongoing Support & Optimization</h4>
              <p>
                Our relationship continues with dedicated support, maintenance,
                and continuous optimization of your solutions.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>01</h3> */}
              <h4>Discovery & Analysis</h4>
              <p>
                We begin by understanding your business needs, challenges, and
                goals through in-depth consultations and analysis.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>02</h3> */}
              <h4>Strategic Planning</h4>
              <p>
                Our experts develop a comprehensive strategy and roadmap
                tailored to your specific requirements and objectives.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>03</h3> */}
              <h4>Implementation</h4>
              <p>
                We execute the plan with precision, leveraging our technical
                expertise and industry best practices.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>04</h3> */}
              <h4>Testing & Quality Assurance</h4>
              <p>
                Rigorous testing ensures that all solutions meet our high
                standards for performance, security, and reliability.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>05</h3> */}
              <h4>Deployment & Integration</h4>
              <p>
                We seamlessly deploy and integrate solutions into your existing
                infrastructure with minimal disruption.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>06</h3> */}
              <h4>Ongoing Support & Optimization</h4>
              <p>
                Our relationship continues with dedicated support, maintenance,
                and continuous optimization of your solutions.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>01</h3> */}
              <h4>Discovery & Analysis</h4>
              <p>
                We begin by understanding your business needs, challenges, and
                goals through in-depth consultations and analysis.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>06</h3> */}
              <h4>Ongoing Support & Optimization</h4>
              <p>
                Our relationship continues with dedicated support, maintenance,
                and continuous optimization of your solutions.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>01</h3> */}
              <h4>Discovery & Analysis</h4>
              <p>
                We begin by understanding your business needs, challenges, and
                goals through in-depth consultations and analysis.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>02</h3> */}
              <h4>Strategic Planning</h4>
              <p>
                Our experts develop a comprehensive strategy and roadmap
                tailored to your specific requirements and objectives.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>03</h3> */}
              <h4>Implementation</h4>
              <p>
                We execute the plan with precision, leveraging our technical
                expertise and industry best practices.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>04</h3> */}
              <h4>Testing & Quality Assurance</h4>
              <p>
                Rigorous testing ensures that all solutions meet our high
                standards for performance, security, and reliability.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>05</h3> */}
              <h4>Deployment & Integration</h4>
              <p>
                We seamlessly deploy and integrate solutions into your existing
                infrastructure with minimal disruption.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>06</h3> */}
              <h4>Ongoing Support & Optimization</h4>
              <p>
                Our relationship continues with dedicated support, maintenance,
                and continuous optimization of your solutions.
              </p>
            </div>

            <div class="process-card">
              {/* <h3>01</h3> */}
              <h4>Discovery & Analysis</h4>
              <p>
                We begin by understanding your business needs, challenges, and
                goals through in-depth consultations and analysis.
              </p>
            </div>

          </div>
          </div>






        </section>



        <section className="how-we-work-section">
          <div className="contaiiner">
            <div className="section-header">
              {/* <h2 className="section-title">How We Work</h2> */}
              {/* <div className="section-divider"></div> */}
              {/* <p className="section-text">
                Our proven process ensures that we deliver consistent,
                high-quality results for every client.
              </p> */}
            </div>

            <div className="work-steps">
              {["Consultation", "Analysis", "Implementation", "Evaluation"].map(
                (step, index) => (
                  <div key={index} className="work-step">
                    <div className="step-number">{index + 1}</div>
                    <h3 className="step-titleee">{step}</h3>
                    <p className="step-descriptionnn">
                      {index === 0 &&
                        "We begin by understanding your specific needs and goals."}
                      {index === 1 &&
                        "Our experts analyze your situation and develop a tailored strategy."}
                      {index === 2 &&
                        "We implement the agreed-upon solutions efficiently and effectively."}
                      {index === 3 &&
                        "We measure results and make adjustments to ensure optimal outcomes."}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>





        

        

        
        {/* Testimonials */}
        <div className="remb-20">
          <h2 className="resection-title2">What Our Client's Say</h2>
          <div className="csscroll-wrapper">
          <div className="regrid5 grid-cols-3">
          
            
            <TestimonialCard
              name="James Carter"
              role="Production Head, MechaWorks Pvt. Ltd."
              content="We’ve been working with ITSoftlab for over a year now, and their machinery has consistently delivered precision and reliability. Our production rate has improved by 30%, and breakdowns have reduced drastically. Highly recommended!"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <TestimonialCard
              name="Sophia Reed"
              role="Quality Analyst, TechMet Industries"
              content="The advanced solutions from ITSoftlab have completely transformed our quality inspection process. What once took hours is now completed in minutes, with greater accuracy. Their team’s support is also top-notch."
              image="https://cdn.pixabay.com/photo/2014/07/31/22/50/photographer-407068_640.jpg"
            />
            <TestimonialCard
              name=" Henry Collins"
              role="Operations Manager, SteelAxis Corp."
              content="From day one, ITSoftlab has proven to be a dependable partner. Their custom solutions are tailored perfectly to our production line, and their service team is always ready to help. We're proud to be associated with them."
              image="https://cdn.pixabay.com/photo/2022/10/17/15/02/photography-7527978_640.jpg"
            />
             <TestimonialCard
              name="Isabella Morgan"
              role="Project Engineer, NovaFab Industries"
              content="ITSoftlab’s innovative approach helped us integrate automation without disrupting our ongoing operations. The transition was seamless, and the results were immediate. Their after-sales service deserves a special mention."
              image="https://cdn.pixabay.com/photo/2020/04/09/14/42/girls-5021801_640.jpg"
            />
             <TestimonialCard
              name="Mason Turner"
              role="Technical Director, FlowMech Systems"
              content="Implementing ITSoftlab’s solutions brought a visible improvement in our machine efficiency and product consistency. They understand industrial challenges and provide real solutions, not just equipment."
              image="https://cdn.pixabay.com/photo/2019/06/05/19/49/man-4254423_640.jpg"
            />
             <TestimonialCard
              name="Mia Harper"
              role="Plant Supervisor, ElectroFab Pvt. Ltd."
              content="The team at ITSoftlab is not only technically sound but also incredibly responsive. Their ability to customize machines to fit our exact needs has helped us stay ahead of our competitors."
              image="https://cdn.pixabay.com/photo/2018/01/01/06/01/nature-3053623_640.jpg"
            />
             <TestimonialCard
              name="James Carter"
              role="Production Head, MechaWorks Pvt. Ltd."
              content="We’ve been working with ITSoftlab for over a year now, and their machinery has consistently delivered precision and reliability. Our production rate has improved by 30%, and breakdowns have reduced drastically. Highly recommended!"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <TestimonialCard
              name="Sophia Reed"
              role="Quality Analyst, TechMet Industries"
              content="The advanced solutions from ITSoftlab have completely transformed our quality inspection process. What once took hours is now completed in minutes, with greater accuracy. Their team’s support is also top-notch."
              image="https://cdn.pixabay.com/photo/2014/07/31/22/50/photographer-407068_640.jpg"
            />
            <TestimonialCard
              name=" Henry Collins"
              role="Operations Manager, SteelAxis Corp."
              content="From day one, ITSoftlab has proven to be a dependable partner. Their custom solutions are tailored perfectly to our production line, and their service team is always ready to help. We're proud to be associated with them."
              image="https://cdn.pixabay.com/photo/2022/10/17/15/02/photography-7527978_640.jpg"
            />
             <TestimonialCard
              name="Isabella Morgan"
              role="Project Engineer, NovaFab Industries"
              content="ITSoftlab’s innovative approach helped us integrate automation without disrupting our ongoing operations. The transition was seamless, and the results were immediate. Their after-sales service deserves a special mention."
              image="https://cdn.pixabay.com/photo/2020/04/09/14/42/girls-5021801_640.jpg"
            />
             <TestimonialCard
              name="Mason Turner"
              role="Technical Director, FlowMech Systems"
              content="Implementing ITSoftlab’s solutions brought a visible improvement in our machine efficiency and product consistency. They understand industrial challenges and provide real solutions, not just equipment."
              image="https://cdn.pixabay.com/photo/2019/06/05/19/49/man-4254423_640.jpg"
            />
             <TestimonialCard
              name="Mia Harper"
              role="Plant Supervisor, ElectroFab Pvt. Ltd."
              content="The team at ITSoftlab is not only technically sound but also incredibly responsive. Their ability to customize machines to fit our exact needs has helped us stay ahead of our competitors."
              image="https://cdn.pixabay.com/photo/2018/01/01/06/01/nature-3053623_640.jpg"
            />
            </div>
          </div>
        </div>






    <div className="containerrrrrrrr">
       <h3 className="headingggg">Trusted by Industry Leaders</h3>
        <div className="logocard-slideerr-container">
          <div className="logocardds-slider-track">
            <div className="logos-containerrr">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="logo-wrapperrr"
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="logo-imageee"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>





      

      <section className="success-section">
              <div className="contaiiiner">
                <h2 className="section-titleii">More Success Stories</h2>
                {/* Auto-scrolling wrapper */}
                <div
                  className="auto-scroll-wrapper"
                  ref={wrapperRef}
                >
                  <div className="auto-scroll-track">
                    {clients.concat(clients).map((client, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="card scroll-card"
                      >
                        <div className="card-header">
                          <div className="profile">
                            <img
                              src={client.image}
                              alt={client.name}
                              className="profile-img"
                            />
                            <div>
                              <h3 className="profile-name">{client.name}</h3>
                              <p className="profile-position">{client.position}</p>
                            </div>
                          </div>
                        </div>
                        <p className="testimonial">"{client.testimonial}"</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

        





















        <section className="ctata-sectionn">
          <div className="contaiinerr text-center">
            <h2 className="ctata-title">Ready to Get Started?</h2>
            <p className="ctata-text">
              Contact us today to discuss how our services can benefit your
              business.
            </p>
            <Link to="/contactus">
              <button className="ctata-button">Contact Us</button>
            </Link>
          </div>
        </section>
      </main>
      <style>
        {`/* General Styling */
/* 













// .scroll-wrapper {
//   display: flex;
//   overflow-x: auto;
//   gap: 20px;
//   padding: 20px 0;
//   scroll-behavior: smooth;
//   scrollbar-width: none; /* Firefox ke liye */
//   -ms-overflow-style: none; /* IE 10+ ke liye */
// }

.scroll-wrapper::-webkit-scrollbar {
  display: none; /* Chrome, Safari ke liye */
}

// .scroll-wrapper {
//   display: flex;
//   overflow-x: auto;
//   gap: 20px;
//   padding: 20px 0;
//   scroll-behavior: smooth;
//   scrollbar-width: none; /* Firefox ke liye */
//   -ms-overflow-style: none; /* IE 10+ ke liye */
// }

// .scroll-wrapper::-webkit-scrollbar {
//   display: none; /* Chrome, Safari ke liye */
// }

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  } */
  
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

  /* Main Container */
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .contaiiner{
    padding-bottom: 20px;
    position: relative;
    z-index: 2;
    background-color: #f4f4f4;
  }

  .hero-content{
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  /* Hero Section */
  .heroo-sectionn {
    /* background: linear-gradient(to right, #007bff, #0056b3); */
    color: white;
    margin-top: 70px;
    
    /* background-color: red; */
    display: flex;
    
    text-align: center;
    height: 100%;
    padding: 150px 20px;
  }
  
  .hero-title {
    font-size: 30px;
    font-weight: bold;
  }
  
  .hero-text {
    font-size: 19px;
    color: white;
    margin-top: 10px;
  }
  
  /* Services Section */
  .services-section {
    padding: 60px 0;
    background-color: white;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  

  /* How We Work Section */
  .how-we-work-section {
    background-color:rgb(252, 253, 255);
    /* padding: 60px 20px; */
    text-align: center;
  }
  

  .section-header{
    padding-top: 40px;
  }
  
  .section-titlee {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 0;
    color: #000000;
  }

  .section-titleeee{
color: rgb(41, 41, 41);
font-size: 30px;
  }
  
  .section-divider {
    width: 50px;
    height: 4px;
    background-color: #007bff;
    margin: 10px auto;
  }
  
  .section-text {
    font-size: 16px;
    color:rgb(53, 53, 53);
  }
  
  .work-steps {
    display: flex;
    padding: 20px 0;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  
  .work-step {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 250px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .work-step:hover {
    transform: translateY(-5px);
  }
  
  .step-number {
    width: 50px;
    height: 50px;
    background-color: #007bff;
    color: white;
    font-size: 24px;
    font-weight: bold;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 10px;
  }
  
  .step-titleee {
    font-size: 20px;
    font-weight: bold;
    color: #000000;
  }
  
  .step-descriptionnn {
    font-size: 14px;
    color: #40659d;
  }
  
  /* Testimonials Section */
  .setestimonials-section {
    /* background-color: white; */
    padding: 20px 0;
    text-align: center;
  }
  
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  
  /* CTA Section */
  .ctata-sectionn {
    background: linear-gradient(to right, #007bff, #0056b3);
    color: white;
    text-align: center;
    padding: 10px 20px;
    position: relative;
    z-index: 2;
  }
  
  .ctata-title {
    font-size: 30px;
    font-weight: bold;
    margin: 0;
  }
  
  .ctata-text {
    font-size: 18px;
    margin-top: 10px;
    color: white;
  }
  
  .ctata-button {
    background-color: white;
    color: #007bff;
    padding: 12px 24px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .ctata-button:hover {
    background-color: #ddd;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .work-steps {
      flex-direction: column;
      align-items: center;
    }
  
    .work-step {
      width: 100%;
      max-width: 300px;
    }
  }


  .spservices {
  padding: 40px;
  position: relative;
  z-index: 2;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  text-align: center;
  overflow: hidden;
}

.spservices-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

.spservices-subtitle {
  font-size: 16px;
  color: #555;
  margin-bottom: 40px;
}

/* Wrapper for scrolling effect */
.spservices-scroller {
  overflow: hidden;
  position: relative;
}

/* Container that moves */
.spservices-cards {
  display: flex;
  gap: 30px;
  width: max-content;
  animation: scroll-left 40s linear infinite;
}

.spservices-cards:hover {
  animation-play-state: paused;
}

@keyframes scroll-left {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

.spservice-card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.spservice-card:hover {
  transform: translateY(-5px);
}

.spcard-header1 {
  height: 120px;
  // background: linear-gradient(to bottom, #aaa, #eee);
  background: url("https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_640.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}
  .spcard-header2 {
  height: 120px;
  // background: linear-gradient(to bottom, #aaa, #eee);
  background: url("https://cdn.pixabay.com/photo/2019/06/14/09/25/cloud-4273197_1280.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}
  .spcard-header3 {
  height: 120px;
  // background: linear-gradient(to bottom, #aaa, #eee);
  background: url("https://cdn.pixabay.com/photo/2020/06/08/05/39/problem-5273058_640.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}
  .spcard-header4 {
  height: 120px;
  // background: linear-gradient(to bottom, #aaa, #eee);
  background: url("https://cdn.pixabay.com/photo/2020/03/26/22/29/server-4971994_1280.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}
  .spcard-header5 {
  height: 120px;
  // background: linear-gradient(to bottom, #aaa, #eee);
  background: url("https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_640.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}
  .spcard-header6 {
  height: 120px;
  // background: linear-gradient(to bottom, #aaa, #eee);
  background: url("https://cdn.pixabay.com/photo/2020/05/25/11/11/woman-5218160_640.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}
  .spcard-header7 {
  height: 120px;
  // background: linear-gradient(to bottom, #aaa, #eee);
  background: url("https://cdn.pixabay.com/photo/2016/11/10/16/03/android-1814556_640.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}
  .spcard-header8 {
  height: 120px;
  // background: linear-gradient(to bottom, #aaa, #eee);
  background: url("https://cdn.pixabay.com/photo/2015/06/10/16/36/mark-804938_640.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}
  .spcard-header9 {
  height: 120px;
  // background: linear-gradient(to bottom, #aaa, #eee);
  background: url("https://cdn.pixabay.com/photo/2023/07/25/18/00/man-8149563_640.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}
  .spcard-header10 {
  height: 120px;
  // background: linear-gradient(to bottom, #aaa, #eee);
  background: url("https://cdn.pixabay.com/photo/2020/11/24/09/56/women-5772029_640.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}
  .spcard-header11 {
  height: 120px;
  // background: linear-gradient(to bottom, #aaa, #eee);
  background: url("https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130_640.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}
  .spcard-header12 {
  height: 120px;
  // background: linear-gradient(to bottom, #aaa, #eee);
  background: url("https://cdn.pixabay.com/photo/2022/03/22/11/38/injured-7084846_1280.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}

.spcard-content {
  padding: 20px;
  text-align: left;
}

.spcard-content h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.spcard-content p {
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
}

.spcard-content ul {
  padding-left: 0;
  list-style: none;
  margin-bottom: 20px;
}

.spcard-content li {
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
}

.spcard-content button {
  background: linear-gradient(to right, #4d9cfa, #5f66f5);
  border: none;
  padding: 10px 16px;
  color: white;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.3s ease;
}

.spcard-content button:hover {
  opacity: 0.9;
}

.process-section {
  text-align: center;
  position: relative;
  z-index: 2;
    overflow: hidden;

  padding: 10px 20px;
  background-color: #f4f4f4;
  // max-width: 1200px;
  margin: auto;
}

.process-section h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.subheading {
  font-size: 1.1rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 40px;
}







.csscroll-wrapper {
  display: flex;
  overflow-x: auto;
  gap: 50px;
  // background: red;
  width: 360vw;
  padding: 20px 0;
   scrollbar-width: none; /* Firefox ke liye */
  -ms-overflow-style: none; /* IE 10+ ke liye */
  scroll-behavior: smooth;
  animation: csautoScroll 35s linear infinite;
}

.csscroll-wrapper:hover {
  animation-play-state: paused;
}

@keyframes csautoScroll {
  0% {
    transform: translateX(4%);
  }
  100% {
    transform: translateX(-53%);
  }
}







.scroll-wrapper {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px 0;
   scrollbar-width: none; /* Firefox ke liye */
  -ms-overflow-style: none; /* IE 10+ ke liye */
  scroll-behavior: smooth;
  // animation: autoScroll 30s linear infinite;
}

.scroll-wrapper:hover {
  animation-play-state: paused;
}

// @keyframes autoScroll {
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-50%);
//   }
// }

.retestimonial-card {
  // min-width: 300px;
  flex-shrink: 0;
  width: 350px;
  margin-right: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
}

.process-scroll-wrapper {
  overflow: hidden;
  padding: 40px 0;
  background-color: #f9f9f9;
}

/* Animated scroll container */
.process-grid {
  display: flex;
  gap: 30px;
  width: max-content;
  animation: scroll-process 50s linear infinite;
}

.process-grid:hover {
  animation-play-state: paused;
}

@keyframes scroll-process {
  0% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(-80%);
  }
}

.process-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  width: 300px; /* fixed width for smooth horizontal scroll */
}

.process-card:hover {
  transform: translateY(-5px);
}

.process-card h3 {
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.process-card h4 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #111;
}

.process-card p {
  font-size: 0.95rem;
  color: #555;
}



.remb-20 {
  position: relative;
  z-index: 2;
  overflow: hidden;
  backdrop-filter: blur(6px);
  padding-bottom: 30px;
}


.resection-title2 {
  font-size: 2.25rem;
  font-weight: bold;
  color: white;
  overflow: hidden;
  padding-top: 30px;
  margin: 0;
  text-align: center;
  // margin-bottom: 3rem;
}

.regrid5 {
   display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;      
}


  
@media (min-width: 768px) {
  .regrid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .regrid-cols-3 {
    regrid-template-columns: repeat(3, 1fr);
  }
  .grid-cols-4 {
    regrid-template-columns: repeat(4, 1fr);
  }
}




/* Testimonial Cards */
.retestimonial-card {
  background: rgba(255, 255, 255, 0.365);
  backdrop-filter: blur(4px);
  padding: 2rem;
  border-radius: 0.5rem;
  min-width: 90px;
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
  color: rgb(221, 221, 221);
}

.retestimonial-content {
  color: var(--gray-700);
  color: white;
  font-style: italic;
}


























.containerrrrrrrr{
  background-color: white;
  /* padding: 20px; */
  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  overflow: hidden;
  backdrop-filter: blur(5px);
}

.headingggg {
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.9rem;
  background: white;
  font-weight: bold;
  color:rgb(10, 10, 10);
}

.logos-containerrr {
  display: flex;
  // flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.logo-wrapperrr {
  position: relative;
  height: 200px;
  // background:rgb(216, 216, 216);
  display: flex;
  justify-content: center;
  align-items: center;
  // background-size: cover;
  // background-position: center;
  width: 250px;
  /* filter: grayscale(100%); */
  transition: all 0.3s ease-in-out;
}

.logo-wrapper:hover {
  filter: grayscale(0%);
}

.logo-imageee {
  height: 100%;
  max-width: 250px;
  border-radius: 5px;
  // width: 100%;
  // padding: 3px;
  object-fit: contain;
  background-color: rgba(255, 255, 255, 0.84);
  backdrop-filter: blur(9px);
}



// for logo scroll
.logocard-slideerr-container {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 50px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  z-index: 2;
}
.logocardds-slider-track {
  display: flex;
  width: calc(650px * 10);
  animation: logoslide 40s linear infinite;
  position: relative;
  z-index: 2;
}
// .logocardds-slider-track:hover {
//   animation-play-state: paused; 
// }
@keyframes logoslide {
  from {
    transform: translateX(-140%);
  }
  to {
    transform: translateX(4%);
  }
}































.success-section {
  width: 100%;
  overflow: hidden;
  padding: 40px 0;
  position: relative;
  z-index: 2;
}

.grid-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
  scroll-behavior: smooth;
  max-width: 100%;
}

.card {
  flex: 0 0 300px; /* Adjust width */
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;.
  height: 100px;
  text-align: left;
  transition: transform 0.2s ease-in-out;
}

.grid-container::-webkit-scrollbar {
  height: 6px;
}

.grid-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.grid-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.grid-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}


.card:hover {
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.profile {
  display: flex;
  align-items: center;
  gap: 5px;
}

.profile-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-name {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin: 0;
}

.profile-position {
  font-size: 14px;
  color: #666;
  margin: 0;
  // width: 100px;
  overflow: hidden; 
}

.stars {
  display: flex;
  gap: 4px;
}

.star-icon {
  color: #fbbc05;
}

.testimonial {
  color: #555;
  font-size: 14px;
  // overflow: hidden;  
  // background: red;
  // width:100%;
  // background: red;
  margin-bottom: 16px;
}

.contaiiiner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}



.auto-scroll-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  // white-space: nowrap;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.auto-scroll-wrapper::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.auto-scroll-track {
  display: inline-flex;
}

.scroll-card {
  min-width: 300px;
  margin: 0 10px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  flex-shrink: 0;
}

.profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.profile-name {
  font-size: 18px;
  font-weight: bold;
}

.profile-position {
  font-size: 14px;
  color: gray;
}

.testimonial {
  margin-top: 10px;
  font-style: italic;
  color: #555;
}


.auto-scrollll-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
  // white-space: nowrap;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE */
  cursor: grab;
  position: relative;
}

.auto-scrollll-wrapper::-webkit-scrollbar {
  display: none;
}

.auto-scrollll-track {
  display: inline-flex;
  animation: infiniteScroll 100s linear infinite;
}

.auto-scrollll-wrapper:hover .auto-scrollll-track {
  animation-play-state: paused; /* Hover pe ruk jayega */
}

.team-member {
  flex: 0 0 auto;
  width: 250px;
  margin: 10px;
  background: #f0f0f0;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-sizing: border-box;
}

/* Infinite Scroll Animation */
@keyframes infiniteScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-80%); /* Half track ka */
  }
}


.section-titleii{
color: white;
font-size: 30px;
}



  `}
      </style>
    </>
  );
}
