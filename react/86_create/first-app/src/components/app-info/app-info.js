import './app-info.css';

const AppInfo = ({ increase, employees }) => {
	return (
		<div className="app-info">
			<h1>Облік співробітників у компанії N</h1>
			<h2>Загальна кількість співробітників: {employees}</h2>
			<h2>Премію отримають: {increase}</h2>
		</div>
	);
};

export default AppInfo;
