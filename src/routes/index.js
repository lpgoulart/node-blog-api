import express from "express";
import posts from "./postsRoutes.js"
import users from "./usersRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res)=>{
    res.status(200).json({title: "OKKKK"})
  })

  app.use(
    express.json(),
    posts,
    users
  )
}

export default routes