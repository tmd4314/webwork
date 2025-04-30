const express = require("express"); 
const router = express.Router(); 
 
router.get("", function (req, res) { res.send("dept 전체조회"); }); 
router.post("", function (req, res) { res.send("dept insert"); }); 

router.get("/:id", function (req, res) { res.send("dept 단건조회"); }); 
router.put("/:id", function (req, res) { res.send("dept update"); }); 
router.delete("/:id", function (req, res) { res.send("dept delete"); }); 
module.exports = router; 