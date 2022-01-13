#!/usr/bin/env node

const { connectDB } = require('./db');
require('./commands');

const init = async () => {
	await connectDB();
};

init();