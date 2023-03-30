import { prisma } from "@/lib/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const { user } = await getSession({ req });
  const userId = user.id;

  if (req.method === "DELETE") {
    const { id: movieId } = req.query;

    try {
      const deleteWatchlist = await prisma.watchlist.delete({
        where: {
          userId_movieId: {
            movieId,
            userId,
          },
        },
      });

      res.status(200).json({
        message: "Watchlist item deleted",
        status: "success",
        data: deleteWatchlist,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error removing from watchlist", status: "error" });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
  res.json(movieId);
}

