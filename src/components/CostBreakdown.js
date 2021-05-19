import React from 'react';

const CostBreakdown = () => {
	return (
		<>
			<div className="payment_breakdown">
				<p className="payment_sub">
					<span style={{ fontSize: '16px' }}>Subtotal</span>
					<span>₦2,497.00</span>
				</p>
				<p className="payment_sub">
					<span>Estimated TAX</span>
					<span>₦119.64</span>
				</p>
				<p className="payment_sub">
					<span>
						Promotional Code: <span style={{ opacity: '0.6' }}>Z4KXLM9A</span>
					</span>
					<span>₦-60.00</span>
				</p>
			</div>
			<div className="payment_total">
				<span style={{ width: '200px' }}>
					<button
						style={{ fontSize: '18px', fontWeight: '500' }}
						className="card_btn"
					>
						Complete Payment
					</button>
				</span>
				<span> TOTAL:₦2556.64 </span>
			</div>
		</>
	);
};

export default CostBreakdown;
