type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  resume: {
    image: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Alok — 3D Portfolio",
    fullName: "Alok Pratap Jadon",
    email: "alok8273739734@mail.com",
  },
    resume: {
      image: "/Alok_Front-end_resume.pdf", // Ensure this path is correct
    },

  hero: {
    name: "Alok Pratap Jadon",
    p: [""],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview",
      content: `Advanced Associate Software Engineer at Accenture | B.Tech CSE Graduate \n Passionate about creating impactful digital experiences through modern web technologies. Focused on delivering high-quality solutions while driving continuous improvement and innovation.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "My Certifications",
    },
    feedbacks: {
      h2: "Do you like my projects.",
      p: "Feedbacks.",
      content: `I am always open to feedback and suggestions. If you have any thoughts on my projects or would like to collaborate, please feel free to reach out. Your insights are valuable to me and help me improve.`,
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};

