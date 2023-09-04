import * as React from "react";
import AppLogo from "../images/pdf_logo.png";
import { Link } from "gatsby";


const Logo = () => {
	return (
		<div>
			<Link to="/">
				<img src={AppLogo} alt="logo" />
			</Link>
		</div>
	);
};

export default Logo;
