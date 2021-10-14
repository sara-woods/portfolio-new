export const contentData = {
  navLinks: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  intro: {
    hello: "Hi, my name is",
    introText:
      "I’m a web developer and illustrator based in Uppsala, Sweden. Check out some of my previous work below. If you’re looking for a freelance web developer, illustrator or designer to help bring an idea to life or to fix an existing issue - let’s chat!",
  },
  contactData: {
    header: "Hey there!",
    text: [
      "If you would like to get in contact, pop me an e-mail at",
      "or message me on",
    ],
  },
  buttonText: {
    contact: "Get in touch",
    visit: "Visit website",
  },
  graphicDesign: {
    disclaimer: "This selection of logos is a mix of personal and client work.",
  },
  copyright: "© 2021 Sara Lotfi. All rights reserved.",
  filterOptions: {
    header: "Filter Content",
    webDev: "Web Development",
    illustrations: "Illustrations",
    graphicDesign: "Logo/Graphic Design",
  },
  projectData: [
    {
      id: 1,
      type: "Solo project",
      name: "What movie?",
      description:
        "Movie generator built in React with a Rails back-end API to fetch movies. Users can generate a random movie or filter the result based on release year, rating and genres.",
      technologies: [
        "React",
        "Ruby on Rails",
        "JSON",
        "API",
        "Heroku",
        "HTML/SCSS",
        "Responsive",
      ],
      repo: "https://github.com/saralotfi/rails-find-me-a-movie",
      web: "https://whatmovieapp.herokuapp.com/",
    },
    {
      id: 2,
      type: "Team project",
      name: "Wellsy",
      description:
        "A platform where users can create or book workout sessions and participate via zoom from their own home. Includes search, authorization, image-hosting and payments via Stripe. Built in 10 days.",
      technologies: [
        "Ruby on Rails",
        "JavaScript ES6",
        "Stripe",
        "Heroku",
        "HTML/SCSS",
        "PostgreSQL",
      ],
      repo: "https://github.com/saralotfi/wellsy",
      web: "https://wellsy.herokuapp.com/",
    },
    {
      id: 3,
      type: "Team project",
      name: "Packathon",
      description:
        "Winner of Hackathon 2021 - Le Wagon, an order packing-helper app for online retailers using Ruby on Rails and Three.js. (The site breaks at the moment due to the external packing algorithm API being down.)",
      technologies: [
        "Ruby on Rails",
        "Three.js",
        "JavaScript ES6",
        "Heroku",
        "HTML/SCSS",
        "Responsive",
      ],
      repo: "https://github.com/thomas-kenny/veeqo",
      web: "https://packathon.herokuapp.com/",
    },
    {
      id: 4,
      type: "Solo project",
      name: "Catsweeper",
      description:
        "Based on the game Minesweeper and built in JavaScript. I recreated the game mechanics as close to the classic game as possible. The design includes my own illustrations.",
      technologies: ["JavaScript ES6", "HTML", "CSS", "Responsive"],
      repo: "https://github.com/saralotfi/catsweeper",
      web: "https://saralotfi.github.io/catsweeper/",
    },
    {
      id: 5,
      type: "Team project",
      name: "Floatify",
      description:
        "An Airbnb like platform built in Ruby on Rails featuring search, geocoding and authorization. Users can create or rent boats as well as manage and review their bookings. Built in 5 days.",
      technologies: [
        "Ruby on Rails",
        "JavaScript ES6",
        "Mapbox",
        "Heroku",
        "HTML/SCSS",
        "PostgreSQL",
      ],
      repo: "https://github.com/saralotfi/float_boat",
      web: "https://floatifyapp.herokuapp.com/",
    },
  ],
};
