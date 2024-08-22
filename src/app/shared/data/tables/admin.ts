export interface Admin {
  id: number;
  username: string;
  fullname: string;
  email: string;
  phone: string;
  status: boolean;
  role: string;
  gender?: string;
  dateOfBirth: string;
  address?: Address;
  profilePicture?: string;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export const ADMIN: Admin[] = [
  {
    id: 467,
    username: "hernandezamber",
    // password: "a7Z6DUsq#@",
    email: "kevin97@yahoo.com",
    fullname: "Michael Stanley",
    phone: "068-332-1152",
    role: "superadmin",
    status: false,
    dateOfBirth: "1979-06-23",
    address: {
      street: "19770 Marcus Extensions",
      city: "New Anthonyport",
      postalCode: "98803",
      country: "Saint Kitts and Nevis",
    },
    gender: "male",
    profilePicture: "https://placeimg.com/493/138/any",
  },
  {
    id: 599,
    username: "wstevens",
    // password: "(fZNPUyx%3",
    email: "catherine15@gmail.com",
    fullname: "Christopher Graham",
    phone: "1183628035",
    role: "superadmin",
    status: true,
    dateOfBirth: "1997-03-20",
    address: {
      street: "653 Jackson Stream Suite 797",
      city: "Russellstad",
      postalCode: "30898",
      country: "Bangladesh",
    },
    gender: "male",
    profilePicture: "https://dummyimage.com/450x373",
  },
  {
    id: 205,
    username: "cunninghambrandon",
    // password: "arvTy!67^6",
    email: "justinreid@hotmail.com",
    fullname: "Julie Lloyd",
    phone: "001-524-388-7322",
    role: "superadmin",
    status: false,
    dateOfBirth: "1986-12-20",
    address: {
      street: "0609 Joseph Ferry",
      city: "New Jacobchester",
      postalCode: "12359",
      country: "Gambia",
    },
    gender: "female",
    profilePicture: "https://placeimg.com/140/684/any",
  },
  {
    id: 259,
    username: "paulawhite",
    // password: "$ux5VILix$",
    email: "mitchelljoseph@hotmail.com",
    fullname: "Dr. Deborah Cooper",
    phone: "(760)652-3042x3242",
    role: "superadmin",
    status: true,
    dateOfBirth: "1999-07-17",
    address: {
      street: "13961 Richard Lodge Apt. 660",
      city: "Lisaborough",
      postalCode: "22224",
      country: "Hong Kong",
    },
    gender: "female",
    profilePicture: "https://dummyimage.com/88x800",
  },
  {
    id: 363,
    username: "lisa74",
    // password: "33G5Tcogg#",
    email: "ngreene@yahoo.com",
    fullname: "Leon Wolfe",
    phone: "881.796.1804",
    role: "moderator",
    status: false,
    dateOfBirth: "1996-11-06",
    address: {
      street: "857 Cordova Vista Apt. 646",
      city: "Meganborough",
      postalCode: "27709",
      country: "Angola",
    },
    gender: "male",
    profilePicture: "https://placeimg.com/972/14/any",
  },
  {
    id: 649,
    username: "kspencer",
    // password: "s06FRzN@&A",
    email: "kevin01@hampton.org",
    fullname: "Ruth Dunn",
    phone: "1851906749",
    role: "moderator",
    status: false,
    dateOfBirth: "1976-06-17",
    address: {
      street: "0803 David Ville Apt. 702",
      city: "East Jonathan",
      postalCode: "80007",
      country: "Kazakhstan",
    },
    gender: "male",
    profilePicture: "https://placeimg.com/845/265/any",
  },
  {
    id: 588,
    username: "dawn02",
    // password: "DXuKG$Ve_5",
    email: "tylerparker@watson.biz",
    fullname: "Cheyenne Riley",
    phone: "+1-058-305-2928x39466",
    role: "moderator",
    status: true,
    dateOfBirth: "1978-11-01",
    address: {
      street: "8192 Jillian Overpass Apt. 035",
      city: "New Stephenmouth",
      postalCode: "50128",
      country: "Italy",
    },
    gender: "male",
    profilePicture: "https://www.lorempixel.com/245/818",
  },
  {
    id: 717,
    username: "jamesmoore",
    // password: "4&Rou6Mv+l",
    email: "davidparks@yahoo.com",
    fullname: "Stephen Drake",
    phone: "956-093-4173x5678",
    role: "moderator",
    status: false,
    dateOfBirth: "1978-09-13",
    address: {
      street: "1707 Mark Unions Apt. 025",
      city: "Avilaberg",
      postalCode: "80990",
      country: "Turks and Caicos Islands",
    },
    gender: "male",
    profilePicture: "https://placekitten.com/861/836",
  },
  {
    id: 464,
    username: "petersonsara",
    // password: "Wp9$MD!uZ&",
    email: "marc93@brooks.info",
    fullname: "Leah Lindsey",
    phone: "379-808-0589",
    role: "admin",
    status: false,
    dateOfBirth: "1989-09-26",
    address: {
      street: "28181 Jimmy Squares Apt. 170",
      city: "Millermouth",
      postalCode: "79821",
      country: "Somalia",
    },
    gender: "male",
    profilePicture: "https://www.lorempixel.com/86/536",
  },
  {
    id: 290,
    username: "hugheskathy",
    // password: "QE8aaK@tN#",
    email: "blackburnandrew@russo-pierce.info",
    fullname: "Seth Palmer",
    phone: "487.361.0124",
    role: "moderator",
    status: true,
    dateOfBirth: "1991-09-04",
    address: {
      street: "28182 Christopher Flats",
      city: "Brookston",
      postalCode: "07818",
      country: "Montserrat",
    },
    gender: "male",
    profilePicture: "https://dummyimage.com/209x590",
  },
];
