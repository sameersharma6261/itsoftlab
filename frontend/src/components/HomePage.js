import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";

import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from 'lucide-react';


import { Linkedin, Twitter, Mail } from "lucide-react";
import "react-tooltip/dist/react-tooltip.css"; // Import tooltip CSS
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What services does your IT company offer?",
    answer:
      "We offer a comprehensive range of IT services, including network management, cloud computing, cybersecurity, it consulting services and website development companies. Our services are designed to help small & medium businesses thrive in today’s digital world.",
  },
  {
    question: "How much does it cost to develop a website or application?",
    answer:
      "The cost depends on the project complexity and requirements. Contact us for a quote.",
  },
  {
    question: "How long does it take to complete a typical project?",
    answer:
      "Project timelines vary. Small projects may take weeks, while complex ones can take months.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer maintenance and support packages for all our clients.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our process includes consultation, design, development, testing, and deployment.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes, we work with clients worldwide via online meetings and collaboration tools.",
  },
  {
    question: "How do you ensure the security of the applications you develop?",
    answer:
      "We follow industry best practices, encryption, and security audits.",
  },
  {
    question:
      "Can you help with an existing project or do you only work on new projects?",
    answer: "We can help with both new and existing projects.",
  },
];

const images = [
  "/images/aws.png",
  "/images/aa.png",
  "/images/bb.png",
  "/images/cc.png",
  "/images/dd.png",
  "/images/ee.png",
  "/images/ff.png",
  "/images/gg.png",
  "/images/hh.png",
  "/images/ii.png",
  "/images/jj.png",
  "/images/kk.png",
  "/images/ll.png",
  "/images/mm.png",
  "/images/nn.png",
  "/images/oo.png",
  "/images/pp.png",
 

];

const cards = [
  {
    title: "Case Study",
    description: "Enhancing Deployment Efficiency with DevOps",
  },
  {
    title: "Case Study",
    description: "AI-ML & ERP Solutions for Business Optimization",
  },
  {
    title: "Case Study",
    description: "Frontend & Backend Design for Seamless User Experience",
  },
  {
    title: "Case Study",
    description: "Custom CRM Software for Enhanced Business Operations",
  },
  { title: "Case Study", description: "CRM & ERP Web Apps with DevOps Tools" },
  {
    title: "Case Study",
    description:
      "Automation of Email Scheduler & Web Solution for Promotional Campaigns",
  },
  {
    title: "Case Study",
    description: "Android & iOS App Development with Web Solutions",
  },
  {
    title: "Case Study",
    description: "AI Chatbot Development for Enhanced Customer Engagement",
  },
  {
    title: "Case Study",
    description: "Data Solution for Efficient Resource Management",
  },
  {
    title: "Case Study",
    description: "Seamless Data Migration from On-Premise to Cloud",
  },
  {
    title: "Case Study",
    description: "Disaster Recovery and Cybersecurity Prevention",
  },
  {
    title: "Case Study",
    description: "Automation Solution with Terraform IaC and Jenkins CI/CD",
  },
];

// const offices = [
//   {
//     id: 1,
//     name: "Sharjah Media City (Shams), ",
//     image:
//       "https://cdn.pixabay.com/photo/2016/10/16/10/30/office-space-1744803_1280.jpg",
//     address: "Al Messaned, Al Bataeh, Sharjah, United Arab Emirates",
//     // phone: "+91 80 3456 7890",
//     // email: "contact@ITSoftlab.com",
//   },
//   {
//     id: 3,
//     name: "Dubai, UAE",
//     image:
//       "https://cdn.pixabay.com/photo/2016/10/16/10/30/office-space-1744805_640.jpg",
//     address:
//       "HDS Business Centre, 34th Cluster M, Jumeirah Lake Towers, Dubai, United Arab Emirates",
//     // phone: "+91 80 3456 7890",
//     // email: "contact@ITSoftlab.com",
//   },
//   {
//     id: 6,
//     name: "Indore, India",
//     image:
//       "https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181951_1280.jpg",
//     address: "651 Sector A Mahalaxmi Nagar Indore, INDIA",
//     // phone: "+91 22 1234 5678",
//     // email: "contact@ITSoftlab.com",
//   },
//   {
//     id: 2,
//     name: "Malta, Europe",
//     image:
//       "https://cdn.pixabay.com/photo/2015/05/29/19/17/study-789631_640.jpg",
//     address: "Tower Business Centre, Tower Street, Swatar, BKR 4013, MALTA",
//     // phone: "+91 80 3456 7890",
//     // email: "contact@ITSoftlab.com",
//   },
//   {
//     id: 5,
//     name: "Jaipur, India",
//     image:
//       "https://cdn.pixabay.com/photo/2017/03/28/12/09/chairs-2181939_1280.jpg",
//     address: "6, Khandelwal Tower, Vidhyadhar Nagar Jaipur, INDIA",
//     // phone: "+91 11 2345 6789",
//     // email: "contact@ITSoftlab.com",
//   },

//   {
//     id: 4,
//     name: "Texas, US",
//     image:
//       "https://cdn.pixabay.com/photo/2023/04/18/17/14/ai-generated-7935610_640.jpg",
//     address: "1220 River Bend Dr, Dallas, TX, 75247, USA",
//     // phone: "+91 80 3456 7890",
//     // email: "contact@ITSoftlab.com",
//   },


// ];



const officeLocations = [
  {
    id: "sharjah",
    city: "Sharjah Media City",
    region: "United Arab Emirates",
    address: "Al Messaned, Al Bataeh, Sharjah, United Arab Emirates",
    imageUrl: "https://cdn.pixabay.com/photo/2016/10/16/10/30/office-space-1744803_1280.jpg",
    color: "hsl(198, 90%, 55%)",
  },
  {
    id: "dubai",
    city: "Dubai",
    region: "United Arab Emirates",
    address: "HDS Business Centre, 34th Cluster M, Jumeirah Lake Towers, Dubai, United Arab Emirates",
    imageUrl: "https://cdn.pixabay.com/photo/2016/10/16/10/30/office-space-1744805_640.jpg",
    color: "hsl(356, 75%, 53%)",
  },
  {
    id: "indore",
    city: "Indore",
    region: "India",
    address: "651 Sector A Mahalaxmi Nagar Indore, INDIA",
    imageUrl: "https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181951_1280.jpg",
    color: "hsl(122, 39%, 49%)",
  },
  {
    id: "malta",
    city: "Malta",
    region: "Europe",
    address: "Tower Business Centre, Tower Street, Swatar, BKR 4013, MALTA",
    imageUrl: "https://cdn.pixabay.com/photo/2015/05/29/19/17/study-789631_640.jpg",
    color: "hsl(266, 75%, 60%)",
  },
  {
    id: "jaipur",
    city: "Jaipur",
    region: "India",
    address: "6, Khandelwal Tower, Vidhyadhar Nagar Jaipur, INDIA",
    imageUrl: "https://cdn.pixabay.com/photo/2017/03/28/12/09/chairs-2181939_1280.jpg",
    color: "hsl(27, 87%, 60%)",
  },
  {
    id: "texas",
    city: "Texas",
    region: "United States",
    address: "1220 River Bend Dr, Dallas, TX 75247, USA",
    imageUrl: "https://cdn.pixabay.com/photo/2023/04/18/17/14/ai-generated-7935610_640.jpg",
    color: "hsl(212, 72%, 59%)",
  },
];


