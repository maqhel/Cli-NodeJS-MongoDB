const path = require('path');
// require('dotenv').config({
// 	path: path.resolve(process.cwd(), '../.env'),
// });
require('dotenv').config()

module.exports = {
	DB: process.env.DB || 'mongodb://localhost/taskcli',
};
