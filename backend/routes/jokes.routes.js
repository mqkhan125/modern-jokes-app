import express from "express";

import {
  getAllJokes,
  getJokeById,
  createJoke,
  likeJoke,
  dislikeJoke,
  getByCategory,
  searchJokes,
} from "../controller/joke.controller.js";

const router = express.Router();

router.get("/", getAllJokes);

router.get("/search", searchJokes);

router.get("/filter", getByCategory);

router.get("/:id", getJokeById);

router.post("/", createJoke);

router.post("/:id/like", likeJoke);

router.post("/:id/dislike", dislikeJoke);

export default router;
