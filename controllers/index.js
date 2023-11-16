const express = require('express');
const router = express.Router();

const studentRoutes = require("./studentRoutes");
const classRoutes = require("./classRoutes")

router.use("/api/students",studentRoutes);
router.use("/api/classes",classRoutes);

module.exports = router;