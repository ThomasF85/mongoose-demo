import dbConnect from "@/db/connect.js";
import Joke from "@/db/models/Joke.js";

export default async function handler(request, response) {
  // connect to database
  await dbConnect();

  // read from database
  const jokes = await Joke.find();
  console.log(jokes);
  response.status(200).json(jokes);
}
