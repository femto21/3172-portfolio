const projectDetails = [
  {
    id: 1,
    link: "https://github.com/femto21/FlappyBird",
    name: "Flappy Bird",
    techStack: [
      {
        id: 1,
        name: "Java",
      },
      {
        id: 2,
        name: "Java Swing",
      },
    ],
    content:
      "The good ol' flappy bird game, made entirely in Java. Avoid the obstacles as the bird flies. The game uses game-loops which update the screen 60 times each second (a video is basically a collection of many images). This game uses Passive rendering to paint the objects.",
  },
  {
    id: 2,
    link: "https://github.com/femto21/BreakTheBox",
    name: "Break The Box",
    techStack: [
      {
        id: 1,
        name: "Java",
      },
      {
        id: 2,
        name: "Java Canvas",
      },
    ],
    content:
      "In this game you have to shoot the boxes falling from the top using a turret at the bottom. The game ends when any of the boxes touch the ground (or the turret). This game also uses game loops, but uses active rendering to paint the objects.",
  },
  {
    id: 3,
    link: "https://github.com/femto21/BeatTheBoss",
    name: "Beat The Boss",
    techStack: [
      {
        id: 1,
        name: "Python",
      },
      {
        id: 2,
        name: "Tkinter",
      },
      {
        id: 3,
        name: "MySQL",
      },
    ],
    content:
      "This is a quiz format game. You have to answer questions correctly in order to deal damage to the boss. If enough damage is dealt, you win the game. Otherwise you lose. The scores of the players are also saved in a database.",
  },
  {
    id: 4,
    link: "https://github.com/femto21/BeatTheBossTurtle",
    name: "Beat The Boss (Turtle version)",
    techStack: [
      {
        id: 1,
        name: "Python",
      },
      {
        id: 2,
        name: "Turtle",
      },
      {
        id: 3,
        name: "MySQL",
      },
    ],
    content:
      "This version of Beat The Boss uses turtle to implement the game. The game mechanics are similar to the previous game and the player scores are also saved in a database.",
  },
  {
    id: 5,
    link: "https://github.com/femto21/CalculatorsAndConverters",
    name: "Calculators and Converters",
    techStack: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "Javascript",
      },
    ],
    content:
      "A website containing multiple webpages. Each webpage is for a particular tool: Arithmetic calculator, Temperature converter,  BMI calculator, Weight Unit converter.",
  },
  {
    id: 6,
    link: "https://github.com/femto21/TankWars",
    name: "Tank Wars (In progress)",
    techStack: [
      {
        id: 1,
        name: "Python",
      },
      {
        id: 2,
        name: "Pygame",
      },
      {
        id: 3,
        name: "MongoDB",
      },
    ],
    content:
      "This game consists of two tanks controlled by one player each. The first player to destroy the other player's tank wins the game. Only one player can move their tank at a time. The results are saved in a database.",
  },
];

export default projectDetails;
