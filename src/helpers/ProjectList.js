import Proj1 from "../assets/twitter.jpeg";
import Proj2 from "../assets/proj2.jpg";
import Proj3 from "../assets/proj3.webp";
import Proj4 from "../assets/proj4.webp";


export const ProjectList = [
  {
    name: "Tweet Author Predictor",
    image: Proj1,
    skills: "Python, PyTorch, Machine Learning, Deep Learning, Google Colab",
    description: "Trained a perceptron (MLP) to predict the author of a Tweet from a BERT embedding with 70% accuracy using Google Colab environment to simulate a GPU",
  },
  {
    name: "Airlines Route Calculator",
    image: Proj2,
    skills: "C++, Catch2, CMake, Object Oriented Programming",
    description: "Developed and tested route optimization graph algorithms that computed paths between any two airports",
  },
  {
    name: "Handwriting Analyzer",
    image: Proj3,
    skills: "C++, Cinder, Catch2, CMake, Object Oriented Programming, GitHub",
    description: "Developed and tested a cognitive GUI-based application that recognized number-based handwriting using Machine Learning algorithms",

  },
  {
    name: "API-Based Adventure Game",
    image: Proj4,
    skills: "Java, SQLite Database, REST API, Maven, Junit, Object Oriented Programming, GitHub",
    description: "Designed, developed, and tested a Marvel themed adventure game using databases and APIs",
  },
];
