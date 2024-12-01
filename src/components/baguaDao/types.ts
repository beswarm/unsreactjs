
export interface Section {
  id: string;
  arr_index: number;
  number: number;
  percentage: number;
  title: string;
  description: string;
  color: string;
  opacity: number;
  target?: string;
}

const publicLoveLoveColor = "#b31900";
const privateLoveSinColor = "#FACC15";
export const BaguaSections: Section[] = [
  {
    id: 'Heaven',
    number: 1,
    arr_index: 1,
    percentage: 25,
    color: publicLoveLoveColor,
    opacity: 1,
    title: 'Public Love',
    description: 'Wills Humanity and Creativity',
    target: "Money to World - DUKI in Action for all lives to reject evil and do good"
  },
  {
    id: 'Marsh',
    number: 2,
    arr_index: 2,
    percentage: 25,
    color: publicLoveLoveColor,
    opacity: 0.75,
    title: 'Public Love',
    description: 'Wills Joy and Satisfaction',
    target: "Money to Nation - A nation of people who love and care for the world"
  },
  {
    id: 'Fire',
    number: 3,
    arr_index: 3,
    percentage: 0,
    color: publicLoveLoveColor,
    opacity: 0.5,
    title: 'Public Love',
    description: 'Wills Clarity and Transformation',
    target: "Money to Pioneers - First adopters and adventurers are the pioneers of the world"
  },
  {
    id: 'Thunder',
    number: 4,
    arr_index: 4,
    percentage: 0,
    color: publicLoveLoveColor,
    opacity: 0.25,
    title: 'Public Love',
    description: 'Wills Initiative and Action',
    target: "Money to Community - Nurturing active and engaged user base"
  },
  {
    id: 'Earth',
    number: 8,
    arr_index: 5,
    percentage: 25,
    color: privateLoveSinColor,
    opacity: 1,
    title: 'Private Love',
    description: 'Wills Receptivity and Nurturing',
    target: "Money to DUKIGE - We need sin first for survival and then evolve to be love"
  },
  {
    id: 'Mountain',
    number: 7,
    arr_index: 6,
    percentage: 25,
    color: privateLoveSinColor,
    opacity: 0.75,
    title: 'Private Love',
    description: 'Wills Stillness and Meditation',
    target: "Money to Founders - Fairness Always! We need visionary creators to evolve."
  },
  {
    id: 'Water',
    number: 6,
    arr_index: 7,
    percentage: 0,
    color: privateLoveSinColor,
    opacity: 0.5,
    title: 'Private Love',
    description: 'Wills Flow and Adaptation',
    target: "Money to Investors - Free Will of Goodness needs power to manifest and be useful",
  },
  {
    id: 'Wind',
    number: 5,
    arr_index: 8,
    percentage: 0,
    color: privateLoveSinColor,
    opacity: 0.25,
    title: 'Private Love',
    description: 'Wills Influence and Penetration',
    target: "Money to Partners - Fostering strategic collaborations and alliances"
  }
];

export const DualityDaoLoveSection: Section =
{
  id: 'Dao', number: 0, arr_index: 0, percentage: 100, title: 'Dao', color: "#C084FC", opacity: 1,
  description: 'Dao is 9. Dao is Love. Love Be Ye Way',
  target: "to free will. Free will are born of love and born with sin, it needs power and wisdom to be useful"
}
