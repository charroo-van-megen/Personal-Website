const translations = {
  nl: {
    // NAV
    nav_home: "Home",
    nav_projects: "Projects",
    nav_about: "About Me",
    nav_contact: "Contact",

    // HOME
    home_title: "Welcome bij Mijn Website",
    home_intro: "Op deze website presenteer ik mijn werk als Game Developer, mijn vaardigheden en mijn passie voor gameplay design.",

    about_title: "About Me",
    about_preview: "Leer meer over wie ik ben, mijn achtergrond als Game Developer, mijn technische vaardigheden en mijn ambities binnen game development.",

    projects_title: "Projects",
    projects_preview: "Bekijk mijn projecten, waaronder gameplay prototypes, schoolopdrachten en persoonlijke gameconcepten die ik heb ontwikkeld in Unity.",

    contact_title: "Contact",
    contact_preview: "Neem contact met mij op voor samenwerkingen, vragen of mogelijkheden binnen game development.",

    read_more: "Read more →",
    view_projects: "View projects →",
    get_in_touch: "Get in touch →",

    // ABOUT PAGE
    about_intro_title: "Introductie",
    about_intro: "Hallo, mijn naam is Charroo van Megen, ik ben 20 jaar oud en momenteel tweedejaars Game Developer aan het Mediacollege Amsterdam.",

    about_background_title: "Achtergrond",
    about_background: "Ik heb ervaring met het ontwikkelen van games en werk voornamelijk met Unity.",

    about_skills_title: "Skills",
    about_goals_title: "Doelen",

    about_goals: "Mijn uiteindelijke doel is om mijn eigen droomgame te ontwikkelen.",

    // PROJECTS
    projects_list: "Tower Defense game, Untitled Goose Game vertical slice, Mythe project",

    // CONTACT
    contact_title_page: "Contact Me",
    contact_text: "If you'd like to collaborate, feel free to reach out.",

    // FOOTER
    footer: "© 2026 Charroo van Megen"
  },

  en: {
    nav_home: "Home",
    nav_projects: "Projects",
    nav_about: "About Me",
    nav_contact: "Contact",

    home_title: "Welcome to My Website",
    home_intro: "On this website I present my work as a Game Developer, my skills, and my passion for gameplay design.",

    about_title: "About Me",
    about_preview: "Learn more about who I am, my background as a Game Developer, my technical skills and my ambitions.",

    projects_title: "Projects",
    projects_preview: "View my projects, including gameplay prototypes, school assignments and personal game concepts built in Unity.",

    contact_title: "Contact",
    contact_preview: "Contact me for collaborations, questions or opportunities in game development.",

    read_more: "Read more →",
    view_projects: "View projects →",
    get_in_touch: "Get in touch →",

    about_intro_title: "Introduction",
    about_intro: "Hello, my name is Charroo van Megen, I am 20 years old and currently a second-year Game Development student.",

    about_background_title: "Background",
    about_background: "I have experience developing games and mainly work with Unity.",

    about_skills_title: "Skills",
    about_goals_title: "Goals",

    about_goals: "My ultimate goal is to develop my own dream game.",

    projects_list: "Tower Defense game, Untitled Goose Game vertical slice, Myth project",

    contact_title_page: "Contact Me",
    contact_text: "If you'd like to collaborate, feel free to reach out.",

    footer: "© 2026 Charroo van Megen"
  },

  es: {
    nav_home: "Inicio",
    nav_projects: "Proyectos",
    nav_about: "Sobre mí",
    nav_contact: "Contacto",

    home_title: "Bienvenido a mi sitio web",
    home_intro: "En este sitio presento mi trabajo como desarrollador de juegos, mis habilidades y mi pasión por el gameplay.",

    about_title: "Sobre mí",
    about_preview: "Aprende más sobre mí, mi experiencia y mis habilidades.",

    projects_title: "Proyectos",
    projects_preview: "Mira mis proyectos, incluyendo prototipos y trabajos personales.",

    contact_title: "Contacto",
    contact_preview: "Contáctame para colaboraciones o preguntas.",

    read_more: "Leer más →",
    view_projects: "Ver proyectos →",
    get_in_touch: "Contactar →",

    about_intro_title: "Introducción",
    about_intro: "Hola, mi nombre es Charroo van Megen.",

    about_background_title: "Antecedentes",
    about_background: "Tengo experiencia en desarrollo de juegos con Unity.",

    about_skills_title: "Habilidades",
    about_goals_title: "Objetivos",

    about_goals: "Mi objetivo es crear mi propio juego soñado.",

    projects_list: "Juego Tower Defense, vertical slice, proyecto Myth",

    contact_title_page: "Contacto",
    contact_text: "Contáctame si deseas colaborar.",

    footer: "© 2026 Charroo van Megen"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "nl";

  setLanguage(savedLang);

  const select = document.getElementById("languageSelect");
  if (select) {
    select.value = savedLang;
  }
});