import { jokes } from "../data/joke";

export const getAllJokes = (req, res) => {
  res.json(jokes);
};

export const getJokeById = (req, res) => {
  const joke = jokes.find((j) => j.id == req.params.id);

  if (!joke)
    return res.status(404).json({
      message: "Not found",
    });
  joke.views += 1;
  res.json(joke);
};

export const createJokes = (req, res) => {
  const newJokes = {
    id: jokes.length + 1,
    ...req.body,
    likes: 0,
    dislikes: 0,
    views: 0,
    createdAt: new Date(),
  };

  jokes.push(newJokes);
  res.status(202).json(newJokes);
};

export const likeJokes = (req, res) => {
  const joke = jokes.find((j) => j.id == req.params.id);

  if (!joke)
    return res.status(404).json({
      message: "like joke not found",
    });
  joke.likeJokes += 1;
  res.json(joke);
};

export const dislikeJokes = (req, res) => {
  const joke = jokes.find((j) => j.id == req.params.id);

  if (!joke)
    return res.status(404).json({
      message: "like joke not found",
    });
  joke.dislikeJokes += 1;
  res.json(joke);
};

export const getByCategory = (req, res) => {
     const { category } = req.query;

     const filtered = jokes.filter((j) => j.category.toLowerCase() === category.toLowerCase())
     res.json(filtered)
}

export const getSearch = (req, res) => {
    const {q} = req.query;

    const filtered = jokes.filter(
      (j) =>
        j.title.toLowerCase().includes(q.toLowerCase()) ||
        j.content.toLowerCase().includes(q.toLowerCase())
    );
    res.json(filtered)
}