function HomePage() {
  const [expandedId, setExpandedId] = useState(null);
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  const wrapperRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [openIndex, setOpenIndex] = useState(null);
  // const [scrollPosition, setScrollPosition] = useState(0);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const imageContainer = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);

  const [position, setPosition] = useState(0);

  const itemWidth = 300;      
  const gap = 24;
  const animationSpeed = 30;

  const totalWidth = itemWidth + gap;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

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

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - (wrapperRef.current?.offsetLeft || 0);
    scrollLeft.current = wrapperRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (wrapperRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 2; // Drag speed
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };








  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const smoothScroll = () => {
      if (!isHovered && !isDragging) {
        scrollContainer.scrollLeft += 0.5; // Speed: 0.5px per frame
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0; // Infinite Loop
        }
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    smoothScroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);







  useEffect(() => {
    const animate = () => {
      setPosition((prevPos) => {
        const newPos = prevPos - 1;
        if (Math.abs(newPos) >= 6 * totalWidth) {
          return 0;
        }
        return newPos;
      });
    };

    const interval = setInterval(animate, animationSpeed);
    return () => clearInterval(interval);
  }, [totalWidth, setPosition]);


  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === clients.length - 1 ? 0 : prev + 1
    );
  };
  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? clients.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    gsap.fromTo(
      imageContainer.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2 }
    );
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextTestimonial();
      }, 3000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, activeTestimonial]);

  // const handleMouseEnter = () => setAutoplay(true);
  const handleMouseLeave = () => setAutoplay(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const benefits = [
    "End-to-End IT Management",
    "Cybersecurity & Data Protection",
    "Cloud & Remote Work Solutions",
    "Business Continuity & Disaster Recovery",
    "Custom Software Development",
    "Web & Mobile App Development",
    "AI & Automation Solutions",
    "IT Support & Helpdesk Services",
  ];



  const stats = useMemo(() => [
    { id: 1, value: "98%", label: "Client Satisfaction" },
    { id: 2, value: "180+", label: "Happy Clients" },
    { id: 3, value: "10+", label: "Years Experience" },
    { id: 4, value: "290+", label: "Projects Completed" },
  ], []);
  const sectionRef = useRef(null);
  const statRefs = useRef([]);

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






  const teamMembers = [
    {
      name: "Rahul Chourasiya",
      position: "FullStack Developer",
      image: "/images/rahul.png",
      bio: "As a FullStack Developer, I build robust, scalable web applications from front-end interfaces to back-end systems. I specialize in JavaScript frameworks, RESTful APIs, and modern databases to deliver seamless user experiences. With a strong foundation in both client and server-side technologies.",
      social: {
        // linkedin: "#",
        // twitter: "#",
        // email: "michael@example.com",
      },
    },

    {
      name: "Fazleen Deena",
      position: "product Manager",
      image: "/images/ff1.png",
      bio: "As a Product Manager, I bridge the gap between user needs and technical solutions. With a keen eye for design and deep collaboration with development teams, I turn complex ideas into products that are intuitive, engaging, and scalable.",
      social: {},
    },
    {
      name: "Nikhil Basrani",
      position: "AI and Cloud Engineer",
      image: "/images/nikhil.png",
      bio: "Hey, I’m Specializes in bringing ML models to life, training and deploying on AWS and GCP to turn scalable solutions and algorithms into real-world applications.",
      social: {},
    },

    {
      name: "Sameer Sharma",
      position: "FullStack Developer",
      image: "/images/sameer.jpg",
      bio: "As a Full-Stack Developer, I design and develop end-to-end web applications, combining efficient backend logic with intuitive frontend interfaces, while ensuring scalability, performance, and seamless user experience.",
      social: {},
    },
    {
      name: "Swati Mishra",
      position: "Mern Stack",
      image: "/images/swati.png",
      bio: " I'm a Mern Stack Developer specializing in MongoDB, Express.js, React, and Node.js. I build modern, fast, and secure web applications tailored to client requirements with clean, maintainable code.",
      social: {},
    },

    {
      name: " Mathew Forster",
      position: "Data Analyst",
      image: "/images/ff4.png",
      bio: "Hi, I’m Mathew Forster—a Data Analyst passionate about transforming raw data into actionable insights. With expertise in tools like SQL, Python, Excel, and Tableau, I specialize in uncovering trends, optimizing business performance, and delivering clear, data-driven recommendations.",
      social: {},
    },

    {
      name: "Smita Choudhary",
      position: "Mern Developer",
      image: "/images/smita.png",
      bio: "She is skilled MERN Developer, known for delivering exceptional MERN projects that are both robust and efficient. She has a strong command over API integration, ensuring seamless communication between front-end and back-end systems.",
      social: {},
    },
    {
      name: "Pratham Verma",
      position: "Lead Developer",
      image: "/images/pratham.jpg",
      bio: "As a software engineer, I specialize in transforming complex requirements into efficient, scalable solutions, with a strong focus on code quality, performance, and continuous improvement.",
      social: {},
    },

    {
      name: "Sofia Rossi",
      position: "Data Scientist",
      image: "/images/ff2.png",
      bio: "Hello, I’m Sofia Rossi — I transform raw data into actionable insights using Python, SQL, and machine learning. From building recommendation engines to customer segmentation, I help businesses become data-driven.",
      social: {},
    },

    {
      name: " Johnson Minz",
      position: "DevOps & Cloud Infrastructure Engineer",
      image: "/images/kelvin.jpeg",
      bio: "Automate deployment pipelines and manage scalable infrastructures on AWS, Azure, and Kubernetes. My work ensures your product scales smoothly from MVP to millions of users",
      social: {},
    },

    {
      name: "Harshit Nigam",
      position: "FullStack Java Developer",
      image: "/images/harshit.jpg",
      bio: "Highly skilled in Java, React, Spring Boot, and modern web technologies. With expertise in both front-end and back-end development, specializing in building dynamic, scalable applications and delivering high-quality solutions.",
      social: {},
    },

    {
      name: "Rishita Chaturvedi",
      position: "Mern Developer",
      image: "/images/rishita.png",
      bio: "Rishita has exceptional expertise in creating intuitive and visually appealing, consistently delivering high-quality work. She is highly skilled in translating user requirements into seamless interfaces that provide an outstanding user experience. ",
      social: {},
    },

    {
      name: "Mohit Maleshiya",
      position: "FullStack Developer",
      image: "/images/mohit.jpeg",
      bio: "Full Stack Next.js, Java, MERN Developer, skilled in building scalable and responsive web applications. Passionate about clean code, UI/UX, and solving real-world problems through modern web technologies.",
      social: {},
    },

      {
      name: "Neha Gautam",
      position: "Business Development Manager",
      image: "/images/neha.png",
      bio: "Hi, I'm Neha — a Techno-Business Consultant turned Business Development Manager with over 6 years of experience in the IT industry. I specialize in bridging technology and strategy to drive business growth, foster strong client relationships, and deliver impactful digital solutions.",
      social: {},
    },

    {
      name: "Ashutosh Dhayade",
      position: "Account Manager",
      image: "/images/ashutosh.png",
      bio: "Experienced in managing key accounts, building strong client relationships, and developing strategies that drive business growth. Skilled at aligning client needs with solutions, resolving issues efficiently, and identifying opportunities to expand revenue and improve retention.",
      social: {},
    },

    {
      name: "Freya Olsen",
      position: "Mobile App Developer (Flutter & React Native)",
      image: "/images/ff5.png",
      bio: "Hey, I’m Freya Olsen — I build cross-platform mobile apps that are fast, beautiful, and user-friendly. Whether it’s a startup MVP or enterprise app, I deliver pixel-perfect mobile solutions that scale.",
      social: {},
    },

    {
      name: "Vishwas Dangar",
      position: "FullStack Developer",
      image: "/images/vishwas.png",
      bio: "From designing responsive interfaces to building powerful backend systems, I develop full-stack applications that are both functional and future-ready. I specialize in crafting intuitive user experiences, scalable APIs, and clean, maintainable code.",
      social: {},
    },

    {
      name: "Priya Tiwari",
      position: "Business Analyst",
      image: "/images/priya.png",
      bio: "I'm a Business Analyst, helping bridge client needs with smart IT solutions to drive measurable business growth. I specialize in gathering and analyzing requirements, aligning cross-functional teams, and turning data into actionable insights.",
      social: {},
    },

    {
      name: "Hritik Yadav",
      position: "Business Analyst (Pre Sales)",
      image: "/images/hritik.jpeg",
      bio: "Fuelled by curiosity and driven by innovation, I turn complex ideas into impactful actions—blending tech, business, and AI to shape smarter solutions Business development expert and AI enthusiast.",
      social: {},
    },

    {
      name: "Ethen James",
      position: "Cybersecurity Analyst",
      image: "/images/ethen.png",
      bio: "Hi, I’m Ethen James — a security-first thinker with expertise in penetration testing, network security, and incident response. I help startups and enterprises safeguard their infrastructure and comply with global standards.",
      social: {},
    },

    {
      name: "Niteen Yadav",
      position: "Business Analyst",
      image: "/images/nitin.png",
      bio: "Passionate problem solver blending tech and strategy to turn ideas into impact and challenges into opportunities. I thrive on identifying innovative solutions that drive efficiency, streamline processes, and enhance business outcomes.",
      social: {},
    },

    {
      name: "Khushi Chadda",
      position: "UI/UX Developer",
      image: "/images/khushi.png",
      bio: "As a UI/UX developer, I specialize in designing intuitive, user-centric interfaces that bridge functionality with aesthetics. I focus on creating seamless user experiences through thoughtful design, usability testing, and responsive layout ensuring both accessibility and performance across platforms.",
      social: {},
    },

   
  ];










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
    //   logo: "/images/aws.png",
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
    //   logo: "/images/p1.png",
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

  useEffect(() => {
    statRefs.current.forEach((stat, index) => {
      const numericValue = parseInt(stats[index].value.replace(/\D/g, "")); // Extract numeric part
      const suffix = stats[index].value.replace(/\d+/g, ""); // Extract non-numeric part

      gsap.fromTo(
        stat,
        { innerText: 0 },
        {
          innerText: numericValue,
          duration: 3.5,
          // ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true, // Ensures animation runs only once
          },
          roundProps: "innerText", // Ensures whole numbers
          onUpdate: function () {
            let currentValue = Math.round(stat.innerText);
            stat.innerText = currentValue + suffix;
          },
          onComplete: function () {
            stat.innerText = numericValue + suffix; // Ensure exact final value
          },
        }
      );
    });
  }, [stats]);

  return (
    <>
      <div className="four-iiccoonnss">
        {/* <div className="fourr">
          Email
          <i class="fa-solid fa-envelope"></i>
        </div> */}

        {/* <div className="three">
          Twitter
          <i class="fa-brands fa-x-twitter"></i>
        </div> */}

        <div className="twoo">
          <a rel="noopener noreferrer" href="https://www.linkedin.com/company/ITSoftlab/posts/?feedView=all" target="_blank">
            Linkedin
          </a>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>

        <div className="onee">
          <a rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=%2B917898822644&text&type=phone_number&app_absent=0" target="_blank">
            Whatsapp
          </a>
          <i class="fa-brands fa-whatsapp"></i>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />

        <div className="video-container">
          <video autoPlay loop muted playsInline>
            <source
              // src="https://cdn.pixabay.com/video/2020/07/29/45902-447070777_large.mp4"

              // src="https://cdn.pixabay.com/video/2023/04/13/158756-817470865_tiny.mp4"
              src="https://cdn.pixabay.com/video/2020/08/12/46965-449623750_large.mp4"




              // src="https://videos.pexels.com/video-files/3191573/3191573-uhd_2560_1440_25fps.mp4"
              // src="https://cdn.pixabay.com/video/2024/12/23/248384_large.mp4"
              // src="https://cdn.pixabay.com/video/2025/03/22/266703_large.mp4"

              // src="https://cdn.pixabay.com/video/2017/06/11/9809-221185519_large.mp4"

              // src="https://cdn.pixabay.com/video/2017/06/11/9809-221185519_large.mp4"
              // src="https://cdn.pixabay.com/video/2021/10/12/91744-636709154_tiny.mp4"
              // src="https://cdn.pixabay.com/video/2024/06/01/214888_tiny.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* <div className="video-container">
          <video autoPlay loop muted playsInline>
            <source
              src="https://cdn.pixabay.com/video/2021/10/12/91744-636709154_tiny.mp4"
              type="video/mp4"
            />
          </video>
        </div> */}
        <section className="hsection">
          <div className={`hcontainer ${isScrolled ? "scrolled-con" : ""}`}>
            <div className="hcontent-grid">
              {/* Left Section */}
              <motion.div
                className="aaaaaa"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* <h1 className="htitle">
                  Trusted Best IT <span className="hhighlight">Company</span>
                </h1> */}
                <h1 className="htitle">
                  Streamlining Business Through<span className="hhighlight"> Innovation</span>
                </h1>
                <p className="hsubtitle">
                  We specialize in delivering reliable IT solutions and Business-centric products that help companies optimize performance, improve scalability, and embrace innovation. From tailored services to full-scale digital support, we’re here to be your technology partner in growth.
                </p>

                <div className="hbutton-group">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/servicespage">
                      <button className="hbutton">Our Services</button>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/products">
                      <button className="hbutton">Our Products</button>
                    </Link>
                  </motion.div>
                </div>

                {/* Social Media Icons */}
                {/* <div className="hsocial-icons">
                  <a
                    href="https://wa.me/yourwhatsapplink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="iccon" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="iccon" />
                  </a>
                  <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="iccon" />
                  </a>
                  <a href="mailto:your@email.com">
                    <FaEnvelope className="iccon" />
                  </a>
                </div> */}
              </motion.div>

              {/* Right Section - Image Gallery */}
              <div className="highlights-container">
                {/* Services Card */}
                <div className="highlight-card services-card">
                  <div className="icon">💡</div>
                  <h2>End-to-End Tech Services Under One Roof</h2>
                  <p>
                    Whether it’s AI, Cloud, Cybersecurity, Mobile Apps, or
                    DevOps — we provide full-stack technology services designed
                    to scale with your business.
                  </p>
                  <a href="/servicespage">
                    <button>Explore Our Services</button>
                  </a>
                </div>

                {/* Products Card */}
                <div className="highlight-card products-card">
                  <div className="icon">💡</div>
                  <h2>
                    Smart Industry-Specific Products That Simplify Business
                  </h2>
                  <p>
                    From CRM systems to HRMS, invoicing tools, and inventory management — our products are crafted to fit your industry’s
                    unique needs.
                  </p>
                  <a href="/products">
                    <button>View All Products</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="a">
        <section className="happy-clients-section">
          <div className="background-blur"></div>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="heading">
                {/* Our  */}
                <span className="gradient-text"> About Us</span>
              </h1>
              <p className="description">
                We take pride in delivering exceptional service and building
                lasting relationships with our clients. Here's what they have to
                say about working with us.
              </p>
            </motion.div>
          </div>
        </section>

        {/* .....................................................about us section.................................................. */}
        <section className="about-section">
          <div className="cccontainer">
            <motion.div
              className="heading-cccontainer"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* <h2 className="title">About Us</h2>
            <div className="underline"></div> */}
            </motion.div>

            <div className="content-griiid">
              <motion.img
                style={{ zIndex: "2" }}
                src="https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_640.jpg"
                alt="Company history"
                className="imagee"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />

              <motion.div
                className="text-content"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="subtitle">IT SOFTLAB</h3>
                <p className="descriptionnn">
                  IT Softlab — Empowering startups and businesses with smart IT solutions

                  founded in early 2015, IT softlab began with a simple but powerful vision:
                  to bridge the gap in affordable IT solutions for startups, MSMEs, and small ventures.

                  when we started, we observed that many businesses with brilliant ideas and huge potential struggled because they lacked a trusted IT partner. They needed solutions that were reliable, scalable, and pocket-friendly — allowing them to invest more in marketing and growth, without being burdened by heavy technology costs.

                  with a small but passionate team, we set out to become that trusted IT partner.
                  today, with a strong foundation built on positivity, innovation, and a problem-solving mindset, IT Softlab has grown into a global technology company, proudly delivering intelligent IT solutions to businesses of all sizes.

                  at IT Softlab, we believe that technology should adapt to your business — not the other way around.
                  we are a global IT powerhouse, providing end-to-end technology solutions designed to meet every aspect of your business needs, all under one roof.
                </p>
                <p className="descriptionnn">
                  What We Do
                  With deep expertise in Artificial Intelligence (AI) Solutions, Customized CRM and ERP Systems, HR Management Platforms, Cloud Infrastructure, Data Solutions, Cybersecurity, Disaster Recovery, and Website & App Development, IT Softlab has become a trusted technology partner for businesses worldwide.

                  We proudly offer a wide range of subscription-based products, including:

                  HRMS (Human Resource Management System)
                  CRM (Customer Relationship Management)
                  ERP (Enterprise Resource Planning)
                  Inventory Management Systems
                  Invoice Generators
                  Image-to-Excel Data Converters
                  And many more business productivity toolsww
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "10",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/contactus">
                      <button style={{ zIndex: "10" }} className="button">
                        Contact Us
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>



          <style>{`


























        .highlights-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

@media (min-width: 768px) {
  .highlights-container {
    flex-direction: row;
    justify-content: center;
  }
}

.highlight-card {
  background: linear-gradient(135deg,rgba(90, 134, 216, 0.6),rgba(90, 184, 213, 0.69));
  backdrop-filter: blur(8px);
  color: white;
  padding: 25px;
  border-radius: 16px;
  flex: 1;
  margin: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

.products-card {
  background: linear-gradient(135deg,rgba(220, 230, 223, 0.64),rgba(83, 163, 162, 0.66));
    backdrop-filter: blur(8px);

}

.highlight-card .icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.highlight-card h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.highlight-card p {
  font-size: 14px;
  margin-bottom: 20px;
}

.highlight-card button {
  background: white;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.highlight-card button:hover {
  background: #f0f0f0;
}


          .about-section {
            overflow: hidden;
            padding-bottom: 70px;
            display: "flex";
            width: 100%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background: rgb(255, 255, 255);
            text-align: center;
          }
          .cccontainer {
            max-width: 1500px;
            margin: 0 auto;
            // background: green;
            padding: 0;
          }
          // .heading-cccontainer {
          //   margin-bottom: 30px;
          // }
          .title {
            font-size: 32px;
            font-weight: bold;
            color: #333;
            margin-top: 0px;
          }
          .underline {
            width: 80px;
            height: 4px;
            background: #007bff;
            margin: 8px auto;
          }
          .content-griiid {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
            position: relative;
            left: 100px:
            // margin: "0px";
             // background: #007bff;

            padding: "0px";
            
            flex-wrap: wrap;
          }
          .imagee {
            min-width: 45%;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
          .text-content {
            width: 50%;
            // position: relative;
            // right: 20px;
            height: 100%;
            // background: blue;
            text-align: left;
            z-index: 2;
          }
          .subtitle {
            font-size: 25px;
            color: #007bff;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .descriptionnn {
            font-size: 16px;
            // width: 100%;
            color: #555;
            line-height: 1.6;
            // margin-right: 20px;
            padding: 10px;
            margin-bottom: 10px;
          }
          .button {
            background: #007bff;
            color: #fff;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
          }
          .button:hover {
            background: #0056b3;
          }
          @media (max-width: 768px) {
            .content-grid {
              flex-direction: column;
              text-align: center;
            }
            .image {
              width: 90%;
            }
            .text-content {
              width: 100%;
            }
          }

          /* Background and container */
/* .hsection {
  background: linear-gradient(to right,rgba(0, 225, 255, 0.955), #2a5298);
  padding: 50px 0;
  margin-top: 60px;
  color: white;
} */


.video-container {
  position: fixed;
  top: 0;
  /* background-color: rgb(155, 188, 189); */
  // background: linear-gradient(rgba(53, 83, 255, 0.86));

  left: 0;
  width: 110vw;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

/* .video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
} */


.hsection {
  z-index: 1;
  /* padding-top: 50px; */
  color: white;
  /* margin-top: 60px; */
  /* background-color: red; */
  max-width: 1600px;
  text-align: center;
}

.hcontainer {
  max-width: 1500px;
  margin: auto;
  /* padding: 10px; */
}


/* Grid Layout */
.hcontent-grid {
  display: flex;
  align-items: center;
  // margin-bottom: 35px;
  /* margin-top: 85px; */
  justify-content: space-between;
  gap: 20px;
  /* background-color: red; */
  
  flex-direction: column;
}








.aaaaaa{
  /* background-color: red; */
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* Text Section */
.htitle {
  font-size: 4rem;
  z-index: 10;
  font-weight: bold;
}

.hhighlight {
  color: rgba(14, 187, 255, 0.788);
  /* text-shadow: 2px 2px 8px rgb(255, 255, 255); */
}

.hsubtitle {
  font-size: 1.3rem;
  margin-top: 10px;
  width: 85%;
  z-index: 10;
  color: white;
  // padding: 150px;
  opacity: 0.9;
}

/* Buttons */
.hbutton-group {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.hbutton {
  /* background: #ffcc00;
  color: #ffffff; */
  background-color: white;
  color: black;
  padding: 12px 24px;
  z-index: 10;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  transition: 0.3s;
  font-size: 15px;
  cursor: pointer;
}

.hbutton:hover {
  background: #53c8d3;
  transform: scale(1.05);
}

/* Social Icons */
.hsocial-icons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.hsocial-icons .icon {
  font-size: 3rem;
  color: rgb(255, 255, 255);
  transition: 0.3s;
}


.hsocial-icons .icon:hover {
  transform: scale(1.2);
  color: #ffcc00;
}

/* Image Section */
.himage-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.parta{
  /* background-color: red; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  cursor: pointer;
}


.ddescripttion{
  height: 30px;
  z-index: 10;
  display: flex;
  color: rgb(255, 255, 255);
  width: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: rgba(14, 187, 255, 0.788);
}
.ddescripttion:hover{
  background-color: #53c8d3;
  transform: scale(1.05);
  transition: 0.3s;
}

.himage {
  min-width: 350px;
  height: 210px;
  border-radius: 12px;
  /* margin-bottom: 60px; */
  transition: 0.3s;
}

.himage:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.3);
}

/* 📱 Responsive Design */
@media screen and (max-width: 768px) {
  .hcontent-grid {
    flex-direction: column;
    text-align: center;
    margin-top: 120px;
  }

  .hsection{
    margin-top: 0px;
  }

  .htitle {
    font-size: 2.5rem;
  }

  .hsubtitle {
    font-size: 1rem;
    margin: 10px auto;
  }

  .hbutton-group {
    justify-content: center;
  }

  .himage-container {
    width: 90%;
    margin: auto;
  }

  .aaaaaa{
    /* background-color: red; */
    width: 100%;
    height: 100%;
  }

  .image-grid {
    grid-template-columns: 1fr;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .hbutton {
    width: 100%;
    padding: 14px;
  }

  .hsocial-icons {
    justify-content: center;
  }
}

/* Extra Small Devices */
@media screen and (max-width: 480px) {
  .htitle {
    font-size: 2rem;
  }

  .aaaaaa{
    /* background-color: red; */
    width: 100%;
    height: 100%;
  }
  .hsubtitle {
    font-size: 0.9rem;
  }
  .hsection{
    margin-top: 0px;
  }

  .hcontent-grid {
    /* margin-bottom: 195px;
    margin-top: 180px; */
  }

  .hbutton {
    font-size: 1rem;
  }

}





/* ............................................................................................... */
.happy-clients-section {
  position: relative;
  overflow: hidden;
   background-color: rgb(255, 255, 255);
  padding: 10px 0;
}

.background-blur {
  position: absolute;
  top: -120px;
  left: 50%;
  width: 110vw;
  height: 284px;
  transform: translateX(-50%);
  /* border-radius: 50%; */
  /* background: linear-gradient(to right,#87fff5, #86c6e0); */
  background-color: transparent;
  filter: blur(48px);
}

.container {
  position: relative;
  margin: 0 auto;
  /* padding: 0 16px; */
  /* max-width: 1300px; */
}

.headerrer{
  text-align: center;
}

.text-center {
  text-align: center;
  z-index: 2;
}

.heading {
  margin-bottom: 16px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e293b;
}

.gradient-text {
  background: linear-gradient(to right, #2770ab, #2ed0ec);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 640px;
  margin: 0 auto;
  font-size: 1.125rem;
  color: #475569;
  // padding-bottom: 30px;
}

.contaaaainer{
  background-color: red;
  padding: 0;
  margin: 0;
  width: auto;
}

/* ............................................................................................... */

.stats-section {
  padding: 100px 0;
  /* background-color: rgb(255, 255, 255); */
  background: transparent;
  backdrop-filter: blur(6px);
}

.containerrr {
  max-width: 1200px;
  /* background-color: red; */
  margin: 0 auto;
  /* padding: 0 16px; */
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.stat-card {
  border-radius: 16px;
  background-color: white;
  padding: 24px;
  z-index: 2;
  text-align: center;
  box-shadow: 0 4px 10px rgba(100, 116, 139, 0.2);
}

.stat-value {
  margin-bottom: 8px;
  font-size: 1.875rem;
  font-weight: bold;
  color: #6e66eb;
}

.stat-label {
  color: #475569;
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}


/* ............................................................................................ */
.testimonials-section {
  padding: 64px 0;
  z-index: 2;
  height: 100%;
  background-color: white;
}

.containerrrrr {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50 16px;
  z-index: 2;
}

  
  
  


.testimonial-box {
  background-color: rgba(188, 188, 188, 0.361);
  padding: 32px;
  height: 45vh;
  z-index: 2;
  border-radius: 24px;
  box-shadow: 0 4px 10px rgba(100, 116, 139, 0.2);
  position: relative;
}

@media (min-width: 660px) and (max-width: 960px){
  .testimonial-box {
    height: 45vh;
  }
    .testimonial-dots{
    // margin-top: 500px;
    padding-top: 45px;
    }
 }


 @media (min-width: 100px) and (max-width: 659px){
  .testimonial-box {
    height: 65vh;
  }
    .testimonial-dots{
    // margin-top: 500px;
    padding-top: 200px;
    }
 }


.testimonial-header {
  display: flex;
  justify-content: end;
  align-items: center;
}

.testimonial-buttons button {
  background: none;
  border: none;
  font-size: 20px;
  z-index: 10;
  cursor: pointer;
}

.testimonial-content {
  height: 300px;
  position: relative;
}

.testimonial-card {
  position: absolute;
  width: 100%;
  height: 100%;
}

.client-info {
  text-align: center;
}

.client-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.rating .star {
  color: #ccc;
}

.rating .star.filled {
  color: gold;
}

.testimonial-text {
  text-align: center;
  margin-top: 16px;
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 4px;
  cursor: pointer;
}

.dot.active {
  background-color: #7b2cbf;
  width: 14px;
}


/* /////////////////////////////////////////////////////////////////////////////////// */
/* SuccessStories.css */
.success-section {
  padding: 64px 0;
  background-color: #f8f9fa;
  text-align: center;
  z-index: 2;
}

.containner {
  /* max-width: 1200px; */
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
  /* margin: 0 auto; */
  /* padding: 0 16px; */
}

.sectionnn-title {
  /* margin-bottom: 48px; */
  font-size: 40px;
  margin-top: 0;
  font-weight: bold;
  color: #fffafa;
}

/* .grid-container {
  display: grid;
  width: 95vw;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
} */

/* .card {
  background: white;
  z-index: 2;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
} */

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

.read-more {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #007bff;
  cursor: pointer;
}

.read-more .arrow-icon {
  margin-left: 6px;
  transition: transform 0.2s ease-in-out;
}

.read-more:hover .arrow-icon {
  transform: translateX(4px);
}


/* //////////////////////////////////////////////////////////////////////////////// */
.team-section {
  background-color: rgb(255, 255, 255);
  z-index: 2;
  position: relative;
}

.contaiiiner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 16px;
}

.description {
  /* max-width: 600px; */
  margin: 0 auto;
  font-size: 1.125rem;
  color: #475569;
}

/* .team-grid {
  display: grid;
  gap: 32px;
  width: 100vw;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 32px;
} */

/* .team-member {
  text-align: center;
  padding: 10px;
} */

.team-grid {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 40px;
  padding-bottom: 20px;
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}

.team-member {
  flex: 0 0 auto;
  background-size: cover;
  background-position: center;
  width: 300px; /* Adjust width as needed */
  // background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 0px;
  text-align: center;
}

.team-grid::-webkit-scrollbar {
  height: 8px;
}

.team-grid::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.team-grid::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.team-grid::-webkit-scrollbar-thumb:hover {
  background: #555;
}


.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.team-image {
  min-width: 100%;
  height: 300px;
  z-index: 2;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-container:hover .team-image {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(30, 41, 59, 0.9), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .overlay {
  opacity: 1;
}

.social-icons {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  display: flex;
  color: white;
  gap: 16px;
  padding: 16px;
  transition: transform 0.3s ease;
}


.image-container:hover .social-icons {
  transform: translateX(-50%) translateY(0);
  color: white;
}

.iccon {
  width: 100%;
  height: 25px;
  padding: 5px;
  font-size: 10px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: background-color 0.3s ease;
}

.iccon:hover {
  background-color: #3b82f6;
}

.member-name {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1e293b;
  margin-top: 16px;
}

.position {
  color: #3b82f6;
  margin-bottom: 8px;
}


.scroll-wrapper {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px 0;
  scroll-behavior: smooth;
}

.scroll-wrapper::-webkit-scrollbar {
  height: 8px;
}

.scroll-wrapper:hover {
  /* nothing needed unless you want to do something special */
}
.css-title{
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.bio {
  color: #475569;
  font-size: 16px;
}
.footer {
  position: relative;
  z-index: 2;
  background-color: #1e1e1e;
  color: #fff;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
}

.footer-container {
  max-width: 1600px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
}

.footer-section {
  flex: 1 1 0px;
}

.kkll{
  margin-top: 32px;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 15px;
  color: #f2f2f2;
  font-size: 25px;
}

.footer-section p,
.footer-section li,
.footer-section a {
  color: #bbb;
  font-size: 19px;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section a {
  text-decoration: none;
}

.footer-section a:hover {
  color: #fff;
}

.social-icons {
  margin-top: 10px;
}

.social-icons a {
  margin-right: 10px;
  color: #bbb;
  text-decoration: none;
}

.social-icons a:hover {
  color: #fff;
}

hr {
  margin: 30px 0;
  border-color: #444;
}

.footer-bottom {
  text-align: center;
  font-size: 14px;
  color: #aaa;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

/* ////////////////////////////////////////////////////////////// */
.containerrrrrr{
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

.headinggg {
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.9rem;
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















/* contact page css here */
/* Page Container */
.page-container {
  /* min-height: 20vh; */
  width: 100vw;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* background: green; */
  /* background: linear-gradient(135deg, var(--blue-50), var(--purple-50)); */
}

/* Hero Banner */
.hero-banner {
  height: 40vh;
  background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
}

.hero-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text {
  text-align: center;
}

.hero-text h1 {
  font-size: 3.75rem;
  font-weight: bold;
  color: var(--gray-800);
  margin-bottom: 1rem;
}

.hero-text p {
  font-size: 1.25rem;
  color: var(--gray-600);
  max-width: 42rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.content-grid {
  display: grid;
  /* background-color: red; */
  /* margin-top: 8rem;
  margin-left: 4%; */
  width: 100vw;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 100%;
  /* margin-bottom: 4rem; */
}

@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Contact Form */
.contact-form-container {
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  margin-left: 35px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}


.form-header {
  margin-bottom: 2rem;
}

.form-header h2 {
  font-size: 1.875rem;
  font-weight: bold;
  color: var(--gray-800);
  margin-bottom: 0.5rem;
}

.form-header p {
  color: var(--gray-600);
}

.form-groupp {
  margin-bottom: 1.5rem;
}

.form-groupp label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray-700);
  margin-bottom: 0.5rem;
}

.form-groupp input,
.form-groupp textarea {
  width: 90%;
  /* padding: 0.75rem 1rem; */
  border-radius: 0.5rem;
  /* background: var(--gray-50); */
  /* border: 1px solid var(--gray-200); */
  border: solid 1px black;
  transition: all 0.3s ease;
}

.form-groupp input:focus,
.form-groupp textarea:focus {
  outline: none;
  border-color: var(--blue-500);
  box-shadow: 0 0 0 3px var(--blue-100);
}

.form-groupp textarea {
  height: 8rem;
  resize: vertical;
}

.submit-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--blue-600);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
}

.submit-button:hover {
  background: var(--blue-700);
}

.button-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;
}

.submit-button:hover .button-icon {
  transform: translateX(4px);
}

.success-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--green-600);
  background: var(--green-100);
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  animation: bounce 1s infinite;
}

/* Contact Information */
.contactt-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-card {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  margin-right: 40px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 8.5rem;
}

.info-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.icon-container {
  /* padding: 1rem; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 0.75rem;
  transition: background-color 0.3s ease;
}

.icon-container svg {
  width: 1.5rem;
  height: 1.5rem;
}

.blue {
  background: var(--blue-100);
  color: var(--blue-600);
}

.purple {
  background: var(--purple-100);
  color: var(--purple-600);
}

.green {
  background: var(--green-100);
  color: var(--green-600);
}

.orange {
  background: var(--orange-100);
  color: var(--orange-600);
}

.info-content{
  /* background-color: red; */
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.info-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: 0.5rem;
}

.info-content p {
  color: var(--gray-600);
  margin-bottom: 0.5rem;
}

.highlight {
  font-weight: 500;
}
.our-services-section {
  /* background: linear-gradient(to bottom, #3a1c71, #d76d77 80%); */
  background: transparent;
  backdrop-filter: blur(6px);
  color: white;
  padding: 10px 20px;
  position: relative;
  z-index: 2;
  text-align: center;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

.section-subtitle {
  max-width: 900px;
  margin: 0 auto 40px;
  font-size: 19px;
  color: #e0e0e0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.service-card {
  background: white;
  color: black;
  border-radius: 16px;
  padding: 40px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.service-card:hover {
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 32px;
  color: #d63384;
  margin-bottom: 15px;
}

.service-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.service-description {
  font-size: 14px;
  color: #555;
}

.ctacta-box {
  background: linear-gradient( #ffffff3a);
  border-radius: 16px;
  padding: 40px 20px;
  max-width: 700px;
  margin: 0 auto;
}

.ctacta-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}

.ctacta-description {
  font-size: 14px;
  color: white;
  margin-bottom: 20px;
}

.ctacta-button {
  background: white;
  color: #6f42c1;
  font-weight: 600;
  padding: 10px 25px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-slide-down {
  animation: slideDown 0.5s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out;
}

.animate-slide-right {
  animation: slideRight 0.5s ease-out;
}

.animate-slide-left {
  animation: slideLeft 0.5s ease-out;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}








/* Main container.... styles......................................... */
.scontainer {
  overflow: hidden;
  /* min-height: 100vh; */
  height: 30vh;
  /* background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%); */
}

.slider-container {
  height: 35vh;
  width: 100%;
  backdrop-filter: blur(6px);
  overflow: hidden;
  position: relative;
}

/* Gradient overlays */
.gradient-left,
.gradient-right {
  position: absolute;
  top: 0;
  height: 30vh;
  width: 128px;
  z-index: 10;
}

.gradient-left {
  left: 0;
  background: linear-gradient(90deg, #1a1a1a 0%, transparent 100%);
}

.gradient-right {
  right: 0;
  background: linear-gradient(-90deg, #1a1a1a 0%, transparent 100%);
}

/* Slider track */
// .slider-track {
//   position: absolute;
//   display: flex;
//   /* background-color: white; */
//   gap: 48px;
//   transition: transform 0.3s ease;
// }

/* Logo container */
.slogo-container {
  width: 300px;
  height: 25vh;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.logo-container:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

/* Logo image */
.slogo-image {
    width: 70%;
    height: 70%;
  object-fit: contain;
  filter: brightness(0.9) contrast(1.1);
  mix-blend-mode: luminosity;
  transition: all 0.3s ease;
}

.logo-image:hover {
  filter: brightness(1.1) contrast(1.1);
}

p{
  z-index: 5;
}

h1{
  z-index: 5;
}

h2{
  z-index: 5;
}

h3{
  z-index: 5;
}
h4{
  z-index: 5;
}
h5{
  z-index: 5;
}



/* logo slides company, css */
.slider-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 2;
  white-space: nowrap;
  position: relative;
}

.slider-track {
  display: flex;
  gap: 40px;
  width: calc(300px * 10);
  z-index: 2;
  animation: scroll 35s linear infinite;
}

.slider-image {
  width: 350px;
  z-index: 2;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.322);
  backdrop-filter: blur(6px);
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 10px;
}

@keyframes scroll {
  to {
    transform: translateX(20%);
  }
     from {
    transform: translateX(-280%);
  }
}

















/* case study ke slder ki css */

.card-slideerr-container {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 50px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  z-index: 2;
}

.cardds-slider-track {
  display: flex;
  width: calc(650px * 10);
  animation: slide 45s linear infinite;
  position: relative;
  z-index: 2;
}

.cardds-slider-track:hover {
  animation-play-state: paused; /* Pause animation on hover */
}

.cardds-slider-track h3{
  padding: 0;
  margin: 0;
}

/* .cardds-slider-track p{
  padding: 0;
  margin: 0;
  background-color: red;
  font-size: 10px;
  display: flex;
  width: 100%;
} */

.card-description {
  // overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  font-size: 14px;
  word-wrap: break-word;
  // max-height: 80px; 
  // background: red;
  display: block;
}







.carddr {
  width: 250px;
  height: 120px;
  background: #ffffff58;
  backdrop-filter: blur(4px);
  color: white;
  gap: 5px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin-right: 10px;
  border-radius: 10px;
  text-align: center;
}

@keyframes slide {
    0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
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
  animation: logoslide 55s linear infinite;
  position: relative;
  z-index: 2;
}
// .logocardds-slider-track:hover {
//   animation-play-state: paused; 
// }
@keyframes logoslide {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-130%);
  }
}



















/* FAQ Section Container */

.faq{
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  /* height: 80vh; */
  padding-top: 90px;
  padding-bottom: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.faq-container {
  max-width: 1300px;
  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  /* margin: 50px auto; */
  text-align: center;
  font-family: "Arial", sans-serif;
}

.faq-title {
  font-size: 28px;
  font-weight: bold;
  color: #1e293b;
  margin: 0;
}

.faq-subtitle {
  font-size: 16px;
  color: #64748b;
  margin-bottom: 20px;
}

/* FAQ List */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Individual FAQ Item */
.faq-item {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: background 0.3s;
}

.faq-item:hover {
  background: #f1f5f9;
}

/* FAQ Question */
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
}


/* FAQ Answer */
.faq-answer {
  padding-top: 10px;
  font-size: 14px;
  color: #64748b;
  text-align: left;
}

/* Expand/Collapse Icon */
.faq-icon {
  transition: transform 0.3s;
}

.faq-icon.open {
  transform: rotate(180deg);
}


.mmeessaaggee-btn{
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgb(50, 92, 245);
  position: fixed;
  bottom: 20px;
  cursor: pointer;
  z-index: 10;
  right: 20px;
}

.mmee{
  font-size: 21px;
  color: white;
}




.four-iiccoonnss{
  z-index: 10;
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  gap: 10px;
  bottom: 25px;
}


.onee{
  /* background-color: red; */
  display: flex;
  position: relative;
  left: -100px;
  text-decoration: none;
  cursor: pointer;
  padding-right: 15px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  justify-content: center;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 20px;
  padding-left: 8px;
  z-index: 1;

  gap: 23px;
  background: #367edb;
  align-items: center;
  flex-direction: row;
}

.onee a{
  text-decoration: none;
  cursor: pointer;
  color: white;
}

.twoo a{
  text-decoration: none;
  cursor: pointer;
  color: white;
}

.twoo{
  /* background-color: red; */
  display: flex;
  position: relative;
  left: -100px;
  font-size: 20px;

  padding-right: 5px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  justify-content: center;
  color: white;
  padding-top: 5px;
  left: -100px;
  cursor: pointer;
  padding-bottom: 5px;
  padding-left: 8px;
  z-index: 1;

  gap: 25px;
  background: #367edb;
  align-items: center;
  flex-direction: row;
}
.three{
  /* background-color: red; */
  display: flex;
  left: -100px;
  cursor: pointer;
  position: relative;
  font-size: 20px;

  left: -100px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  justify-content: center;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 8px;
  gap: 35px;
  z-index: 1;

  background: #367edb;
  flex-direction: row;
}
.fourr{
  /* background-color: red; */
  display: flex;
  left: -100px;
  cursor: pointer;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  justify-content: center;
  color: white;
  font-size: 20px;
  z-index: 1;
  position: relative;
  left: -100px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 8px;
  gap: 45px;
   background:#367edb;
  align-items: center;
  flex-direction: row;
}
.fourr:hover, 
.three:hover, 
.twoo:hover, 
.onee:hover {
    transform: translateX(100px); /* Moves right on hover */
    box-shadow: 0 4px 10px rgba(78, 84, 200, 0.5);
}



















.caseee-study {
  position: relative;
  width: 100%;
  z-index: 2;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  /* padding: 20px; */
  color: white;
}

/* Background Video */
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* Content Styling */
.ccoontent {
  position: relative;
  z-index: 1;
  /* cursor: pointer; */
  max-width: 600px;
  margin-top: 30px;
}



.badge {
  display: inline-block;
  background: black;
  color: white;
  cursor: pointer;
  padding: 9px 20px;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 5px;
  margin-bottom: 10px;
}

.badge:hover {
  background-color: white;
  color: black;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 0px;
  margin-left: 5px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  margin-left: 5px;
}

/* Buttons */
.buttons {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: white;
  transition: 0.3s;
  background-color:rgba(19, 129, 255, 0.71);
  border-radius: 8px;
}

.primary {
  background: black;
  color: white;
}

.primary:hover {
  background: white;
  color: black;
}

.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid white;
}

.secondary:hover {
  background: white;
  color: black;
}

.slidder{
  background-color: rgb(255, 255, 255);
  height: 35vh;
  width: 96%;
  margin: 10px;
}






/* contact us page */
/* Office Locations Styles */
.locations-container {
position: relative;
backdrop-filter: blur(6px);
z-index: 2;
  padding: 4rem 2rem;
  /* background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); */
}

.locations-title {
  text-align: center;
  color: #ffffff;
  margin: 0;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 700;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1600px;
  padding-bottom: 10px;
  margin: 0 auto;
}

.location-card {
  background: rgba(255, 255, 255, 0.422);
  backdrop-filter: blur(3px);
  border-radius: 12px;
  padding: 0.5rem;
  z-index: 2;
  gap: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.location-card:hover {
  transform: translateY(-5px);
}

.location-image {
  width: 100%;
  height: 200px;
  z-index: 2;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.location-name {
  font-size: 1.2rem;
  color: #393939;
  margin-bottom: 1rem;
  font-weight: 600;
}

.location-address {
  color: #ffffff;
  margin-bottom: 1rem;
  z-index: 2;
  font-size: 0.9rem;
  line-height: 1.5;
}

.location-contact {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  font-size: 1rem;
  height: 35px;
  margin-bottom: 0.5rem;
}

.location-contact svg {
  color: #ffffff;
}

@media (max-width: 768px) {
  .locations-title {
    font-size: 2rem;
  }
  
  .locations-grid {
    grid-template-columns: 1fr;
  }
  
  .locations-container {
    padding: 2rem 1rem;
  }
}
















.cs-container {
  /* min-height: 100vh; */
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  /* background: linear-gradient(135deg, #f0f4ff 0%, #e6e9ff 100%); */
}

.cs-scroll-container {
  overflow: hidden;
  margin: 0 auto;
  max-width: 100%;
}



.cs-cards-wrapper {
  display: flex;
  gap: 1.5rem;
  padding: 1rem 0.5rem;
  transition: transform 0.1s linear;
}

.cs-card {
  flex: 0 0 320px;
  background: rgba(255, 255, 255, 0.264);
  background-position: center;
  background-size: cover;
  border-radius: 0.75rem;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  transition: transform 0.2s;
}
/* 
.cs-card:hover {
  transform: scale(1.05);
} */

.cs-card-content {
  padding: 1.5rem;
  overflow: hidden;
}

.cs-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.cs-card-description {
  color: #ffffff;
  margin-bottom: 1rem;
}

/* .cs-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #4f46e5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;
} */

/* .cs-button:hover {
  background-color: #4338ca;
} */



// .auto-scroll-wrapper {
//   overflow: hidden;
//   width: 100%;
//   overflow-x: auto;
//   scroll-behavior: smooth;
//    scrollbar-width: none;       
//   -ms-overflow-style: none;     
// }

// .auto-scroll-track {
//   display: flex;
//   gap: 16px;
//   animation: scroll-left 8s linear infinite;
// }

// .auto-scroll-track:hover {
//   animation-play-state: paused; /* Pause animation on hover */
// }



// @keyframes scroll-left {
//   0% {
//     transform: translateX(0%);
//   }
//   100% {
//     transform: translateX(-190%);
//   }
// }

// .scroll-card {
//   min-width: 300px;
//   flex-shrink: 0;
//   background: #fff;
//   border-radius: 12px;
//   padding: 20px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
// }










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
  
  // overflow: hidden;
  // width: max-content;
  animation: scroll-left 75s linear infinite;
}

.spservices-cards:hover {
  animation-play-state: paused;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-80%);
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

  padding: 60px 20px;
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





























.heapp {
  min-height: 90vh;
  position: relative;
  z-index: 2;
  overflow-x: hidden;
}

/* Locations section */
.helocations-section {
  padding: 10px 10px;
  position: relative;
  min-height: 90vh;
  overflow: hidden;
  max-width: 1600px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .helocations-section {
    padding: 10px 2rem;
  }
}

@media (min-width: 1024px) {
  .helocations-section {
    padding: 10px 3rem;
  }
}

/* Animated background */
.helocations-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 90%, #4299e1 0%, transparent 45%),
    radial-gradient(circle at 80% 20%, #0ea5e9 0%, transparent 45%);
  opacity: 0.15;
  filter: blur(100px);
  animation: backgroundMove 20s linear infinite alternate;
  pointer-events: none;
}

@keyframes backgroundMove {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

/* Header styles */
.heheader {
  text-align: center;
  // margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}

.heheader h2 {
  font-size: 2rem;
  // font-weight: 800;
  // margin-top: 10px;
  margin-bottom: 10px;
  // margin-bottom: 1rem;
  // background: linear-gradient(to right, #fff, #94a3b8);
  // -webkit-background-clip: text;
  // background-clip: text;
  color: white;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
}

@media (min-width: 640px) {
  .heheader h2 {
    font-size: 2.5rem;
  }
}

.heheader p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Grid layout */
.helocations-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .helocations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .helocations-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

/* Location card styles */
.helocation-card {
  position: relative;
  min-height: 300px;
  border-radius: 1.5rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.helocation-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

@media (min-width: 1024px) {
  .helocation-card.expanded {
    grid-column: span 2;
    grid-row: span 2;
  }
}

/* Card background */
.hecard-background {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.hecard-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hegradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.8));
  mix-blend-mode: multiply;
}

/* Card content */
.hecard-content {
  position: relative;
  z-index: 10;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
}

.helocation-header {
  display: flex;
  align-items: center;
  // margin-bottom: 0.75rem;
}

.heicon-wrapper {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
}

.heicon-wrapper svg {
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.helocation-header h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.heregion {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.headdress {
  margin-top: 1rem;
  overflow: hidden;
}

.headdress p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Decorative elements */
.hedecorative-line {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 0.5rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
}




        `}</style>
        </section>
      </div>


      <section className="stats-section" ref={sectionRef}>
        <div className="containerrr">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="stat-card"
              >
                <h3
                  className="stat-value"
                  ref={(el) => (statRefs.current[index] = el)}
                >
                  0{stat.value.replace(/\d+/g, "")}
                </h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      


      <div className="containerrrrrr">
        <h3 className="headinggg">Trusted by Industry Leaders</h3>
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
          <h2 className="section-title">More Success Stories</h2>
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



      <section className="testimonials-section">
        <div className="containerrrrr">
          <div className="testimonial-box">
            <div className="testimonial-header">
              {/* <h2>Client Testimonials</h2> */}
              <div className="testimonial-buttons">
                <button onClick={prevTestimonial}>&#8249;</button>
                <button onClick={nextTestimonial}>&#8250;</button>
              </div>
            </div>

            <div className="testimonial-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="testimonial-card"
                >
                  <div className="client-info">
                    <img
                      src={
                        clients[activeTestimonial].image || "/placeholder.svg"
                      }
                      alt={clients[activeTestimonial].name}
                      className="client-image"
                    />
                    <h3>{clients[activeTestimonial].name}</h3>
                    <p>{clients[activeTestimonial].position}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < clients[activeTestimonial].rating
                              ? "star filled"
                              : "star"
                          }
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="testimonial-text">
                    <p>"{clients[activeTestimonial].testimonial}"</p>
                    <span>
                      {clients[activeTestimonial].company} • Verified Client
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="testimonial-dots">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={index === activeTestimonial ? "dot active" : "dot"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="caseee-study">
        {/* Background Video */}
        <video autoPlay loop muted className="background-video">
          <source
            src="https://cdn.pixabay.com/video/2015/10/16/1046-142621379_tiny.mp4"
            // src="https://cdn.pixabay.com/video/2015/10/16/1035-142621331_tiny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="ccoontent">
          <a href="/appp">
            <p className="badge">Case Study</p>
          </a>
          <h1>How We Transformed Client's Business Process</h1>
          <p>
            Discover how our innovative solution helped increase efficiency by
            45% and reduced operational costs by 30%.
          </p>
          <div className="buttons">
            {/* <a href="/appp">
              <button className="btn primary">Read Full Case Study</button>
            </a> */}
            <a href="/appp">
              <button className="btn secondary">View All Case Studies</button>
            </a>
          </div>
        </div>

        <div className="card-slideerr-container">
          <div className="cardds-slider-track">
            {cards.concat(cards).map((card, index) => (
              <div key={index} className="carddr">
                <h3>{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <a href="/appp">
                  <button className="btn primaryey">Read Here</button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* .....................................................our service section.................................................. */}

 




























      <div className="spservices">
        <h2 className="sectionnn-title" style={{ color: "black" }}>Our Services</h2>

        <p className="spservices-subtitle">
          We offer a wide range of IT solutions designed to help your business grow, innovate, and stay ahead of the competition.
        </p>


        <div className="scroll-wrapper">
        <div className="spservices-cards">
        
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

      {/* .....................................................career section.................................................. */}

      <section
        style={{
          background: "rgb(255, 255, 255)",
          minHeight: "75vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          padding: "10px 1px",
          zIndex: "2",
        }}
      >
        <div style={{ maxWidth: "1700px", width: "100%", textAlign: "center" }}>
          <motion.h2
            style={{ fontSize: "34px", fontWeight: "bold", color: "#1a202c" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Innovative IT Solutions
          </motion.h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#2563eb",
              margin: "16px auto 24px",
            }}
          ></div>
          <motion.p
            style={{
              color: "#4a5568",
              maxWidth: "1400px",
              margin: "0 auto 32px",
              fontSize: "20px",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
           Our Innovative IT Solutions drive business transformation through smart, scalable, and secure technology.
We specialize in customized software, web, and automation services tailored to your needs.
Empowering your digital journey with efficiency, innovation, and excellence.
          </motion.p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            maxWidth: "1600px",
            width: "100%",
            backgroundColor: "rgb(207, 207, 207)",
            marginBottom: "50px",
            alignItems: "center",
          }}
        >
          <motion.div
            style={{ display: "flex", justifyContent: "center" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Team collaboration"
              className="responsive-img"
              style={{
                borderRadius: "8px",
                zIndex: "2",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                maxWidth: "100%",
                height: "auto",
                marginLeft: "15px",
              }}
            />

            <style>
              {`


              .ababab{
              // background: red;
              }


              @media (max-width: 640px) {

                 .responsive-img {
                      display: none;
                      }
                      .ababab{
                      margin: 0;
                      display: none;}


                  // .ababab{
                  //       position: absolute;
                  //       left: 0;
                  //       height: 1200px;
                  //       }



            
          //     .ababab p{
          //     font-size: 10px;}
          // }

    `}
                </style>

          </motion.div>





          <motion.div
          className="ababab"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "600",
                color: "#1a202c",
                marginBottom: "16px",
                zIndex: "2",
              }}
            >
              Why Work With Us?
            </h3>
            <p
              style={{
                color: "#4a5568",
                marginBottom: "24px",
                fontSize: "16px",
                padding: "10px",
                zIndex: "2",
              }}
            >
              At ITSoftlab, we believe that our employees are our greatest asset. We are committed to creating a positive work environment where everyone can thrive and grow. We foster a culture of collaboration, continuous learning, and mutual respect, ensuring that each team member feels valued and empowered. Every voice is heard, every idea is appreciated, and every success is celebrated. By investing in our people, we build a foundation of innovation, trust, and long-term growth for both our employees and the company.
              Would you like a shorter or more formal version as well?
            </p>

            <h4
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#1a202c",
                zIndex: "2",
                marginBottom: "12px",
              }}
            >
              Solutions
            </h4>
            <motion.ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                marginBottom: "24px",
                zIndex: "2",
                color: "#4a5568",
                fontSize: "18px",
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: {
                      opacity: 1,
                      zIndex: "2",
                      x: 0,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  {benefit}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {/* <Link to="/aboutus">
                <button
                  style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "12px 24px",
                    marginBottom: "20px",
                    borderRadius: "6px",
                    border: "none",
                    zIndex: "2",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "500",
                    transition: "background 0.3s",
                  }}
                >
                  Contact Us
                </button>
              </Link> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="team" className="team-section">
        <div className="contaiiinner">
          <div className="headerrer">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="title">Meet Our Team</h2>
              <p className="description">
                Our talented team of professionals is dedicated to delivering
                exceptional results for our clients.
              </p>
            </motion.div>
          </div>

          <div className="team-grid">
            <div
              className="auto-scrollll-wrapper"
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseDown={handleMouseDown}
              onMouseLeaveCapture={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="auto-scrollll-track">
                {[...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="team-member"
                  >
                    <div className="image-container">
                      <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-image" />
                      <div className="social-icons">
                        <a href={member.social.linkedin} className="icon linkedin">
                          <Linkedin size={18} />
                        </a>
                        <a href={member.social.twitter} className="icon twitter">
                          <Twitter size={18} />
                        </a>
                        <a href={`mailto:${member.social.email}`} className="icon email">
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                    <h3 className="member-name">{member.name}</h3>
                    <p className="position">{member.position}</p>
                    <p className="bio">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>












          <div
            style={{
              paddingBottom: "80px",
              zIndex: "2",
              background: "white",
              color: "black",
            }}
            className="footer text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p
                className="footer-text"
                style={{ zIndex: "2", paddingBottom: "20px" }}
              >
                Want to join our team? We're always looking for talented
                individuals.
              </p>
              <a
                style={{
                  background: "rgba(0, 54, 251, 0.54)",
                  padding: "10px",
                  borderRadius: "8px",
                  color: "white",
                  textDecoration: "none",
                }}
                href="/companies"
                className="careers-button"
              >
                View Open Positions
              </a>
            </motion.div>
          </div>
        </div>
      </section>



      <p style={{ color: "white", fontSize: "40px", textAlign: "center", paddingTop: "0", marginBottom: "0", fontWeight: "600" }}>Tech & Infrastructure Partners</p>
      <div className="slider-container">
        <div className="slider-track">
          {images.concat(images).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          ))}
        </div>
      </div>

      <div className="faq">
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Find answers to common questions about our services, process, and
            how we can help your business.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item"
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  {faq.question}
                  <span
                    className={`faq-icon ${openIndex === index ? "open" : ""}`}
                  >
                    &#9662;
                  </span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
















































      {/* .....................................................contact us section.................................................. */}

      {/* <section className="locations-container">
        <h2 className="locations-title">Our Office Locations</h2>
        <div className="locations-grid">
          {offices.map((office) => (
            <div key={office.id} className="location-card">
              <img
                src={office.image}
                alt={office.name}
                className="location-image"
              />
              <h3 className="location-name">{office.name}</h3>
              <div className="location-contact">
                <MapPin size={18} />
                <p className="location-address">{office.address}</p>
              </div>

            </div>
          ))}
        </div>
      </section> */}




<div className="heapp">
      <motion.section
        className="helocations-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="heheader"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Our Office Locations</h2>
          {/* <p>With offices strategically located around the world, we provide exceptional service and support wherever you are.</p> */}
        </motion.div>

        <div className="helocations-grid">
          {officeLocations.map((location, index) => (
            <motion.div 
              key={location.id}
              className={`helocation-card ${expandedId === location.id ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setExpandedId(expandedId === location.id ? null : location.id)}
            >
              <motion.div 
                className="hecard-background"
                animate={{ 
                  scale: [1, 1.4, 1],
                  x: [0, 5, -5, 0],
                  y: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              >
                <img src={location.imageUrl} alt={location.city} />
                <div className="hegradient-overlay" style={{
                  background: `linear-gradient(to bottom, transparent 60%, ${location.color}90, ${location.color}ee)`
                }} />
              </motion.div>

              <div className="hecard-content">
                <motion.div
                  className="helocation-header"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="heicon-wrapper" style={{ backgroundColor: location.color }}>
                    <MapPin size={20} />
                  </div>
                  <h3>{location.city}</h3>
                </motion.div>

                <motion.p 
                  className="heregion"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {location.region}
                </motion.p>

                <motion.div
                  className="headdress"
                  initial={{ height: 0 }}
                  animate={{ height: expandedId === location.id ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{location.address}</p>
                </motion.div>
              </div>

              <motion.div
                className="hedecorative-line"
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: expandedId === location.id ? 1 : 0.6,
                  height: expandedId === location.id ? '64px' : '32px'
                }}
                style={{ 
                  backgroundColor: location.color,
                  boxShadow: `0 0 15px ${location.color}80` 
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>

      {/* .....................................................footer section.................................................. */}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="kkll">IT Softlab</h3>
            <p>
              Protect your data and information with top-notch cybersecurity measures. We are in the list of awarded Best IT Company consulting services and website development companies.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/aboutPage">About Us</a>
              </li>
              <li>
                <a href="/servicespage">Services</a>
              </li>
              <li>
                <a href="/careerpage">Careers</a>
              </li>
              <li>
                <a href="/contactus">Contact us</a>
              </li>
              <li>
                <a href="/privacypage">Privacy Policy</a>
              </li>
              <li>
                <a href="/termpage">Terms & Conditions</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="/servicespage">Android/iOS App Development</a>
              </li>
              <li>
              <a href="/servicespage">Cyber Security</a>
              </li>
              <li>
                <a href="/servicespage">Disaster Recovery Solution</a>
              </li>
              <li>
                <a href="/servicespage">IaaS Services</a>
              </li>
              <li>
                <a href="/servicespage">PaaS Services</a>
              </li>
            
              <li>
                <a href="/servicespage">SaaS Services</a>
              </li>
              <li>
              <a href="/servicespage">Software Development</a>
              </li>
              <li>
                <a href="/servicespage">Web App Development</a>
              </li>
              
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            {/* <p>
              <strong>Address:</strong>651A Mahalaxmi Nagar INDORE
            </p> */}
            <p>
              <strong>Contact No:</strong> +91 7898822644
            </p>
            <p>
              <strong>Landline:</strong> - 07314611999
            </p>
            <p>
              <strong>Email:</strong> contact@itsoftlab.com
            </p>
            {/* <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div> */}
          </div>
        </div>

        <hr />
        <p className="footer-bottom">
          © IT SOFTLAB. All rights reserved.
        </p>
      </footer>
      {/* <div className="mmeessaaggee-btn">
        <a href="/" className="mmee">
          <i class="fa-solid fa-headset"></i>
        </a>
      </div> */}
    </>
  );
}

export default HomePage;
