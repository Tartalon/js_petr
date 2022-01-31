import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'Jhon C.', salary: 800, increase: true, like: false, id: 1 },
				{ name: 'Evon R.', salary: 1000, increase: false, like: true, id: 2 },
				{ name: 'Dred W.', salary: 1500, increase: false, like: false, id: 3 },
			],
			term: '',
			filter: 'all',
		};
	}

	deleteItem = id => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id),
			};
		});
	};

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			like: false,
			id: uuidv4(),
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	// onToggleIncrease = id => {
	// 	// this.setState(({ data }) => {
	// 	// 	const index = data.findIndex(elem => elem.id === id);
	// 	// 	const old = data[index];
	// 	// 	const newItem = { ...old, increase: !old.increase };
	// 	// 	const newArr = [
	// 	// 		...data.slice(0, index),
	// 	// 		newItem,
	// 	// 		...data.slice(index + 1),
	// 	// 	];
	// 	// 	return {
	// 	// 		data: newArr,
	// 	// 	};
	// 	// });

	// 	this.setState(({ data }) => ({
	// 		data: data.map(item => {
	// 			if (item.id === id) {
	// 				return { ...item, increase: !item.increase };
	// 			}
	// 			return item;
	// 		}),
	// 	}));
	// };

	// onToggleRise = id => {
	// 	this.setState(({ data }) => ({
	// 		data: data.map(item => {
	// 			if (item.id === id) {
	// 				return { ...item, like: !item.like };
	// 			}
	// 			return item;
	// 		}),
	// 	}));
	// };

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1;
		});
	};

	onUpdateSearch = term => {
		this.setState({ term });
	};

	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.like);
			case 'morThen1000':
				return items.filter(item => +item.salary > 1000);
			default:
				return items;
		}
	};

	onFilterSelect = filter => {
		this.setState({ filter });
	};

	render() {
		const { data, term, filter } = this.state;
		const employees = this.state.data.length;
		const increase = this.state.data.filter(item => item.increase).length;
		// const visibleData = this.searchEmp(data, term);
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);

		return (
			<div className="app">
				<AppInfo employees={employees} increase={increase} />

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>

				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					// onToggleIncrease={this.onToggleIncrease}
					// onToggleRise={this.onToggleRise}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
