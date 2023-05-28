const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const filesPath = path.join(__dirname, "..", "uploads");
    cb(null, filesPath);
  },
  filename: (req, file, cb) => {
    const newName = file.fieldname + "_" + Date.now() + file.originalname;
    cb(null, newName);
  },
});


const upload = multer({storage:storage});

module.exports = upload; 