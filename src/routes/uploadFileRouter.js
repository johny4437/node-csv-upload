const express = require("express");
const upload = require("../utils/multer");
const { uploadFile } = require("../controllers/uploadFile");
const router = express.Router();

router.post("/upload/file", upload.single("file"), uploadFile);

module.exports = router;
