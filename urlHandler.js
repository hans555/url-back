const { pool } = require("./database");
const jsonic = require("jsonic");

async function handlePostUrl(req, res) {
  const body = jsonic(req.body);
  const { url } = body;
  const datetime = new Date(Date.now()).toLocaleString("en-GB", {
    timeZone: "Asia/Singapore",
  });
  const date = datetime.slice(0, 10);
  const time = datetime.slice(12);

  console.log(date);
  console.log(time);
  console.log(url);

  const client = await pool.connect();
  try {
    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(400).end();
  } finally {
    client.release();
  }
}

module.exports = {
  handlePostUrl,
};
