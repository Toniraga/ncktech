import React from 'react';
import Input from './Input';

const Payment = () => {
	return (
		<div className="payment">
			<div className="payment_method">
				<p className="pay_para1">
					<span className="payment_cap"> Payment Information </span>
					<span style={{ opacity: '0.4' }}>Choose your method of payment.</span>
				</p>
				<p>
					<span> Visa Img </span>
					<span> other Img </span>
					<span>
						<span>select</span> Paypal Img
					</span>
				</p>
			</div>
			<div className="card_container">
				<div className="card_atm">
					<div className="card">
						<p> CARD NUMBER </p>
						<p>4 3 2 4 5 4 3 3 9 3 8 2 1 0 3 0</p>
					</div>
				</div>
				<div className="card_inputs">
					<div className="card_input">
						<div style={{ width: '46%' }}>
							<Input value={'yemm'} label="Credit card number" />
							<Input
								containerClass="card_group_addon"
								value={'yemm'}
								label="Security Code"
							/>
						</div>

						<div style={{ width: '46%' }}>
							<Input value={'yemm'} label="Expiration date" />
							<Input
								value={'yemm'}
								containerClass="card_group_addon"
								label="Postal Code"
							/>
						</div>
					</div>
					<div>
						<p>
							<input type="radio" />
							<span style={{ fontSize: '13px', marginLeft: '10px' }}>
								Use this card for next time purchase
							</span>
						</p>
						<button className="card_btn"> Add Card </button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
