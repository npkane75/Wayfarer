const router = require('express').Router();
const db = require('../models');

//index route
router.get('/:cityId/posts/:postsId/comments', (req, res) => {
    console.log(req.params)
    db.Comment.findById(req.params.postsId, (err, allComments) => {
        if (err) return console.log(err);
        res.json(allComments)
    })
})

//show route
router.get('/:cityId/posts/:postsId/comments/:commentsId', (req,res) => {
    db.Comment.findById(req.params.commentsId, (err, foundComment) => {
        if (err) return console.log(err);
        res.json(foundComment)
    })
})

//post route --> creates post
router.post('/:cityId/posts/:postsId/comments', (req, res) => {
    db.Comment.create(req.body, (err, createdComment) => {
        if (err) return console.log(err)
        
        db.Post.findByIdAndUpdate(
            req.params.postsId,
            {$push: {comments: createdComment}},
            (err, updatedPost) => {
                if (err) return console.log(err)

                // cant get this to update the singular post and its comment chain
                db.City.findByIdAndUpdate(
                    req.params.cityId, {$set: {posts:updatedPost}},
                    {new: true},
                    (err, updatedCity) => {
                        if (err) return console.log(err);
                    }
                )
            }
        )
        res.json(createdComment)
    })
})


//////////////////////after user creation
//update route --> based on user
//delete route --> based on user


module.exports = router;