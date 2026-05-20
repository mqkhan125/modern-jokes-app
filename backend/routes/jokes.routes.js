import express from "express";

import {
  getAllJokes,
  getJokeById,
  createJokes,
  likeJokes,
  dislikeJokes,
  getByCategory,
  searchJokes,
} from "../controller/joke.controller.js";

const router = express.Router();

router.get("/", getAllJokes);

router.get("/search", searchJokes);

router.get("/filter", getByCategory);

router.get("/:id", getJokeById);

router.post("/", createJokes);

router.post("/:id/like", likeJokes);

router.post("/:id/dislike", dislikeJokes);

export default router;
