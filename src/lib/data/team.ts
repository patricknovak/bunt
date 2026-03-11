export interface TeamMember {
  name: string;
  title: string;
  office: string;
}

export interface TeamOffice {
  city: string;
  members: TeamMember[];
}

export const leadership: TeamMember[] = [
  { name: "Daniel Fung", title: "President", office: "Vancouver" },
  { name: "Mike Furuya", title: "Board Chair", office: "Calgary" },
  { name: "Yulia Liem", title: "Regional Manager, BC", office: "Vancouver" },
  { name: "Jason Dunn", title: "Regional Manager, Prairies", office: "Calgary" },
  { name: "Christephen Cheng", title: "Lead, Innovation", office: "Vancouver" },
  { name: "Glen Pardoe", title: "Lead, Business Development & Communications", office: "Calgary" },
];

export const teamByOffice: TeamOffice[] = [
  {
    city: "Vancouver",
    members: [
      { name: "Christephen Cheng", title: "Lead, Innovation", office: "Vancouver" },
      { name: "Joseph Chow", title: "Transportation Engineer", office: "Vancouver" },
      { name: "Allan Conopio", title: "Transportation Technologist", office: "Vancouver" },
      { name: "Paul Dorby", title: "Senior Transportation Engineer", office: "Vancouver" },
      { name: "Daniel Fung", title: "President", office: "Vancouver" },
      { name: "Gabrielle Huchet", title: "Transportation Planner", office: "Vancouver" },
      { name: "Sijia Jin", title: "Transportation Engineer", office: "Vancouver" },
      { name: "Peter Joyce", title: "Senior Transportation Planner", office: "Vancouver" },
      { name: "James Lee", title: "Transportation Engineer", office: "Vancouver" },
      { name: "Yulia Liem", title: "Regional Manager, BC", office: "Vancouver" },
      { name: "Gordon Lu", title: "Transportation Engineer", office: "Vancouver" },
      { name: "Jing Min", title: "Transportation Planner", office: "Vancouver" },
      { name: "Eimear O'Driscoll", title: "Transportation Planner", office: "Vancouver" },
      { name: "Anita Odchimar", title: "Administrative Support", office: "Vancouver" },
      { name: "Caitlyn Quach", title: "Transportation Engineer", office: "Vancouver" },
      { name: "Raymond Ren", title: "Transportation Engineer", office: "Vancouver" },
      { name: "Sophie Renard", title: "Transportation Planner", office: "Vancouver" },
      { name: "Linda Robinson", title: "Lead, People and Culture", office: "Vancouver" },
      { name: "Abbey Seneres", title: "Transportation Technologist", office: "Vancouver" },
      { name: "Louis Shin", title: "Transportation Engineer", office: "Vancouver" },
      { name: "Hana Stoer", title: "Transportation Planner", office: "Vancouver" },
      { name: "Stuart Thornley", title: "Senior Transportation Engineer", office: "Vancouver" },
      { name: "Emily Yuan", title: "Transportation Engineer", office: "Vancouver" },
    ],
  },
  {
    city: "Calgary",
    members: [
      { name: "Daniel Blischak", title: "Transportation Engineer", office: "Calgary" },
      { name: "Jason Dunn", title: "Regional Manager, Prairies", office: "Calgary" },
      { name: "Mike Furuya", title: "Board Chair", office: "Calgary" },
      { name: "Emma Harvey-Hurst", title: "Transportation Planner", office: "Calgary" },
      { name: "Michael McNish", title: "Senior Transportation Engineer", office: "Calgary" },
      { name: "Glen Pardoe", title: "Lead, Business Development & Communications", office: "Calgary" },
      { name: "Benjamin Reeves", title: "Transportation Engineer", office: "Calgary" },
      { name: "Emilio Rodriguez", title: "Transportation Technologist", office: "Calgary" },
      { name: "Soo Jin Ri", title: "Transportation Engineer", office: "Calgary" },
      { name: "Ana Maria Torres", title: "Transportation Planner", office: "Calgary" },
      { name: "Amrit Uppal", title: "Transportation Engineer", office: "Calgary" },
      { name: "Cathy Wensveen", title: "Administration Manager", office: "Calgary" },
    ],
  },
  {
    city: "Edmonton",
    members: [
      { name: "Selina Agyemang", title: "Transportation Engineer", office: "Edmonton" },
      { name: "Ankeet Baskota", title: "Transportation Technologist", office: "Edmonton" },
      { name: "Nicole Farn", title: "Transportation Planner", office: "Edmonton" },
      { name: "Alyssa Lefebvre", title: "Transportation Engineer", office: "Edmonton" },
      { name: "Catherine Oberg", title: "Transportation Engineer", office: "Edmonton" },
      { name: "Brian Thi", title: "Transportation Engineer", office: "Edmonton" },
      { name: "Janelle Willis", title: "Transportation Planner", office: "Edmonton" },
    ],
  },
  {
    city: "Victoria",
    members: [
      { name: "Kyle Brandstaetter", title: "Transportation Engineer", office: "Victoria" },
      { name: "Jaclyn Currie", title: "Transportation Planner", office: "Victoria" },
      { name: "Jason Potter", title: "Senior Transportation Engineer", office: "Victoria" },
      { name: "Kieran Quan", title: "Transportation Technologist", office: "Victoria" },
      { name: "Tyler Thomson", title: "Transportation Engineer", office: "Victoria" },
    ],
  },
  {
    city: "Kelowna",
    members: [
      { name: "Josie Ackroyd", title: "Transportation Planner", office: "Kelowna" },
      { name: "Ian Hancock", title: "Senior Transportation Engineer", office: "Kelowna" },
      { name: "Neil Imada", title: "Transportation Engineer", office: "Kelowna" },
      { name: "Erin Tattrie", title: "Transportation Planner", office: "Kelowna" },
    ],
  },
];
