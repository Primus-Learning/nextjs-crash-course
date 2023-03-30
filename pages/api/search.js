import { searchMovie } from "@/lib/requests/movieRequests";

export default async function handler(req, res) {
  const requestBody = req.body;

  const data = await searchMovie(requestBody);

  res.status(200).json(data);
}

