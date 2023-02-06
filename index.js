const todos = [
	{
		id: 1,
		text: 'do your home work quickly',
		isDone: true,
	},
	{
		id: 2,
		text: 'have done the task',
		isDone: true,
	},
	{
		id: 3,
		text: 'make sure to check it',
		isDone: true,
	},
	{
		id: 1,
		text: 'i am comming to check it ',
		isDone: false,
	},
];
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
