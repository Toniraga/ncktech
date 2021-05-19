import React from 'react';
import profile from '../img/profile.png';

const Nav = () => {
	return (
		<>
			<nav className="top_nav">
				<p> TRIPS </p>
				<p> RECENTLY VIEWED </p>
				<p> BOOKINGS </p>
				<p className="profile_img">
					<img
						style={{ width: '100%', height: '100%' }}
						src={profile}
						alt="profile pic"
					/>
				</p>
			</nav>
		</>
	);
};

export default Nav;
