import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			filter: '',
		};
	}

	onUpdateSearch = e => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onUpdateSearch(term);
	};

	render() {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Знайти співробітника"
				defaultValue={this.state.term}
				onChange={this.onUpdateSearch}
			/>
		);
	}
}

export default SearchPanel;
