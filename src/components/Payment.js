import React, { useState } from 'react';
import paypal from '../img/paypal1.png';
import visa from '../img/visa.jpg';

import Input from './Input';
import PaymentCard from 'react-payment-card-component';

const Payment = () => {
	const [cvvFocused, setCvvFocused] = useState(false);
	const [cardNumber, setCardNumber] = useState('1728 3849 4904 0427');
	const [cvv, setCvv] = useState('234');
	const [expDate, setExpDate] = useState('12/30');

	const onFocus = () => setCvvFocused(true);
	const onBlur = () => setCvvFocused(false);

	return (
		<div className="payment">
			<div className="payment_method">
				<p className="pay_para1">
					<span className="payment_cap"> Payment Information </span>
					<span style={{ opacity: '0.4' }}>Choose your method of payment.</span>
				</p>
				<p style={{ display: 'flex', alignItems: 'center' }}>
					<span>
						<img
							style={{ width: '30px', height: '20px', marginRight: '10px' }}
							src={visa}
							alt=""
						/>
					</span>
					<span>
						<img
							style={{ width: '50px', height: '30px', marginRight: '10px' }}
							src={paypal}
							alt=""
						/>
					</span>
					<span style={{ display: 'flex', alignItems: 'center' }}>
						<span>
							<input type="radio" />
						</span>
						<img
							style={{ width: '50px', height: '30px' }}
							src={paypal}
							alt=""
						/>
					</span>
				</p>
			</div>
			<div className="card_container">
				<div className="card_atm">
					<PaymentCard
						bank="santander"
						model="prime"
						type="color"
						className="card"
						brand="mastercard"
						number={cardNumber}
						cvv={cvv}
						holderName="Toni Raga"
						expiration={expDate}
						flipped={cvvFocused}
					/>
				</div>
				<div className="card_inputs">
					<div className="card_input">
						<div style={{ width: '46%' }}>
							<Input
								value={cardNumber}
								type="number"
								placeholder="1728 3849 4904 0427"
								onChange={(e) => setCardNumber(e.target.value)}
								label="Credit card number"
							/>
							<Input
								containerClass="card_group_addon"
								type="number"
								placeholder="324"
								onFocus={onFocus}
								onBlur={onBlur}
								value={cvv}
								onChange={(e) => setCvv(e.target.value)}
								label="Security Code"
							/>
						</div>

						<div style={{ width: '46%' }}>
							<Input
								value={expDate}
								type="text"
								placeholder="12/30"
								label="Expiration date"
								onChange={(e) => setExpDate(e.target.value)}
							/>
							<Input
								containerClass="card_group_addon"
								placeholder="10119"
								label="Postal Code"
								type="number"
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
