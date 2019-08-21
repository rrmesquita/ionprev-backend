const multerConfig = {
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ["text/csv", "application/csv", "application/octet-stream"];
    const allowedExtensions = ["csv"];
    const fileMime = file.mimetype;
    const fileExtension = file.originalname.split(".").reverse()[0];

    if (!allowedMimes.includes(fileMime)) {
      cb(new Error(`Invalid file mime type. Expected "text/csv". Received: "${file.mimetype}"`));
    } else if (!allowedExtensions.includes(fileExtension)) {
      cb(new Error(`Invalid file extension. Expected "csv". Received: "${fileExtension}"`));
    } else {
      cb(null, true);
    }
  }
};

module.exports = multerConfig;
