const parse = require("csv-parse");

const UsageController = {
  parseFiles: function(req, res) {
    return parse(req.file.buffer, (err, output) => {
      if (err) return res.send(err);

      const list = [];
      for (let i = 1; i < output.length; i++) {
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
};

module.exports = UsageController;
