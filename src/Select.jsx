import { array, bool, func, object } from 'prop-types';
import Select from 'react-select/creatable';
const defaultOptions = {
	isClearable: false,
	isMulti: false,
	isSearchable: false,
	maxMenuHeight: 240,
	menuPlacement: 'auto',
	noOptionsMessage: () => 'No options',
	styles: {
		option: (styles, { isFocused, isSelected }) => ({
			...styles,
			background: isSelected || isFocused ? 'blue' : '#f7f8fc',
			color: isSelected || isFocused ? '#ffffff' : '#000000',
			cursor: 'pointer',
			fontSize: '15px',
			height: 48,
			overflow: 'hidden',
			padding: '15px 16px',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			width: '100%',
		}),
		singleValue: styles => ({
			...styles,
			color: '#000000',
			margin: '0',
		}),
		control: styles => ({
			...styles,
			'background': '#f7f8fc',
			'border': '1px solid #e2e4ea',
			'borderRadius': 8,
			'boxShadow': 'none',
			'color': 'black',
			'cursor': 'pointer',
			'height': 48,
			'outline': 'none',
			'padding': 0,
			'width': '100%',
			'minWidth': '100px',
			':hover': {
				border: '1px solid #e2e4ea',
			},
		}),
		menu: styles => ({
			...styles,
			background: '#f7f8fc',
			border: 'none',
			borderRadius: 8,
			boxShadow: '0 0 7px rgba(0, 0, 0, 0.1)',
			margin: 0,
			overflow: 'hidden',
			padding: 0,
		}),
		menuList: styles => ({
			...styles,
			'padding': 0,
			'::-webkit-scrollbar': {
				width: 7,
				height: 7,
			},
			'::-webkit-scrollbar-track': {
				background: 'transparent',
			},
			'::-webkit-scrollbar-thumb': {
				background: 'blue',
				borderRadius: 4,
			},
		}),
		indicatorSeparator: styles => ({
			...styles,
			display: 'none',
		}),
		dropdownIndicator: (styles, { selectProps: { menuIsOpen } }) => ({
			...styles,
			'alignItems': 'center',
			'color': '#000000',
			'display': 'flex',
			'height': '100%',
			'margin': '0 14px 0 0',
			'padding': '0',
			'transform': `rotate(${menuIsOpen ? '180deg' : '0'})`,
			'transformOrigin': 'center',
			'transition': '0.4s',
			'width': 19,
			':hover': {
				color: '#000000',
			},
		}),
		indicatorsContainer: styles => ({ ...styles, overflow: 'hidden' }),
		valueContainer: styles => ({
			...styles,
			display: 'flex',
			fontSize: '15px',
			height: 48,
			padding: '15px 16px',
		}),
		noOptionsMessage: styles => ({
			...styles,
			color: '#000000',
			cursor: 'not-allowed',
			fontSize: '15px',
			height: 48,
			padding: '15px 16px',
			textAlign: 'left',
			width: '100%',
		}),
	},
};
const Component = ({ isDisabled, onChange, onFocus, options, value }) => (
	<Select
		{...defaultOptions}
		isDisabled={isDisabled}
		onChange={onChange}
		onFocus={onFocus}
		options={options}
		value={value}
	/>
);
Component.defaultProps = {
	isDisabled: false,
};
Component.propTypes = {
	isDisabled: bool,
	onChange: func,
	onFocus: func,
	options: array,
	value: object,
};
export default Component;
