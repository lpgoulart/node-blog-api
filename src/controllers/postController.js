import posts from "../models/Post.js";

class PostController {

  static getAllPosts = (req, res) => {
    posts.find((err, posts)=>{ 
      res.status(200).json(posts);
    });
  }

  static getPostById = (req, res) => {
    const id = req.params.id

    posts.findById(id, (err, posts)=>{ 
      err
        ? res.status(400).send({message: `${err.message} nao encontrei o que procurava`})
        : res.status(200).send(posts)
    });
  }

  static addPost = (req, res) => {
    let post = new posts(req.body)

    post.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} falha ao cadastrar otario xD`})
      }
      else {
        res.status(201).send(post.toJSON())
      }
    })
  }

  static updatePost = (req, res) => {
    const id = req.params.id

    posts.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      err
        ? res.status(500).send({message: `${err.message} falha ao atualizar hahaha xD`})
        : res.status(201).send({message: "post atualizado T.T"})
    })
  }

  static deletePost = (req, res) => {
    const id = req.params.id

    posts.findByIdAndDelete(id, (err) => { 
      err
        ? res.status(500).send({message: `o que tentou deletar é invevitavel`})
        : res.status(200).send({message: "deletado com sucesso uhuuu"})
    });
  }

}

export default PostController;