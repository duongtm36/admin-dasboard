export interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: "credit" | "debit";
  status: boolean;
}

export const TRANSACTION: Transaction[] = [
  {
    id: 1,
    date: "2024-08-01",
    description: "Deposit",
    amount: 500.0,
    type: "credit",
    status: true,
  },
  {
    id: 2,
    date: "2024-08-02",
    description: "Purchase at Store A",
    amount: -150.75,
    type: "debit",
    status: true,
  },
  {
    id: 3,
    date: "2024-08-03",
    description: "Salary Payment",
    amount: 2000.0,
    type: "credit",
    status: true,
  },
  {
    id: 4,
    date: "2024-08-05",
    description: "Utility Bill Payment",
    amount: -120.5,
    type: "debit",
    status: false,
  },
  {
    id: 5,
    date: "2024-08-07",
    description: "Transfer from Account B",
    amount: 300.0,
    type: "credit",
    status: true,
  },
  {
    id: 6,
    date: "2024-08-08",
    description: "Dinner at Restaurant",
    amount: -80.0,
    type: "debit",
    status: true,
  },
  {
    id: 7,
    date: "2024-08-10",
    description: "Refund from Store B",
    amount: 50.0,
    type: "credit",
    status: true,
  },
  {
    id: 8,
    date: "2024-08-12",
    description: "Online Subscription",
    amount: -15.0,
    type: "debit",
    status: false,
  },
  {
    id: 9,
    date: "2024-08-15",
    description: "Deposit",
    amount: 1000.0,
    type: "credit",
    status: true,
  },
  {
    id: 10,
    date: "2024-08-18",
    description: "Groceries",
    amount: -200.0,
    type: "debit",
    status: true,
  },
];
