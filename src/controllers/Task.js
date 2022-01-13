const Task = require('../models/Task');
const { connection } = require('../db');

const addTask = async task => {
	await Task.create(task);
	console.log('New Task created');
	await connection.close();
};

const findTask = async text => {
	const search = new RegExp(text, 'i');
	const tasks = await Task.find({
		$or: [{ title: search }, { description: search }],
	});
	if (tasks.length == 0) {
		console.log('No tasks found');
		await connection.close();
		process.exit(0);
	}

    console.table(
		tasks.map(el => {
			return {
				_id: el._id.toString(),
				title: el.title,
				description: el.description,
			};
		})
	);

	await connection.close();
	process.exit(0);
};

const listTasks = async () => {
	const tasks = await Task.find().lean();
	console.table(
		tasks.map(el => {
			return {
				_id: el._id.toString(),
				title: el.title,
				description: el.description,
			};
		})
	);
	await connection.close();
	process.exit(0);
};

const removeTask = async _id => {
	await Task.findByIdAndDelete(_id);
	console.log('Task deleted');
	await connection.close();
};

const updateTask = async (_id, newTask) => {
	await Task.updateOne({ _id }, newTask);
	console.log('Task updated');
	await connection.close();
};

module.exports = {
	addTask,
	listTasks,
	removeTask,
	updateTask,
	findTask,
};
