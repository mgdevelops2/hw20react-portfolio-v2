// this will be a section that will allow us to keep our details for our template in one place and export them to different components as needed
import self from "../images/self.png"; // lets import our first image of a our logo/avatar
import proj1 from "../images/DayTrading.png"; // importing 1st project image
import proj2 from "../images/JATE.png"; // importing 2nd project image
import proj3 from "../images/NoteTaking.png"; // importing 3rd project image
import proj4 from "../images/CommandLineApp.png"; // importing 4th project image
import proj5 from "../images/RPS.png"; // importing 5th project image
import proj6 from "../images/Placeholder.png"; // importing 6th project image

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
    // simple here just plug and play - replace my info w/ your info
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
      label: "drive - NB2 Mazda Miata",
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
      title: "PlaceHolder",
      live: "https://github.com/VictoriaDunlap/Project3", //this should be a link to your deployed app.
      source: "https://github.com/VictoriaDunlap/Project3", // this is a link to your repo
      image: proj6,
    },
    {
      title: "DayTrading - Indicator",
      live: "https://www.tradingview.com/script/T3geQXsw-gonzo-ultimate-vwap-ema/", //this should be a link to your deployed app.
      source: "https://github.com/mike-gonz0/mikegonz0-Ult-Indicator", // this is a link to your repo
      image: proj1,
    },
    {
      title: "A Text Editor",
      live: "https://mg-texteditor.herokuapp.com/",
      source: "https://github.com/mike-gonz0/hW19-pwaTextEditor",
      image: proj2,
    },
    {
      title: "Note Taking App",
      live: "https://mighty-stream-00730.herokuapp.com/",
      source: "https://github.com/mike-gonz0/noteTaking-App",
      image: proj3,
    },
    {
      title: "Command-Line README generator",
      live: "https://github.com/mike-gonz0/README-generator",
      source: "https://github.com/mike-gonz0/README-generator",
      image: proj4,
    },
    {
      title: "Rock,Paper, + Scissor",
      live: "https://mike-gonz0.github.io/rockPaperScissors/",
      source: "https://github.com/mike-gonz0/rockPaperScissors",
      image: proj5,
    },
  ],
};
