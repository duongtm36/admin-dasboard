export interface Employee {
  id: number;
  email: string;
  name: string;
  gender: string;
  age: number;
  address: {
    state: string;
    city: string;
  };
}

export class employeeDB {
  static emp = [
    {
      id: 0,
      email: "employee@example.com",
      name: "Ramsey Cummings",
      gender: "male",
      age: 52,
      address: {
        state: "South Carolina",
        city: "Glendale",
      },
    },
    {
      id: 1,
      email: "employee@example.com",
      name: "Stefanie Huff",
      gender: "female",
      age: 70,
      address: {
        state: "Arizona",
        city: "Beaverdale",
      },
    },
    {
      id: 2,
      email: "employee@example.com",
      name: "Mabel David",
      gender: "female",
      age: 52,
      address: {
        state: "New Mexico",
        city: "Grazierville",
      },
    },
    {
      id: 3,
      email: "employee@example.com",
      name: "Frank Bradford",
      gender: "male",
      age: 61,
      address: {
        state: "Wisconsin",
        city: "Saranap",
      },
    },
    {
      id: 4,
      email: "employee@example.com",
      name: "Forbes Levine",
      gender: "male",
      age: 34,
      address: {
        state: "Vermont",
        city: "Norris",
      },
    },
    {
      id: 5,
      email: "employee@example.com",
      name: "Santiago Mcclain",
      gender: "male",
      age: 38,
      address: {
        state: "Montana",
        city: "Bordelonville",
      },
    },
    {
      id: 6,
      email: "employee@example.com",
      name: "Merritt Booker",
      gender: "male",
      age: 33,
      address: {
        state: "New Jersey",
        city: "Aguila",
      },
    },
    {
      id: 7,
      email: "employee@example.com",
      name: "Oconnor Wade",
      gender: "male",
      age: 18,
      address: {
        state: "Virginia",
        city: "Kenmar",
      },
    },
    {
      id: 8,
      email: "employee@example.com",
      name: "Leigh Beasley",
      gender: "female",
      age: 53,
      address: {
        state: "Texas",
        city: "Alfarata",
      },
    },
    {
      id: 9,
      email: "employee@example.com",
      name: "Johns Wood",
      gender: "male",
      age: 52,
      address: {
        state: "Maine",
        city: "Witmer",
      },
    },
    {
      id: 10,
      email: "employee@example.com",
      name: "Thompson Hays",
      gender: "male",
      age: 38,
      address: {
        state: "Nevada",
        city: "Kipp",
      },
    },
    {
      id: 11,
      email: "employee@example.com",
      name: "Hallie Mack",
      gender: "female",
      age: 19,
      address: {
        state: "Minnesota",
        city: "Darrtown",
      },
    },
    {
      id: 12,
      email: "employee@example.com",
      name: "Houston Santos",
      gender: "male",
      age: 24,
      address: {
        state: "Georgia",
        city: "Crucible",
      },
    },
    {
      id: 13,
      email: "employee@example.com",
      name: "Brandy Savage",
      gender: "female",
      age: 65,
      address: {
        state: "Idaho",
        city: "Nord",
      },
    },
    {
      id: 14,
      email: "employee@example.com",
      name: "Finch Barnett",
      gender: "male",
      age: 22,
      address: {
        state: "Ohio",
        city: "Osmond",
      },
    },
    {
      id: 15,
      email: "employee@example.com",
      name: "Nicole Crosby",
      gender: "female",
      age: 77,
      address: {
        state: "Kentucky",
        city: "Fairfield",
      },
    },
    {
      id: 16,
      email: "employee@example.com",
      name: "Carrie Mcconnell",
      gender: "female",
      age: 26,
      address: {
        state: "South Dakota",
        city: "Waikele",
      },
    },
    {
      id: 17,
      email: "employee@example.com",
      name: "Ann James",
      gender: "female",
      age: 37,
      address: {
        state: "North Dakota",
        city: "Siglerville",
      },
    },
    {
      id: 18,
      email: "employee@example.com",
      name: "Becky Sanford",
      gender: "female",
      age: 48,
      address: {
        state: "Massachusetts",
        city: "Celeryville",
      },
    },
    {
      id: 19,
      email: "employee@example.com",
      name: "Kathryn Rios",
      gender: "female",
      age: 39,
      address: {
        state: "Delaware",
        city: "Kylertown",
      },
    },
    {
      id: 20,
      email: "employee@example.com",
      name: "Dotson Vaughn",
      gender: "male",
      age: 68,
      address: {
        state: "Arkansas",
        city: "Monument",
      },
    },
    {
      id: 21,
      email: "employee@example.com",
      name: "Wright Kline",
      gender: "male",
      age: 41,
      address: {
        state: "Missouri",
        city: "Bynum",
      },
    },
    {
      id: 22,
      email: "employee@example.com",
      name: "Lula Morgan",
      gender: "female",
      age: 52,
      address: {
        state: "Oregon",
        city: "Mapletown",
      },
    },
    {
      id: 23,
      email: "employee@example.com",
      name: "Kay Mendez",
      gender: "female",
      age: 50,
      address: {
        state: "Michigan",
        city: "Twilight",
      },
    },
    {
      id: 24,
      email: "employee@example.com",
      name: "Mona Maddox",
      gender: "female",
      age: 35,
      address: {
        state: "Wyoming",
        city: "Wilmington",
      },
    },
    {
      id: 25,
      email: "employee@example.com",
      name: "Fulton Velez",
      gender: "male",
      age: 66,
      address: {
        state: "Colorado",
        city: "Loretto",
      },
    },
    {
      id: 26,
      email: "employee@example.com",
      name: "Ericka Craft",
      gender: "female",
      age: 80,
      address: {
        state: "Nebraska",
        city: "Beaulieu",
      },
    },
    {
      id: 27,
      email: "employee@example.com",
      name: "Richmond Rodriguez",
      gender: "male",
      age: 62,
      address: {
        state: "Rhode Island",
        city: "Vallonia",
      },
    },
    {
      id: 28,
      email: "employee@example.com",
      name: "Olsen Farmer",
      gender: "male",
      age: 45,
      address: {
        state: "Connecticut",
        city: "Romeville",
      },
    },
    {
      id: 29,
      email: "employee@example.com",
      name: "Sophie Austin",
      gender: "female",
      age: 59,
      address: {
        state: "New Hampshire",
        city: "Gorst",
      },
    },
    {
      id: 30,
      email: "employee@example.com",
      name: "Alta Olsen",
      gender: "female",
      age: 58,
      address: {
        state: "Florida",
        city: "Drytown",
      },
    },
    {
      id: 31,
      email: "employee@example.com",
      name: "Katherine Chavez",
      gender: "female",
      age: 20,
      address: {
        state: "Mississippi",
        city: "Trucksville",
      },
    },
    {
      id: 32,
      email: "employee@example.com",
      name: "Yvette Myers",
      gender: "female",
      age: 69,
      address: {
        state: "Washington",
        city: "Bangor",
      },
    },
    {
      id: 33,
      email: "employee@example.com",
      name: "Nguyen Dean",
      gender: "male",
      age: 58,
      address: {
        state: "Alaska",
        city: "Caroline",
      },
    },
    {
      id: 34,
      email: "employee@example.com",
      name: "Lauri Irwin",
      gender: "female",
      age: 23,
      address: {
        state: "Hawaii",
        city: "Takilma",
      },
    },
    {
      id: 35,
      email: "employee@example.com",
      name: "David Mclean",
      gender: "male",
      age: 49,
      address: {
        state: "Louisiana",
        city: "Harviell",
      },
    },
    {
      id: 36,
      email: "employee@example.com",
      name: "Tisha Cotton",
      gender: "female",
      age: 78,
      address: {
        state: "Illinois",
        city: "Camas",
      },
    },
    {
      id: 37,
      email: "employee@example.com",
      name: "Eliza Conrad",
      gender: "female",
      age: 82,
      address: {
        state: "Utah",
        city: "Gwynn",
      },
    },
    {
      id: 38,
      email: "employee@example.com",
      name: "Bolton Cooley",
      gender: "male",
      age: 44,
      address: {
        state: "Oklahoma",
        city: "Glidden",
      },
    },
    {
      id: 39,
      email: "employee@example.com",
      name: "Crosby Osborn",
      gender: "male",
      age: 44,
      address: {
        state: "Alabama",
        city: "Buxton",
      },
    },
    {
      id: 40,
      email: "employee@example.com",
      name: "Reese Tran",
      gender: "male",
      age: 53,
      address: {
        state: "Maryland",
        city: "Kempton",
      },
    },
    {
      id: 41,
      email: "employee@example.com",
      name: "Evangeline Larson",
      gender: "female",
      age: 49,
      address: {
        state: "Pennsylvania",
        city: "Mayfair",
      },
    },
    {
      id: 42,
      email: "employee@example.com",
      name: "Jimenez Frazier",
      gender: "male",
      age: 23,
      address: {
        state: "California",
        city: "Ronco",
      },
    },
    {
      id: 43,
      email: "employee@example.com",
      name: "Conner Tate",
      gender: "male",
      age: 39,
      address: {
        state: "West Virginia",
        city: "Eastvale",
      },
    },
    {
      id: 44,
      email: "employee@example.com",
      name: "Avery Rosales",
      gender: "male",
      age: 71,
      address: {
        state: "Tennessee",
        city: "Cascades",
      },
    },
    {
      id: 45,
      email: "employee@example.com",
      name: "Burris Marquez",
      gender: "male",
      age: 32,
      address: {
        state: "North Carolina",
        city: "Chamizal",
      },
    },
    {
      id: 46,
      email: "employee@example.com",
      name: "Hoover Cardenas",
      gender: "male",
      age: 65,
      address: {
        state: "Kansas",
        city: "Joes",
      },
    },
    {
      id: 47,
      email: "employee@example.com",
      name: "Moran Gomez",
      gender: "male",
      age: 40,
      address: {
        state: "New York",
        city: "Knowlton",
      },
    },
    {
      id: 48,
      email: "employee@example.com",
      name: "Boyd Juarez",
      gender: "male",
      age: 33,
      address: {
        state: "Iowa",
        city: "Hemlock",
      },
    },
    {
      id: 49,
      email: "employee@example.com",
      name: "John Mooney",
      gender: "female",
      age: 73,
      address: {
        state: "Rhode Island",
        city: "Gardners",
      },
    },
    {
      id: 50,
      email: "employee@example.com",
      name: "Avery Crawford",
      gender: "male",
      age: 39,
      address: {
        state: "Hawaii",
        city: "Woodruff",
      },
    },
  ];
}
