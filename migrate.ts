import { PrismaClient } from "@prisma/client";

import data from "./csvjson.json";
import cityCountry from "./citycountry.json";
const prisma = new PrismaClient();
const users = await prisma.country.findMany();

const country: {
  id: number;
  alpha2: string;
  alpha3: string;
  name: string;
}[] = data as any;

export interface Root {
  error: boolean;
  msg: string;
  data: Daum[];
}

export interface Daum {
  country: string;
  cities: string[];
}

const cities = [
  "Khasab",
  "Bukha",
  "Dibba",
  "Madha",
  "Al Buraimi",
  "Al Sunaynah",
  "Mahdah",
  "Sohar",
  "Al Khabourah",
  "Al Suwaiq",
  "Liwa",
  "Saham",
  "Shinas",
  "Al Rustaq",
  "Al Awabi",
  "Al Musannah",
  "Barka",
  "Nakhal",
  "Wadi Al Ma’awil",
  "A'Seeb",
  "Boushar",
  "Al Amirat",
  "Matrah",
  "Qurayyat",
  "Muscat",
  "Ibri",
  "Dhank",
  "Yankul",
  "Nizwa",
  "Adam",
  "Al Hamra",
  "Bahla",
  "Bid Bid",
  "Izki",
  "Manah",
  "Samail",
  "Ibra",
  "Bidiya",
  "Al Qabil",
  "Al Mudhaibi",
  "Dima W’attayeen",
  "Wadi Bani Khalid",
  "Sur",
  "Al Kamil W’al Wafi",
  "Jaalan Bani Bu Ali",
  "Jaalan Bani Bu Hassan",
  "Masirah",
  "Haima",
  "Al Jazer",
  "Duqm",
  "Mahout",
  "Salalah",
  "Al Mazyona",
  "Dhalkut",
  "Mirbat",
  "Muqshin",
  "Rakhyut",
  "Sadah",
  "Shalim and the Hallaniyat Islands",
  "Taqah",
  "Thumrait",
];

const city: Root = cityCountry as any;
await prisma.city.createMany({
  data: cities.map((e) => ({
    countryId: 97,
    name: e,
  })),
});

city.data.forEach(async (element) => {
  //   await prisma.country.updateMany({
  //     where: {
  //       name: {
  //         equals: element.name,
  //       },
  //     },
  //     data: {
  //       alpha2: element.alpha2,
  //       alpha3: element.alpha3,
  //       icon: "",
  //       name: element.name,
  //     },
  //   });
  //   const countryData = await prisma.country.findFirst({
  //     where: {
  //       name: {
  //         equals: element.country,
  //       },
  //     },
  //   });
  //   if (countryData) {
  //     await prisma.country.update({
  //       where: {
  //         id: countryData.id,
  //       },
  //       include: {
  //         City: true,
  //       },
  //       data: {
  //         City: {
  //           createMany: {
  //             data: element.cities.map((e) => ({ name: e })),
  //           },
  //         },
  //       },
  //     });
  //   }
});
