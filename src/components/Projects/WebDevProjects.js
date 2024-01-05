import ProjectItem from "./ProjectItem";

import whatmovieImage from "../../images/whatmovie_small.png";
import wellsyImage from "../../images/wellsy_new.png";
import floatifyImage from "../../images/floatify_small.png";
import catsweeperImage from "../../images/catsweeper_new.png";
import packathonImage from "../../images/packathon.png";
import watchdominionImage from "../../images/watchdominion.png";
import cafeImage from "../../images/cafe.png";

const projectData = [
  {
    id: 1,
    type: "Solo project",
    name: "Café",
    description:
      "A personal re-design of a local café's website. Implemented with Webflow.",
    technologies: [
      "Web design",
      "Figma",
      "Webflow",
    ],
    repo: "",
    web: "",
    image: cafeImage,
  },
  {
    id: 2,
    type: "Team project",
    name: "Watch Dominion",
    description: "A website to promote and spread the documentary Dominion, designed by me and created by developers at Vegan Hacktivists.",
    technologies: [
      "Web design",
      "Figma",
    ],
    repo: "",
    web: "https://watchdominion.org/",
    image: watchdominionImage,
  },
  {
    id: 3,
    type: "Solo project",
    name: "What movie?",
    description: "Movie generator where users can generate a random movie or filter the result based on release year, rating and genres. The interface also includes a link to watch the trailer on Youtube.",
    technologies: [
      "React.js",
      "Ruby on Rails",
      "JSON",
      "API",
      "Heroku",
      "HTML/SCSS",
      "Responsive",
    ],
    repo: "https://github.com/sara-woods/rails-find-me-a-movie",
    web: "https://what-movie.onrender.com/",
    image: whatmovieImage,
  },
  {
    id: 4,
    type: "Team project",
    name: "Wellsy",
    description: "A platform where users can create or book workout sessions and participate via Zoom from their own home. Includes search, authorization, image-hosting and payments via Stripe.",
    technologies: [
      "Ruby on Rails",
      "JavaScript ES6",
      "Stripe",
      "Heroku",
      "HTML/SCSS",
      "PostgreSQL",
    ],
    repo: "https://github.com/sara-woods/wellsy",
    web: "https://wellsy.fly.dev/",
    image: wellsyImage,
  },
  {
    id: 5,
    type: "Team project",
    name: "Packathon",
    description: "Winner of Hackathon 2021 - Le Wagon, an order packing-helper app for online retailers. The user is adviced which box-size to use when packing the order. (The site breaks at the moment due to the external packing algorithm API being down.)",
    technologies: [
      "Ruby on Rails",
      "Three.js",
      "JavaScript ES6",
      "Heroku",
      "HTML/SCSS",
      "Responsive",
    ],
    repo: "https://github.com/thomas-kenny/veeqo",
    web: "",
    image: packathonImage,
  },
  {
    id: 6,
    type: "Solo project",
    name: "Catsweeper",
    description: "Based on the game Minesweeper where I recreated the game mechanics as close to the classic game as possible. The design includes my own illustrations.",
    technologies: ["JavaScript ES6", "HTML", "CSS", "Responsive"],
    repo: "https://github.com/sara-woods/catsweeper",
    web: "https://sara-woods.github.io/catsweeper/",
    image: catsweeperImage,
  },
  {
    id: 7,
    type: "Team project",
    name: "Floatify",
    description: "An Airbnb like platform but for boats, featuring search, geocoding and authorization. Users can create or rent boats as well as manage and review their bookings.",
    technologies: [
      "Ruby on Rails",
      "JavaScript ES6",
      "Mapbox",
      "Heroku",
      "HTML/SCSS",
      "PostgreSQL",
    ],
    repo: "https://github.com/sara-woods/float_boat",
    web: "https://floatify.fly.dev/",
    image: floatifyImage,
  },
]

const WebDevProjects = () => {
  return (
    <>
      {projectData.map((item) => (
        <ProjectItem
          key={item.name}
          name={item.name}
          type={item.type}
          description={item.description}
          web={item.web}
          repo={item.repo}
          technologies={item.technologies}
          projectImage={item.image}
        />
      ))}
    </>
  );
};

export default WebDevProjects;
