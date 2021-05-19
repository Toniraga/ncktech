import React from 'react';

const Input = ({
	label,
	type,
	classNames,
	containerClass,
	value,
	onChange,
	placeholder,
	...props
}) => {
	return (
		<div className={`card_group ${containerClass}`}>
			<label className="dynamic_label"> {label} </label>
			<input
				{...props}
				value={value}
				type={type}
				onChange={onChange}
				placeholder={placeholder}
				className={`dynamic_input ${classNames}`}
			/>
		</div>
	);
};

export default Input;
