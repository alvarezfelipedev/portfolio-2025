import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Felipe Alvarez",
  EMAIL: "n.felialvarez@gmail.com",
  NUM_BLOGS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "+1 año como QA Tester, realizando anális, diseño y casos de prueba en Azure, con experiencia en pruebas de UX/UI, APIs, documentación e IVRs.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Donde trabajo.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Una colección de mis proyectos, con enlaces a repositorios y demos.",
};

export const BLOG: Metadata = {
  TITLE: "Post",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/alvarezfelipedev"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/alvarezfelipe/",
  }
];
