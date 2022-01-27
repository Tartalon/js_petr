import './app-filter.css';

const AppFilter = () => {
	return (
		<div className="btn-group">
			<button className="btn btn-light" type="byutton">
				Всі співробітники
			</button>
			<button className="btn btn-outline-light" type="byutton">
				На підвищення
			</button>
			<button className="btn btn-outline-light" type="byutton">
				З/П більше 1000$
			</button>
		</div>
	);
};

export default AppFilter;
