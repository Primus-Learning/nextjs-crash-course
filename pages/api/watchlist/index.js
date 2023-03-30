import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const { user } = await getServerSession(req, res, authOptions);

  // protect route from unauthenticated user
  if (!user) {
    return res.status(401).json({ error: "Unauthorised" });
  }

  if (req.method === "POST") {
    const { movieId, name, rating, poster, userId } = req.body;

    // check for existing watchlist item
    const existingWatchlist = await prisma.watchlist.findUnique({
      where: {
        userId_movieId: {
          movieId,
          userId,
        },
      },
    });

    if (existingWatchlist) {
      return res
        .status(409)
        .json({ message: "Already exists in watchlist", status: "existing" });
    }

    const newWatchlist = await prisma.watchlist.create({
      data: {
        movieId,
        name,
        rating,
        poster,
        userId: user.id,
      },
    });

    res.status(201).json({
      message: "Added to watchlist",
      status: "success",
      watchlist: newWatchlist,
    });
  } else {
    const userWatchlist = await prisma.watchlist.findMany({
      where: {
        userId: user.id,
      },
    });

    res.status(200).json(userWatchlist);
  }
}

