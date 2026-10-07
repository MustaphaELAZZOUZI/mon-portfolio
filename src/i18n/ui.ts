/**
 * ✏️  FICHIER DE CONFIGURATION
 * Vos informations personnelles et tous les textes (EN / FR) sont ici.
 */

const email = "mustelazzouzi2003@gmail.com";

export const site = {
  name: "Mustapha ELAZZOUZI",
  initials: "ME",
  email,
  github: "https://github.com/MustaphaELAZZOUZI",
  linkedin: "https://www.linkedin.com/in/mustapha-el-azzouzi-553721237/",
  // Le formulaire envoie les messages directement à votre email (service FormSubmit).
  // Endpoint AJAX (utilisé par le script) + endpoint classique (si JavaScript est désactivé).
  formEndpoint: `https://formsubmit.co/ajax/${email}`,
  formFallback: `https://formsubmit.co/${email}`,
};

const en = {
  meta: {
    title: "Mustapha ELAZZOUZI | Software & Data Developer",
    description:
      "Portfolio of Mustapha ELAZZOUZI: machine learning, computer vision and management applications.",
  },
  skip: "Skip to content",
  themeToggle: "Switch between light and dark theme",
  nav: { label: "Main navigation", about: "About", projects: "Projects", contact: "Contact" },
  hero: {
    heading: "AI models and business software",
    headingAccent: "built to work in the real world.",
    intro:
      "I work across machine learning and full-stack engineering, turning research and math into dependable software. Lately, that means everything from computer vision models to production web apps.",
    ctaPrimary: "See the projects",
    ctaSecondary: "Get in touch",
    panelTitle: "Data sheet",
    panelRev: "Rev. 2026",
    specs: [
      { k: "Name", v: "Mustapha ELAZZOUZI" },
      { k: "Role", v: "Software & data developer" },
      { k: "Focus", v: "Machine learning, web apps" },
      { k: "Projects", v: "6 case studies" },
      { k: "Status", v: "Open to opportunities", live: true },
    ],
    marquee: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "scikit-learn",
      "TensorFlow",
      "OpenCV",
      "Pandas",
      "SQL",
      "JavaScript",
      "Astro",
      "Data analysis",
    ],
  },
  about: {
    tag: "A",
    title: "About",
    p1: "Currently in my 2nd year of a Master's in Artificial Intelligence and Data Science, I design software that turns data and ideas into tools people actually use. My work spans machine learning and computer vision research, as well as management applications deployed within real organisations.",
    p2: "I value well-posed problems, honest evaluation of results, and interfaces that fade behind the usage.",
    stackTitle: "Stack",
    groups: [
      {
        name: "AI & machine learning",
        level: "Research",
        items: "Python, scikit-learn, TensorFlow / Keras, OpenCV, Pandas, NumPy",
      },
      {
        name: "Web & applications",
        level: "Production",
        items: "HTML, CSS, JavaScript, Astro, REST APIs",
      },
      {
        name: "Data & tools",
        level: "Operations",
        items: "SQL, Git, GitHub, Linux",
      },
    ],
  },
  projects: {
    tag: "B",
    title: "Projects",
    intro: "Research case studies and management applications I have designed and built.",
    filtersLabel: "Filter projects",
    filters: { all: "All", ai: "AI & data", web: "Web & apps" },
    categories: { ai: "AI & data", web: "Web & apps" },
    showing: "Showing",
    of: "of",
    details: "Read the details",
    live: "Live site",
    code: "Source code",
  },
  contact: {
    tag: "C",
    title: "Contact",
    intro:
      "Questions about a project, a collaboration or an opportunity? Send me a message: it arrives directly in my inbox.",
    name: "Your name",
    email: "Your email",
    message: "Message",
    send: "Send message",
    sending: "Sending…",
    success: "Thank you! Your message has been sent. I will get back to you soon.",
    error: "Sorry, the message could not be sent. Please email me directly at",
    note: "Your message goes straight to my inbox.",
  },
  footer: {
    blurb: "Software and data developer. Machine learning, computer vision and management applications.",
    links: "Links",
    rights: "All rights reserved.",
    built: "",
  },
  detail: {
    back: "Back to projects",
    year: "Year",
    category: "Category",
    stack: "Stack",
  },
};

