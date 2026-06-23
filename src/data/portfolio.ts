export interface Section {
  id: string;
  title: string;
  description: string;
  details?: string[]; // Array of strings for detailed points (easy to manage)
  link?: string; // Optional link for portfolio/socials
  position: [number, number, number]; // 3D coordinate for the star
  color: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Your Name",
    role: "Creative Developer / Engineer",
    bio: "Welcome to my digital universe. Explore the stars to learn more about my journey.",
  },
  sections: [
    {
      id: "about",
      title: "Self Description",
      description: "I am a passionate developer who loves building interactive and engaging digital experiences.",
      details: [
        "Specialized in modern web technologies",
        "Driven by curiosity and continuous learning",
        "Focused on creating intuitive user experiences"
      ],
      position: [-5, 2, -5] as [number, number, number],
      color: "#ffaa00", // Warm Orange
    },
    {
      id: "education",
      title: "Education",
      description: "My academic background and qualifications.",
      details: [
        "Bachelor of Science in Computer Science",
        "Relevant Coursework: Data Structures, Algorithms, Web Development"
      ],
      position: [4, 3, -8] as [number, number, number],
      color: "#00ccff", // Cyan
    },
    {
      id: "experience",
      title: "Work Experience",
      description: "Professional roles and responsibilities I've taken on.",
      details: [
        "Software Engineer at XYZ Corp (2022 - Present)",
        "Frontend Developer Intern at ABC Inc (2021)"
      ],
      position: [0, -3, -6] as [number, number, number],
      color: "#ff0066", // Pink/Red
    },
    {
      id: "portfolio",
      title: "Portfolio",
      description: "A collection of my recent projects and repositories.",
      details: [
        "Project Alpha - A full-stack web application",
        "Project Beta - An interactive 3D portfolio"
      ],
      link: "https://github.com/yourusername",
      position: [-4, -2, -4] as [number, number, number],
      color: "#aa00ff", // Purple
    },
    {
      id: "social",
      title: "Social Media",
      description: "Connect with me online.",
      details: [
        "LinkedIn: linkedin.com/in/yourprofile",
        "Twitter: @yourhandle"
      ],
      link: "https://linkedin.com",
      position: [3, -1, -3] as [number, number, number],
      color: "#00ff66", // Neon Green
    }
  ]
};
