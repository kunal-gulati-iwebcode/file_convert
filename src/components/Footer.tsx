import * as React from "react";
import Logo from "./Logo";
import { styled } from 'styled-components';
import { Link } from "gatsby";


const UpperFooter = styled.div`
	padding-block: 48px;
	display: flex;
	justify-content: space-between;
	border-block: 1px solid var(--bc-light-grey);

	@media (max-width: 320px) {
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 321px) and (max-width: 575px) {
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 576px) {
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 992px) {
		flex-direction: row;
	}
`;

const LeftLinks = styled.div`
	display: flex;
	gap: 90px;

	.footer-items ul li {
		margin-bottom: 16px;
	}

	@media (max-width: 320px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 30px;
		grid-row-gap: 30px;
	}

	@media (min-width: 321px) and (max-width: 575px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 30px;
		grid-row-gap: 30px;
	}

	@media (min-width: 576px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 30px;
		grid-row-gap: 30px;
	}

	@media (min-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

const ItemHeading = styled.h4`
	font-size: var(--fs-20);
	font-weight: var(--fw-500);
	margin-bottom: 20px;
	color: var(--fc-black-primary);

	@media (max-width: 320px) {
		font-size: var(--fs-16);
	}

	@media (min-width: 321px) and (max-width: 575px) {
		font-size: var(--fs-16);
	}

	@media (min-width: 576px) {
		font-size: var(--fs-20);
	}
`;



const ItemLink = styled(Link)`
	font-size: var(--fs-16);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
	/* margin-bottom: 16px; */

	@media (max-width: 320px) {
		font-size: var(--fs-14);
	}

	@media (min-width: 321px) and (max-width: 575px) {
		font-size: var(--fs-14);
	}

	@media (min-width: 576px) {
		font-size: var(--fs-16);
	}
`;

const FooterLogo = styled.div`
	margin-bottom: 20px;
`;  

const ContactNumber = styled.p`
	font-size: var(--fs-20);
	font-weight: var(--fw-400);
	color: var(--fc-blue);
	margin-bottom: 4px;
`;

const RightLinks = styled.div`
	margin-inline: auto;

	@media (max-width: 320px) {
		margin-inline: auto;
	}

	@media (min-width: 321px) and (max-width: 575px) {
		margin-inline: auto;
	}

	@media (min-width: 576px) {
		margin-inline: auto;
	}
`;


const LowerFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-block: 24px;

	p {
		font-size: var(--fs-16);
		font-weight: var(--fw-400);
		color: var(--fc-black-secondary);
	}

	@media (max-width: 320px) {
		padding-block: 16px;

		p {
			font-size: var(--fs-14);
		}
	}

	@media (min-width: 321px) and (max-width: 575px) {
		padding-block: 16px;

		p {
			font-size: var(--fs-14);
		}
	}
`;




const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer-container">
					<UpperFooter>
						<LeftLinks>
							<div className="footer-items">
								<ItemHeading>Member Area</ItemHeading>
								<ul>
									<li>
										<ItemLink to="/">Sign In</ItemLink>
									</li>
									<li>
										<ItemLink to="/">Sign up</ItemLink>
									</li>
									<li>
										<ItemLink to="/">Forgot Password?</ItemLink>
									</li>
								</ul>
							</div>
							<div className="footer-items">
								<ItemHeading>PDF Converter</ItemHeading>
								<ul>
									<li>
										<ItemLink to="/blogs">Blogs</ItemLink>
									</li>
								</ul>
							</div>
							<div className="footer-items">
								<ItemHeading>Company</ItemHeading>
								<ul>
									<li>
										<ItemLink to="/">Terms & Privacy</ItemLink>
									</li>
									<li>
										<ItemLink to="/">Developer api</ItemLink>
									</li>
								</ul>
							</div>
							<div className="footer-items">
								<ItemHeading>Support</ItemHeading>
								<ul>
									<li>
										<ItemLink to="/">Help</ItemLink>
									</li>
								</ul>
							</div>
						</LeftLinks>
						<RightLinks>
							<FooterLogo>
								<Logo />
							</FooterLogo>
							<ContactNumber>213287571510</ContactNumber>
							<p>files converted since 2005</p>
						</RightLinks>
					</UpperFooter>
					<LowerFooter>
						<p className="lower-footer-left">@PDF converter</p>
						<p>
							English
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M16.8 9.5999L12 14.3999L7.19999 9.5999"
										stroke="#615D5D"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</p>
					</LowerFooter>
				</div>
			</div>
		</footer>
	); 
};

export default Footer;