const fr: typeof en = {
  meta: {
    title: "Mustapha ELAZZOUZI | Développeur logiciel & data",
    description:
      "Portfolio de Mustapha ELAZZOUZI : machine learning, vision par ordinateur et applications de gestion.",
  },
  skip: "Aller au contenu",
  themeToggle: "Basculer entre le thème clair et sombre",
  nav: { label: "Navigation principale", about: "À propos", projects: "Projets", contact: "Contact" },
  hero: {
    heading: "Des modèles d'IA et des logiciels métier",
    headingAccent: "pensés pour fonctionner dans la vraie vie.",
    intro:
      "J'évolue à l'intersection du machine learning et de l'ingénierie logicielle, transformant la recherche et les mathématiques en solutions fiables. Des modèles de vision par ordinateur aux applications web haute performance.",
    ctaPrimary: "Voir les projets",
    ctaSecondary: "Me contacter",
    panelTitle: "Fiche technique",
    panelRev: "Rév. 2026",
    specs: [
      { k: "Nom", v: "Mustapha ELAZZOUZI" },
      { k: "Rôle", v: "Développeur logiciel & data" },
      { k: "Domaines", v: "Machine learning, web" },
      { k: "Projets", v: "6 études de cas" },
      { k: "Statut", v: "Ouvert aux opportunités", live: true },
    ],
    marquee: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Vision par ordinateur",
      "scikit-learn",
      "TensorFlow",
      "OpenCV",
      "Pandas",
      "SQL",
      "JavaScript",
      "Astro",
      "Analyse de données",
    ],
  },
  about: {
    tag: "A",
    title: "À propos",
    p1: "Actuellement en 2ᵉ année de Master en Intelligence Artificielle et Science des Données, je conçois des logiciels qui transforment données et idées en outils réellement utilisés. Mon travail s'étend de la recherche en machine learning et vision par ordinateur à des applications de gestion déployées au sein de véritables organisations.",
    p2: "Je privilégie les problèmes bien posés, l'évaluation honnête des résultats et des interfaces qui s'effacent devant l'usage.",
    stackTitle: "Stack technique",
    groups: [
      {
        name: "IA & machine learning",
        level: "Recherche",
        items: "Python, scikit-learn, TensorFlow / Keras, OpenCV, Pandas, NumPy",
      },
      {
        name: "Web & applications",
        level: "Production",
        items: "HTML, CSS, JavaScript, Astro, API REST",
      },
      {
        name: "Données & outils",
        level: "Exploitation",
        items: "SQL, Git, GitHub, Linux",
      },
    ],
  },
  projects: {
    tag: "B",
    title: "Projets",
    intro: "Études de cas de recherche et applications de gestion que j'ai conçues et développées.",
    filtersLabel: "Filtrer les projets",
    filters: { all: "Tous", ai: "IA & data", web: "Web & apps" },
    categories: { ai: "IA & data", web: "Web & apps" },
    showing: "Affichage de",
    of: "sur",
    details: "Lire le détail",
    live: "Site en ligne",
    code: "Code source",
  },
  contact: {
    tag: "C",
    title: "Contact",
    intro:
      "Une question sur un projet, une collaboration ou une opportunité ? Écrivez-moi : votre message arrive directement dans ma boîte mail.",
    name: "Votre nom",
    email: "Votre email",
    message: "Message",
    send: "Envoyer le message",
    sending: "Envoi en cours…",
    success: "Merci ! Votre message a bien été envoyé. Je vous répondrai rapidement.",
    error: "Désolé, le message n'a pas pu être envoyé. Écrivez-moi directement à",
    note: "Votre message arrive directement dans ma boîte mail.",
  },
  footer: {
    blurb: "Développeur logiciel et data. Machine learning, vision par ordinateur et applications de gestion.",
    links: "Liens",
    rights: "Tous droits réservés.",
    built: "",
  },
  detail: {
    back: "Retour aux projets",
    year: "Année",
    category: "Catégorie",
    stack: "Technologies",
  },
};

export const ui = { en, fr };
export type Lang = keyof typeof ui;
