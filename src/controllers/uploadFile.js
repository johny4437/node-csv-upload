const fs = require("fs");
const path = require("path");
const csv = require("csv-parse");
const User = require("../models/User");
exports.uploadFile = async (req, res) => {
  try {
    const users = [];
    fs.createReadStream(req.file.path)
      .pipe(
        csv.parse({
          columns: true,
          delimiter: ";",
        })
      )
      .on("data", (data) => {
        users.push(data);
      })
      .on("error", (error) => {
        return res.json(error);
      })
      .on("end", async () => {
        await User.sync({ force: true });
        User.bulkCreate(users).then(() => {
          const result = {
            status: "ok",
            filename: req.file.originalname,
            message: "upload successfully",
          };
          res.status(200).json(result);
        });
      });
  } catch (error) {
    return res.json(error.message);
  }
};
