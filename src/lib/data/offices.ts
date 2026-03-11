export interface Office {
  city: string;
  province: string;
  address: string;
  phone: string;
  email: string;
  coordinates: [number, number];
  isHeadquarters?: boolean;
}

export const offices: Office[] = [
  {
    city: "Vancouver",
    province: "BC",
    address: "Suite 1550, 1050 West Pender Street, Vancouver, BC V6E 3S7",
    phone: "(604) 685-6427",
    email: "vancouver@bunteng.com",
    coordinates: [49.2827, -123.1207],
    isHeadquarters: true,
  },
  {
    city: "Victoria",
    province: "BC",
    address: "Suite 535, 645 Fort Street, Victoria, BC V8W 1G2",
    phone: "(250) 592-6122",
    email: "victoria@bunteng.com",
    coordinates: [48.4284, -123.3656],
  },
  {
    city: "Kelowna",
    province: "BC",
    address: "Suite 303, 460 Doyle Ave, Kelowna, BC V1Y 0C2",
    phone: "(778) 738-3940",
    email: "info@bunteng.com",
    coordinates: [49.8863, -119.4966],
  },
  {
    city: "Calgary",
    province: "AB",
    address: "Suite 113, 334 11 Avenue SE, Calgary, AB T2G 0Y2",
    phone: "(403) 252-3343",
    email: "calgary@bunteng.com",
    coordinates: [51.0447, -114.0719],
  },
  {
    city: "Edmonton",
    province: "AB",
    address: "Suite 500, 10339 124 Street NW, Edmonton, AB T5N 3W1",
    phone: "(780) 732-5373",
    email: "edmonton@bunteng.com",
    coordinates: [53.5461, -113.4938],
  },
];
