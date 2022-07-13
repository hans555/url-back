const { pool } = require("./database");
const jsonic = require("jsonic");
const { getUrlSequenceIdQuery, getPostUrlQuery } = require("./urlQueries");
require("dotenv").config();

async function handlePostUrl(req, res) {
  const body = jsonic(req.body);
  const { url } = body;
  const datetime = new Date(Date.now()).toLocaleString("en-GB", {
    timeZone: "Asia/Singapore",
  });
  const date =
    datetime.slice(6, 10) +
    "-" +
    datetime.slice(3, 5) +
    "-" +
    datetime.slice(0, 2);
  const time = datetime.slice(12);

  const client = await pool.connect();
  try {
    sequenceQuery = getUrlSequenceIdQuery();
    data = await client.query(sequenceQuery);
    shortUrl = `http://localhost:${process.env.PORT}/${process.env.URL_NAME}${data.rows[0].nextval}`;
    insertQuery = getPostUrlQuery(shortUrl, url, date, time);
    await client.query(insertQuery);

    res.status(200).json({
      shortUrl,
    });
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
