// src/utils/solutions-data.js

// Each solution has:
// - id: unique string
// - iconKey: one of "sitemap" | "home" | "door" | "wifi" | "camera"
// - title: main heading
// - summary: short description
// - details: array of topics with slug, subtitle, content[], and optional img
// - ctaAnchor: link target for CTA button

export const solutionsList = [
  {
    id: "structured-cabling",
    iconKey: "sitemap",
    title: "Structured Cabling",
    summary:
      "Future‑proof network infrastructure with copper and fiber cabling, designed for scalability and reliability.",
    details: [
      {
        slug: "overview",
        subtitle: "Overview",
        content: [
          "Cat6a / Cat7 copper and fiber optic backbone.",
          "Pathway planning, labeling, and as‑built documentation.",
          "Certified installation with Fluke/OTDR test reports.",
        ],
        img: "/brands/cabling.jpg",
      },
      {
        slug: "testing",
        subtitle: "Testing & Certification",
        content: [
          "Comprehensive copper and fiber validation.",
          "Detailed certification reports included at handover.",
        ],
        img: "/brands/testing.jpg",
      },
    ],
    ctaAnchor: "#contact",
  },
  {
    id: "home-automation",
    iconKey: "home",
    title: "Home Automation",
    summary:
      "Smart home solutions for comfort, energy efficiency, and security — all seamlessly integrated.",
    details: [
      {
        slug: "lighting-climate",
        subtitle: "Lighting & Climate",
        content: [
          "Scene‑based lighting and HVAC schedules.",
          "Energy optimization routines with remote access.",
        ],
        img: "/brands/home-automation.jpg",
      },
      {
        slug: "integration",
        subtitle: "Integration",
        content: [
          "Voice, mobile, and wall‑panel control.",
          "Secure cloud integrations and local automations.",
        ],
        img: "/brands/integration.jpg",
      },
    ],
    ctaAnchor: "#contact",
  },
  {
    id: "access-control",
    iconKey: "door",
    title: "Access Control",
    summary:
      "Secure entry systems with audit trails, visitor workflows, and compliance‑ready reporting.",
    details: [
      {
        slug: "credentials",
        subtitle: "Credentials & Policies",
        content: [
          "Badge and mobile credentialing.",
          "Role‑based and time‑of‑day access policies.",
        ],
        img: "/brands/access-control.jpg",
      },
      {
        slug: "integration-audit",
        subtitle: "Integration & Audit",
        content: [
          "CCTV integration and event exports.",
          "Full audit logs for compliance and forensics.",
        ],
        img: "/brands/audit.jpg",
      },
    ],
    ctaAnchor: "#contact",
  },
  {
    id: "wireless-connectivity",
    iconKey: "wifi",
    title: "Wireless Connectivity",
    summary:
      "Enterprise‑grade Wi‑Fi with predictive surveys, AP placement, and performance tuning.",
    details: [
      {
        slug: "site-survey",
        subtitle: "Site Surveys & Heatmaps",
        content: [
          "Predictive planning with heatmaps and capacity analysis.",
          "AP placement and channel planning to minimize interference.",
        ],
        img: "/brands/wireless.jpg",
      },
    ],
    ctaAnchor: "#contact",
  },
  {
    id: "cctv-surveillance",
    iconKey: "camera",
    title: "CCTV Surveillance",
    summary:
      "Scalable video systems for monitoring, analytics, and forensic evidence retention.",
    details: [
      {
        slug: "camera-selection",
        subtitle: "Camera Selection",
        content: [
          "IP, low‑light, and analytics‑ready cameras.",
          "Retention planning: NVR, edge, and cloud options.",
        ],
        img: "/brands/cctv.jpg",
      },
    ],
    ctaAnchor: "#contact",
  },
];

// Default export for convenience
export default solutionsList;
