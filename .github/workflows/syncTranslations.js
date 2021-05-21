"use strict";
const fs = require("fs");
const path = require("path");


fs.readFile(path.join(__dirname, "../../translations/en.json"), function (err, data) {
	if (err) throw new Error(err);
	let keys = Object.keys(JSON.parse(data.toString()));
	
	fs.readdir(path.join(__dirname, "../../translations/"), function (err, data) {
		if (err) throw new Error(err);
		let files = data.filter(function (a) {
			return !(["en.json", "test.json"].includes(a))
		});

		for (let file of files) {
			let data = JSON.parse(fs.readFileSync(path.join(__dirname, "../../translations/", file)).toString()),
				localKeys = Object.keys(data);

			// find and add missing keys
			for (let key of keys) if (!localKeys.includes(key)) data[key] = key;
			// find and remove extra keys
			for (let key of localKeys) if (!keys.includes(key)) data[key] = undefined;
				
			// if any changes made to the file in ram, write
			if (JSON.stringify(localKeys.sort()) !== JSON.stringify(Object.keys(data).sort())) {
				console.log(`Writing changes to ${file}`);
				fs.writeFileSync(path.join(__dirname, "../../translations/", file), JSON.stringify(data, null, 1));
			}
		}
	})

});