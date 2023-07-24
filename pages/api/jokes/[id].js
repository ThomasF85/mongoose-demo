import dbConnect from "@/db/connect";
import Joke from "@/db/models/Joke";

export default async function handler(request, response) {
  // connect to database
  await dbConnect();

  // read from database
  const { id } = request.query;

  const joke = await Joke.findById(id);

  if (!joke) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(joke);
}
