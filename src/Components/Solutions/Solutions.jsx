import React, { useState } from "react";
import "./Solutions.css";

const Solutions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const solutions = [
    {
      title: "Structured Cabling",
      details: [
        {
          subtitle: "Network Design & Installation",
          content: [
            "Strong networks start with smart planning. We create customized cabling systems that support today’s demands and tomorrow’s growth—whether for new builds, expansions, or upgrades.",
            "Cat5e / Cat6 / Cat6A / Fiber Cabling",
            "Offices, Campuses, Hotels, Schools, Industries",
            "Data Centers & Communication Rooms",
            "Wireless & DAS-ready setups",
          ],
          img: "https://plus.unsplash.com/premium_photo-1661765192121-f398fd1e8fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Fiber Optics",
          content: [
            "High-speed fiber solutions built for reliability and reach. Our team handles everything from installation to testing.",
            "Single-mode & Multi-mode Fiber",
            "Backbone & Horizontal Cabling",
            "Long-distance Connectivity",
            "Repairs & Emergency Restoration",
          ],
          img: "https://images.unsplash.com/photo-1594915440248-1e419eba6611?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Cable Cleanup & Audits",
          content: [
            "A tidy server room improves performance and reduces risk.",
            "Cable Tracing & Labeling",
            "Patch Panel Organization",
            "IDF/MDF Management",
            "Scheduled Maintenance",
          ],
          img: "https://plus.unsplash.com/premium_photo-1683134241482-4a3c44d2ab49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Moves, Adds & Changes",
          content: [
            "Seamless network changes with minimal downtime.",
            "Office Moves & Expansions",
            "Tenant Fit-outs",
            "Equipment Setup & Reconfiguration",
          ],
          img: "https://plus.unsplash.com/premium_photo-1683121081802-27a1264cd7e7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Maintenance & Support",
          content: [
            "Preventive care keeps systems running smoothly.",
            "Cable & Patch Cord Management",
            "Power & UPS Testing",
            "HVAC & Environmental Checks",
            "Monthly Service Plans",
          ],
          img: "https://images.unsplash.com/photo-1634906344066-2c9dfd5e8ef7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Electrical Services",
          content: [
            "Safe, scalable power for your IT needs.",
            "Commercial Electrical Work",
            "Certified Electricians",
            "Panel Upgrades & Backup Power",
          ],
          img: "https://images.unsplash.com/photo-1458007683879-47560d7e33c3?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Quality & Warranty",
          content: [
            "We back our work with trusted warranties and high standards.",
            "Manufacturer Warranties",
            "Reliable Performance Guaranteed",
          ],
          img: "https://images.unsplash.com/photo-1752159684779-0639174cdfac?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Specialized Services",
          content: [
            "Challenging environments are our specialty.",
            "Remote & Marine Networks",
            "Portable Data Center Recovery",
            "Resort & Yacht Connectivity",
            "High-Rise Services",
          ],
          img: "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },

    {
      title: "Home Automation Solutions",
      details: [
        {
          subtitle: "Smart Home Design & Integration",
          content: [
            "We design custom smart home systems that blend technology seamlessly into your lifestyle.",
            "Centralized Control Systems",
            "Room-by-Room Automation Plans",
            "New Homes & Retrofit Projects",
          ],
          img: "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          subtitle: "Lighting & Climate Control",
          content: [
            "Enhance comfort and efficiency with intelligent lighting and temperature automation.",
            "Automated Schedules & Scenes",
            "Smart Thermostats & Sensors",
            "Voice & App-Based Controls",
          ],
          img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          subtitle: "Security & Surveillance",
          content: [
            "Protect your home with smart security that works around the clock.",
            "Video Doorbells & Smart Locks",
            "Indoor & Outdoor Cameras",
            "Motion Detection & Alerts",
          ],
          img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          subtitle: "Entertainment & Media",
          content: [
            "Transform your living space with integrated audio and video solutions.",
            "Multi-Room Audio",
            "Home Theater Integration",
            "Streaming & Smart TV Setup",
          ],
          img: "https://images.unsplash.com/photo-1626187451170-77c8045c9e8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          subtitle: "Ongoing Support & Upgrades",
          content: [
            "We keep your system updated, secure, and running at its best.",
            "Remote Monitoring & Troubleshooting",
            "System Expansion & Device Additions",
            "Firmware & App Updates",
          ],
          img: "https://images.unsplash.com/photo-1581093458411-1c30c30a3c83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
      ],
    },

    {
      title: "CCTV Surveillance Solutions",
      details: [
        {
          subtitle: "CCTV System Design & Installation",
          content: [
            "We design and install customized CCTV systems for total security and peace of mind.",
            "HD & 4K Surveillance Cameras",
            "Indoor & Outdoor Camera Placement",
            "Wired & Wireless System Options",
          ],
          img: "https://images.unsplash.com/photo-1601343144899-c7abf4704326?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          subtitle: "Remote Monitoring & Alerts",
          content: [
            "Monitor your property remotely from anywhere, with real-time alerts sent directly to your phone.",
            "Mobile & Desktop Access",
            "Push Notifications & Email Alerts",
            "24/7 Surveillance Access",
          ],
          img: "https://images.unsplash.com/photo-1634906344066-2c9dfd5e8ef7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          subtitle: "Recording & Storage Solutions",
          content: [
            "Ensure that every moment is captured with secure, reliable video storage options.",
            "NVR/DVR Systems",
            "Cloud-Based Storage Options",
            "Long-Term Recording & Archiving",
          ],
          img: "https://images.unsplash.com/photo-1584697964120-24be91c6eb51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          subtitle: "Security Camera Upgrades & Maintenance",
          content: [
            "Upgrade your existing system to modern, high-quality cameras and ensure ongoing reliability.",
            "Camera Replacements & Upgrades",
            "Scheduled Maintenance & Inspections",
            "System Troubleshooting & Repair",
          ],
          img: "https://images.unsplash.com/photo-1600584738099-d9ee0b960be1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          subtitle: "Business & Residential Surveillance",
          content: [
            "Tailored surveillance solutions for homes and businesses of all sizes.",
            "Home Security Cameras",
            "Commercial Surveillance Systems",
            "Retail & Office Security",
          ],
          img: "https://images.unsplash.com/photo-1587035633252-47369a2519b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
      ],
    },

    {
      title: "Wireless Solutions",
      details: [
        {
          subtitle: "Wireless Network Design & Deployment",
          content: [
            "Strong wireless networks begin with precise planning. We design and deploy tailored wireless systems for optimal performance—whether for new facilities, expansions, or upgrades.",
            "Wi-Fi 6 / Wi-Fi 6E / Wi-Fi 7 Solutions",
            "Offices, Campuses, Hotels, Schools, Industries",
            "Wireless Access Points & Controller Setup",
            "DAS (Distributed Antenna System) Integration",
          ],
          img: "https://plus.unsplash.com/premium_photo-1661765192121-f398fd1e8fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Point-to-Point & Point-to-Multipoint",
          content: [
            "High-speed wireless links for buildings and campuses with minimal infrastructure.",
            "Licensed & Unlicensed Wireless Bridges",
            "Line-of-Sight and Near-Line-of-Sight Solutions",
            "Long-Distance Connectivity",
            "Outdoor & Rugged Environments",
          ],
          img: "https://images.unsplash.com/photo-1594915440248-1e419eba6611?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Wireless Audit & Optimization",
          content: [
            "Ensure optimal coverage, signal strength, and performance.",
            "Heat Mapping & Site Surveys",
            "Access Point Placement & Tuning",
            "Interference & Channel Analysis",
            "Ongoing Performance Monitoring",
          ],
          img: "https://plus.unsplash.com/premium_photo-1683134241482-4a3c44d2ab49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Expansions & Upgrades",
          content: [
            "Seamless wireless scaling as your needs grow.",
            "Office Expansions & Facility Add-ons",
            "Access Point Additions",
            "Controller and Firmware Upgrades",
          ],
          img: "https://plus.unsplash.com/premium_photo-1683121081802-27a1264cd7e7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Managed Services & Support",
          content: [
            "Reliable support keeps your wireless systems performing at their best.",
            "Performance Monitoring & Alerts",
            "Firmware Management & Security Patching",
            "Troubleshooting & Remote Assistance",
            "Monthly Service Plans",
          ],
          img: "https://images.unsplash.com/photo-1634906344066-2c9dfd5e8ef7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Power & Connectivity Services",
          content: [
            "Ensure reliable power and network infrastructure for wireless systems.",
            "Power over Ethernet (PoE) Solutions",
            "UPS Backup Integration",
            "Smart Building Connectivity Support",
          ],
          img: "https://images.unsplash.com/photo-1458007683879-47560d7e33c3?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Quality & Assurance",
          content: [
            "We deliver dependable wireless solutions backed by trusted vendors and clear warranties.",
            "Enterprise-Grade Hardware",
            "Performance and Uptime Guarantees",
          ],
          img: "https://images.unsplash.com/photo-1752159684779-0639174cdfac?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          subtitle: "Specialized Wireless Solutions",
          content: [
            "We deploy wireless connectivity in even the most challenging environments.",
            "Remote Site Wi-Fi & LTE/5G Integration",
            "Mobile & Temporary Networks",
            "Resort, Marine, and High-Density Coverage",
            "High-Rise & Industrial Installations",
          ],
          img: "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
  "title": "Access Control Solutions",
  "details": [
    {
      "subtitle": "System Design & Installation",
      "content": [
        "We design and install customized access control systems that enhance security and convenience.",
        "Keyless Entry Solutions",
        "Biometric & RFID Access Systems",
        "Door Lock Integration & Control"
      ],
      "img": "https://images.unsplash.com/photo-1601820918705-5fd2f6477e44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    {
      "subtitle": "Mobile & Remote Access",
      "content": [
        "Access your property remotely with mobile apps or web-based platforms, anytime, anywhere.",
        "Smartphone & RFID Card Access",
        "Remote Door Unlocking & Monitoring",
        "Access Logs & Event History"
      ],
      "img": "https://images.unsplash.com/photo-1633652830909-c57734e39762?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    {
      "subtitle": "Visitor Management Systems",
      "content": [
        "Manage guests with ease, from check-in to access permission, all integrated into your access control system.",
        "Visitor Pre-registration & Check-in",
        "Temporary Access Passes & QR Codes",
        "Automated Alerts & Notifications"
      ],
      "img": "https://images.unsplash.com/photo-1588151564677-79edc6aeb849?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    {
      "subtitle": "Integration with Security Systems",
      "content": [
        "Integrate access control with other security systems like surveillance cameras and alarms for a comprehensive solution.",
        "CCTV & Access Control Integration",
        "Alarm Triggers Based on Access Events",
        "Centralized Management Systems"
      ],
      "img": "https://images.unsplash.com/photo-1569174313-e40b7b928db0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    {
      "subtitle": "Maintenance & Support",
      "content": [
        "Ensure your access control system is always operational with ongoing support and maintenance services.",
        "System Upgrades & Software Patches",
        "Routine Inspections & Troubleshooting",
        "24/7 Emergency Support"
      ],
      "img": "https://images.unsplash.com/photo-1632185590132-b234301f4e5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0"
    }
  ]
},


    // You can add more solution categories here (Wireless Solutions, Automation, etc.)
  ];

  return (
    <section className="solutions-section" id="Solutions">
      <h2 className="solutions-title">Our Solutions</h2>
      <div className="solutions-accordion">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-item">
            {/* Accordion Header */}
            <button
              className={`solution-header ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleSection(index)}
            >
              {solution.title}
              <span className="icon">{activeIndex === index ? "+" : "+"}</span>
            </button>

            {/* Accordion Body */}
            <div
              className={`solution-body ${activeIndex === index ? "open" : ""}`}
            >
              {solution.details.map((detail, i) => (
                <div key={i} className="solution-detail">
                  <h3>{detail.subtitle}</h3>
                  <div className="solution-grid">
                    {/* Left Text */}
                    <div className="solution-text">
                      <ul>
                        {detail.content.map((line, j) => (
                          <li key={j}>{line}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Right Image */}
                    <div className="solution-image">
                      <img src={detail.img} alt={detail.subtitle} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
