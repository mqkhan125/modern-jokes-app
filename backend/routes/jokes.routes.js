import express from "express";

import { getAllJokes, getJokeById, getSearch, likeJokes, dislikeJokes, createJokes, getByCategory } from "../Controller/jokes.controller";

import Router from express.Router();

Router.get("/", getAllJokes);
Router.get("/search", getSearch);
Router.get("/filter", getByCategory);
Router.get("/:id", getJokeById);
Router.post("/", createJokes);
Router.post("/:id/like", likeJokes);
Router.post("/:id/dislike", dislikeJokes)

export default Router;