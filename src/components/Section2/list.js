import {
  architecture2White,
  shieldSearchWhite,
  performanceWhite,
  testsWhite,
  listWhite,
  calenderWhite,
  metricswhite,
} from "../../assets";

const lists = [
  {
    id: 1,
    icon: architecture2White,
    name: "Primary liaison",
    desc:
      "Communicating with stakeholders and teams. Our Product Owners make sure there’s consensus from stakeholders on all major decisions and strategy with clear instructions and deliverables for the developers.",
  },
  {
    id: 2,
    icon: shieldSearchWhite,
    name: "Product vision",
    desc:
      "Applying a high level perspective to product design and development for the team to understand product goals and create an overall vision for product development.",
  },
  {
    id: 3,
    icon: performanceWhite,
    name: "Product roadmaps",
    desc:
      "The product roadmap is a high-level, strategic visual summary that outlines the vision and direction for the product offering over time. It is both a strategic guide for stakeholders to reference as well as a plan for execution.",
  },
  {
    id: 4,
    icon: testsWhite,
    name: "Product Backlog",
    desc:
      "Managing and making visible the Product Backlog, or the Prioritized list of requirements for future product development.",
  },
  {
    id: 5,
    icon: listWhite,
    name: "Prioritizing needs",
    desc:
      "Juggle the triangle of scope, budget and time, weighting priorities according to the needs and objectives of stakeholders.",
  },
  {
    id: 6,
    icon: calenderWhite,
    name: "Change Management",
    desc:
      "It is vital for product success to accurately include changes to Product Backlog, track it and manage them with minimal impact on timeline and budget, improving the product to meet market expectations and maximize value.",
  },
  {
    id: 7,
    icon: metricswhite,
    name: "Measure Success",
    desc:
      "Metrics are key to track product performance. Considering metrics helps stay ahead of competitors and bring value to potential and existing customers.",
  },
];

export const heading =
  "Product Owner is a key to maximizing the value of your product";
export default lists;
export const bg = " bg-gradient-to-r from-[#f3913b] to-[#f56627]";
