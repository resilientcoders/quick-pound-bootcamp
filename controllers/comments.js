const Comment = require('../models/Comment'); 
const cloudinary = require("../middleware/cloudinary");


module.exports = {

  createComment: async (req, res) => {
    try {
      //post comment to page
      console.log("hello")
      await Comment.create({
        user: req.user.id,
        comments: req.body.comment,
        commentFor: req.params.id,

      });
      console.log("comment has been added!");
      res.redirect(`/post/${req.params.id}`); 
    } catch (err) {
      console.log(err);
    }
  }


};
