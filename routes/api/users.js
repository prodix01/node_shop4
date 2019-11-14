const express = require("express");
const router = express.Router();

//마이페이지 get
router.get("/", (req, res) => {
    res.json({
        msg : "마이페이지"
    })
});

module.exports = router;
