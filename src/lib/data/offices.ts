export interface Office {
  city: string;
  province: string;
  address: string;
  phone: string;
  coordinates: [number, number];
  isHeadquarters?: boolean;
}

export const offices: Office[] = [
  {
    city: "Vancouver",
    province: "BC",
    address: "1550 – 1050 West Pender Street, Vancouver, BC V6E 3S7",
    phone: "(604) 678-3531",
    coordinates: [49.2827, -123.1207],
    isHeadquarters: true,
  },
  {
    city: "Victoria",
    province: "BC",
    address: "301 – 1321 Blanshard Street, Victoria, BC V8W 0B6",
    phone: "(250) 419-0642",
    coordinates: [48.4284, -123.3656],
  },
  {
    city: "Kelowna",
    province: "BC",
    address: "200 – 1634 Harvey Avenue, Kelowna, BC V1Y 6G2",
    phone: "(250) 762-2517",
    coordinates: [49.8863, -119.4966],
  },
  {
    city: "Calgary",
    province: "AB",
    address: "2820 Lougheed Place SW, Calgary, AB T3E 7K8",
    phone: "(403) 250-5587",
    coordinates: [51.0447, -114.0719],
  },
  {
    city: "Edmonton",
    province: "AB",
    address: "17008 – 107 Avenue NW, Edmonton, AB T5S 1G6",
    phone: "(780) 451-6915",
    coordinates: [53.5461, -113.4938],
  },
];
