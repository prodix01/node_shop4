const express = require("express");
const router = express.Router();
const userModel = require("../../models/users");

//마이페이지 get
router.get("/", (req, res) => {

    userModel
        .find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json({
                msg : "성공적으로 마이페이지를 불러왔습니다.",
                userInfo : docs
            });
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            });
        });

});

//내 정보 등록 post
router.post("/", (req, res) => {

    const user = new userModel ({
       id : req.body.id,
       password : req.body.password
    });

    user
        .save()
        .then(result => {
            res.status(200).json({
                msg : "성공적으로 유저정보를 등록했습니다.",
                createdUser : result
            });
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            });
        });

});

//내 정보 수정 patch
router.patch("/", (req, res) => {
    res.json({
        msg : "내 정보를 수정합니다."
    })
});

//내 정보 삭제 delete
router.delete("/", (req, res) => {
    res.json({
        msg : "내 정보를 삭제합니다."
    })
});

module.exports = router;
