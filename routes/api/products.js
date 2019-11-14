const express = require("express");
const router = express.Router();

//제품페이지 get
router.get("/", (req, res) => {
    res.json({
        msg : "제품페이지"
    })
});

module.exports = router;