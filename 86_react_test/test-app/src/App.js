import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: 'Button',
			position: '',
		};

		this.nextYear = this.nextYear.bind(this);
	}

	nextYear() {
		console.log('+++');
		this.setState(state => ({
			years: state.years + 1,
		}));
	}

	commitInputChanges = (e, color) => {
		// console.log(color);

		this.setState({
			position: e.target.value,
		});
	};

	render() {
		const { name, surname, link } = this.props;
		const { position, years } = this.state;

		// console.log(this);
		return (
			<div>
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h1>
					My name is {name}, surname - {surname}, age - {years}, position -{' '}
					{position}
				</h1>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input
						type="text"
						onChange={e => this.commitInputChanges(e, 'some color')}
					/>
				</form>
			</div>
		);
	}
}

function App() {
	return (
		<div className="App">
			<WhoAmI name="Jhon" surname="Smith" link="facebook.com" />
			<WhoAmI name="Bill" surname="Sheport" link="vk.com" />
		</div>
	);
}

export default App;
