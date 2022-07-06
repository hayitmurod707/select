import { array, bool, func, object } from 'prop-types';
import ReactSelect from 'react-select/creatable';
const defaultOptions = {
	isClearable: false,
	isMulti: false,
	isSearchable: false,
	maxMenuHeight: 240,
	menuPlacement: 'auto',
	noOptionsMessage: () => 'No options',
	styles: {
		option: (styles, { isSelected, isDisabled }) => ({
			...styles,
			'background': isDisabled ? 'grey' : isSelected ? 'blue' : '#f7f8fc',
			'color': isDisabled ? '#000000' : isSelected ? '#ffffff' : '#000000',
			'cursor': isDisabled ? 'not-allowed' : 'pointer',
			'fontSize': '15px',
			'height': '48px',
			'overflow': 'hidden',
			'padding': '15px 16px',
			'textOverflow': 'ellipsis',
			'whiteSpace': 'nowrap',
			'width': '100%',
			':hover': {
				background: isDisabled ? 'grey' : 'blue',
				color: isDisabled ? '#000000' : '#ffffff',
			},
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
			'borderRadius': '8px',
			'boxShadow': 'none',
			'color': 'black',
			'cursor': 'pointer',
			'height': '48px',
			'minWidth': '100px',
			'outline': 'none',
			'padding': '0px',
			'width': '100%',
			':hover': {
				border: '1px solid #e2e4ea',
			},
		}),
		menu: styles => ({
			...styles,
			background: '#f7f8fc',
			border: 'none',
			borderRadius: '8px',
			boxShadow: '0 0 7px rgba(0, 0, 0, 0.1)',
			margin: '0px',
			overflow: 'hidden',
			padding: '0px',
		}),
		menuList: styles => ({
			...styles,
			'padding': '0px',
			'::-webkit-scrollbar': {
				width: '7px',
				height: '7px',
			},
			'::-webkit-scrollbar-track': {
				background: 'transparent',
			},
			'::-webkit-scrollbar-thumb': {
				background: 'blue',
				borderRadius: '4px',
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
			'width': '19px',
			':hover': {
				color: '#000000',
			},
		}),
		indicatorsContainer: styles => ({ ...styles, overflow: 'hidden' }),
		valueContainer: styles => ({
			...styles,
			display: 'flex',
			fontSize: '15px',
			height: '48px',
			padding: '15px 16px',
		}),
		noOptionsMessage: styles => ({
			...styles,
			color: '#000000',
			cursor: 'not-allowed',
			fontSize: '15px',
			height: '48px',
			padding: '15px 16px',
			textAlign: 'left',
			width: '100%',
		}),
	},
};
const Select = props => <ReactSelect {...defaultOptions} {...props} />;
Select.defaultProps = {
	isDisabled: false,
};
Select.propTypes = {
	isDisabled: bool,
	onChange: func.isRequired,
	onFocus: func,
	options: array.isRequired,
	value: object.isRequired,
};
export default Select;
