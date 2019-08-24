const multerConfig = {
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ["csv"];
    const fileExtension = file.originalname.split(".").reverse()[0];

    if (!allowedExtensions.includes(fileExtension)) {
      cb(new Error(`Invalid file extension. Expected "csv". Received: "${fileExtension}"`));
    } else {
      cb(null, true);
    }
  }
};

module.exports = multerConfig;
