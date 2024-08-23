export interface Group {
  id: number;
  name: string;
  status: boolean;
  users?: number[];
  descrition?: string;
}

export const GROUP: Group[] = [
  {
    id: 1,
    name: "Human Resources",
    status: true,
    descrition: "",
    users: [1, 2, 3],
  },
  {
    id: 2,
    name: "Finance",
    status: true,
    descrition: "",
    users: [4, 5],
  },
  {
    id: 3,
    name: "Engineering",
    status: true,
    descrition: "",
    users: [6, 7, 8, 9],
  },
  {
    id: 4,
    name: "Sales",
    status: true,
    descrition: "",
    users: [10, 11, 12],
  },
  {
    id: 5,
    name: "Marketing",
    status: false,
    descrition: "",
    users: [13, 14],
  },
  {
    id: 6,
    name: "Customer Support",
    status: true,
    descrition: "",
    users: [15, 16, 17],
  },
  {
    id: 7,
    name: "IT Support",
    status: true,
    descrition: "",
    users: [18, 19],
  },
  {
    id: 8,
    name: "Product Management",
    status: true,
    descrition: "",
    users: [20, 21],
  },
  {
    id: 9,
    name: "Legal",
    status: false,
    descrition: "",
    users: [22, 23],
  },
  {
    id: 10,
    name: "Executive",
    status: true,
    descrition: "",
    users: [23, 24],
  },
];
