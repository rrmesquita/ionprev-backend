const parse = require("csv-parse");
const multer = require("multer");
const multerConfig = require("../config/multer");

const upload = multer(multerConfig).single("file");

const UsageController = {
  parseFiles: function(req, res) {
    upload(req, res, uploadError => {
      if (uploadError) {
        res.status(415).send(uploadError.message);
      } else {
        return parse(req.file.buffer, (parseError, output) => {
          if (parseError) {
            return res.status(415).send(parseError.message);
          }

          if (
            // ensure headers are available
            output[0] === undefined ||
            // ensure first row is available
            output[1] === undefined ||
            // ensure first header is available
            output[0][0] === undefined
          ) {
            return res.status(406).send("Nenhum dado encontrado");
          }

          const list = [];
          for (let i = 1; i < output.length; i++) {
            for (let j = 0; j < output[i].length; j++) {
              switch (output[i][j]) {
                case undefined:
                case "":
                  return res.status(406).send("Dados inválidos ou indisponíveis");
              }
            }

            if (!(new Date(output[i][4]) instanceof Date && !isNaN(new Date(output[i][4])))) {
              return res.status(406).send("Dados inválidos ou indisponíveis");
            }

            const row = {
              userId: output[i][0],
              companyId: output[i][1],
              eventName: output[i][2],
              action: output[i][3],
              date: output[i][4]
            };
            list.push(row);
          }

          res.send(list);
        });
      }
    });
  }
};

module.exports = UsageController;
