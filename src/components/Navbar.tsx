import * as React from "react";
import { styled } from "styled-components";
import Logo from "./Logo";
import { Link } from "gatsby";
import MobileNavLogo from "../images/mobile-menu-icon.png";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";



const StyledNavbar = styled.nav`
	position: relative;
	background-color: var(--bg-color-white);
	box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08) !important;
	z-index: 1;

`;

const NavContainer = styled.div`
	padding-block: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const NavLogo = styled.div`
	padding-block: 8px;
	padding-inline: 4px;
`;

const RightNav = styled.div`
	ul {
		display: flex;
		align-items: center;
		gap: 30px;
		justify-content: center;
		padding-block: 8px;
		padding-inline: 4px;
	}

	ul li a {
		color: var(--fc-black-secondary);
		font-size: var(--fs-16);
		font-weight: var(--fw-400);
	}

	ul li a:hover {
		color: var(--fc-blue);
	}

	.nav-btn {
		padding: 16px 24px;
		border-radius: var(--br-4);
		font-weight: var(--fw-500);
		font-size: var(--fs-16);
	}

	.btn-white {
		box-shadow: inset 0 0 0 1px var(--bg-color-blue);
		color: var(--fc-blue) !important;
	}

	.btn-white:hover {
		background-color: var(--bg-color-blue);
		color: var(--fc-white) !important;
	}

	.btn-blue {
		background-color: var(--bg-color-blue);
		color: var(--fc-white) !important;
	}

	.btn-blue:hover {
		background-color: var(--bg-color-white);
		box-shadow: inset 0 0 0 1px var(--bg-color-blue);
        color: var(--fc-blue) !important;
	}
`;





const Navbar = () => {
	const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

	const [isOpen, setIsOpen] = useState(false)

	function handleToggle() {
		if (isOpen) {
			setIsOpen(false)
		}
		else {
			setIsOpen(true)
		}
	}

  return (
		<>
			<StyledNavbar>
				<div className="container">
					<NavContainer>
						<NavLogo>
							<Logo />
						</NavLogo>
						<RightNav>
							<ul className="web-nav">
								<li>
									<Link to="/" className="">
										Convert
									</Link>
								</li>
								<li>
									<Link to="/" className="">
										Compress
									</Link>
								</li>
								<li>
									<Link to="/" className="">
										Edit
									</Link>
								</li>
								{/* <li>
									<Link to="/" className="nav-btn btn-white">
										Sign Up
									</Link>
								</li> */}
								<li>
									{isAuthenticated ? (
										<button
											className="nav-btn btn-blue"
											onClick={() => {
												logout({ returnTo: window.location.origin});
											}}
										>
											Logout
										</button>
									) : (
										<button
											className="nav-btn btn-blue"
											onClick={() => loginWithRedirect()}
										>
											Login
										</button>
									)}
								</li>
							</ul>
							<div className="mobile-nav-icon">
								<img
									src={MobileNavLogo}
									alt="mobile nav icon"
									className="hamburger-icon"
									onClick={() => handleToggle()}
								/>
							</div>
						</RightNav>
					</NavContainer>
				</div>
			</StyledNavbar>
			<div className={`mobile-nav-container ${isOpen ? "active" : ""}`}>
				<div className="wrap">
					<div className="close-trigger">
						<AiOutlineClose
							onClick={() => handleToggle()}
							size={32}
						/>
					</div>
					<ul>
						<li>
							<Link to="/" className="">
								Convert
							</Link>
						</li>
						<li>
							<Link to="/" className="">
								Compress
							</Link>
						</li>
						<li>
							<Link to="/" className="">
								Edit
							</Link>
						</li>
						<li>
							<Link
								to="/"
								className="mobile-nav-btn mobile-btn-white"
							>
								Sign Up
							</Link>
						</li>
						<li>
							<Link
								to="/"
								className="mobile-nav-btn mobile-btn-blue"
							>
								Login
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={`overlay ${isOpen ? "active" : ""}`}></div>
		</>
  );
}

export default Navbar;