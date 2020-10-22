const express = require('express');

const app = express();

app.get('/', (req, res) => res.end('home'));

const start = async () => {
  try {
    //await db.sequelize.sync({ force: true });
    const port = process.env.PORT || 9000;
    await app.listen(port);
    console.log(`server listening on ${port}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { start, app };
