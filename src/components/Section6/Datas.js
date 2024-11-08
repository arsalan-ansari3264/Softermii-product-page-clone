import { scrumOrange, kanbanOrange, scrumKanbanOrange } from "../../assets";

const datas = [
  {
    id: 1,
    icon: scrumOrange,
    name: "Scrum",
    desc:
      "Monitoring market needs and trends to develop competitive analysis for products and features to achieve maximum usability.",
  },
  {
    id: 2,
    icon: kanbanOrange,
    name: "Kanban",
    desc:
      "Used for projects where production support is needed or the project roadmap isn’t planned out yet.",
  },
  {
    id: 3,
    icon: scrumKanbanOrange,
    name: "Scrum + Kanban",
    desc:
      "Used for projects where production support is needed – part of the team works using Kanban, and the second part works with a defined roadmap, mostly focused on the new features.",
  },
];

export default datas;
export const heading = "Our Key Methodologies";

export const bg = "bg-[#ffead9]";
