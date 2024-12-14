import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express from "express";
import cors from "cors";
const app = express();
app.use(cors(), express.json(), express.static("./flags"));

app.get("/", async (req, res) => {
  const { search } = req.query;
  const data = await prisma.country.findMany({
    where: {
      name: {
        contains: search?.toString() || "",
      },
    },
  });
  res.json(data);
});

app.get("/city/:country", async (req, res) => {
  const { search } = req.query;
  const { country } = req.params;

  const data = await prisma.city.findMany({
    where: {
      country: {
        name: {
          equals: country,
        },
      },
      name: {
        contains: search?.toString(),
      },
    },
  });
  res.json(data);
});

app.listen(3002, () => {
  console.log(`Server Started 3000`);
});
