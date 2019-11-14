const express = require("express");
const router = express.Router();

//주문페이지 get
router.get("/", (req, res) => {
    res.json({
        msg : "주문페이지"
    })
});

module.exports = router;