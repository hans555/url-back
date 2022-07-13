CREATE TABLE url (
	short_url TEXT PRIMARY KEY,
	url TEXT NOT NULL,
	date_created date NOT NULL,
	time_created time NOT NULL
);

CREATE SEQUENCE url_id_sequence
	INCREMENT 1
	START 1
	MAXVALUE 99999;
