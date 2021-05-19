import React from 'react';

const Input = ({ label, classNames, containerClass, value, onChange }) => {
	return (
		<div className={`card_group ${containerClass}`}>
			<label className="dynamic_label"> {label} </label>
			<input
				value={value}
				onChange={onChange}
				className={`dynamic_input ${classNames}`}
			/>
		</div>
	);
};

export default Input;
