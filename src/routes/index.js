import express from "express";
import posts from "./postsRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res)=>{
    res.status(200).json({title: "OKKKK"})
  })

  app.use(
    express.json(),
    posts
  )
}

export default routes