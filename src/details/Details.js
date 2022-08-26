// this will be a section that will allow us to keep our details for our template in one place and export them to different components as needed
import self from "../images/self.png"; // lets import our first image of a our logo/avatar
import mock1 from "../images/mock1.png"; // importing first project image
import mock2 from "../images/mock2.png"; // importing second project image

// this is all fairly self explaining, but follow along w/ the comments add/edit/remove anything you deem necessary or unnecessary.
// it is recommended to run this live while you make edits so you can see the direction you are heading in.

export const details = {
  // exporting our details
  firstName: "Michael",
  lastName: "Gonzalez",
  initials: "MG",
  position: "a Full-Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  miniBio: [
    // this section is a mini bio
    {
      emoji: "💼",
      text: "A full stack developer is an engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application.",
    },
    {
      emoji: "🌎",
      text: "based somewhere in the US.",
    },
  ],
  socials: [
    // this is your social media links
    {
      link: "mailto:mikegonzo.dev@gmail.com",
      icon: "fa fa-at",
      label: "email",
    },
    {
      link: "https://github.com/mike-gonz0",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/mike-gonz0/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/mikegonz0dev",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hey! Welcome to my page, I am Mike a former Business Analyst turned Software Engineer, and over the years I've acquired a particular set of skills that are a nightmare for complex datasets and bugs! They allow me to compose and deliver reliable scalable software solutions. I mainly work with JavaScript-based frameworks and libraries in the MERN stack, and I am always up for learning something new. ",
  skills: {
    proficientWith: [
      "html5",
      "css3",
      "javascript",
      "JQuery",
      "Express",
      "webpack",
      "Heroku",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "nodejs",
      "mySQL",
      "MongoDB/Mongoose",
      "command-line",
      "linux",
    ],
    exposedTo: ["figma", "python", "AdobeExpress"],
  },
  hobbies: [
    {
      label: "tacoTasting",
      emoji: "🌮",
    },
    {
      label: "auto - NB2 Mazda Miata",
      emoji: "🏎",
    },
    {
      label: "movies",
      emoji: "🎥",
    },

    {
      label: "reading",
      emoji: "📖",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
  ],
};
