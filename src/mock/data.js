import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sara Strasner | Developer',
  lang: 'en',
  description: 'Welcome to my site',
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hi, I’m Sara Strasner. I’m a full stack JavaScript and Python developer with a Master’s degree in Museum Studies and a background in museum education and nonprofit management.',
  paragraphTwo:
    'As a life-long learner with a growth mindset, I enjoy challenging myself both mentally and physically - from completing crosswords to running several half marathons.',
  paragraphThree:
    'I’m seeking out mission-driven software companies that align with my values around positive societal change along with health and wellness.',
  resume: 'https://drive.google.com/file/d/1FTJM3pMVNavotr5OadJ6FE57rm7PrhzM/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'python.png',
    title: 'Python Portfolio',
    info: 'An online portfolio to showcase all of my Python-related projects',
    // info2:
    //   'Web App: React Redux, Lodash, Sass, Netlify | API: GraphQL, MongoDB, Mongoose, Heroku',
    url: 'https://strassy-does-python.vercel.app/',
    repo: 'https://github.com/sarastrasner/python-portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Kpop.png',
    title: 'K-Pop Band Mixer',
    info: 'full-stack web application and API for mixing and matching K-Pop band members',
    info2: 'Web App: React Redux, Lodash, Sass, Netlify | API: GraphQL, MongoDB, Mongoose, Heroku',
    url: 'https://k-pop-band-generator.pages.dev/',
    repo: 'https://github.com/sarastrasner/k-pop-band-generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rescuties.png',
    title: 'ResCuties',
    info: 'bridges the information gap between prospective pet owners and adoptable shelter pets',
    info2:
      'renders results from PetFinder API | firebase database and authentication | ACL for protected routes | React Redux for state',
    url: 'https://rescuties-401d39.web.app/page',
    repo: 'https://github.com/the-cats-pajamas/rescuties', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'code-followers.png',
    title: 'Code Followers',
    info:
      "a text-based, code-or-death, choose-your-own-adventure game for the command line. Wise choices add to the user's score, while poor choices deduct from the user's score",
    info2:
      'Prompts are stored in and rendered from a binary tree | User information is stored in mongoDB',
    url: 'https://github.com/401-advanced-javascript-nathanRcox/code-followers',
    repo: 'https://github.com/401-advanced-javascript-nathanRcox/code-followers', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'movie.png',
    title: 'Seasonal Movie Recommender',
    info:
      'Seasonal movie recommender with a SQL database that lets users create, read, and update recommended movies',
    info2: 'Application’s appearance and content change based on the current season',
    url: 'https://holiday-movie-recommender.herokuapp.com/',
    repo: 'https://github.com/sarabeth-russert/movie-recommender', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'escape-room.png',
    title: 'Escape Room Game',
    info:
      'App-based escape room game that lets users try an escape room from the comfort of their own homes',
    info2: 'Frightfully fun using vanilla HTML, CSS, & JavaScript',
    url: 'https://kmac1027.github.io/escape-room-game/',
    repo: 'https://github.com/Kmac1027/escape-room-game', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'holler@sarastrasner.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sarastrasner/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sarastrasner',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
