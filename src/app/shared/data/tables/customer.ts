export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Customer {
  id: number;
  username: string;
  fullname: string;
  email: string;
  phone: string;
  status: boolean;
  gender: "male" | "female";
  dateOfBirth: string;
  address: Address;
}
export const CUSTOMER: Customer[] = [
  {
    id: 1,
    username: "john_doe",
    email: "john.doe@example.com",
    phone: "+1-202-555-0111",
    status: true,
    fullname: "John Doe",
    gender: "male",
    dateOfBirth: "1985-06-15",
    address: {
      street: "123 Maple Street",
      city: "Washington",
      postalCode: "20001",
      country: "USA",
    },
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane.smith@example.com",
    phone: "+1-202-555-0122",
    status: true,
    fullname: "Jane Smith",
    gender: "female",
    dateOfBirth: "1990-08-22",
    address: {
      street: "456 Oak Avenue",
      city: "New York",
      postalCode: "10001",
      country: "USA",
    },
  },
  {
    id: 3,
    username: "alice_williams",
    email: "alice.williams@example.com",
    phone: "+1-202-555-0133",
    status: false,
    fullname: "Alice Williams",
    gender: "female",
    dateOfBirth: "1982-12-30",
    address: {
      street: "789 Birch Road",
      city: "Los Angeles",
      postalCode: "90001",
      country: "USA",
    },
  },
  {
    id: 4,
    username: "bob_jones",
    email: "bob.jones@example.com",
    phone: "+1-202-555-0144",
    status: true,
    fullname: "Bob Jones",
    gender: "male",
    dateOfBirth: "1975-03-12",
    address: {
      street: "321 Pine Street",
      city: "Chicago",
      postalCode: "60601",
      country: "USA",
    },
  },
  {
    id: 5,
    username: "charlie_brown",
    email: "charlie.brown@example.com",
    phone: "+1-202-555-0155",
    status: false,
    fullname: "Charlie Brown",
    gender: "male",
    dateOfBirth: "1995-11-07",
    address: {
      street: "654 Spruce Lane",
      city: "Houston",
      postalCode: "77001",
      country: "USA",
    },
  },
  {
    id: 6,
    username: "diana_prince",
    email: "diana.prince@example.com",
    phone: "+1-202-555-0166",
    status: true,
    fullname: "Diana Prince",
    gender: "female",
    dateOfBirth: "1987-04-25",
    address: {
      street: "987 Cedar Drive",
      city: "Phoenix",
      postalCode: "85001",
      country: "USA",
    },
  },
  {
    id: 7,
    username: "eric_clark",
    email: "eric.clark@example.com",
    phone: "+1-202-555-0177",
    status: false,
    fullname: "Eric Clark",
    gender: "male",
    dateOfBirth: "1979-09-18",
    address: {
      street: "456 Walnut Street",
      city: "Miami",
      postalCode: "33101",
      country: "USA",
    },
  },
  {
    id: 8,
    username: "frank_lee",
    email: "frank.lee@example.com",
    phone: "+1-202-555-0188",
    status: true,
    fullname: "Frank Lee",
    gender: "male",
    dateOfBirth: "1980-02-14",
    address: {
      street: "321 Cedar Avenue",
      city: "Seattle",
      postalCode: "98101",
      country: "USA",
    },
  },
  {
    id: 9,
    username: "grace_hopper",
    email: "grace.hopper@example.com",
    phone: "+1-202-555-0199",
    status: true,
    fullname: "Grace Hopper",
    gender: "female",
    dateOfBirth: "1983-05-09",
    address: {
      street: "789 Fir Lane",
      city: "San Francisco",
      postalCode: "94101",
      country: "USA",
    },
  },
  {
    id: 10,
    username: "henry_ford",
    email: "henry.ford@example.com",
    phone: "+1-202-555-0200",
    status: true,
    fullname: "Henry Ford",
    gender: "male",
    dateOfBirth: "1969-07-30",
    address: {
      street: "123 Poplar Road",
      city: "Detroit",
      postalCode: "48201",
      country: "USA",
    },
  },
];
