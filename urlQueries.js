const format = require("pg-format");

function getPostUrlQuery(shortUrl, url, date, time) {
	return format("INSERT INTO url VALUES (%L, %L, %L, %L)", shortUrl, url, date, time)
}

function getUrlSequenceIdQuery() {
	return "SELECT nextval('url_id_sequence')"
}

module.exports = {
	getPostUrlQuery,
	getUrlSequenceIdQuery
}
