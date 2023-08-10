import { p1, p2, p3, p4 } from "./assets.js";

export const resultCategories = [
  {
    img: p1,
    title: "Norman Bates",
    description:
      "You're kind and thoughtfull , but everyone has it's limits. you're always one bad day away from stabbing your mom and wearing her clothes around the house. Advice? try meditation.",
  },
  {
    img: p2,
    title: "Jeffrey Dahmer",
    description:
      "You are a natural introvert and enjoy many hobbies but go through a bad breakup or get drunkenly rejected and you too can start your very own collection of pickled people.",
  },
  {
    img: p3,
    title: "Charles Manson",
    description:
      "You are the life of the party, charming and with a great sense of humour, but if your ego goes unchecked you're one friend away from starting your own death cult.",
  },
  {
    img: p4,
    title: "Patrick Bateman",
    description:
      "You are ambitous, charming and take great pride in your apearance but if you don't learn to take yourself less seriously you're one poorly chosen font style away from giving your work mate an axe haircut.",
  },
];

export const questions = [
  {
    question:
      "1. Someone accidentally bumps into you on the street, what would be your reaction?",
    options: [
      { value: "option1", label: " Do nothing." },
      { value: "option2", label: " Roll your eyes at them." },
      {
        value: "option3",
        label: " Yell 'What's your problem?'.",
      },
      { value: "option4", label: " Shove them back." },
    ],
  },
  {
    question:
      "2. Would you potentially kill your enemy if you could get away with it?",
    options: [
      {
        value: "option1",
        label: " No way! That's just wrong.",
      },
      { value: "option2", label: " I'd fantasize about it." },
      { value: "option3", label: " Potentially..." },
      { value: "option4", label: " YES." },
    ],
  },
  {
    question:
      "3. You're sitting on the pavement when a line of ants comes towards you, what do you do?",
    options: [
      {
        value: "option1",
        label: " You move out of the way so they can get safely to their hill.",
      },
      { value: "option2", label: " You do nothing." },
      {
        value: "option3",
        label: " You dump water on them just for fun.",
      },
      { value: "option4", label: " You squish them." },
    ],
  },
  {
    question: "4. What's your opinion on fire?",
    options: [
      {
        value: "option1",
        label: " I know better not to go near it.",
      },
      { value: "option2", label: " I'm afraid of it." },
      { value: "option3", label: " I'm fascinated by it." },
      { value: "option4", label: " I'm neutral about it." },
    ],
  },
  {
    question: "5. How often do you socialize?",
    options: [
      { value: "option1", label: " Maybe once a week." },
      { value: "option2", label: " Never, I'm a loner." },
      {
        value: "option3",
        label: " All the time! Almost every day.",
      },
      {
        value: "option4",
        label: " Maybe a few times a week.",
      },
    ],
  },
  {
    question: "6. How many hours per day do you spend on the computer?",
    options: [
      { value: "option1", label: " 4-5." },
      { value: "option2", label: " 6+." },
      { value: "option3", label: " 0-1." },
      { value: "option4", label: " 2-3." },
    ],
  },
  {
    question: "7. Your kitchen sink is clogged, what do you do?",
    options: [
      {
        value: "option1",
        label: " I'm the only one around here who can do this job.",
      },
      {
        value: "option2",
        label:
          " Not a pretty job but maybe i'll find some cool thing for my jar collection.",
      },
      {
        value: "option3",
        label: " No need for gloves I love the squishy feeling.",
      },
      {
        value: "option4",
        label: " Convince someone else to do it.",
      },
    ],
  },
  {
    question:
      "8. Have you ever used physical violence on another human because you were angry?",
    options: [
      { value: "option1", label: " No, never." },
      { value: "option2", label: " Maybe when I was a kid." },
      { value: "option3", label: " Only when justified." },
      { value: "option4", label: " Yes." },
    ],
  },
  {
    question: "9. If you had to kill someone, what weapon would you use?",
    options: [
      { value: "option1", label: " Poison." },
      { value: "option2", label: " A gun." },
      { value: "option3", label: " A knife." },
      { value: "option4", label: " A chainsaw." },
    ],
  },
  {
    question: "10. Which description you feel fits you most?",
    options: [
      {
        value: "option1",
        label: " I'm kind and romantic, I like rules and satisfying routines.",
      },
      {
        value: "option2",
        label:
          " What I lack in social skills I make up in creativity and curiosity.",
      },
      {
        value: "option3",
        label: " Class clown. The party don't start until I arrive.",
      },
      {
        value: "option4",
        label: " Have clear goals, focused, disciplined and organised.",
      },
    ],
  },
  {
    question: "What is your name?",
    input: true,
  },
];
