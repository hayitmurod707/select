import { useState } from 'react';
import Select from './Select';
const App = () => {
	const [options] = useState([
		{
			label: 'Label 1',
			value: 1,
		},
		{
			label: 'Label 2',
			value: 2,
		},
		{
			label: 'Label 3',
			value: 3,
		},
		{
			label: 'Label 4',
			value: 4,
		},
	]);
	const [value, setValue] = useState({
		label: 'Label 1',
		value: 1,
	});
	return (
		<div style={{ width: '250px' }}>
			<Select
				onChange={value => setValue(value)}
				options={options}
				value={value}
			/>
		</div>
	);
};
export default App;
